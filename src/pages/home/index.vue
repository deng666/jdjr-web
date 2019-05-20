<template>
  <div>
    <!-- <header-title headerTitle="首页"></header-title> -->
    <heador/>
    <div class="content">
      <div class="hi-banner">
        <slider :cname="slider" :items="swiperSlides"/>
      </div>
      <div class="hi-options">
        <div class="hi-options-items" v-for="item in productDesign" :key="item.img">
          <div class="hi-option-list">
            <img :src="item.img" alt="">
            <div>{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="hi-jisu">
        <panel title="极速借贷">
          <img src="http://img13.360buyimg.com/cms/jfs/t1/32582/31/15415/68558/5cc19becE9dc64654/a4093ababa3f43bf.jpg" alt="" width="100%">
        </panel>
      </div>
      <div class="hi-card">
        <panel title="理财产品">
          <div class="hi-finance clearfix">
            <div class="hi-finance-line"></div>
            <div class="hi-finance-option" v-for="item in financeList" :key="item.id">
              <div class="hi-finance-title">
                {{item.title}}
                <span class="hi-finance-hint">{{item.hint}}</span>
              </div>
              <div class="hi-finance-rate">{{item.rate}}%</div>
              <div class="hi-finance-text">{{item.text}}</div>
            </div>
          </div>
        </panel>
      </div>
      <div class="hi-task">
        <panel title="赏金任务" :isShowCheck="taskText" rightText="查看更多任务">
          <slider :options="options" :items="itemsList" cname="product-slider"></slider>
        </panel>
      </div>
      <div class="hi-insurance">
        <panel title="保险保障">
          <slider :options="options" :items="insuranceList" cname="product-slider"></slider>
        </panel>
      </div>
      <div class="hi-congregation">
        <panel title="众筹新品" :isShowCheck="taskText" rightText="更多尖货">
          <slider :options="options2" :items="congregationList" cname="product-slider"></slider>
        </panel>
      </div>
      <div class="hi-copyright-detail">
        <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
        <p>投资有风险，购买需谨慎</p>
        <p>京东金融平台服务协议</p>
        <p>京东金融隐私政策</p>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// import HeaderTitle from '@/common/headerTitle/index'
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
import FooterBar from '@/common/footerBar/index'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Heador from '@/common/header'
export default {
  name: 'index',
  data () {
    return {
      slider: 'slider-banner',
      taskText: true,
      options: {
        // pagination: {  // 小点点
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        paginationClickable: true,
        slidesPerView: 2.7,
        spaceBetween: 35,
        freeMode: true
      },
      options2: {
        paginationClickable: true,
        slidesPerView: 2,
        spaceBetween: 35,
        freeMode: true
      },
      financeList: [{
        id: 1,
        title: '长乐盈',
        hint: '180天可质押',
        rate: 5.80,
        text: '近1年历史年化投资回报率'
      }, {
        id: 2,
        title: '京智0号',
        hint: '大数据赋能',
        rate: 6.00,
        text: '近1月历史年化投资回报率'
      }, {
        id: 3,
        title: '建信养老飞益鑫',
        hint: '1000起投',
        rate: 4.57,
        text: '近7日年化收益'
      }, {
        id: 4,
        title: '小白基金',
        hint: '超短期',
        rate: 4.50,
        text: '7日年化收益率'
      }],
      itemsList: [{
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'
      }],
      insuranceList: [{
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/27283/39/2034/26756/5c1895b5Ecbfdf7ed/6a0755f1f40e2eb9.jpg?width=210&height=260'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/27014/35/2022/24897/5c1895d9Ef095679a/c0918d244bbfb2e5.jpg?width=210&height=260'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19150/30/2037/31576/5c1895f2Eb431149e/7a71e063250f8b0d.jpg?width=210&height=260'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/9279/3/9618/27165/5c189693E5d54e2cb/c263629839992767.jpg?width=210&height=260'
      }],
      congregationList: [{
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/30149/40/8970/20149/5ca2e84dE7641a4dc/342b926b8582a140.jpg?width=335&height=421'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19514/33/13824/16597/5ca2e84eE4b9cc39a/23b319b8846b585c.png?width=335&height=421'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/12202/17/13916/19329/5ca2e84fE6bde713f/ff4f3231eb4c7312.jpg?width=335&height=421'
      }],
      swiperSlides: [{
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg?width=750&height=320'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/28576/40/10399/139307/5c862bc6E022a873e/c50fcefa58db30ce.jpg?width=750&height=320'
      }],
      productDesign: [{
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领福利'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
        title: '工资理财'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
        title: '众筹'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/36242/13/119/12214/5cb06492E0c73a66f/a284f91242e27af1.png?width=90&height=90',
        title: '免费领京豆'
      }, {
        img: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/23337/6/15445/8974/5cb064c2E0cadac1d/c533bfe4da578fe7.png?width=90&height=90',
        title: '免息红包'
      }]
    }
  },
  components: {
    // HeaderTitle,
    Panel,
    Slider,
    FooterBar,
    swiper,
    swiperSlide,
    Heador
  },
  methods: {
    loadFn (e) {
      e.target.height = e.target.width * 210 / 260
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "../../assets/css/element.scss"
.content {
  .hi-banner {
    width: 100%;
    height: 6.4rem;
    margin-bottom: .4rem;
    background-color: #fff;
    .hi-img {
      width: 100%;
      height: auto;
    }
  }
  .hi-options {
    .hi-options-items {
      .hi-option-list {
        width: 25%;
        float: left;
        color: #333;
        font-size: .6rem;
        text-align: center;
        padding: .8rem 0;
        img {
          width: 1.8rem;
          height: 1.8rem;
        }
      }
    }
  }
  .hi-finance {
    position: relative;
    .hi-finance-line {
      width: 100%;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      background-color: #ccc;
    }
    .hi-finance-option {
      width: 50%;
      float: left;
      position: relative;
      padding: .8rem 0 .8rem .8rem;
      box-sizing: border-box;
      .hi-finance-title {
        color: #333;
        font-size: .52rem;
        font-weight: bold;
        .hi-finance-hint {
          color: #fa5a4b;
          font-size: .44rem;
          border: 1px solid #fa5a4b;
          font-weight: normal;
        }
      }
      .hi-finance-rate {
        color: #fa5a4b;
        font-size: .9rem;
        font-weight: bold;
        margin: .4rem 0;
      }
      .hi-finance-text {
        color: #999;
      }
    }
    .hi-finance-option:nth-child(even):after {
      content: '';
      position: absolute;
      width: 1px;
      height: 60%;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      background-color: #ccc;
    }
  }
  .hi-copyright-detail {
    text-align: center;
    font-size: .6rem;
    color: #666;
    border-top: 1px solid #ccc;
    p {
      height: 1.6rem;
      line-height: 1.6rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
