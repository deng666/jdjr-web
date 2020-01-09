<template>
  <div>
    <header-title headerTitle="订单"></header-title>
    <div class="content">
      <div id="monthorder" style="width:100%;height:500px"></div>
      <footer-bar />
    </div>
  </div>
</template>

<script>
import HeaderTitle from '@/common/headerTitle/index'
import FooterBar from '@/common/footerBar/index'
var echarts = require('echarts/lib/echarts')
export default {
  name: 'order',
  data () {
    return {
      monthlist: {
        monthdata: [
          '未付款的订单',
          '待确认的订单',
          '待发货的订单',
          '已发货的订单',
          '已完成的订单',
          '取消的订单'
        ],
        time: '2018.01.01-2019.09.01',
        precent: [30, 10, 12, 15, 30, 10],
        total: 88
      }
    }
  },
  components: {
    HeaderTitle,
    FooterBar
  },
  created () {
    this.$nextTick(function () {
      this.montheahcrt()
    })
  },
  methods: {
    montheahcrt () {
      var that = this
      var monthseries = that.monthseries()
      var myechart = echarts.init(document.getElementById('monthorder'))
      myechart.setOption({
        title: { subtext: that.monthlist.time, x: 'center' },
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' },

        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 0,
          top: 0,
          bottom: 20,
          data: monthseries.legendData,
          selected: monthseries.selected
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '50%',
            center: ['60%', '50%'],
            data: monthseries.seriesData
          }
        ]
      })
    },
    monthseries () {
      var data = this.monthlist
      var legendData = []
      var seriesData = []
      var selected = {}
      for (var i = 0; i < data.monthdata.length; i++) {
        seriesData.push({
          name: data.monthdata[i],
          value: data.precent[i]
        })
        legendData.push(data.monthdata[i])
        selected[data.monthdata[i]] = true
      }
      return {
        seriesData,
        selected,
        legendData
      }
    }
  }
}
</script>

<style>

</style>
