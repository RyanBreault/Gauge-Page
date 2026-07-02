function currentSeason(){
  const month = new Date().getMonth() + 1;
  if(month === 12 || month <= 2) return "winter";
  if(month >= 3 && month <= 5) return "spring";
  if(month === 6) return "early_summer";
  if(month >= 7 && month <= 8) return "summer";
  return "fall";
}

function isAfterMonthDay(monthDay){
  const now = new Date();
  const [month, day] = monthDay.split("-").map(Number);
  const cutoff = new Date(now.getFullYear(), month - 1, day, 23, 59, 59);
  return now > cutoff;
}

function seasonMatches(rule){
  const season = currentSeason();
  if(rule.season?.includes(season)) return true;
  if(season === "spring" && rule.season?.includes("late_spring")) return true;
  if(season === "early_summer" && rule.season?.includes("late_spring")) return true;
  if(season === "summer" && rule.season?.includes("early_summer")) return true;
  return false;
}

function stars(count){
  const n = Math.max(1, Math.min(5, count || 1));
  return "★★★★★".slice(0,n) + "☆☆☆☆☆".slice(0,5-n);
}

function shortGaugeName(name){
  return (name || "")
    .replace(", MT","")
    .replace("Bitterroot River ","")
    .replace("Rock Creek ","")
    .replace("Middle Fork Rock Creek ","Middle Fork ")
    .replace(" near "," @ ")
    .replace(" at "," @ ");
}

function gaugeZone(river, gauge){
  const n = gauge.name || "";

  if(river.name === "Bitterroot"){
    if(n.includes("East Fork") || n.includes("West Fork") || n.includes("Darby")) return "Upper Bitterroot";
    if(n.includes("Bell Crossing")) return "Middle Bitterroot";
    if(n.includes("Missoula")) return "Lower Bitterroot";
  }

  if(river.name === "Rock Creek"){
    if(n.includes("Middle Fork")) return "Upper Rock Creek";
    if(n.includes("Clinton")) return "Lower Rock Creek";
  }

  if(gauge.section) return gauge.section;
  return river.name;
}

function scoreSimpleHatch(rule, tempF){
  if(!Number.isFinite(tempF)) return null;

  const inSeason = seasonMatches(rule);
  const [idealLow, idealHigh] = rule.idealTemp;

  let tempFit = 0;
  let stageName = "Possible";
  let status = "Possible";

  if(tempF >= idealLow && tempF <= idealHigh){
    tempFit = 1;
    stageName = "Prime conditions";
    status = "Likely";
  } else if(tempF >= rule.startTemp && tempF < idealLow){
    tempFit = 0.55 + ((tempF - rule.startTemp) / (idealLow - rule.startTemp)) * 0.4;
    stageName = "Starting";
    status = "Beginning";
  } else if(tempF > idealHigh && tempF <= rule.fadeTemp){
    tempFit = 0.5 + (1 - ((tempF - idealHigh) / (rule.fadeTemp - idealHigh))) * 0.35;
    stageName = "Winding down";
    status = "Ending";
  } else if(tempF >= rule.startTemp - 2 && tempF < rule.startTemp){
    tempFit = 0.35;
    stageName = "Coming soon";
    status = "Coming Soon";
  } else {
    return null;
  }

  if(!inSeason) tempFit *= 0.65;

  const score = Math.round(tempFit * 100);
  const starCount = score >= 85 ? 5 : score >= 70 ? 4 : score >= 55 ? 3 : score >= 40 ? 2 : 1;

  return {
    ...rule,
    score,
    status,
    stageName,
    stageDescription: rule.notes || "",
    starCount,
    comingSoon: status === "Coming Soon",
    hatchModel: "simple",
    whyBase: [
      `Water temp ${fmtTemp(tempF)}`,
      `Ideal ${rule.idealTemp[0]}–${rule.idealTemp[1]}°F`,
      inSeason ? "Seasonal window is open" : "Outside normal seasonal window"
    ]
  };
}

function scoreStagedHatch(rule, tempF){
  if(!Number.isFinite(tempF)) return null;

  if(rule.calendarGuard?.pastAfter && isAfterMonthDay(rule.calendarGuard.pastAfter)){
    const guard = rule.calendarGuard;
    return {
      ...rule,
      score: 30,
      status: guard.pastStatus || "Past",
      stageName: guard.pastStage || "Past",
      stageDescription: guard.pastDescription || `${rule.name} is likely past for the season.`,
      starCount: 1,
      hideFromPrimary: true,
      hatchModel: "staged",
      whyBase: [
        `Normal window has passed`,
        `Water temp ${fmtTemp(tempF)}`,
        rule.replacedBy ? `Better signal: ${rule.replacedBy}` : "Hatch is likely past"
      ]
    };
  }

  const inSeason = seasonMatches(rule);
  let bestStage = null;

  for(const stage of rule.stages || []){
    const [low, high] = stage.tempRange;
    if(tempF >= low && tempF <= high){
      bestStage = stage;
      break;
    }
  }

  if(!bestStage){
    const first = rule.stages?.[0];
    if(first && tempF >= first.tempRange[0] - 2 && tempF < first.tempRange[0]){
      bestStage = {
        ...first,
        name: "Coming Soon",
        status: "Coming Soon",
        stars: 2,
        description: `Conditions are approaching the ${rule.name} window. ${first.description}`
      };
    }
  }

  if(!bestStage) return null;

  const statusBase = {
    "Coming Soon": 45,
    "Not Started": 40,
    "Likely": 70,
    "Beginning": 78,
    "Peak": 95,
    "Excellent": 95,
    "Ending": 62,
    "Past": 25
  };

  const base = statusBase[bestStage.status] ?? 70;
  const score = Math.min(100, Math.max(0, base + (inSeason ? 5 : -15)));
  const starCount = bestStage.stars || (score >= 85 ? 5 : score >= 70 ? 4 : score >= 55 ? 3 : score >= 40 ? 2 : 1);

  return {
    ...rule,
    score,
    status: bestStage.status,
    stageName: bestStage.name,
    stageDescription: bestStage.description,
    starCount,
    comingSoon: bestStage.status === "Coming Soon" || bestStage.status === "Not Started",
    hatchModel: "staged",
    whyBase: [
      `Water temp ${fmtTemp(tempF)}`,
      `Stage range ${bestStage.tempRange[0]}–${bestStage.tempRange[1]}°F`,
      inSeason ? "Seasonal window is open" : "Outside normal seasonal window",
      ...(rule.supportingConditions ? rule.supportingConditions.slice(0,2) : [])
    ]
  };
}

