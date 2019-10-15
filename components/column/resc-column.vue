<template>
  <van-swipe class="head-swiper" :show-indicators="false">
    <van-swipe-item class="swipe-item" v-for="(item, index) in swiperData" :key="item.id">
      <van-image
        class="img"
        fit="cover"
        :src="item.mobile_imgs_url[0]"
      />
      <div class="info-wrap">
        <div class="title" :class="index == 0?'font16':''">{{item.name}}</div>
        <div class="description" :class="index == 0?'':'font12'">{{item.introduce}}</div>
      </div>
    </van-swipe-item>
    <div class="dot-wrap" v-if="swiperData.length > 1">
			<div v-for="(item, index) in swiperData" :key="index" :class="{active: (index == curIndex)}"></div>
		</div>
  </van-swipe>
</template>

<script>
	export default {
		props: {
			swiperData: {
				type: Array
			},
    },
		data(){
			return {
        curIndex: 0
			}
    }
	}
</script>

<style lang="scss" scoped>
	
	.head-swiper{
    position: relative;
		height: 426px;
		.swipe-item,.img{
			width: 100%;
			height: 100%;
		}
	}


  .info-wrap{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 30px 50px;
		background-color: rgba($color: #000000, $alpha: 0.3);
		color: #fff;
		.title{
			color: #fff;
		}
		.description{
			display: block;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1; /*第三行显示 ...*/
			-webkit-box-orient: vertical;
			overflow: hidden;
			color: #fff;
		}
	}
	
	
</style>
