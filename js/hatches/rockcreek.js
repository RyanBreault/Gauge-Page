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
    position: "Lower first; middle follows 3–5 days later; upper follows 5–10 days later",
    timeOfDay: "Afternoon",
    replacedBy: "Golden Stones",
    calendarGuard: {
      pastAfter: "06-20",
      pastStatus: "Past",
      pastStage: "Past",
      pastDescription: "Salmonflies are generally past on Rock Creek by this point, except for possible upper-creek stragglers in cooler years. Golden Stones are usually the better big-bug signal now."
    },
    sectionProgression: {
      lower: "First",
      middle: "3–5 days behind lower river",
      upper: "5–10 days behind lower river",
      notes: "Rock Creek Fisherman's Mercantile reported the upper half beginning about one week after the lower river in 2026."
    },
    statuses: [
      "Not Started",
      "Starting",
      "Building",
      "Peak",
      "Declining",
      "Mostly Finished",
      "Past"
    ],
    stages: [
      {
        name: "Starting / Nymph Migration",
        tempRange: [50, 54],
        status: "Starting",
        stars: 3,
        description: "Large stonefly nymphs are moving toward bankside rocks and vegetation. Big stonefly nymphs can be very effective."
      },
      {
        name: "Building",
        tempRange: [54, 55],
        status: "Building",
        stars: 4,
        description: "Conditions are lining up for emergence. Watch lower Rock Creek first, especially after consecutive warm days and stable runoff."
      },
      {
        name: "Peak",
        tempRange: [55, 58],
        status: "Peak",
        stars: 5,
        description: "Prime Salmonfly emergence window. Adult dry-fly fishing can be excellent where the hatch is currently centered."
      },
      {
        name: "Declining / Moving Upstream",
        tempRange: [58, 61],
        status: "Declining",
        stars: 3,
        description: "The hatch is likely fading on the lower river and moving upstream. Golden Stones usually become the stronger lower-river signal."
      },
      {
        name: "Mostly Finished",
        tempRange: [61, 64],
        status: "Mostly Finished",
        stars: 2,
        description: "The main lower-river hatch is likely over. Look higher in the drainage for remaining Salmonfly activity, while Golden Stones take over downstream."
      }
    ],
    calendar: {
      typicalWindow: "Second half of May through mid-June",
      earliestRecentStart: "Around May 23",
      typicalFirstBugs: "May 24–31",
      typicalPeak: "Late May through first week of June",
      effectiveEnd: "June 12–16",
      upperCreekStragglers: "June 18–20 in cooler years",
      historicalReconstruction: [
        { year: 2016, start: "May 31–Jun 2", peak: "Jun 5–9", finish: "Jun 14–16" },
        { year: 2017, start: "Jun 2–4", peak: "Jun 7–11", finish: "Jun 15–17" },
        { year: 2018, start: "May 28–31", peak: "Jun 3–7", finish: "Jun 11–14" },
        { year: 2019, start: "Jun 1–4", peak: "Jun 6–10", finish: "Jun 14–16" },
        { year: 2020, start: "May 27–30", peak: "Jun 2–6", finish: "Jun 10–13" },
        { year: 2021, start: "May 25–28", peak: "May 31–Jun 4", finish: "Jun 8–11" },
        { year: 2022, start: "Jun 8–10", peak: "Jun 12–16", finish: "Jun 20–23" },
        { year: 2023, start: "Jun 1–3", peak: "Jun 5–9", finish: "Jun 13–15" },
        { year: 2024, start: "May 26–29", peak: "May 31–Jun 5", finish: "Jun 10–12" },
        { year: 2025, start: "May 24–27", peak: "May 29–Jun 3", finish: "Jun 7–10" },
        { year: 2026, start: "~May 23", peak: "Late May–Early Jun", finish: "TBD" }
      ]
    },
    observedConditions: [
      "2025: Hatch began around Memorial Day. Flow around 1600–1700 CFS. Water 51–58°F. Stable runoff.",
      "2026: Hatch began around May 23. Flow around 1100–1300 CFS. Water highs 54–56°F. River had bottomed then began rising."
    ],
    supportingConditions: [
      "Water temperatures roughly 54–58°F",
      "Consecutive warm days",
      "Night lows above about 48–50°F",
      "Stable or slowly changing runoff",
      "Accumulated spring warming"
    ],
    progression: "Lower river hatches first. Middle follows about 3–5 days later. Upper follows about 5–10 days later."
  },

  {
    name: "Golden Stones",
    importance: 5,
    confidence: "high",
    season: ["early_summer", "summer"],
    model: "staged",
    duration: "long",
    position: "Lower first; middle follows 3–5 days later; upper follows 5–10 days later",
    timeOfDay: "Afternoon",
    replacedBy: "Yellow Sallies / PMDs / Summer Caddis",
    linkedTo: "Salmonflies",
    relationshipToSalmonflies: {
      beginsAfterFirstSalmonflies: "5–7 days",
      becomesImportantAfterSalmonfliesBegin: "7–14 days",
      peakRelationship: "Peak Golden Stone fishing usually occurs as Salmonflies are fading.",
      engineNote: "Golden Stones should increase as Salmonflies decline, but this version does not yet store the annual Salmonfly start date."
    },
    sectionProgression: {
      lower: "First",
      middle: "3–5 days behind lower river",
      upper: "5–10 days behind lower river; may continue into early July",
      notes: "Golden Stones gradually move upstream and generally last longer than Salmonflies."
    },
    statuses: [
      "Not Started",
      "Imminent",
      "Starting",
      "Building",
      "Peak",
      "Declining",
      "Past"
    ],
    stages: [
      {
        name: "Imminent / Pre-hatch",
        tempRange: [54, 56],
        status: "Imminent",
        stars: 2,
        description: "Golden Stones are close. Watch for them as Salmonflies begin to fade and water clarity improves."
      },
      {
        name: "Starting",
        tempRange: [56, 58],
        status: "Starting",
        stars: 3,
        description: "Golden Stones are starting to show, especially on the lower river and in warmer sections."
      },
      {
        name: "Building",
        tempRange: [58, 60],
        status: "Building",
        stars: 4,
        description: "Golden Stone activity is building. This often overlaps with fading Salmonflies, PMDs, Yellow Sallies, and Green Drakes."
      },
      {
        name: "Peak",
        tempRange: [60, 62],
        status: "Peak",
        stars: 5,
        description: "Prime Golden Stone activity. These often provide better fishing than Salmonflies because trout keep looking for big bugs."
      },
      {
        name: "Excellent / Extended",
        tempRange: [62, 64],
        status: "Excellent",
        stars: 5,
        description: "Golden Stones remain excellent even after the peak emergence. Big stonefly dries can stay productive as a searching pattern."
      },
      {
        name: "Declining / Stragglers",
        tempRange: [64, 68],
        status: "Declining",
        stars: 3,
        description: "The main hatch is declining, but stragglers can continue, especially in the upper canyon."
      }
    ],
    calendar: {
      typicalWindow: "Late May / Early June through late June",
      firstMeaningfulActivity: "June 3–10",
      building: "June 7–14",
      peak: "June 12–22",
      primePeak: "June 15–20",
      declining: "June 22–30",
      past: "Early July, though upper creek may hold stragglers",
      historicalReconstruction: [
        { year: 2016, start: "Jun 8–10", peak: "Jun 12–18", finish: "Jun 24–27" },
        { year: 2017, start: "Jun 10–12", peak: "Jun 15–20", finish: "Jun 26–29" },
        { year: 2018, start: "Jun 5–8", peak: "Jun 10–15", finish: "Jun 22–25" },
        { year: 2019, start: "Jun 9–11", peak: "Jun 13–18", finish: "Jun 24–27" },
        { year: 2020, start: "Jun 4–7", peak: "Jun 9–14", finish: "Jun 20–23" },
        { year: 2021, start: "Jun 1–4", peak: "Jun 6–11", finish: "Jun 16–20" },
        { year: 2022, start: "Jun 15–18", peak: "Jun 20–26", finish: "Jul 1–5" },
        { year: 2023, start: "Jun 8–10", peak: "Jun 12–18", finish: "Jun 24–28" },
        { year: 2024, start: "Jun 3–6", peak: "Jun 8–14", finish: "Jun 20–24" },
        { year: 2025, start: "May 31–Jun 3", peak: "Jun 5–11", finish: "Jun 18–22" }
      ]
    },
    supportingConditions: [
      "Water temperatures generally in the mid-50s when starting",
      "Building activity around 56–60°F",
      "Peak activity commonly around 58–62°F",
      "Stable or slowly dropping flows",
      "Improving water clarity after runoff",
      "Several consecutive warm days increase activity",
      "Cool rain may temporarily reduce surface activity but usually does not end the hatch"
    ],
    progression: "Lower Rock Creek hatches first. Middle follows approximately 3–5 days later. Upper generally follows 5–10 days later and may continue into early July."
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
