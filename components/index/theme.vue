<template>
  <div class="head-swiper">
    <van-swipe :show-indicators="false" @change="onChange">
      <van-swipe-item class="swiper-item">
        <ul class="list">
					<li v-for="(item, index) in swiperData" :key="index">
            <van-image
              class="img"
              fit="cover"
              :src="item.mobile_imgs_url[0]"
            />
          </li>
				</ul>
      </van-swipe-item>
    </van-swipe>
   
		<div class="dot-wrap">
			<div v-for="(item, index) in swiperData" :key="index" :class="{active: (index == curIndex)}"></div>
		</div>
	</div>
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
        curIndex: 0,
			}
    },
    methods: {
      onChange(activeIndex){
        this.curIndex = activeIndex
      }
    }
	}
</script>

<style lang="scss">
	// 公共代码 head-banner
	.head-swiper{
    position: relative;
		height: 100%;
		.swiper-item,.van-swipe,.img{
			width: 100%;
			height: 100%;
		}
	}
  .list{
		display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
		height: 100%;
		&>li{
      box-sizing: border-box;
			height: 50%;
			width: 373px;
      .img{
        width: 100%;
        height: 100%;
      }
      &:nth-child(1),&:nth-child(2){
        padding-bottom: 2px;
      }
      &:nth-child(3),&:nth-child(4){
        padding-top: 2px;
      }
		}
	}
</style>
