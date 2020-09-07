<template>
  <div>
    <header-title headerTitle="进度条"></header-title>
    <div class="content">
      <div class="row">
        <div class="item" :style="{width: firstWidth}"></div>
        <div class="item" :style="{width: secodeWidth}"></div>
        <div class="item" :style="{width: threeWidth}"></div>
      </div>
      <div id="myChart" style="width: 400px;height: 400px;"></div>
      <div id="aaa" :style="{width: '600px', height: '700px',margin:'0 auto'}"></div>
    </div>
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
  data() {
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
          data: ["邮件营销", "联盟广告", "视频广告"],
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
            symbol: "none",
            lineStyle: {
              color: "#F5E542",
              width: 3,
            },
            data: [470, 540, 495, 522, 570, 890, 930],
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
            data: [100, 130, 101, 134, 90, 230, 210],
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
            data: [220, 180, 190, 234, 290, 330, 310],
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
            data: [150, 230, 204, 154, 190, 330, 410],
          },
        ],
      },
    };
  },
  components: {
    HeaderTitle,
  },
  computed: {
    firstWidth() {
      return this.line1 + "px";
    },
    secodeWidth() {
      return 180 + "px";
    },
    threeWidth() {
      return 80 + "px";
    },
  },
  mounted() {
    this.init();
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(document.getElementById("aaa"));
      // 绘制图表
      chart.setOption(this.option);
    },
    init() {
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
