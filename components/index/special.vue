<template>
  <div class="special-box">
    <div class="special-name font16">每月特辑</div>
    <scrollSwiper>
      <div class="special-list">
        <div class="item">
          <van-image
            class="img"
            fit="cover"
            src="http://www.mgoi.net/upload/20190929/7648c4cb955ebfa5cbb7ca5e0ee0385e.jpg"
          />
          <div class="title">粤剧系列礼盒</div>
          <p class="desc">早茶</p>
        </div>
        <div class="item">
          <van-image
            class="img"
            fit="cover"
            src="http://www.mgoi.net/upload/20190929/7648c4cb955ebfa5cbb7ca5e0ee0385e.jpg"
          />
          <div class="title">粤剧系列礼盒</div>
          <p class="desc">粤剧</p>
        </div>
        <div class="item">
          <van-image
            class="img"
            fit="cover"
            src="http://www.mgoi.net/upload/20190929/7648c4cb955ebfa5cbb7ca5e0ee0385e.jpg"
          />
          <div class="title">粤剧系列礼盒</div>
          <p class="desc">粤语</p>
        </div>
      </div>
    </scrollSwiper>
  </div>
</template>

<script>
import scrollSwiper from '../scroll-swiper';

export default {
  props: {
    options: Array
  },
  components: {
    scrollSwiper
  },
  data(){
    return {
      curIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .special-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 20px 0 20px 64px;
    box-sizing: border-box;
  }
  .special-name{
    margin-bottom: 50px;
  }
  .special-list{
    display: flex;
    padding-bottom: 30px;
    .item{
      margin-right: 60px;
      .img{
        width: 450px;
        height: 620px;
        vertical-align: middle;
      }
      .title{
        margin-top: 25px;
        font-weight: bold;
      }
      .desc{
        color: #c1c1c1;
        margin-top: 5px;
      }
    }
  }
</style>
