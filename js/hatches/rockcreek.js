const ROCK_CREEK_HATCHES = [
  {
    name: "Skwalas",
    importance: 4,
    confidence: "moderate",
    season: ["spring"],
    model: "simple",
    startTemp: 42,
    idealTemp: [44, 49],
    fadeTemp: 52,
    position: "Lower first",
    timeOfDay: "Afternoon",
    notes: "One of the first important dry-fly opportunities on Rock Creek."
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
    notes: "Good spring mayfly hatch when water temps are climbing."
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
    notes: "Best on cloudy, cooler days."
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
    notes: "Best when flows are not rising hard."
  },
  {
    name: "Salmonflies",
    importance: 5,
    confidence: "high",
    season: ["late_spring", "early_summer"],
    model: "staged",
    duration: "short",
    position: "Lower first, then moves upstream",
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
        tempRange: [52, 55],
        status: "Likely",
        stars: 3,
        description: "Large stonefly nymphs are migrating toward shoreline rocks and vegetation. Excellent time to fish big stonefly nymphs."
      },
      {
        name: "Peak Emergence",
        tempRange: [55, 58],
        status: "Peak",
        stars: 5,
        description: "Adult salmonflies are emerging. This is the prime dry-fly window."
      },
      {
        name: "Moving Upstream / Winding Down",
        tempRange: [58, 62],
        status: "Ending",
        stars: 3,
        description: "The lower river is likely past peak while the hatch progresses upstream."
      }
    ],
    calendar: {
      typicalStart: "May 28–June 2",
      typicalPeak: "June 2–8",
      typicalEnd: "June 10–15"
    },
    supportingConditions: [
      "Dropping after runoff",
      "Water clarity improving",
      "Daily highs above 65°F for several days"
    ],
    progression: "Begins near the mouth around Memorial Day and moves upstream. Adult females may continue laying eggs after the main emergence."
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
      typicalStart: "June 3–8",
      typicalPeak: "June 10–18",
      typicalExcellent: "June 18–25",
      typicalEnd: "Late June",
      stragglers: "Early July in the upper canyon"
    },
    supportingConditions: [
      "Stable or dropping flows after runoff",
      "Water clarity improving",
      "Daily highs above 70°F",
      "Salmonfly hatch beginning to fade"
    ],
    progression: "Golden Stones gradually move upstream and often overlap with PMDs, Green Drakes, Yellow Sallies, and evening Caddis."
  },
  {
    name: "Green Drakes",
    importance: 4,
    confidence: "moderate",
    season: ["early_summer"],
    model: "simple",
    startTemp: 50,
    idealTemp: [52, 57],
    fadeTemp: 60,
    position: "Upper and middle river",
    timeOfDay: "Late afternoon / Evening",
    notes: "Often strongest on cool, overcast days near the end of runoff."
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
    timeOfDay: "Late morning / Afternoon",
    notes: "Important early summer mayfly hatch after runoff begins to settle."
  },
  {
    name: "Yellow Sallies",
    importance: 3,
    confidence: "high",
    season: ["summer"],
    model: "simple",
    startTemp: 56,
    idealTemp: [59, 65],
    fadeTemp: 69,
    position: "Whole river",
    timeOfDay: "Afternoon",
    notes: "Reliable smaller summer stonefly hatch."
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
    notes: "Evening caddis can be excellent once summer flows stabilize."
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
    position: "Banks and grassy edges",
    timeOfDay: "Afternoon",
    notes: "Hoppers, ants, and beetles become more important in warm late-summer conditions."
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
  },
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
    notes: "Most relevant in cold weather and early spring."
  }
];

window.HATCH_DATABASE = {
  ...(window.HATCH_DATABASE || {}),
  "Rock Creek": ROCK_CREEK_HATCHES
};
