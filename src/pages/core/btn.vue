<template>
  <div :class="[btnClass, cname]">
    <!-- 插槽 -->
    <solt/>
  </div> 
</template>

<script>
export default {
  props: {
    cname: {
      type: "String",
      default: ""
    } 
  },
  data () {
    return {
      btnClass: "btn"
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../css/element.scss"
  .btn {
    @include btn
  }
</style>
