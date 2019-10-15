<template>
	<div class="index-section-wrap cate-section-wrap">
		<!-- <div class="title-wrap font16">分类</div> -->
		<div class="section-wrap">
      <van-swipe class="head-swiper" :duration="200" :show-indicators="false" @change="slideChange">
        <van-swipe-item v-for="(item, index) in gridGroup" :key="index">
          <div class="cate-wrap" v-for="(sonItem, sonIndex) in item" :key="sonIndex">
            <div class="name title font16">{{sonItem.name}}</div>
            <div class="con-product">
              <div class="content font12">{{sonItem.introduce}}</div>
              <div class="product-list" v-if="sonItem.product_cate">
                <div class="item" v-for="(pItem, pIndex) in sonItem.product_cate" :key="pIndex">
                  <img :src="pItem.main_img_url[0]"/>
                </div>
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
     
      <div class="dot-wrap">
        <div v-for="(item, index) in gridGroup.length" :key="index" :class="{active: (index == curIndex)}"></div>
      </div>
		</div>
	</div>

</template>

<script>
	// import { mapGetters } from 'vuex'
	export default {
		props: {
			giftCateData: Array
		},
		data(){
			return {	
				columnNum: 2,
				curIndex: 0
			}
    },
    created() {
    },
		methods: {
			slideChange(activeIndex){
        this.curIndex = activeIndex
      }
		},
		computed: {
			gridGroup() {
				let group = []
				let groupItem = []
				this.giftCateData && this.giftCateData.forEach((item, index) => {
					groupItem.push(item)
					if (index % this.columnNum === this.columnNum - 1) {
						group.push(groupItem)
						groupItem = []
					}
				})
				if (groupItem.length > 0) {
					if (this.columnNum > groupItem.length) {
						for (let i = 0, length = groupItem.length; i < this.columnNum - length; i++) {
							groupItem.push({
								seize: true
							})
						}
					}
					group.push(groupItem)
				}
				groupItem = null
				console.log(group)
				return group
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	/* 公共public */
	.index-section-wrap{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
	}
	.title-wrap{
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		height: 100px;
		flex: 0 0 100px;
		padding-bottom: 24px;
		font-weight: bold;
	}
	.section-wrap{
		flex: 1;
		padding: 50px 46px 28px 64px;
		background-color: #fff;
		.name{
			font-weight: bold;
		}
	}
  /* 公共public end */
  
  
	
  .cate-section-wrap{
    .head-swiper{
      width: 100%
    }
     .van-swipe-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .cate-wrap:nth-child(1){
        margin-bottom: 150px;
      }
    }
  }
 
	.cate-wrap{
		&:nth-child(1){
      margin-bottom: 80px;
    }
		.title{
			margin-bottom: 40px;
		}
		.con-product{
			display: flex;
		}
    .content{
      flex: 1;
      line-height: 1.6;
    }
	}
	
	// 产品列表
	.product-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		flex: 0 0 280px;
		height: 245px;
		.item{
			width: 125px;
			height: 125px;
      margin: 0 0 5px 5px;
      border-bottom: 0;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	
	
	// 分类切换
	.cate-swiper-container{
	    height: 100%!important;
	}
	
	.screen-sm-max{
		.product-list{
			display: none;
		}
	}
	
</style>
