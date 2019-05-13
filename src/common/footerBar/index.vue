<template>
  <!-- 底部导航栏 -->
  <ul class="fi-bar">
    <li class="tab">
      <img src="./homelign.png" alt="" v-if="name === 'home'">
      <img src="./home.png" alt="" v-else>
      <p class="item-text" :class="name === 'home' ? 'active' : ''">首页</p>
    </li>
    <li class="tab">
      <img src="./orderlign.png" alt="" v-if="name === 'order'">
      <img src="./order.png" alt="" v-else>
      <p class="item-text" :class="name === 'order' ? 'active' : ''">订单</p>
    </li>
    <li class="tab">
      <img src="./carlign.png" alt="" v-if="name === 'car'">
      <img src="./car.png" alt="" v-else>
      <p class="item-text" :class="name === 'car' ? 'active' : ''">购物车</p>
    </li>
    <li class="tab">
      <img src="./mylign.png" alt="" v-if="name === 'my'">
      <img src="./my.png" alt="" v-else>
      <p class="item-text" :class="name === 'my' ? 'active' : ''">我的</p>
    </li>
  </ul>
</template>

<script>
export default {
  created () {
    this.name = this.$route.name
  },
  watch: {
    $route (to, from) {
      this.name = this.$route.name
    }
  },
  methods: {
    goPage (target) {
      // if (target === 'mall') {
      //   // window.location.href = process.env.MALL_H5_BASE_URL + `#/home`
      //   navigate({
      //     url: process.env.MALL_H5_BASE_URL + `#/home`,
      //     showTitle: false
      //   }, {})
      // } else {
      this.$router.replace({name: target})
      // }
    }
  }
}
</script>

<style scoped lang="scss">
.fi-bar {
  width: 100%;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  box-sizing: border-box;
  z-index: 100;
  .tab {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img {
      width: .45rem;
      height: .45rem;
      align-self: center;
      margin-top: 6px;
    }
    .item-text{
      color: #666;
      font-size: .28rem;
      line-height: 30px;
      padding-bottom: 6px;
      &.active{
        color: #0A81FB;
      }
    }
  }
}
</style>
