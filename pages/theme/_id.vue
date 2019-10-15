<template>
	<div class="container box product-box">
    <div class="main-screen-wrap" style="padding-top: 65px; margin-top: -65px;">
      <div class="crumb-head-title van-hairline--bottom">
        <thumb class="font12">
          <thumb-item><nuxt-link to="/">首页</nuxt-link></thumb-item>
          <thumb-item><nuxt-link to="/special">猫</nuxt-link></thumb-item>
          <thumb-item>文创</thumb-item>
        </thumb>
      </div>
      <div class="main-wrap">
        <h1 class="tit font14">{{ themeData.name }}</h1>
        <div class="con" v-html="themeData.content"></div>
      </div>
      <div class="btn-box">
        <mButton type="primary" name="立即购买"></mButton>
      </div>
    </div>
    <div class="relative-product" v-if="themeData.product.length > 0">
      <div class="filter-wrap">
          <div class="product-num"><span>{{themeData.product.length}}件商品</span></div>
          <dl class="filter-list">
              <dt>排序方式：</dt>
              <dd :data-index='1'>价格高至低</dd>
              <dd :data-index='2'>价格低至高</dd>
          </dl>
      </div>
      <div class="product-list">
        <productItem v-for="(item, index) in themeData.product" :key="index" :productData="item" :simple="true"></productItem>
      </div>
    </div>
    <cate-list></cate-list>
	</div>
</template>

<script>
// import ProductList from '@/components/index/v-product-list/index.vue';

import mButton from '@/components/mgoi-button'

import themeModel from '@/service/theme'
import productModel from '@/service/product'

import banner from '@/components/product/banner'
import productList from '@/components/product-list'

export default {
  layout: 'main',
  validate({ params }) {
      return /^\d+$/.test(params.id) // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
  },
  components: {
    mButton,
    banner,
    productList
  },
  data() {
    return {
      activeName: 'first',
      isShowTab: true,
      themeData: null,
      productData: null,
      rescProduct: [],
      currentIndex: 0,
      centerDialogVisible: false,
    };
  },
  created() {
  },
  mounted(){
  },
  async asyncData({ params, error }) {
      const id = Number(params.id)
      let themeData = await themeModel.getThemeDetail(id)
      console.log(themeData)
      if(!themeData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
      return {
          themeData
      }
  },
  head(){
      return this.$seo(`- 唔该`,'正处于萌芽阶段')
  },
  validate({ params }) {
      return /^\d+$/.test(params.id) // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
  },
  methods: {   
      buyBtnTap(e){
          this.centerDialogVisible = !this.centerDialogVisible
      },
      dotTap(e){
          const index = e.currentTarget.dataset.index
          this.currentIndex = Number(index)
          this.$refs.banner.setActiveItem(this.currentIndex)
      },
      bannerChange(index){
          this.currentIndex = Number(index)
      },
      handleClick(tab, event) {
          console.log(tab, event);
      },
      payTap(e){
        const type = e.currentTarget.dataset.type
        if(type == 1){
          const url = e.currentTarget.dataset.url
          window.location.href = url
        }
        if(type == 2){
          
        }
      }
  }
}
</script>

<style lang="scss">
	
	$main_color: #32a2c5;
	

  .main-screen-wrap{
    position: relative;
    box-sizing: border-box;
    .btn-box{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      padding: 40px 50px;
      z-index: 3000;
      display: none;
    }
  }
  .main-wrap{
    margin: 0 50px;
    h1.tit{
      margin-bottom: 70px;
    }
    .con{
      p{
        line-height: 2;
        margin-bottom: 62px;
        &.txt{
          margin: 0 15px 62px;
        }
      }
      .img{
        width: 100%;
        height: 265px;
      }
    }
  }
  .relative-product{
    margin: 90px 50px 200px;
    .product-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .product-item{
        width: 310px!important;
        margin-bottom: 60px;
        &>.img{
          height: 310px!important;
        }
      }
    }
  }
</style>
