<template>
  <div class="cell-wrap van-hairline--bottom" :class="{'no-line': noLine}" @click="clickTap">
    <nuxt-link :to="url?url:'javascript:void(0);'">{{ name }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    url: String,
    noLine: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickTap(){
      this.$emit('cellTap')
    }
  },
}
</script>

<style lang='scss' scoped>
  .cell-wrap{
    display: flex;
    align-items: center;
    height: 77px;
    padding-left: 6px;
    &:after{
      border-color: #c8c8c8;
    }
    &.no-line{
      &:after{
        border-bottom-width: 0;
        border-color: transparent;
      }
    }
  }
</style>
