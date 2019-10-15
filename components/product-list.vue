<template>
  <div class="product-list-box">
    <scrollSwiper>
      <div class="product-list">
        <productItem class="swiper-slide" :simple="simple" :productData="item" v-for="(item, index) in options" :key="index"></productItem>
      </div>
    </scrollSwiper>
  </div>
</template>

<script>
import productItem from './product-item';
import scrollSwiper from './scroll-swiper';

let vm = null
export default {
  props: {
    options: Array,
    simple: {
      type: Boolean,
      default: false
    }
  },
  components: {
    productItem,
    scrollSwiper
  },
  created() {
    vm = this
  },
  data(){
    return {
      curIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .no-display{
    display: none;
  }
  .product-list-box{
    position: relative;
    .product-list{
      display: flex;
    }
    .swiper-slide{
      margin-right: 30px;
    }
  }

</style>
