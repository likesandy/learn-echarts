import * as echarts from "echarts";

window.addEventListener("load", () => {
  const myChart = echarts.init(document.getElementById("main"));

  const option = {
    backgroundColor: "rgb(40,46,72)",
    grid: {
      left: "5%",
      right: "10%",
      top: "30%",
      bottom: "5%",
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    },
    tooltip: {},

    xAxis: {
      name: "月份",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "white",
      },
      type: "category",
      data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
    },

    yAxis: {
      name: "个",
      nameTextStyle: {
        color: "white",
        fontSize: 13,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisLabel: {
        color: "white",
      },
    },

    series: [
      {
        name: "销量",
        type: "bar",
        barWidth: 17,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#01B1FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#033BFF", // 100% 处的颜色
              },
            ],
          },
        },
        data: [500, 2000, 3600, 1000, 1000, 2000, 4000],
      },
    ],
  };

  myChart.setOption(option);
});
