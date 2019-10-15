<template>
  <div class="container index-container">
    <Header class="header-box" :curNavIndex="0" :show="isShowTab"/>
    <van-swipe class="swiper-box" :show-indicators="false" :duration="400" :loop="false" @change="indexChange" vertical>
      <van-swipe-item>
        <headSwiper :swiperData="bannerData"></headSwiper>
      </van-swipe-item>
      <van-swipe-item class="index-swiper-slide">
        <theme :swiperData="rescThemeData"></theme>
      </van-swipe-item>
      <van-swipe-item class="index-swiper-slide">
        <special :options="rescThemeData"></special>
      </van-swipe-item>
      <van-swipe-item class="index-swiper-slide">
        <products :rescProduct="rescProduct"></products>
      </van-swipe-item>
      <van-swipe-item class="index-swiper-slide">
        <column :columnData="columnData"></column>
      </van-swipe-item>
      <van-swipe-item class="index-swiper-slide">
        <company></company>
      </van-swipe-item>
      <van-swipe-item class="index-swiper-slide">
        <bottom></bottom>
      </van-swipe-item>
    </van-swipe>
    <div class="line-wrap">
      <div class="line" :style="{transform: `translate3d(0px, 0px, 0px) scaleX(1) scaleY(${leftBarScale})`}"></div>
    </div>
    <cate-list></cate-list>
  </div>
</template>

<script>
import headSwiper from '@/components/index/head-banner.vue'
import products from '@/components/index/product.vue'
import bottom from '@/components/index/bottom.vue'
import column from '@/components/index/column.vue'
import company from '@/components/index/company.vue'
import theme from '@/components/index/theme.vue'
import gift from '@/components/index/gift.vue'
import special from '@/components/index/special.vue'

import api from '@/service/index'


export default {
  components: {
    headSwiper,
    theme,
    products,
    column,
    company,
    bottom,
    gift,
    special
  },
  data(){
    return {
      isShowTab: true,  // 是否展示头部
      leftBarScale: 0,
      curIndex: 0,
      bannerLen: 7,
      bannerData: [],
      rescThemeData: [],
      rescProduct: {},
      giftCateData: [],
      scondCateData: [],
      columnData: []
    }
  },
  created() {
    this.letBaranimate()
  },
  fetch({ store }){
      return store.dispatch('cate/getCategoryCate')
  },
  async asyncData ({ error }) {
      let [
          bannerData, 
          rescThemeData, 
          newsProductData, 
          resProductData,
          columnData,
          giftCateData
      ] = await Promise.all([
          api.getIndexBanner(), 
          api.getRescTheme(),
          api.getNewsProduct(),
          api.getRescProduct(),
          api.getColumn(),
          api.getGiftCate(98)
      ])
      console.log(bannerData)
      if(!bannerData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
      let rescProduct = {
        productData: newsProductData,
        resProductData: resProductData
      }
      console.log(rescProduct)
      return { 
          bannerData, 
          rescThemeData, 
          rescProduct,
          newsProductData, 
          columnData,
          giftCateData
      }
  },
  methods: {
    letBaranimate(){
      let curIndex = this.curIndex+1,
        scale = 1 / this.bannerLen.toFixed(2),
        leftBarScale = Math.floor(scale * 100 * curIndex) / 100

      if(curIndex == this.bannerLen){
        leftBarScale = 1
      }
      this.leftBarScale = leftBarScale
    },
    indexChange(activeIndex){
      this.curIndex = activeIndex
      this.letBaranimate()
    }
  },
}
</script>

<style lang="scss">
.index-container{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

.swiper-box{
  flex: 1;
}

.swiper-wrapper{
  width: 750px;
  height: 100%;
}
.index-swiper-slide{
  overflow: hidden;
  padding-top: 65px;
}
.all-screen-slide{
  padding-top: 0;
}

// 轮播导航线
.line-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 24px;
  z-index: 10;
  width: 2px;
  height: 580px;
  margin: auto 0;
  background-color: #d9d9d9;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  .line{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // background: url('/images/icon/line@icon.png') no-repeat;
    background-size: 100% 100%;
    background-color: #000;
    transform-origin: left top;
    transform: scale(0);
    transition-duration: 300ms;
    // transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(0.5);
  }
}

</style>
