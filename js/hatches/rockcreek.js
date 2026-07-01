const ROCK_CREEK_HATCHES = [
  { name:"Skwalas", importance:4, season:["spring"], startTemp:42, idealTemp:[44,49], fadeTemp:52, position:"Lower first", timeOfDay:"Afternoon" },
  { name:"March Browns", importance:4, season:["spring"], startTemp:45, idealTemp:[48,54], fadeTemp:57, position:"Whole river", timeOfDay:"Afternoon" },
  { name:"BWOs", importance:3, season:["spring","fall"], startTemp:40, idealTemp:[44,52], fadeTemp:56, position:"Whole river", timeOfDay:"Cloudy afternoons" },
  { name:"Mother's Day Caddis", importance:5, season:["spring","early_summer"], startTemp:48, idealTemp:[51,56], fadeTemp:60, position:"Lower first", timeOfDay:"Afternoon/evening" },
  { name:"Salmonflies", importance:5, season:["early_summer"], startTemp:52, idealTemp:[55,60], fadeTemp:64, position:"Lower first, moves upstream", timeOfDay:"Afternoon" },
  { name:"Golden Stones", importance:5, season:["early_summer","summer"], startTemp:54, idealTemp:[57,63], fadeTemp:67, position:"Lower first, then whole river", timeOfDay:"Afternoon" },
  { name:"Green Drakes", importance:4, season:["early_summer"], startTemp:50, idealTemp:[53,58], fadeTemp:62, position:"Upper/middle", timeOfDay:"Afternoon" },
  { name:"PMDs", importance:4, season:["early_summer","summer"], startTemp:54, idealTemp:[56,62], fadeTemp:66, position:"Whole river", timeOfDay:"Late morning/afternoon" },
  { name:"Yellow Sallies", importance:3, season:["summer"], startTemp:56, idealTemp:[59,65], fadeTemp:69, position:"Whole river", timeOfDay:"Afternoon" },
  { name:"Summer Caddis", importance:4, season:["summer"], startTemp:55, idealTemp:[58,66], fadeTemp:70, position:"Whole river", timeOfDay:"Evening" },
  { name:"Terrestrials", importance:4, season:["summer","fall"], startTemp:60, idealTemp:[64,72], fadeTemp:75, position:"Banks/grass edges", timeOfDay:"Afternoon" },
  { name:"October Caddis", importance:3, season:["fall"], startTemp:46, idealTemp:[50,56], fadeTemp:42, position:"Whole river", timeOfDay:"Afternoon/evening" },
  { name:"Midges", importance:2, season:["winter","spring","fall"], startTemp:34, idealTemp:[38,46], fadeTemp:50, position:"Slower water", timeOfDay:"Midday" }
];

window.HATCH_DATABASE = {
  ...(window.HATCH_DATABASE || {}),
  "Rock Creek": ROCK_CREEK_HATCHES
};
