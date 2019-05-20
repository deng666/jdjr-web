<template>
  <div class="card-wrapper" v-show="show">
    <ul class="card-item">
      <li class="card-list">
        <i class="iconfont iconshouye1"></i>
        首页
      </li>
      <li class="card-list">
        <i class="iconfont iconsousuo1"></i>
        分类搜索
      </li>
      <li class="card-list">
        <i class="iconfont icongouwuche"></i>
        购物车
      </li>
      <li class="card-list">
        <i class="iconfont iconwode2"></i>
        我的
      </li>
      <li class="card-list">
        <i class="iconfont iconliulanjilu"></i>
        浏览记录
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    show: null
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  background-color: #000;
  opacity: .85;
  width: 35%;
  color: #fff;
  font-size: .56rem;
  position: absolute;
  top: 2rem;
  right: .4rem;
  .card-item {
    position: relative;
    padding-left: 1.6rem;
    .card-list {
      position: relative;
      border-bottom: 1px solid #ccc;
      .iconfont {
        position: absolute;
        left: -1.2rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .card-list:last-child {
      border-bottom: 0;
    }
  }
  .card-item::after {
    content: '';
    width:0;
    height:0;
    border-width:0 .2rem .2rem;
    border-style:solid;
    border-color:transparent transparent rgba(0,0,0,.85);/*透明 透明  灰*/
    margin:.2rem auto;
    position: absolute;
    top: -.4rem;
    right: .4rem;
  }
}

</style>
