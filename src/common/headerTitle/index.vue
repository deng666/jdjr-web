<template>
  <div>
    <header class="heaser-title">
      <i class="iconfont iconjiantou-copy"></i>
      <h4 class="heaser-text">{{headerTitle}}</h4>
      <i class="iconfont icongengduo" @click="showList"></i>
      <card :show="show"></card>
    </header>
  </div>
</template>
<script>
import Card from '@/pages/core/card.vue'
export default {
  props: {
    headerTitle: {
      type: String,
      default: '标题'
    }
  },
  data () {
    return {
      show: false
    }
  },
  components: {
    Card
  },
  methods: {
    showList () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.heaser-title {
  height: 2rem;
  width: 100%;
  line-height: 1.5;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  .iconjiantou-copy {
    position: absolute;
    left: .1rem;
    top:0.5rem;
    font-size:.7rem;
    padding: 0 .3rem;
    color: #333;
  }
  .icongengduo {
    position: absolute;
    font-size: .8rem;
    top: 0.4rem;
    right: .2rem;
    padding: 0 .3rem;
  }
  .heaser-text {
    line-height: 2rem;
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    color:#333;
    box-sizing: border-box;
    padding: 0 .2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
