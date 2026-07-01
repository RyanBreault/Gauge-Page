function drawGauge(id){
  const el = document.getElementById(`chart-${id}`);
  if(!el || !state.data[id]?.flow?.length) return;
  if(state.charts[id]) state.charts[id].dispose();
  const chart = echarts.init(el);
  state.charts[id] = chart;
  const flow = sample(state.data[id].flow);
  const temp = sample(state.data[id].temp || []);
  const labels = flow.map(p => fmtDate(p.time));
  const tempMap = new Map(temp.map(p => [fmtDate(p.time), p.value]));
  chart.setOption({
    backgroundColor:"transparent",
    tooltip:{trigger:"axis", backgroundColor:"rgba(7,17,23,.95)", borderColor:"#203949", textStyle:{color:"#edf7fb"},
      valueFormatter: v => Number.isFinite(v) ? v.toLocaleString() : "--"},
    legend:{top:0,textStyle:{color:"#8da8b7"}},
    grid:{left:52,right:temp.length?52:18,top:42,bottom:44},
    dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:"#203949",backgroundColor:"rgba(255,255,255,.04)"}],
    xAxis:{type:"category",data:labels,boundaryGap:false,axisLabel:{color:"#8da8b7"},axisLine:{lineStyle:{color:"#203949"}},axisTick:{show:false}},
    yAxis:[
      {type:"value",name:"CFS",nameTextStyle:{color:"#8da8b7"},axisLabel:{color:"#8da8b7"},splitLine:{lineStyle:{color:"rgba(255,255,255,.07)"}}},
      {type:"value",name:"°F",show:!!temp.length,nameTextStyle:{color:"#8da8b7"},axisLabel:{color:"#8da8b7"},splitLine:{show:false}}
    ],
    series:[
      {name:"Flow",type:"line",smooth:true,showSymbol:false,lineStyle:{width:2},areaStyle:{opacity:.08},data:flow.map(p => Math.round(p.value))},
      ...(temp.length ? [{name:"Water Temp",type:"line",smooth:true,showSymbol:false,yAxisIndex:1,lineStyle:{width:2},data:labels.map(l => tempMap.get(l) ?? null)}] : [])
    ]
  });
}
