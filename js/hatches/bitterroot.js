const BITTERROOT_HATCHES = [
  {
    name: "Midges",
    importance: 2,
    confidence: "high",
    season: ["winter", "spring", "fall"],
    model: "simple",
    startTemp: 34,
    idealTemp: [38, 46],
    fadeTemp: 50,
    position: "Slow edges, inside bends, and soft winter water",
    timeOfDay: "Midday",
    notes: "Baseline cold-weather hatch. Most useful in winter, early spring, and late fall when flows are stable and trout are concentrated in slower water."
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
    notes: "Important spring and fall mayfly. Cloud cover, cooler weather, and stable flows matter as much as temperature."
  },

  {
    name: "Skwalas",
    importance: 5,
    confidence: "high",
    season: ["spring"],
    model: "staged",
    duration: "medium",
    position: "Lower and middle river first, then upstream",
    timeOfDay: "Afternoon",
    replacedBy: "March Browns / Mother's Day Caddis",
    calendarGuard: {
      pastAfter: "04-30",
      pastStatus: "Past",
      pastStage: "Past",
      pastDescription: "The main Bitterroot Skwala window is generally past. March Browns, Mother's Day Caddis, and later spring hatches become better signals."
    },
    stages: [
      {
        name: "Pre-hatch / Nymph Movement",
        tempRange: [40, 44],
        status: "Likely",
        stars: 3,
        description: "Skwala nymphs are active and moving. Subsurface stonefly patterns and slow dry/dropper fishing become increasingly relevant."
      },
      {
        name: "Beginning",
        tempRange: [44, 47],
        status: "Beginning",
        stars: 4,
        description: "Adults are beginning to show on warmer afternoons. Dry-fly fishing can be good in softer edges and protected banks."
      },
      {
        name: "Peak",
        tempRange: [47, 51],
        status: "Peak",
        stars: 5,
        description: "Prime Skwala conditions. This is the Bitterroot's flagship early-season dry-fly window."
      },
      {
        name: "Ending / Egg Laying",
        tempRange: [51, 54],
        status: "Ending",
        stars: 3,
        description: "The main emergence is fading, but egg-laying adults can still keep trout looking up, especially on warm afternoons."
      }
    ],
    calendar: {
      typicalWindow: "Mid March–Late April",
      typicalPeak: "Late March–Mid April",
      typicalEnd: "Late April"
    },
    supportingConditions: [
      "Stable or slowly rising spring flows",
      "Afternoon warmth",
      "Water clarity at least fair",
      "Best dry-fly windows often occur during the warmest part of the day"
    ],
    progression: "Lower and middle Bitterroot reaches typically turn on first. The hatch works upstream as spring water temperatures stabilize."
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
    notes: "Strong spring mayfly, often overlapping the back half of Skwalas and early caddis. Best when clarity and flows remain fishable."
  },

  {
    name: "Mother's Day Caddis",
    importance: 5,
    confidence: "high",
    season: ["spring", "early_summer"],
    model: "staged",
    duration: "medium",
    position: "Lower and middle river first",
    timeOfDay: "Afternoon / Evening",
    replacedBy: "PMDs / Golden Stones",
    stages: [
      {
        name: "Building",
        tempRange: [48, 51],
        status: "Beginning",
        stars: 3,
        description: "Caddis activity is building. Pupa and soft-hackle fishing can be strong before the main dry-fly push."
      },
      {
        name: "Peak",
        tempRange: [51, 57],
        status: "Peak",
        stars: 5,
        description: "Prime Mother's Day Caddis conditions if flows are not blowing out. Afternoon and evening dry-fly fishing can be excellent."
      },
      {
        name: "Winding Down",
        tempRange: [57, 61],
        status: "Ending",
        stars: 3,
        description: "The main emergence is fading, but evening caddis activity may remain important when flows and clarity cooperate."
      }
    ],
    calendar: {
      typicalWindow: "Late April–Mid May",
      typicalPeak: "Early–Mid May"
    },
    supportingConditions: [
      "Stable or dropping flows",
      "Improving water clarity",
      "Warm afternoons and evenings",
      "Runoff can overwhelm the hatch even when temperatures are right"
    ],
    progression: "Lower and middle river reaches usually show the strongest early signals before upper river water temperatures catch up."
  },

  {
    name: "Salmonflies",
    importance: 2,
    confidence: "low",
    season: ["early_summer"],
    model: "simple",
    startTemp: 52,
    idealTemp: [55, 60],
    fadeTemp: 64,
    position: "Limited pockets and faster stonefly water",
    timeOfDay: "Afternoon",
    notes: "Present in places, but not a primary Bitterroot hatch compared with Skwalas, Mother's Day Caddis, PMDs, and Golden Stones."
  },

  {
    name: "Golden Stones",
    importance: 5,
    confidence: "high",
    season: ["early_summer", "summer"],
    model: "staged",
    duration: "long",
    position: "Middle and upper river, then whole river",
    timeOfDay: "Afternoon",
    replacedBy: "Yellow Sallies / PMDs / Summer Caddis",
    stages: [
      {
        name: "Pre-hatch",
        tempRange: [52, 55],
        status: "Coming Soon",
        stars: 2,
        description: "Golden Stones are close but not yet a primary surface signal."
      },
      {
        name: "Beginning",
        tempRange: [55, 58],
        status: "Beginning",
        stars: 3,
        description: "Golden Stones are beginning. Dry/dropper rigs and smaller stonefly dries become increasingly useful."
      },
      {
        name: "Peak / Excellent",
        tempRange: [58, 64],
        status: "Excellent",
        stars: 5,
        description: "Prime Golden Stone conditions. Trout often continue looking for larger stonefly dries even when other summer hatches overlap."
      },
      {
        name: "Ending / Searching Pattern",
        tempRange: [64, 68],
        status: "Ending",
        stars: 3,
        description: "The hatch is fading, but golden stone profiles can remain good searching patterns."
      }
    ],
    calendar: {
      typicalWindow: "June–Early July",
      typicalPeak: "Mid–Late June"
    },
    supportingConditions: [
      "Stable or dropping post-runoff flows",
      "Water clarity improving",
      "Warm afternoons",
      "Overlaps PMDs, Yellow Sallies, Green Drakes, and Caddis"
    ],
    progression: "Golden Stones become more important as runoff settles and summer dry-fly fishing takes over."
  },

  {
    name: "Green Drakes",
    importance: 4,
    confidence: "moderate",
    season: ["early_summer"],
    model: "simple",
    startTemp: 54,
    idealTemp: [56, 61],
    fadeTemp: 64,
    position: "Upper and middle river",
    timeOfDay: "Afternoon / Evening",
    notes: "Variable but important when it happens. Cool, humid, or cloudy afternoons can make the hatch much more noticeable."
  },

  {
    name: "PMDs",
    importance: 5,
    confidence: "high",
    season: ["early_summer", "summer"],
    model: "staged",
    duration: "long",
    position: "Whole river, especially softer glides and riffle margins",
    timeOfDay: "Late morning / Afternoon",
    replacedBy: "Tricos / Terrestrials / Summer Caddis",
    stages: [
      {
        name: "Beginning",
        tempRange: [54, 56],
        status: "Beginning",
        stars: 3,
        description: "PMDs are beginning. Nymphs, emergers, and light dry-fly activity become more relevant."
      },
      {
        name: "Consistent",
        tempRange: [56, 62],
        status: "Likely",
        stars: 4,
        description: "Reliable PMD conditions during stable summer flows. Expect midday to afternoon activity."
      },
      {
        name: "Peak",
        tempRange: [58, 63],
        status: "Peak",
        stars: 5,
        description: "Prime PMD water. Softer riffles, inside seams, and glides can produce strong dry-fly fishing."
      },
      {
        name: "Winding Down",
        tempRange: [63, 67],
        status: "Ending",
        stars: 3,
        description: "PMDs are fading as warmer summer conditions push the river toward caddis, terrestrials, and morning bugs."
      }
    ],
    calendar: {
      typicalWindow: "June–July",
      typicalPeak: "Late June–Mid July"
    },
    supportingConditions: [
      "Stable summer flows",
      "Clear water",
      "Cloud cover can extend the hatch",
      "Often overlaps Yellow Sallies and Caddis"
    ],
    progression: "PMDs are one of the more dependable early-summer hatches across the Bitterroot once runoff settles."
  },

  {
    name: "Yellow Sallies",
    importance: 4,
    confidence: "high",
    season: ["early_summer", "summer"],
    model: "simple",
    startTemp: 56,
    idealTemp: [59, 65],
    fadeTemp: 69,
    position: "Whole river",
    timeOfDay: "Afternoon",
    notes: "Reliable summer stonefly hatch that overlaps Golden Stones, PMDs, and Caddis."
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
    notes: "Evening caddis become increasingly important once runoff is gone and summer flows stabilize."
  },

  {
    name: "Tricos",
    importance: 3,
    confidence: "moderate",
    season: ["summer"],
    model: "simple",
    startTemp: 60,
    idealTemp: [63, 68],
    fadeTemp: 72,
    position: "Lower river and slower slicks",
    timeOfDay: "Morning",
    notes: "Most important on calm mornings in slower water. More relevant on the lower river than the fast upper sections."
  },

  {
    name: "Terrestrials",
    importance: 5,
    confidence: "high",
    season: ["summer", "fall"],
    model: "simple",
    startTemp: 60,
    idealTemp: [64, 72],
    fadeTemp: 75,
    position: "Banks, grass edges, woody structure, and undercut banks",
    timeOfDay: "Afternoon",
    notes: "A major late-summer Bitterroot program. Hoppers, ants, and beetles become increasingly important as aquatic hatches fade."
  },

  {
    name: "Mahogany Duns",
    importance: 3,
    confidence: "moderate",
    season: ["fall"],
    model: "simple",
    startTemp: 46,
    idealTemp: [50, 56],
    fadeTemp: 60,
    position: "Whole river, softer water",
    timeOfDay: "Afternoon",
    notes: "Fall mayfly hatch. More noticeable during stable flows and cooler, cloudy afternoons."
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
    notes: "Large fall caddis. Often more useful as a searching pattern than a dense hatch."
  }
];

window.HATCH_DATABASE = {
  ...(window.HATCH_DATABASE || {}),
  "Bitterroot": BITTERROOT_HATCHES
};
