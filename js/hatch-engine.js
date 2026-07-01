function currentSeason(){
  const month = new Date().getMonth() + 1;
  if(month === 12 || month <= 2) return "winter";
  if(month >= 3 && month <= 5) return "spring";
  if(month === 6) return "early_summer";
  if(month >= 7 && month <= 8) return "summer";
  return "fall";
}
function seasonMatches(rule){
  const season = currentSeason();
  if(rule.season?.includes(season)) return true;
  if(season === "spring" && rule.season?.includes("late_spring")) return true;
  if(season === "early_summer" && rule.season?.includes("late_spring")) return true;
  if(season === "summer" && rule.season?.includes("early_summer")) return true;
  return false;
}
function scoreSimpleHatch(rule,tempF){
  if(!Number.isFinite(tempF)) return null;
  const inSeason=seasonMatches(rule); const seasonScore=inSeason?25:0;
  let tempScore=0; const [idealLow,idealHigh]=rule.idealTemp;
  if(tempF>=idealLow && tempF<=idealHigh) tempScore=75;
  else if(tempF>=rule.startTemp && tempF<idealLow) tempScore=45+((tempF-rule.startTemp)/(idealLow-rule.startTemp))*30;
  else if(tempF>idealHigh && tempF<=rule.fadeTemp) tempScore=75-((tempF-idealHigh)/(rule.fadeTemp-idealHigh))*35;
  const score=Math.round(seasonScore+tempScore);
  let status="Unlikely"; if(score>=85) status="Excellent"; else if(score>=70) status="Likely"; else if(score>=50) status="Possible";
  return {...rule,score,status,stageName:status,stageDescription:rule.notes||"",hatchModel:"simple"};
}
function scoreStagedHatch(rule,tempF){
  if(!Number.isFinite(tempF)) return null;
  const inSeason=seasonMatches(rule); let bestStage=null;
  for(const stage of rule.stages||[]){ const [low,high]=stage.tempRange; if(tempF>=low && tempF<=high){ bestStage=stage; break; } }
  if(!bestStage){ const first=rule.stages?.[0]; if(first && tempF>=first.tempRange[0]-2 && tempF<first.tempRange[0]) bestStage={...first,name:"Approaching",status:"Possible",description:`Conditions are approaching the ${rule.name} window. ${first.description}`}; }
  if(!bestStage) return null;
  const stageBase={"Not Started":45,"Possible":50,"Likely":70,"Beginning":78,"Peak":95,"Excellent":95,"Ending":65};
  const score=Math.min(100,Math.max(0,(stageBase[bestStage.status]??70)+(inSeason?5:-20)));
  return {...rule,score,status:bestStage.status,stageName:bestStage.name,stageDescription:bestStage.description,hatchModel:"staged"};
}
function scoreHatch(rule,tempF){ return rule.stages ? scoreStagedHatch(rule,tempF) : scoreSimpleHatch(rule,tempF); }
function renderHatchPanel(river){
  const rules=window.HATCH_DATABASE?.[river.name]; if(!rules) return "";
  const headline=getHeadlineGauge(river); const temp=latest(state.data[headline?.id]?.temp||[])?.value;
  if(!Number.isFinite(temp)) return `<div class="panel hatch-panel"><h3>Likely Hatches</h3><p class="muted">Waiting for a valid water temperature from the headline gauge.</p></div>`;
  const hatches=rules.map(r=>scoreHatch(r,temp)).filter(Boolean).filter(h=>h.score>=45).sort((a,b)=>b.score-a.score||b.importance-a.importance).slice(0,6);
  return `<div class="panel hatch-panel"><div class="hatch-head"><div><h3>Likely Hatches</h3><p class="muted">Based on ${headline.name.replace(", MT","")} at ${fmtTemp(temp)}</p></div></div><div class="hatch-list">${hatches.map(h=>`<div class="hatch-card ${h.hatchModel==="staged"?"staged-hatch":""}"><div class="hatch-top"><strong>${h.name}</strong><span>${h.status}</span></div><div class="hatch-bar"><div style="width:${h.score}%"></div></div><div class="hatch-stage">${h.stageName||h.status}</div><div class="hatch-meta">${h.position||"River-wide"} • ${h.timeOfDay||"Varies"}</div>${h.stageDescription?`<div class="hatch-note">${h.stageDescription}</div>`:""}${h.replacedBy?`<div class="hatch-meta">Next signal: ${h.replacedBy}</div>`:""}</div>`).join("")||`<p class="muted">No strong hatch signals right now.</p>`}</div></div>`;
}
