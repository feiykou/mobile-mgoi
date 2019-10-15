<template>
	<div class="container box product-box">
    <thumb class="font12">
      <thumb-item><nuxt-link to="/product" hover-class="hover-class">产品列表</nuxt-link></thumb-item>
      <thumb-item>{{productData.name}}</thumb-item>
    </thumb>
		<div class="index-content">
			<banner :swiperData="productData.mobile_imgs_url"></banner>
			<div class="product-info">
			  <div class="label">新商品</div>
			  <div class="title font20">{{ productData.name }}</div>
			  <div class="price font18">￥{{ productData.price }}</div>
			  <div class="attr-wrap font12">
				<div class="item">
				  {{ productData.introduce }}
				</div>
				<div class="item">
				  <text>商品编号：</text>1111769388
				</div>
				<div class="item">
				  <text>在库状态：</text>{{ productData.stock > 0 ? '有货': '缺货' }}
				</div>
			  </div>
			</div>
			<div class="action-wrap">
				<div class="btn font18" @click="payTap" data-type="1" :data-url="productData.link_url" hover-class="btn-hover-class" :hover-stay-time='600'>
					淘宝购买
				</div>
				<div class="btn font18 btn-fff" @click="payTap" data-type="2" hover-class="btn-code-hover-class" :hover-stay-time='600'>小程序购买</div>
			</div>
			<!-- <div class="head-img">
				<image src="/static/product/5.jpg" mode="aspectFill"></image>
			</div> -->
			<!-- <div class="product-info">
				<div class="title">纪念印章</div>
				<div class="price">￥666.00</div>
				<div class="description">西关风情，时刻在</div>
				<div class="btn" @click="payTap" hover-class="btn-hover-class" :hover-stay-time='600'>即刻帮衬</div>
			</div> -->
		</div>
		<div class="defail-wrap">
			<div class="detail-tit"><text>商品详情</text></div>
			<div class="defail-info" v-html="productData.content"></div>
			<div class="relative-wrap">
				<div class="label font16 bold"><span>相关产品</span></div>
        <productList :options="rescProduct"></productList>
			</div>
		</div>
    <cate-list></cate-list>
	</div>
</template>

<script>
// import ProductList from '@/components/index/v-product-list/index.vue';

import productModel from '@/service/product'

import banner from '@/components/product/banner'
import productList from '@/components/product-list'

export default {
  layout: 'main',
  components: {
    banner,
    productList
  },
  data() {
    return {
      activeName: 'first',
      isShowTab: true,
      productData: null,
      rescProduct: [],
      currentIndex: 0,
      propVal: [],
      centerDialogVisible: false,
    };
  },
  created() {
  },
  mounted(){
  },
  async asyncData({ params, error }) {
      const id = Number(params.id)
      let [
          productData, 
          rescProduct
      ] = await Promise.all([
          productModel.getProductDetail(id),
          productModel.getRescProduct(5,5,id)
      ])
      let propVal = []
      if(productData['prop'] && productData['prop'].length > 0){
          let prop_value = productData['prop'][0]['prop_value']
          if(prop_value) propVal = prop_value.split(',')
      }
      if(!productData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
      return {
          productData,
          propVal,
          rescProduct
      }
  },
  head(){
      return this.$seo(`${this.productData.name} - 唔该`,'正处于萌芽阶段')
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

<style lang="scss" scoped>
	
	$main_color: #32a2c5;
	.product-box{
		background-color: #eee;
	}
	
	// 面包屑
	.crumb-wrap {
	  background-color: #fff;
	  border-top: 1px solid #eee;
    margin: 0 -50px;
    padding: 40px 100px;
	}

	// 产品头信息
	.product-info {
	  box-sizing: border-box;
	  display: flex;
	  flex-direction: column;
	  padding: 80px 50px 60px;
	}
	.product-info .label {
	  color: #32a2c5;
	  font-weight: bold;
	}
	.product-info .title {
	  font-weight: bold;
	  margin: 10px 0 5px;
	}
	.product-info .price {
	  margin-bottom: 40px;
	  font-weight: bold;
	  letter-spacing: -0.03em;
	}
	.product-info .description {
	  color: #737373;
	  margin-bottom: 30px;
	}
	.product-info .attr-wrap {
	  line-height: 2;
	}
	
	/* ==================
			 模态窗口
	 ==================== */
	.modal-btn{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 380px;
		height: 68px;
		margin: 10px 0;
		background-color: $main_color;
		transition: none 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
		transition-property: background-color, border-color,color;
		color: #fff;
	}
	.cu-modal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1110;
		opacity: 0;
		outline: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		-ms-transform: scale(1.185);
		transform: scale(1.185);
		backface-visibility: hidden;
		perspective: 2000px;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out 0s;
		pointer-events: none;
	}
	.cu-modal .title{
		margin-bottom: 20px;
	}
	.cu-modal.show {
		opacity: 1;
		transition-duration: 0.3s;
		-ms-transform: scale(1);
		transform: scale(1);
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}

	.cu-dialog {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 500px;
		max-width: 100%;
		padding: 30px 0;
		background-color: #f8f8f8;
	}

	
	// 返回
	.back-wrap{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 80px;
		padding-top: 10px;
		text{
			font-size: 48px;
		}
	}
	
	.relative-wrap{
    padding: 160px 50px 100px;
    background-color: #fff;
		.label{
			margin-bottom: 45px;
		}
	}


	.defail-wrap{
		background-color: #fff;
		padding-top: 40px;
		img{
			display: block;
			width: 100%;
		}
		.defail-info{
			padding: 0 50px;
		}
	}
	
	.detail-tit{
		display: flex;
		align-items: center;
		padding: 0 50px;
		height: 80px;
		border-bottom: 1px solid #f3f3f3;
		text{
			position: relative;
			display: inline-flex;
			align-items: center;
			height: 100%;
			padding: 0 20px;
			&::after{
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 4px;
				background: #000;
			}
		}
	}
	.btn-hover-class{
		border-color: #30c9e3!important;
		background-color: #30c9e3!important;
		// color: #fff;
	}
	.btn-code-hover-class{
		border-color: #ddd!important;
		background-color: #ddd!important;
	}
	.action-wrap{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 60px;
		.btn{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 654px;
			height: 100px;
			margin-bottom: 20px;
			background-color: $main_color;
			border: 1px solid $main_color;
			color: #fff;
			font-weight: bold;
			letter-spacing: 0.1em;
			transition: none 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
			transition-property: background-color, border-color,color;
		}
		.btn-fff{
			background-color: #fff;
			border-color: #fff;
			color: #000;
		}
	}
</style>
