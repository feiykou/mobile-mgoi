<!--  -->
<template>
  <div class="m-crumb-item">
    <slot></slot>
    <i class="iconfont">&#xe628;</i>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
  .m-crumb-item{
      cursor: pointer;
      i.iconfont{
        margin: 0 10px;
      }
      &:last-child{
        font-weight: bold;
        i{
          display: none;
        }
      }
  }
</style>
