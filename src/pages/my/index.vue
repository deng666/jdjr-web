<template>
  <div>
    <header-title headerTitle="订单"></header-title>
    <div class="content">
      <div id="myChart" :style="{width: '600px', height: '700px',margin:'0 auto'}"></div>
      <footer-bar />
    </div>
  </div>
</template>

<script>
import HeaderTitle from '@/common/headerTitle/index'
import FooterBar from '@/common/footerBar/index'
export default {
  name: 'order',
  data () {
    return {
      option: {
        title: {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['蒸发量']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            color: 'red',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
            axisLabel: {
              interval: 0,
              rotate: 45
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '水量',
            min: 0,
            max: 900,
            interval: 300,
            axisLabel: {
              formatter: '{value} ml'
            }
          }
        ],
        label: {
          show: true,
          position: 'top',
          color: 'blue'
        },
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [687, 236, 3, 650, 800, 310, 260, 162.2, 698]
          }
        ]
      }
    }
  },
  components: {
    HeaderTitle,
    FooterBar
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    // tranNumber (num) {

    // },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption(this.option)
    }
  }
}
</script>

<style>

</style>
