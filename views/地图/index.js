import * as echarts from "echarts";
import chinaGenjson from "../../public/data/china_geojson";
import { data } from "../../public/data/map";

window.addEventListener("load", () => {
  echarts.registerMap("中国", { geoJSON: chinaGenjson });

  const myChart = echarts.init(document.getElementById("main"));

  const option = {
    // 4.配置地图
    // 全局的地理坐标系组件。地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
    // geo 支持数组和对象，数组可创建多个地理坐标系(全局)
    backgroundColor: "rgba(40,46,72, 0.2)",
    // geo: [
    //   {
    //     map: "中国", // 中国 、gd、南昌
    //   },
    // ],
    // 也通过系列创建地图(局部)
    tooltip: {},

    // 视觉数据映射
    visualMap: [
      {
        // type: "continuous", // 连续型视觉映射组件 (默认)
        // type: "piecewise", // 分段型视觉映射组件
        left: "20%",
        seriesIndex: [0], // 指定取哪个系列的数据
        // 定义 在选中范围中 的视觉元素, 对象类型。
        inRange: {
          color: ["#04387b", "#467bc0"], // 映射组件和地图的颜色(一般和地图色相近)
        },
      },
    ],

    series: [
      {
        name: "中国地图",
        type: "map",
        map: "中国",
        aspectScale: 0.75, // 这个参数用于 scale 地图的长宽比，如果设置了projection则无效
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。

        // =======地图着色=========
        itemStyle: {
          areaColor: "#023677", // 地图区域的颜色。
          borderColor: "#1180c7", // 图形的描边颜色。
        },

        emphasis: {
          itemStyle: {
            areaColor: "#4499d0",
          },
          label: {
            color: "white",
          },
        },
        // =======地图着色=========
        data,
      },
    ],
  };
  myChart.setOption(option);
});