function scoreHatch(rule, tempF){
  if(rule.model === "staged" || rule.stages) return scoreStagedHatch(rule, tempF);
  return scoreSimpleHatch(rule, tempF);
}

function scoreHatchAcrossRiver(rule, river){
  const gaugeScores = getRiverGauges(river)
    .map(gauge => {
      const temp = latest(state.data[gauge.id]?.temp || [])?.value;
      const scored = scoreHatch(rule, temp);
      if(!scored) return null;

      return {
        ...scored,
        gauge,
        temp,
        zone: gaugeZone(river, gauge),
        gaugeName: shortGaugeName(gauge.name)
      };
    })
    .filter(Boolean);

  if(!gaugeScores.length) return null;

  gaugeScores.sort((a,b) => b.score - a.score || b.importance - a.importance);
  const best = gaugeScores[0];

  const goodScores = gaugeScores.filter(g => g.score >= Math.max(45, best.score - 18));
  const zones = [...new Set(goodScores.map(g => g.zone))];
  const basedOn = goodScores
    .slice(0,3)
    .map(g => `${g.gaugeName} ${fmtTemp(g.temp)}`);

  return {
    ...best,
    location: zones.length ? zones.join(" / ") : river.name,
    basedOn,
    allGaugeScores: gaugeScores,
    why: [
      `Likely location: ${zones.length ? zones.join(" / ") : river.name}`,
      `Based on ${basedOn.join(", ")}`,
      ...(best.whyBase || [])
    ]
  };
}

function renderHatchPanel(river){
  const rules = window.HATCH_DATABASE?.[river.name];
  if(!rules) return "";

  const validTempGauges = getRiverGauges(river)
    .map(g => ({ gauge:g, temp: latest(state.data[g.id]?.temp || [])?.value }))
    .filter(x => Number.isFinite(x.temp));

  if(!validTempGauges.length){
    return `<div class="panel hatch-panel">
      <h3>Likely Hatches</h3>
      <p class="muted">Waiting for a valid water temperature from one of this river's gauges.</p>
    </div>`;
  }

  const scored = rules
    .map(rule => scoreHatchAcrossRiver(rule, river))
    .filter(Boolean)
    .sort((a,b) => b.score - a.score || b.importance - a.importance);

  const primary = scored
    .filter(h => !h.comingSoon && !h.hideFromPrimary && h.score >= 45)
    .slice(0,5);

  const comingSoon = scored
    .filter(h => h.comingSoon || h.hideFromPrimary)
    .slice(0,3);

  return `<div class="panel hatch-panel">
    <div class="hatch-head">
      <div>
        <h3>Likely Hatches</h3>
        <p class="muted">Factoring ${validTempGauges.length} gauge${validTempGauges.length === 1 ? "" : "s"} with valid water temperature</p>
      </div>
    </div>

    <div class="hatch-list">
      ${primary.map(renderHatchCard).join("") || `<p class="muted">No strong hatch signals right now.</p>`}
    </div>

    ${comingSoon.length ? `
      <div class="hatch-divider">Coming Soon / Past Signals</div>
      <div class="hatch-list">
        ${comingSoon.map(h => renderHatchCard(h, true)).join("")}
      </div>
    ` : ""}
  </div>`;
}

function renderHatchCard(h, secondary=false){
  return `<div class="hatch-card ${secondary ? "coming-soon" : "primary"}">
    <div class="hatch-top">
      <strong>${h.name}</strong>
      <span class="hatch-pill ${secondary ? "warning" : ""}">${h.status}</span>
    </div>
    <div class="hatch-stars">${stars(h.starCount)}</div>
    <div class="hatch-stage">${h.stageName || h.status}</div>
    <div class="hatch-location">Likely location: ${h.location || "Best matching gauge"}</div>
    <div class="hatch-meta">${h.position || "River-wide"} • ${h.timeOfDay || "Varies"} • Confidence: ${h.confidence || "moderate"}</div>
    ${h.stageDescription ? `<div class="hatch-note">${h.stageDescription}</div>` : ""}
    <div class="hatch-why">
      ${(h.why || []).map(item => `<div>✓ ${item}</div>`).join("")}
    </div>
    ${h.replacedBy ? `<div class="hatch-meta" style="margin-top:8px;">Next signal: ${h.replacedBy}</div>` : ""}
  </div>`;
}
