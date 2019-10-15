<!--  -->
<template>
  <div class="crumb-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
  .crumb-wrap{
    display: flex;
    height: 70px;
    align-items: center;
    margin: 0 50px;
    .crumb-item{
      &:nth-last-child(1){
        color: red;
      }
    }
  }
</style>
