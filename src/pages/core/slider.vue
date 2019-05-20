<template>
  <div>
    <section :class="cname">
      <swiper :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="(item, key) in items" :key="key">
          <img :src="item.img" alt="" class="swipe-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
      </swiper>
    </section>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    items: null,
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default () {
        return {
          autoplay: true,  //自动滚动
          loop: true,  //无序
          pagination: {
            el: ".swiper-pagination"  // 小点
          },
          notNextTick: false
        }
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
/* @import "~swiper/dist/css/swiper.css" */
.swipe-section {
  padding: .4rem 0 .6rem .8rem;
}
</style>
