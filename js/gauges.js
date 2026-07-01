const RIVERS = [
  { name:"Beaverhead", headline:"06016000", gauges:[
    { name:"Clark Canyon Dam", id:"06015320", order:1, type:"dam", temp:"auto" },
    { name:"Beaverhead River at Barretts, MT", id:"06016000", order:2, type:"mainstem", temp:"auto" },
    { name:"Beaverhead River at Dillon, MT", id:"06017000", order:3, type:"mainstem", temp:"auto" },
    { name:"Beaverhead River near Twin Bridges, MT", id:"06018500", order:4, type:"mainstem", temp:"auto" },
    { name:"Beaverhead River at Twin Bridges, MT", id:"06018501", order:5, type:"mainstem", temp:"auto" }
  ]},
  { name:"Big Hole", headline:"06025500", gauges:[
    { name:"Big Hole River below Big Lake Creek at Wisdom, MT", id:"06024450", order:1, type:"mainstem", temp:"auto" },
    { name:"Big Hole River below Mudd Creek near Wisdom, MT", id:"06024540", order:2, type:"mainstem", temp:"auto" },
    { name:"Big Hole River near Wise River, MT", id:"06024580", order:3, type:"mainstem", temp:"auto" },
    { name:"Big Hole River at Maiden Rock near Divide, MT", id:"06025250", order:4, type:"mainstem", temp:"auto" },
    { name:"Big Hole River near Melrose, MT", id:"06025500", order:5, type:"mainstem", temp:"auto" },
    { name:"Big Hole River near Glen, MT", id:"06026210", order:6, type:"mainstem", temp:"auto" }
  ]},
  { name:"Bitterroot", headline:"12350250", gauges:[
    { name:"East Fork Bitterroot River near Conner, MT", id:"12343500", order:1, type:"fork", temp:"auto" },
    { name:"West Fork Bitterroot River near Conner, MT", id:"12342500", order:2, type:"fork", temp:"auto" },
    { name:"Bitterroot River near Darby, MT", id:"12344000", order:3, type:"mainstem", temp:"auto" },
    { name:"Bitterroot River at Bell Crossing near Victor, MT", id:"12350250", order:4, type:"mainstem", temp:"auto" },
    { name:"Bitterroot River near Missoula, MT", id:"12352500", order:5, type:"mainstem", temp:"auto" }
  ]},
  { name:"Blackfoot", headline:"12340000", gauges:[
    { name:"North Fork Blackfoot River above Dry Gulch near Ovando, MT", id:"12338300", order:1, type:"fork", temp:"auto" },
    { name:"Blackfoot River above Nevada Creek near Helmville, MT", id:"12335100", order:2, type:"mainstem", temp:"auto" },
    { name:"Blackfoot River near Bonner, MT", id:"12340000", order:3, type:"mainstem", temp:"auto" }
  ]},
  { name:"Clark Fork", headline:"12353000", sections:[
    { name:"Upper Clark Fork", gauges:[
      { name:"Clark Fork near Galen, MT", id:"12323800", order:1, type:"mainstem", temp:"auto" },
      { name:"Clark Fork at Deer Lodge, MT", id:"12324200", order:2, type:"mainstem", temp:"auto" },
      { name:"Clark Fork at Goldcreek, MT", id:"12324680", order:3, type:"mainstem", temp:"auto" },
      { name:"Clark Fork near Drummond, MT", id:"12331800", order:4, type:"mainstem", temp:"auto" }
    ]},
    { name:"Middle Clark Fork", gauges:[
      { name:"Clark Fork at Turah Bridge near Bonner, MT", id:"12334550", order:5, type:"mainstem", temp:"auto" },
      { name:"Clark Fork above Missoula, MT", id:"12340500", order:6, type:"mainstem", temp:"auto" },
      { name:"Clark Fork below Missoula, MT", id:"12353000", order:7, type:"mainstem", temp:"auto" }
    ]},
    { name:"Lower Clark Fork", gauges:[
      { name:"Clark Fork at Superior, MT", id:"12354500", order:8, type:"mainstem", temp:"auto" },
      { name:"Clark Fork at St. Regis, MT", id:"12354500", order:9, type:"mainstem", temp:"auto" },
      { name:"Clark Fork near Paradise, MT", id:"12388700", order:10, type:"mainstem", temp:"auto" },
      { name:"Clark Fork near Plains, MT", id:"12389000", order:11, type:"mainstem", temp:"auto" }
    ]}
  ]},
  { name:"Flint Creek", headline:"12329500", gauges:[
    { name:"Flint Creek near Southern Cross, MT", id:"12325500", order:1, type:"mainstem", temp:"auto" },
    { name:"Flint Creek at Maxville, MT", id:"12329500", order:2, type:"mainstem", temp:"auto" },
    { name:"Flint Creek near Drummond, MT", id:"12331500", order:3, type:"mainstem", temp:"auto" }
  ]},
  { name:"Madison", headline:"06038800", gauges:[
    { name:"Madison River near West Yellowstone, MT", id:"06037500", order:1, type:"mainstem", temp:"auto" },
    { name:"Madison River below Hebgen Lake near Grayling, MT", id:"06038500", order:2, type:"dam", temp:"auto" },
    { name:"Madison River at Kirby Ranch near Cameron, MT", id:"06038800", order:3, type:"mainstem", temp:"auto" },
    { name:"Madison River near Cameron, MT", id:"06040000", order:4, type:"mainstem", temp:"auto" },
    { name:"Madison River above Powerplant near McAllister, MT", id:"06040800", order:5, type:"mainstem", temp:"auto" },
    { name:"Madison River below Ennis Lake near McAllister, MT", id:"06041000", order:6, type:"dam", temp:"auto" }
  ]},
  { name:"Missouri", headline:"06066500", sections:[
    { name:"Upper Missouri", gauges:[
      { name:"Missouri River at Toston, MT", id:"06054500", order:1, type:"mainstem", temp:"auto" },
      { name:"Missouri River below Hauser Dam near Helena, MT", id:"06065500", order:2, type:"dam", temp:"auto" }
    ]},
    { name:"Middle Missouri", gauges:[
      { name:"Missouri River below Holter Dam near Wolf Creek, MT", id:"06066500", order:3, type:"dam", temp:"auto" },
      { name:"Missouri River at Craig, MT", id:"06071500", order:4, type:"mainstem", temp:"auto" },
      { name:"Missouri River at Cascade, MT", id:"06078200", order:5, type:"mainstem", temp:"auto" },
      { name:"Missouri River near Great Falls, MT", id:"06090300", order:6, type:"mainstem", temp:"auto" }
    ]},
    { name:"Major Tributary", tributary:true, gauges:[
      { name:"Dearborn River near Craig, MT", id:"06073500", order:7, type:"tributary", temp:"auto" }
    ]},
    { name:"Lower Missouri", gauges:[
      { name:"Missouri River at Fort Benton, MT", id:"06090800", order:8, type:"mainstem", temp:"auto" },
      { name:"Missouri River at Virgelle, MT", id:"06109500", order:9, type:"mainstem", temp:"auto" }
    ]}
  ]},
  { name:"Rock Creek", headline:"12334510", gauges:[
    { name:"Middle Fork Rock Creek near Philipsburg, MT", id:"12332000", order:1, type:"fork", temp:"auto" },
    { name:"Rock Creek near Clinton, MT", id:"12334510", order:2, type:"mainstem", temp:"auto" }
  ]},
  { name:"Yellowstone", headline:"06192500", sections:[
    { name:"Upper Yellowstone", gauges:[
      { name:"Yellowstone River at Corwin Springs, MT", id:"06191500", order:1, type:"mainstem", temp:"auto" },
      { name:"Yellowstone River near Livingston, MT", id:"06192500", order:2, type:"mainstem", temp:"auto" }
    ]},
    { name:"Middle Yellowstone", gauges:[
      { name:"Yellowstone River at Big Timber, MT", id:"06200000", order:3, type:"mainstem", temp:"auto" },
      { name:"Yellowstone River at Billings, MT", id:"06214500", order:4, type:"mainstem", temp:"auto" },
      { name:"Yellowstone River at Forsyth, MT", id:"06295000", order:5, type:"mainstem", temp:"auto" },
      { name:"Yellowstone River at Miles City, MT", id:"06309000", order:6, type:"mainstem", temp:"auto" }
    ]},
    { name:"Lower Yellowstone", gauges:[
      { name:"Yellowstone River at Glendive, MT", id:"06327500", order:7, type:"mainstem", temp:"auto" },
      { name:"Yellowstone River near Sidney, MT", id:"06329500", order:8, type:"mainstem", temp:"auto" }
    ]}
  ]}
];

function getRiverGauges(river){
  if(river.sections){
    return river.sections.flatMap(section => section.gauges.map(g => ({...g, section:section.name, tributary:!!section.tributary})));
  }
  return river.gauges || [];
}
