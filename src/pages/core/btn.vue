<template>
  <div :class="[btnClass, cname]">
    <!-- 插槽 -->
    <slot/>
  </div> 
</template>

<script>
export default {
  // 属性传递
  props: {
    cname: {
      type: String, // 类型
      default: ""  // 默认值
    } 
  },
  data () {
    return {
      btnClass: 'btn'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/element.scss";
  .btn {
    @include btn
  }
</style>
