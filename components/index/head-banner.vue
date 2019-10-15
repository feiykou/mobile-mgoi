<template>
	<div class="head-swiper">
    <van-swipe :show-indicators="false" :duration="360" @change="onChange">
      <van-swipe-item v-for="(item, index) in swiperData" :key="index">
        <van-image
          fit="cover"
          :src="item.img_url[0]"
        />
      </van-swipe-item>
    </van-swipe>
   
		<div class="dot-wrap" style="padding-top: 65px;">
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
        curIndex: 0
			}
    },
    created() {
    },
    methods: {
      onChange(activeIndex){
        this.curIndex = activeIndex
      }
    },
	}
</script>

<style lang="scss" scoped>
	
	.head-swiper{
    position: relative;
		height: 100%;
		.van-swipe,.van-image{
			width: 100%;
			height: 100%;
		}
	}
  .swiper-slide{
    .m-image{
      width: 100%;
      height: 100%;
    }
  }
	
</style>
