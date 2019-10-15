<template>
  <el-container>
    <el-aside :width="asideWidth">
        <div class="swiper-wrap">
          <slot/>
        </div>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      asideWidth: '100%'
    }
  }
}
</script>

<style lang="scss">
.swiper-wrap{
  display: flex;
}
</style>