<template>
  <div class="taibao-page">
    <header-title headerTitle="订单"></header-title>
    <div class="page-content">
      <div id="echarts"
           class="chart"
           :style="{width: '100%', height: '400px',margin:'0 auto'}"></div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from "@/common/headerTitle/index"
export default {
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: '#0066B2',
          padding: [5, 30, 5, 8],
          textStyle: {
            fontSize: 12,
          },
          formatter: function (params) {
            const item = params[0];
            const aaa = params[1]
            return `
                ${item.seriesName}/${item.name}&nbsp;&nbsp;${item.value}<br>
                ${aaa.seriesName}/${item.name}&nbsp;&nbsp;${aaa.value}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;同比&nbsp;&nbsp;+21.2%
               `
          }
        },
        legend: {
          data: ['2019', '2020'],
          icon: 'line',
          bottom: 20
        },
        grid: {
          left: '7%',
          right: '5%',
          bottom: '3%',
          top: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            show: false
          },
          data: ['1', '2', '3', '4', '5', '6', '7', '8']
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            color: 'red'
          }
        },
        series: [
          {
            name: '2019',
            type: 'line',
            color: '#FFC53A',
            data: [20, 30, 40, 19, 28, 31, 40, 43]
          },
          {
            name: '2020',
            type: 'line',
            color: '#0066B2',
            data: [23, 39, 32, 19, 34, 29, 45, 50]
          },
        ]
      }
    }
  },
  components: {
    HeaderTitle
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("echarts"));
      // 绘制图表
      myChart.setOption(this.option);
    },
  },
}
</script>

<style>
.page-content {
  padding: 135px 15px 50px;
}
</style>
