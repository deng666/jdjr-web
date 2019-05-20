<template>
  <div :class="$style.header">
    <span :class="$style.left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <btn :class="$style.btnDowload">APP下载</btn>
  </div>
</template>

<script>
import btn from '@/pages/core/btn'
export default {
  components: {
    btn
  }
}
</script>

<style lang="scss" scoped module>
  .header {
    height: 2rem;
    line-height: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #666;
    font-size: .56rem;
    background-color: #fff;
    margin-bottom: .4rem;
    z-index: 100;
    .left {
      font-size: .56rem;
      height: .6rem;
      margin: .35rem 0 0 .36rem;
    }
    .btnDowload {
      float: right;
      font-size: .48rem;
      border-width: 0;
      height: 1.12rem;
      line-height: 1.12rem;
      min-width: 2.4rem;
      border-radius: .8rem;
      margin: .36rem .58rem 0 0;
      color: #fff;
      padding: 0 .4rem;
    }
  }
</style>
