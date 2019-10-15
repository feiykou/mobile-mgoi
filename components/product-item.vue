<template>
  <div class="product-item">
    <div class="img" hover-class="hover-class">
      <nuxt-link :to="'/product/'+productData.id"><img :src="productData.main_img_url[0]"></nuxt-link>
    </div>
    <p class="tit font12" hover-class="hover-class">{{ productData.name }}</p>
    <!-- <p class="label font12" v-if="simple">{{ productData.name_desc }}</p> -->
    <p class="price font12">￥{{ productData.price }} 蚊</p>
    <div class="btn btn-animate btn-wrap font12" v-if="simple"><nuxt-link :to="'/product/'+productData.id">立即购买</nuxt-link></div>
  </div>
</template>
<script>
export default {
  props: {
    productData: Object,
    simple: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

  // 按钮
  .btn-wrap{
    margin-top: 18px;
  }

  .product-item {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 220px;
    -webkit-transition: none .2s cubic-bezier(.215,.61,.355,1);
    transition: none .2s cubic-bezier(.215,.61,.355,1);
    -webkit-transition-property: opacity;
    transition-property: opacity;
    span{
        font-weight: bold;
        position: relative;
        z-index: 1;
    }
    .img{
        width: 100%;
        height: 220px;
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .tit{
      height: 72px;
      line-height: 1.4;
    }
    .price{
      margin-top: 6px;
      font-weight: bold;
    }
  }
</style>