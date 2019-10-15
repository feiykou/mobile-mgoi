<template>
  <div class="mobile-container">
    <Header class="header-box" :curNavIndex="0" :show="true" style="height:65px;"/>
    <transition name="slide-fade" appear :duration="2000">
      <nuxt />
    </transition>
    <!-- 页面底部 -->
		<Footer></Footer>
  </div>
</template>

<script>
export default {
    components: {
    }
}
</script>

<style lang="scss">
  .mobile-container{
    overflow: hidden;
  }
</style>
