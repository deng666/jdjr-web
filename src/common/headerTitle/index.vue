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
    showList() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.heaser-title {
  height: .88rem;
  width: 100%;
  line-height: .88rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  .iconjiantou-copy {
    width: .5rem;
    height: 100%;
    position: absolute;
    top: 50%;
    left: .2rem;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }
  .icongengduo {
    width: .5rem;
    height: 100%;
    position: absolute;
    font-size: .4rem;
    top: 50%;
    right: .2rem;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }
  .heaser-text {
    margin: 0 .7rem;
    font-size: .32rem;
    line-height: .88rem;
    text-align: center;
    color: #333;
    overflow: hidden;
    -webkit-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
