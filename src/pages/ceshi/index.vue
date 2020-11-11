<template>
  <div>
    <header-title headerTitle="订单"></header-title>
    <div class="content">
      <div v-for="(item, index) in list"
           :key="index">
        {{item.text}}
        <div :id="'chart_cl_detail_evaluate'+index"
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
        let myChart = this.$echarts.init(document.getElementById('chart_cl_detail_evaluate' + i))
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
              // name: '水量',
              min: 0,
              max: 900,
              interval: 300,
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
          series: [
            {
              name: "蒸发量",
              type: "bar",
              barWidth: 40, // 柱图宽度
              barGap: "-50%", // 柱图间距
              data: [687, 236, 650, 800],
            },
          ],
        }
        myChart.setOption(option);
      }

    },
  },
};
</script>
