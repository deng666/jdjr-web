<template>
  <div>
    <header-title headerTitle="订单"></header-title>
    <div class="content">
      <div v-for="(item, index) in list"
           :key="index">
        {{item.text}}
        <div :id="'chart'+index"
             :style="{width: '600px', height: '700px',margin:'0 auto'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTitle from "@/common/headerTitle/index";
export default {
  name: "order",
  data () {
    return {
      list: [{
        id: 1,
        text: '111111'
      }, {
        id: 2,
        text: '222222'
      }]
    }
  },
  components: {
    HeaderTitle,
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      for (let i = 0; i < this.list.length; i++) {
        let myChart = this.$echarts.init(document.getElementById('chart' + i))
        console.log(myChart._dom.id, '222222')
        let option = {
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
                "1月",
                "2月",
                "3月",
                "4月"
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
          series: [{
            label: {
              show: true,
              position: "top",
              color: "red",
              formatter: function (params) {
                let num = 0
                if (myChart._dom.id === 'chart0') {
                  num = `${params.value}%`
                } else {
                  num = params.value
                }
                return num
              }
            },
            data: [{
              value: 30,
              tooltip: {
                trigger: 'item',
                formatter: function (params) {
                  let num = 0
                  if (myChart._dom.id === 'chart0') {
                    num = `${params.value}%`
                  } else {
                    num = params.value
                  }
                  return num
                }
              }
            },
            {
              value: 20,
              tooltip: {
                trigger: 'item',
                formatter: function (params) {
                  let num = 0
                  if (myChart._dom.id === 'chart0') {
                    num = `${params.value}%`
                  } else {
                    num = params.value
                  }
                  return num
                }
              }
            }],
            type: 'bar',
          }]
        }
        myChart.setOption(option);
      }

    },
  },
};
</script>
