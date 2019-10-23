<template>
  <panel title="下载APP" class="panle">
    <section class="content">
      <div class="">
        14222
      </div>
      <button class="btn">立即下载</button>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss">
  html body {
    background-color: #fff;
  }
  .panle {
    margin: 0 !important;
    text-align: center;
    .btn {
      width: 200px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 30px;
      margin: 20px auto;
      border: none;
      outline: none;
      text-align: center;
      background-color: #fa5a4b;
    }
  }
</style>
