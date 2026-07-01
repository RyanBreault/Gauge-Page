const ROCK_CREEK_HATCHES = [
  {
    name: "Midges",
    importance: 2,
    confidence: "high",
    season: ["winter", "spring", "fall"],
    model: "simple",
    startTemp: 34,
    idealTemp: [38, 46],
    fadeTemp: 50,
    position: "Slower water",
    timeOfDay: "Midday",
    notes: "Year-round baseline hatch during cold periods. Most useful in winter, early spring, and late fall during stable flows and mild midday warmth."
  },

  {
    name: "BWOs",
    importance: 3,
    confidence: "moderate",
    season: ["spring", "fall"],
    model: "simple",
    startTemp: 40,
    idealTemp: [44, 52],
    fadeTemp: 56,
    position: "Whole river",
    timeOfDay: "Cloudy afternoons",
    notes: "Best on overcast, cool days. Important in spring and again in fall."
  },

  {
    name: "Skwalas",
    importance: 4,
    confidence: "moderate",
    season: ["spring"],
    model: "simple",
    startTemp: 42,
    idealTemp: [44, 50],
    fadeTemp: 53,
    position: "Lower first",
    timeOfDay: "Afternoon",
    notes: "One of the first important dry-fly opportunities on Rock Creek. Best during warming spring afternoons before runoff dominates."
  },

  {
    name: "March Browns",
    importance: 4,
    confidence: "moderate",
    season: ["spring"],
    model: "simple",
    startTemp: 45,
    idealTemp: [48, 54],
    fadeTemp: 57,
    position: "Whole river",
    timeOfDay: "Afternoon",
    notes: "Good spring mayfly hatch when water temperatures are climbing and flows remain fishable."
  },

  {
    name: "Mother's Day Caddis",
    importance: 5,
    confidence: "high",
    season: ["spring", "early_summer"],
    model: "simple",
    startTemp: 48,
    idealTemp: [51, 56],
    fadeTemp: 60,
    position: "Lower first",
    timeOfDay: "Afternoon / Evening",
    notes: "Can be excellent when flows are stable or dropping and clarity is improving. High or rapidly rising water can mute the hatch."
  },

  {
    name: "Salmonflies",
    importance: 5,
    confidence: "high",
    season: ["late_spring", "early_summer"],
    model: "staged",
    duration: "short",
    position: "Lower canyon first, then upstream",
    timeOfDay: "Afternoon",
    replacedBy: "Golden Stones",
    calendarGuard: {
      pastAfter: "06-20",
      pastStatus: "Past",
      pastStage: "Past",
      pastDescription: "Salmonflies are generally past on Rock Creek by this point. Golden Stones are usually the better big-bug signal now."
    },
    stages: [
      {
        name: "Pre-hatch / Nymph Migration",
        tempRange: [50, 55],
        status: "Likely",
        stars: 3,
        description: "Large stonefly nymphs are migrating toward bankside rocks and vegetation. Big stonefly nymphs can be very effective."
      },
      {
        name: "Peak Emergence",
        tempRange: [55, 58],
        status: "Peak",
        stars: 5,
        description: "Adult salmonflies are emerging. This is the prime dry-fly window, especially where the hatch is currently centered."
      },
      {
        name: "Moving Upstream / Winding Down",
        tempRange: [58, 62],
        status: "Ending",
        stars: 3,
        description: "The lower river is likely past peak while the hatch progresses upstream. Adult egg-laying may continue after the main emergence."
      }
    ],
    calendar: {
      typicalWindow: "Late May–Mid June",
      typicalStart: "May 30",
      typicalPeak: "June 5–7",
      typicalEnd: "June 13",
      earlyYears: "2021 and 2025",
      lateYear: "2022"
    },
    supportingConditions: [
      "Water temperatures around 50–55°F following dropping runoff",
      "Dropping flows after runoff",
      "Water clarity improving",
      "Consecutive warm days",
      "Snowpack and runoff timing"
    ],
    progression: "Starts in the lower canyon and progresses upstream roughly 1–2 miles per day. Early, warm springs advance it; prolonged runoff delays it."
  },

  {
    name: "Golden Stones",
    importance: 5,
    confidence: "high",
    season: ["early_summer", "summer"],
    model: "staged",
    duration: "long",
    position: "Lower first, then whole river",
    timeOfDay: "Afternoon",
    replacedBy: "Yellow Sallies / PMDs / Summer Caddis",
    stages: [
      {
        name: "Not Started / Pre-hatch",
        tempRange: [52, 55],
        status: "Coming Soon",
        stars: 2,
        description: "Golden Stones are close, but Salmonflies are usually still the primary big-bug event."
      },
      {
        name: "Beginning",
        tempRange: [55, 58],
        status: "Beginning",
        stars: 3,
        description: "Golden Stones are starting to show, especially as Salmonflies begin to fade."
      },
      {
        name: "Peak / Excellent",
        tempRange: [58, 64],
        status: "Excellent",
        stars: 5,
        description: "Golden Stones are highly active and often provide better fishing than Salmonflies because trout keep looking for big bugs."
      },
      {
        name: "Ending / Stragglers",
        tempRange: [64, 68],
        status: "Ending",
        stars: 3,
        description: "The main hatch is winding down, but stragglers can remain, especially higher in the canyon."
      }
    ],
    calendar: {
      typicalWindow: "Early June–Late June",
      typicalStart: "June 6",
      typicalPeak: "June 13–16",
      typicalEnd: "June 24",
      stillExcellent: "June 18–25",
      stragglers: "Early July in the upper canyon"
    },
    supportingConditions: [
      "Water temperatures around 55–60°F",
      "Stable or dropping flows after runoff",
      "Water clarity improving",
      "Daily highs above 70°F",
      "Salmonfly hatch beginning to fade"
    ],
    progression: "Golden Stones follow immediately behind Salmonflies, last longer, and often overlap with Green Drakes, PMDs, Yellow Sallies, and evening Caddis."
  },

  {
    name: "Green Drakes",
    importance: 4,
    confidence: "moderate",
    season: ["early_summer"],
    model: "simple",
    startTemp: 56,
    idealTemp: [58, 62],
    fadeTemp: 64,
    position: "Upper and middle river",
    timeOfDay: "Afternoon / Evening",
    notes: "Mid-June to early July hatch that often overlaps Golden Stones. Best during stable or dropping flows, especially on cool, cloudy, or humid afternoons."
  },

  {
    name: "PMDs",
    importance: 4,
    confidence: "high",
    season: ["early_summer", "summer"],
    model: "simple",
    startTemp: 54,
    idealTemp: [56, 62],
    fadeTemp: 66,
    position: "Whole river",
    timeOfDay: "Midday / Afternoon",
    notes: "Consistent midday hatch during stable summer flows. Major part of the mid-June through July dry-fly mix."
  },

  {
    name: "Yellow Sallies",
    importance: 3,
    confidence: "high",
    season: ["early_summer", "summer"],
    model: "simple",
    startTemp: 56,
    idealTemp: [59, 65],
    fadeTemp: 69,
    position: "Whole river",
    timeOfDay: "Afternoon",
    notes: "Small stoneflies active throughout the Golden Stone period and into July."
  },

  {
    name: "Summer Caddis",
    importance: 4,
    confidence: "high",
    season: ["summer"],
    model: "simple",
    startTemp: 55,
    idealTemp: [58, 66],
    fadeTemp: 70,
    position: "Whole river",
    timeOfDay: "Evening",
    notes: "Evening emergences become increasingly important after runoff and often carry the fishing as stoneflies fade."
  },

  {
    name: "Tricos",
    importance: 2,
    confidence: "moderate",
    season: ["summer"],
    model: "simple",
    startTemp: 60,
    idealTemp: [63, 68],
    fadeTemp: 72,
    position: "Slower glides and softer water",
    timeOfDay: "Morning",
    notes: "Late July through August hatch. Best as calm morning spinner falls."
  },

  {
    name: "Terrestrials",
    importance: 4,
    confidence: "moderate",
    season: ["summer", "fall"],
    model: "simple",
    startTemp: 60,
    idealTemp: [64, 72],
    fadeTemp: 75,
    position: "Banks, grass edges, and pocket water",
    timeOfDay: "Afternoon",
    notes: "Ants, beetles, and hoppers dominate as aquatic hatches decline from July into September."
  },

  {
    name: "October Caddis",
    importance: 3,
    confidence: "moderate",
    season: ["fall"],
    model: "simple",
    startTemp: 46,
    idealTemp: [50, 56],
    fadeTemp: 42,
    position: "Whole river",
    timeOfDay: "Afternoon / Evening",
    notes: "Large fall caddis. Often more useful as a searching pattern than a blanket hatch."
  }
];

window.HATCH_DATABASE = {
  ...(window.HATCH_DATABASE || {}),
  "Rock Creek": ROCK_CREEK_HATCHES
};
