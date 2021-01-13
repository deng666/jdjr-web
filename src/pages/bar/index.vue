<template>
  <div>
    <div id="myChart"
         :style="{width: '600px', height: '700px',margin:'0 auto'}"></div>
  </div>
</template>

<script>
export default {
  name: "order",
  data () {
    return {
      option: {
        color: ["#7daeff"],
        title: {
          text: "某地区蒸发量和降水量",
          subtext: "纯属虚构",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let res
            for (var i = 0; i < params.length; i++) {
              res = params[i].value
            }
            return res;
          }
        },
        legend: {
          data: ["蒸发量"],
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            color: "red",
            data: [
              "1月", "3月",
            ],
            axisLabel: {
              interval: 0,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        label: {
          show: true,
          position: "top",
          color: "red",
        },
        series: [{
          data: [{
            value: 30,
            tooltip: {
              trigger: 'item',
              formatter: function (val) {
                console.log(val, ';;;;;;;;')
              }
            }
          },
          {
            value: 20,
            tooltip: {
              trigger: 'item',
              formatter: function (val) {
                console.log(val, ';;;;;;;;')
              }
            }
          }],
          type: 'bar',
        }]
      }
    }
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      // 绘制图表
      myChart.setOption(this.option);
    },
  },
};
</script>
