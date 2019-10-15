<!--  -->
<template>
  <div class="img-component-container">
    <div class="bg-img" :style="{'background-image': 'url('+src+')'}"></div>
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  props: {
    src: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
  .img-component-container{
    width: 320px;
    height: 240px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    &>.bg-img{
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &>div, &>img{
      width: 100%;
      height: 100%;
    }
    &>img{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }

</style>
