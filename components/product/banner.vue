<template>
  <div class="banner-container">
    <van-swipe class="product-head-swiper" :show-indicators="false" @change="slideChange" ref="swiper">
      <van-swipe-item class="swipe-item" v-for="item in swiperData" :key="item.id">
        <van-image
          class="full-img"
          fit="cover"
          :src="item"
        />
      </van-swipe-item>
    </van-swipe>
    
    <div class="thumb-swiper">
      <div class="thumb-item" v-for="(item, index) in swiperData" :key="item.id" @click="thumbTap(index)" :class="{active: (thumbCurIndex == index)}">
        <van-image
          class="full-img"
          fit="cover"
          :src="item"
        />
        <div class="border-class"></div>
      </div>
    </div>
    <!--
    <van-swipe class="thumb-swiper" :loop="false" :width="158" :show-indicators="false" @change="thumbSlideChange" ref="swiperThumbs">
      <van-swipe-item class="thumb-item" v-for="(item, index) in swiperData" :key="item.id" @click="thumbTap(index)" :class="{active: (thumbCurIndex == index)}">
        <van-image
          class="full-img"
          fit="cover"
          :src="item"
        />
        <div class="border-class"></div>
      </van-swipe-item>
    </van-swipe>-->
<!--
    <div v-swiper:swiperThumb="swiperOptionThumbs" class="thumb-swiper" ref="swiperThumbs" @tap="thumbTap" @slideChange="thumbSlideChange">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in swiperData" :key="item.id" :class="{active: (thumbCurIndex == index)}" :style="{'backgroundImage': 'url('+item+')'}">
          <div class="border-class"></div>
        </div>
      </div>
    </div>-->

    <div class="button-wrap button-prev" @click="btnClick(0)" v-hover-class="'btn-hover-class'">
      <img src="./images/slider_arrow_prev.png" alt="">
    </div>
    <div class="button-wrap button-next" @click="btnClick(1)" v-hover-class="'btn-hover-class'">
      <img src="./images/slider_arrow_next.png" alt="">
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
        thumbCurIndex: 0,
        hoverClass: '',
        swiperOption: {
          spaceBetween: 10,
          navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev'
          }
        },
        swiperOptionThumbs: {
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
			}
    },
    created() {
      console.log(this)
    },
    mounted() {
      
    },
    methods: {
      slideChange(activeIndex) {
        this.curIndex = activeIndex
        this.thumbCurIndex = activeIndex
      },
      btnClick(type=0){
        let curIndex = this.curIndex
        const length = this.swiperData.length
        if(type === 0){
          curIndex = curIndex <= 0 ? length - 1 : --curIndex
        } else {
          curIndex = curIndex >= length ? 0 : ++curIndex
        }
        this.$refs.swiper.swipeTo(curIndex)
      },
      thumbTap(index=0){
        this.$refs.swiper.swipeTo(index)
        this.curIndex = index
        this.thumbCurIndex = index
      }
    },
	}
</script>

<style lang="scss" scoped>
  .full-img{
    width: 100%;
    height: 100%;
  }
  .banner-container{
    position: relative;
  }
  .thumb-swiper{
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    background-color: rgba(255,255,255,.5);
    .thumb-item{
      position: relative;
      width: 158px!important;
      height: 158px!important;
      box-sizing: border-box;
      &.active .border-class{
        opacity: 1;
      }
      .border-class{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 6px solid #333;
        opacity: 0;
        transition: opacity .2s;
      }
    }
  }
	
	.product-head-swiper{
    position: relative;
		height: 750px;
		.swipe-item{
			width: 100%;
			height: 100%;
		}
	}

  
/* 左右按钮 */
.button-wrap {
  position: absolute;
  top: 0;
  bottom: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  // background-color: rgba(170, 170, 170, .6);
  z-index: 10;
  transition: width .3s;
  &:focus{
    outline: none!important;
  }
}
.button-wrap img{
  width: 14px;
  height: 45px;
}
.button-prev{
  left: 0;
}
.button-next{
  right: 0;
}
.btn-hover-class{
  background-color: rgba(170, 170, 170, .6)!important;
  &.swiper-button-disabled{
    background-color: rgba(170, 170, 170, .2)!important;
  }
}
	
	
</style>
