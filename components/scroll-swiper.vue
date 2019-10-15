<template>
  <div>
    <div class="swiper-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
   return {}
  }
}
</script>

<style lang="scss">
.swiper-wrap{
  display: flex;
  overflow-x: scroll;
}

.swiper-wrap::-webkit-scrollbar {
  width:0px;
}
</style>