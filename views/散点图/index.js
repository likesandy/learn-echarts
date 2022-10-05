import * as echarts from "echarts";
import chinaGenjson from "../../public/data/china_geojson";
import { data } from "../../public/data/map";

const mapName = "中国";

window.addEventListener("load", () => {
  echarts.registerMap(mapName, { geoJSON: chinaGenjson });

  const myChart = echarts.init(document.getElementById("main"));

  const geoCoordMap = {};
  /*获取地图数据*/
  myChart.showLoading();
  // console.log(echarts.getMap(mapName));
  const mapFeatures = echarts.getMap(mapName).geoJson.features;
  mapFeatures.forEach(function (v) {
    // 地区名称
    const name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
  });
  myChart.hideLoading();
  console.log("data=>", data);
  console.log("geoCoordMap=>", geoCoordMap);

  const convertData = function (data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: [...geoCoord, data[i].value],
        });
      }
    }
    console.log("res=>", res);
    return res;
  };

  const option = {
    geo: {
      map: mapName,
    },
    backgroundColor: "rgba(40,46,72, 0.2)",
    tooltip: {},
    series: [
      {
        name: "中国地图",
        type: "map",
        map: mapName,
        data,
      },
      {
        name: "散点图",
        type: "effectScatter",
        geoIndex: 0, // geo 支持数组，默认是 0
        coordinateSystem: "geo", // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件。
        // ====== 散点大小和着色========
        symbolSize: function (val) {
          return val[2] / 10;
        },
        itemStyle: {
          // color: "yellow",
          shadowBlur: 5,
          shadowColor: "yellow",
        },
        data: convertData(data),
        // ====== 散点大小和着色========
      },
      {
        name: "散点图充电桩",
        type: "effectScatter",

        // 散点图使用的坐标系: geo定义的坐标系组件
        geoIndex: 0,
        coordinateSystem: "geo", // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件。

        data: convertData(data),

        symbolSize: function (val) {
          return val[2] / 10;
        },

        itemStyle: {
          color: "yellow",
          shadowBlur: 10,
          shadowColor: "yellow",
        },
        tooltip: {
          show: true,
          trigger: "item",
          formatter: function (params) {
            console.log(params);
            var data = params.data;
            return `${params.seriesName} <div style="margin:5px 0px;"/> ${data.name} ${data.value[2]}`;
          },
        },
      },
    ],
  };
  myChart.setOption(option);
});
