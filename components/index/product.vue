<template>
	<div class="index-section-wrap" @touchstart="touchstartTap" @touchend="touchendTap">
		<div class="section-wrap">
			<div class="item-wrap">
				<div class="name">推荐<slot/></div>
				<productList :options="rescProduct.productData" dotType="none"></productList>
				<!-- <feiy-grid v-if="!rescLoading" :options="productData" columnNum="3" :animate="productAnimate" source="source1" class="grid-wrap resc-grid-wrap" @click="productTap"></feiy-grid> -->
				<!-- <loading class="loading" className="index-class" v-else width="190px" height="190px" :count="3"></loading> -->
			</div>
			<div class="item-wrap">
				<div class="name">上新</div>
				<productList :options="rescProduct.resProductData" dotType="none"></productList>
				<!-- <feiy-grid v-if="!newsLoading" :options="resProductData" :columnNum="getScreenClass.indexOf('screen-sm-max')!=-1 ? 6 : 3" :animate="productAnimate" source="source1" class="grid-wrap" @click="productTap"></feiy-grid>
				<loading class="loading" className="index-class" v-else width="190px" height="190px" :count="getScreenClass.indexOf('screen-sm-max')!=-1 ? 3 : 6"></loading> -->
			</div>
		</div>
	</div>
</template>

<script>
	import productList from '@/components/product-list'
	// import loading from '../skeleton/product.vue'
	
	// import { mapGetters } from 'vuex'
	// // 服务器数据
	// import { index } from '@/service/index.js'
	
	// const indexModel = new index()
	
	export default {
		components: {
			productList
		},
		props: {
      rescProduct: {
        type: Object,
        default: function(){
          return {
            productData: [],
            resProductData: []
          }
        }
      },
			isTrigger: {
				type: Number,
				default: 0
			}
		},
		data(){
			return {
				productAnimate: '',
				rescLoading: true,
        newsLoading: true,
				data1: [{
					img_url: '/static/big1.png',
					text: 'Grid'
				},
				{
					img_url: '/static/big1.png',
					text: 'Grid'
				},
				{
					img_url: '/static/p1.png',
					text: 'Grid'
				},{
					img_url: '/static/big1.png',
					text: 'Grid'
				},{
					img_url: '/static/big1.png',
					text: 'Grid'
				},{
					img_url: '/static/p1.png',
					text: 'Grid'
				}]
			}
		},
		watch:{
			isTrigger(val){
			
			}
		},
		computed:{
		},
		methods: {
			// getRescProduct(){
			// 	indexModel.getRescProduct()
			// 		.then(res => {
			// 			this.resProductData = res
			// 			setTimeout(() => {
			// 				this.rescLoading = false
			// 			},500)
			// 		})
			// },
			// getNewsProduct(){
			// 	indexModel.getNewsProduct()
			// 		.then(res => {
			// 			this.productData = res
			// 			setTimeout(() => {
			// 				this.newsLoading = false
			// 			},500)
			// 		})
			// },
			productTap(params){
				if(params.id){
					uni.navigateTo({
						url: '/pages/product/product?id='+params.id,
						animationType: 'zoom-out',
						animationDuration: 2000
					})
				}
			},
			touchstartTap(){
				this.productAnimate = 'animate1'
			},
			touchendTap(){
				this.productAnimate = ''
				// this.productAnimate = 'animate1'
				// productModel.getProductByCateId(cate_id)
				// 	.then(res => {
				// 		setTimeout(() => {
				// 			this.loading = false
				// 			this.productData = res
				// 			setTimeout(() => {
				// 				this.productAnimate = ''
				// 			},1000)
				// 		},500)
				// 	})
			}
		},
	}
</script>

<style lang="scss" scoped>
	
	.loading{
		margin: 5px 0 20px;
	}
	
	.index-section-wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		height: 100%;
	}

	.index-section-wrap.screen-sm-max{
		.news-wrap{
			padding-top: 80px;
		}
	}
	.section-wrap{
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
		padding: 20px 0 20px 64px;
    background-color: #fff;
    .item-wrap:nth-child(1){
      margin-bottom: 40px;
    }
		.name{
			margin-bottom: 40px;
		}
	}
	
	.news-wrap{
		padding-top: 30px;
		margin-top: 20px;
		margin-bottom: -50px;
	}
	
	.grid-wrap{
		width: 100%;
		box-sizing: border-box;
		margin-top: 10px;
	}

</style>
