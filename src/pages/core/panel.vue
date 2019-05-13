<template lang="html">
  <section :class="[panelClass,cname]">
    <h4>
      -{{ title }}-
      <span class="right-text" v-if="isShowCheck">
        {{ rightText }}
        <i class="iconfont icondayuhao"></i>
      </span>
    </h4>
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: ""
    },
    isShowCheck: {
      type: Boolean,
      default: false
    },
    rightText: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      panelClass: "panel"
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/css/element.scss";
  .panel {
    @include panel;
  }
  .right-text {
    position: absolute;
    right: .2rem;
    color: #999;
    font-size: .26rem;
    font-weight: normal;
    .iconfont {
      font-size: .24rem;
    }
  }
</style>
