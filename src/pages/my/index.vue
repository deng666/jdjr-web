<template>
  <div>
    <header-title headerTitle="订单"></header-title>
    <div class="content">
      <div>
        <div id="myChart"
             :style="{width: '600px', height: '700px',margin:'0 auto'}"></div>
        <div>
        </div>
        <div>
          <div id="myChartaaa"
               :style="{width: '600px', height: '700px',margin:'0 auto'}"></div>
        </div>

      </div>

      <footer-bar />
    </div>
  </div>
</template>

<script>
import HeaderTitle from "@/common/headerTitle/index";
import FooterBar from "@/common/footerBar/index";
var originaldata = [{
  "value": 60,
  "name": "移动端",
  "children": [{
    "value": 40,
    "name": "苹果"
  }, {
    "value": 10,
    "name": "安卓"
  }, {
    "value": 10,
    "name": "塞班"
  }]
}, {
  "value": 40,
  "name": "PC"
}, {
  "value": 40,
  "name": "平板"
}];
var color0 = ['#4A6DBF', '#15B3BC', '#FD4440'];
var data0 = [];
for (var i = 0; i < originaldata.length; i++) {
  var obj = originaldata[i];
  data0.push({
    value: obj.value,
    name: obj.name,
    itemStyle: {
      color: color0[i]
    },
    labelLine: {
      length: 40,
      length2: 10
    }
  });
}

var color1 = ['rgba(244,156,31,0.3)', 'rgba(94,140,208,0.3)', 'rgba(198,52,157,0.3)'];
var data1 = [];
for (var i = 0; i < originaldata.length; i++) {
  var obj = originaldata[i];
  var kids = obj.children;
  if (typeof (kids) === 'undefined') {
    data1.push({
      value: obj.value,
      name: obj.name,
      itemStyle: {
        color: 'transparent'
      }
    });
  } else {
    for (var k = 0; k < kids.length; k++) {
      var kid = kids[k];
      data1.push({
        value: kid.value,
        name: kid.name,
        itemStyle: {
          color: color1[k]
        },
        label: {
          normal: {
            position: 'outside',
            formatter: '{b} {d}% ',
            color: '#909090'
          }
        }
      });
    }
  }
  // alert(k);
}
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
      },
      aaaaaa: {
        backgroundColor: '#161823',
        series: [{
          name: '访问来源',
          type: 'pie',
          animation: false,
          radius: ['47%', '74%'],
          label: {
            normal: {
              position: 'outside',
              formatter: '{b} {d}% ',
              color: '#fff'
            }
          },
          labelLine: {
            normal: {
              show: true
            },
          },
          data: data0
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['74%', '84%'],
          animation: false,
          data: data1
        }
        ],
      }
    }
  },
  components: {
    HeaderTitle,
    FooterBar,
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    // tranNumber (num) {

    // },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let myChartaaa = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.option);
      myChartaaa.setOption(this.aaaaaa)
    },
  },
};
</script>

<style>
</style>
