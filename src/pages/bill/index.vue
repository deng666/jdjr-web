<template>
  <div>
    <header-title headerTitle="进度条"></header-title>
    <div class="row">
      <div class="item"
           :style="{width: firstWidth}"></div>
      <div class="item"
           :style="{width: secodeWidth}"></div>
      <div class="item"
           :style="{width: threeWidth}"></div>
    </div>
    <div id="myChart"
         style="width: 400px;height: 400px;"></div>
    <div id="aaa"
         :style="{width: '600px', height: '500px',margin:'0 auto'}"></div>
    <div id="bbb"
         :style="{width: '600px', height: '300px',margin:'0 auto'}"></div>
    <div id="ccc"
         :style="{width: '600px', height: '300px',margin:'0 auto'}"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// 引入饼图
require("echarts/lib/chart/pie");
// 引入提示框等组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
import HeaderTitle from "@/common/headerTitle/index";
export default {
  data () {
    return {
      line1: 60,
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "折线图"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "折线图",
            type: "line",
            color: "red",
            symbol: "none",
            lineStyle: {
              width: 3,
            },
            data: [40, 20, 15, 22, 70, 40, 20],
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "广告",
            color: "#2E5252",
            barWidth: 25,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0, // 0,0,1,0表示从左向右    0,0,0,1表示从右向左
                  [
                    { offset: 1, color: "#171716" },
                    { offset: 0, color: "#188df0" },
                  ]
                ),
              },
            },
            data: [10, 13, 10, 13, 9, 20, 10],
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "广告",
            color: "#076969",
            barWidth: 25,
            // itemStyle: {
            //   normal: {
            //     color: new echarts.graphic.LinearGradient(
            //       1,
            //       0,
            //       0,
            //       0, // 0,0,1,0表示从左向右    0,0,0,1表示从右向左
            //       [
            //         { offset: 1, color: "#83bff6" },
            //         { offset: 0, color: "#188df0" },
            //       ]
            //     ),
            //   },
            // },
            data: [22, 80, 90, 24, 20, 30, 10],
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "广告",
            color: "#5A8C8C",
            barWidth: 25,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  1,
                  0,
                  0,
                  0, // 0,0,1,0表示从左向右    0,0,0,1表示从右向左
                  [
                    { offset: 1, color: "#83bff6" },
                    { offset: 0, color: "#188df0" },
                  ]
                ),
              },
            },
            data: [10, 30, 4, 54, 90, 30, 10],
          },
        ],
      },
      optionTwo: {
        title: {
          left: "left",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: ["rose1", "rose2", "rose3"],
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["75%", "50%"],
            roseType: "area",
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
            ],
          },
        ],
      },
      optionThree: {
        title: {
          text: "折线图堆叠",
        },
        tooltip: {
          trigger: "axis",
          triggerOn: "click", //触发方式
          enterable: true, // 鼠标可移入tooltip中
          formatter: function (params) {
            console.log("params:", params);
            // return `<span onclick="myClick">同比</span>`; // 记得要加css样式pointer-events: all
            return params[0].name;
          },
        },
        // tooltip: {
        //   // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
        //   trigger: "item",
        //   // showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        //   // hideDelay: 20, // 隐藏延迟，单位ms
        //   backgroundColor: "rgba(255,0,0,0.7)", // 提示框背景颜色
        //   textStyle: {
        //     fontSize: "16px",
        //     color: "#000", // 设置文本颜色 默认#FFF
        //   },
        //   formatter: function (params) {
        //     console.log("params:", params);
        //     return (
        //       params.name +
        //       "<br>" +
        //       "2020/2:" +
        //       params.value +
        //       "<br>" +
        //       "2019/2:" +
        //       params.value
        //     );
        //   },
        //   // formatter设置提示框显示内容
        //   // {a}指series.name  {b}指series.data的name
        //   // {c}指series.data的value  {d}%指这一部分占总数的百分比
        //   // formatter: "/{b} <br/>{c}个 ({d}%)",
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "2020",
            type: "line",
            stack: "总量",
            smooth: true,
            // symbol: "none",
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "2019",
            type: "line",
            stack: "总量",
            smooth: true,
            // symbol: "none",
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      },
    };
  },
  components: {
    HeaderTitle,
  },
  computed: {
    firstWidth () {
      return this.line1 + "px";
    },
    secodeWidth () {
      return 180 + "px";
    },
    threeWidth () {
      return 80 + "px";
    },
    myClick () {
      console.log("我是computed");
    },
  },
  mounted () {
    this.init();
    this.drawLine();
    this.second();
    this.three();
  },
  methods: {
    three () {
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(document.getElementById("ccc"));
      // 绘制图表
      chart.setOption(this.optionThree);
    },
    second () {
      // 基于准备好的dom，初始化echarts实例
      let chartTwo = this.$echarts.init(document.getElementById("bbb"));
      // 绘制图表
      chartTwo.setOption(this.optionTwo);
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(document.getElementById("aaa"));
      // 绘制图表
      chart.setOption(this.option);
    },
    init () {
      let pieChart = echarts.init(document.getElementById("myChart"));

      // 初始化数据
      let data = [
        { name: "游泳健身", value: 1024 },
        { name: "学车考驾照", value: 2048 },
        { name: "弹琴", value: 2098 },
      ];
      let sum = 0;

      // 放置需要显示的图例(if you need)
      let legendData = [];

      // 循环数据 累计sum值
      data.forEach((item) => {
        sum += item.value * 1; // *1保证sum值为数值
        legendData.push(item.name);
      });

      // 给数据加上总数sum 通过颜色及透明度设置不显示
      data.push({
        name: "总数",
        value: sum,
        itemStyle: { normal: { color: "rgba(0, 0, 0, 0)" } },
      });

      // 下面给图例加上配置 都是官方的api
      pieChart.setOption({
        tooltip: {
          trigger: "item",
          // formatter: '{a}<br/>{b}:{c}({d}%)'
          formatter: "{b}:{c}({d}%)",
        },
        legend: {
          orient: "horizontal", // vertical 设置图例展示方向
          data: legendData,
        },
        series: [
          {
            name: "随意啦", // 上面formatter的a，不显示a可不设置
            type: "pie",
            startAngle: 180, // 重点！这里设置饼图从180°初渲染，刚好从上下将饼图平分成两部分
            radius: ["50%", "60%"],
            center: ["50%", "60%"],
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="scss">
.conent {
  width: 92%;
  margin: 40px auto;
  background-color: #101c4e;
}
.row {
  width: 300px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  background: -webkit-linear-gradient(left, #0078f7 0%, #0cb8ff 100%);
}
.row {
  display: flex;
  text-align: center;
  .item {
    border-right: 2px solid #000;
    &:last-child {
      border-right: none;
    }
  }
}
</style>
