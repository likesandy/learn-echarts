import * as echarts from "echarts";

const myChart = echarts.init(document.getElementById("main"));
window.addEventListener("load", () => {
  // =====准备数据=====
  const pieDatas = [
    {
      value: 100,
      name: "广州占比",
      percentage: "5%",
      color: "#34D160",
    },
    {
      value: 200,
      name: "深圳占比",
      percentage: "4%",
      color: "#027FF2",
    },
    {
      value: 300,
      name: "东莞占比",
      percentage: "8%",
      color: "#8A00E1",
    },
    {
      value: 400,
      name: "佛山占比",
      percentage: "10%",
      color: "#F19610",
    },
    {
      value: 500,
      name: "中山占比",
      percentage: "20%",
      color: "#6054FF",
    },
    {
      value: 600,
      name: "珠海占比",
      percentage: "40%",
      color: "#00C6FF",
    },
  ];

  // 将 pieDatas 格式的 数据映射为 系列图所需要的数据格式
  const data = pieDatas.map((item) => {
    return {
      value: item.value,
      name: item.name,
      itemStyle: {
        color: item.color,
      },
    };
  });

  // 求出总数
  const total = pieDatas.reduce((a, b) => {
    return a + b.value * 1;
  }, 0);
  // =====准备数据=====

  // 2.指定图表的配置项和数据
  const option = {
    backgroundColor: "rgb(40,46,72)",
    tooltip: {},
    // 标题组件
    title: {
      text: `充电桩总数`,
      top: "50%",
      left: "50%",
      padding: [-20, 0, 0, -45],
      textStyle: {
        fontSize: 19,
        color: "white",
      },

      // subtext: `2100`,
      // subtextStyle : {
      //   color: 'red'
      // },

      // 副标题使用-富文本语法：{style_name|value}， 注意不能有空格
      subtext: `{totalSty|${total}}`,
      subtextStyle: {
        rich: {
          totalSty: {
            fontSize: 19,
            color: "white",
            width: 90,
            align: "center",
          },
        },
      },
    },

    legend: {
      orient: "vertical",
      right: "10%",
      top: "18%",

      itemGap: 10,
      itemWidth: 16,
      itemHeigth: 16,
      icon: "rect",

      // 自定义图例的名称
      formatter: function (name) {
        // 图例文本格式化 + 富文本定制样式
        const currentItem = pieDatas.find((item) => item.name === name);
        return (
          "{nameSty|" +
          currentItem.name +
          "}\n" +
          "{numberSty|" +
          currentItem.value +
          "个 }" +
          "{preSty|" +
          currentItem.percentage +
          "}"
        );
      },
      textStyle: {
        rich: {
          nameSty: {
            fontSize: 12,
            color: "#FFFFFF",
            padding: [10, 14],
          },
          numberSty: {
            fontSize: 12,
            color: "#40E6ff",
            padding: [0, 0, 0, 14],
          },
          preSty: {
            fontSize: 12,
            color: "#40E6ff",
          },
        },
      },
    },
    series: [
      {
        type: "pie",
        center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
        radius: ["30%", "75%"], // 饼图的半径。数组的第一项是内半径，第二项是外半径。
        label: {
          show: false,
        },
        // data: [  { name: '',   value: '',   itemStyle }  ],
        data: data,
        roseType: "area", //  area 玫瑰图, 圆心角一样，通过半径展现数据大小( 默认为false )
      },
    ],
  };

  myChart.setOption(option);
});

window.addEventListener("resize", () => {
  // 自适应
  myChart.resize(); // 可以接收一个对象，传递修改后的宽 和 高
});

// 自动轮播tooltip
let timer = setInterval(function () {
  autoToolTip();
}, 1000);

let index = 0; // 0-5
function autoToolTip() {
  index++;
  if (index > 5) {
    clearInterval(timer);
  }
  // 1.显示提示框
  myChart.dispatchAction({
    type: "showTip", // 触发的action type
    seriesIndex: 0, // 系列的 索引
    dataIndex: index, // 数据项的 索引
    position: "top", // top
  });
}

// 图片下钻
// 需要先导入广州地图
// myChart.on("click", function (event) {
//   console.log(event);
//   if (event.name === "广东") {
//     // 避免重复注册map
//     if (!echarts.getMap(event.name)) {
//       console.log("注册地图");
//       echarts.registerMap(event.name, { geoJSON: guangdong_geojson });
//     }
//     option.series[0].map = event.name; // 将中国地图切换为广东地图
//     myChart.setOption(option);
//   }
// });
