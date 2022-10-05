import * as echarts from "echarts";

/**
 * https://echarts.apache.org/zh/api.html#echarts.init
 * 1. dom
 * 2. theme
 * 3. options
 */
const myChart = echarts.init(document.getElementById("main"), null, {
  // 切换渲染引擎
  renderer: "svg",
});

// 绘制图表
myChart.setOption({
  // 标题 https://echarts.apache.org/zh/option.html#title
  // title: {
  //   text: "ECharts 入门示例",
  // },

  // hoverLabel https://echarts.apache.org/zh/option.html#tooltip
  tooltip: {},

  // x轴 https://echarts.apache.org/zh/option.html#xAxis
  // xAxis: {
  //   data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  // },

  // y轴 https://echarts.apache.org/zh/option.html#yAxis
  // yAxis: {},

  // 系列 https://echarts.apache.org/zh/option.html#series
  series: [
    // 内部的options优先级比全局的高
    {
      type: "pie",
      data: [
        {
          value: "5",
          name: "衬衫",
        },
        {
          value: "12",
          name: "羊毛衫",
        },
        {
          value: "15",
          name: "雪纺衫",
        },
        {
          value: "10",
          name: "裤子",
        },
        {
          value: "5",
          name: "高跟鞋",
        },
        {
          value: "20",
          name: "袜子",
        },
      ],
    },
  ],

  //图例 https://echarts.apache.org/zh/option.html#legend
  legend: {
    formatter: (name) => {
      // 富文本语法：{style_name|value} 不能有空格
      // https://echarts.apache.org/zh/tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE
      return `${name}{countSty|40%}`;
    },
    textStyle: {
      rich: {
        // 在 rich 里面，可以自定义富文本样式。
        // https://echarts.apache.org/zh/option.html#title.textStyle.rich
        countSty: {
          color: "pink",
        },
      },
    },
  },

  // 绘图区域 https://echarts.apache.org/zh/option.html#grid
  // grid: {
  //   show: true,
  //   backgroundColor: "pink",
  // },
});
