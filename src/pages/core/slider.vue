<template>
  <div>
    <section class="swipe-section">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, key) in bannerList" :key="key">
          <img :src="item.fileUrl" alt="" width="100%" class="swipe-img">
        </swiper-slide>
      </swiper> 
    </section>
  </div> 
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    bannerList: null
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 2.7,
        spaceBetween: 15
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
}
</script>

<style>
.swipe-section {
  padding: .2rem 0 .3rem .4rem;
}
</style>
