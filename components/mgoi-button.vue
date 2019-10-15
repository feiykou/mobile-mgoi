<!--  -->
<template>
  <div class="btn-wrap van-hairline--surround" :class="[type]">
    <nuxt-link v-if="to" :to="to">{{ name }}</nuxt-link>
    <span v-else>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    to: String,
    type: {
      type: String,
      default: 'black'
    },
    name: {
      type: String,
      default: '查看更多'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
  .btn-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 69px;
    &::after{
      border-radius: 12px;
    }
    &.black{
      color: #000;
      &::after{
        border-color: #626262;
      }
    }
    &.primary{
      color: #32a2c5;
      &::after{
        border-color: #32a2c5;
      }
    }
  }
</style>
