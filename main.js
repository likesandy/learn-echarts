import * as echarts from "echarts";

/**
 * https://echarts.apache.org/zh/api.html#echarts.init
 * 1. dom
 * 2. theme
 * 3. options
 */
const myChart = echarts.init(document.getElementById("main"), null, {
  /**
   * 选择哪种渲染器
   * - Canvas 更适合绘制图形元素数量较多的图表
   * - SVG 具有重要的优势：它的内存占用更低、适配性、扩展性性好，放大缩小图表不会模糊
   * - 选择哪种渲染器？ 可以根据软硬件环境、数据量、功能需求综合考虑：
   *  - 在软硬件环境较好，数据量不大的场景下，两种渲染器都可以适用，并不需要太多纠结
   *  - 在软硬件环境较差，出现性能问题需要优化的场景下，可以通过试验来确定使用哪种渲染器。比如有这些经验：
   *  - 在需要创建很多 ECharts 实例且浏览器易崩溃的情况下（可能因为 Canvas 数量多导致内存占用超出手机承受能力），可
        以使用 SVG 渲染器来进行改善
      - 数据量较大（经验判断 > 1k）、较多交互时，建议选择 Canvas 渲染器
   */
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
