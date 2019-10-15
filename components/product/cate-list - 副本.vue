<!--  -->
<template>
  <div class="cate-list-box set-size">
    <van-popup 
      class="drawer-box"
      position="left"
      :style="{ height: '100%', width: '70%'}"
      :overlay="false"
      :duration="0.2"
      v-model="show">
      
      <div class="cate-wrap">
        <div class="cate-list-wrap" v-for="(item, index) in categoryCate" :key="index">
          <m-cell v-if="!item.sub" :name="item.name"></m-cell>
          <div class="group-wrap" v-if="item.sub">
            <div class="divider-tit font15 bold"><nuxt-link :to="item.link_url">{{ item.name }}</nuxt-link></div>
            <div v-for="(sItem, sIndex) in item.sub" :key="sIndex">
              <m-cell :url="sItem.link_url" v-if="!sItem.sub" :name="sItem.name" :noLine="sIndex===Object.keys(item.sub).pop()"></m-cell>
              <van-collapse v-if="sItem.sub" class="cate-collapse-wrap" v-model="activeNames" @change="colChange">
                <van-collapse-item class="cate-collapse-item" :title="sItem.name" :name="sIndex">
                  <div class="right-icon font15" slot="right-icon"><i class="iconfont add">&#xe61c;</i><i class="iconfont reduce">&#xe61d;</i></div>
                  <m-cell v-for="(ssItem,ssIndex) in sItem.sub" :url="ssItem.link_url" :noLine="ssIndex===Object.keys(sItem.sub).pop()" :key="ssIndex" :name="'- ' + ssItem.name" v-hover-class="'hover-class'"></m-cell>
                </van-collapse-item>
              </van-collapse>
            </div>
            
          </div>
          
        </div>
        <div class="group-wrap web-nav-wrap">
          <m-cell name="唔该专栏"></m-cell>
          <m-cell name="唔该新闻"></m-cell>
          <m-cell name="唔该招聘" :noLine="true"></m-cell>
        </div>
        
      </div>
      <div class="search-wrap" v-show="show">
        <van-search placeholder="请输入搜索关键词" v-model="searchVal" right-icon="search" left-icon="none" />
      </div>
    </van-popup>
    <div class="cate-list-nav" @click="navClick">
      <div class="nav-wrap">
        <span class="icon font24" v-show="!show">
          <i class="iconfont">&#xe654;</i>
        </span>
      </div>
    </div>

    <div class="mask-layout" hover-class="hover-class" :class="[show?'start-to':'leave-to']" @click="maskClick">
      <span class="close">
        <i class="iconfont">&#xe65c;</i>
      </span>
    </div>
  </div>
</template>

<script>

import mCell from '../mgoi-cell'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      show: false,
      searchVal: '',
      activeNames: [],
      cateData: []
    }
  },
  components: {
    mCell
  },
  computed: {
      ...mapState('cate', ['categoryCate'])
  },
  methods: {
    navClick(){
      this.show = !this.show;
      console.log(this.show)
    },
    maskClick(){
      this.show = !this.show
      console.log(this.show)
    },
    colChange(e) {
      console.log(e)
    }
  },
}
</script>

<style lang='scss' >
  @mixin font-dpr($font-size: 12px){
    font-size: $font-size!important;
    [data-dpr="2"] & {
        font-size: $font-size * 2!important;
    }

    [data-dpr="3"] & {
        font-size: $font-size * 3!important;
    }
  }

  // 下拉动画 
  .van-collapse-item__wrapper{
    transition: height .2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  // 下拉icon
  .right-icon{
    transition: transform .1s cubic-bezier(0.215, 0.61, 0.355, 1);
    .reduce{
      display: none;
    }
    .add{
      display: block;
    }
  }
  .van-collapse-item__title--expanded{
    background-color: #000!important;
    color: #fff;
    padding: 0 15px!important;
    transition: padding .2s cubic-bezier(0.215, 0.61, 0.355, 1);
    .right-icon{
      transform: rotate(180deg);
      transition: transform .2s cubic-bezier(0.215, 0.61, 0.355, 1);
      .add{
        display: none;
      }
      .reduce{
        display: block;
      }
    }
  }

  .set-size{
    .van-cell,.van-cell__title,.van-collapse-item__content{
      @include font-dpr(12px);
    }
  }

  .van-collapse.van-hairline--top-bottom::after{
    display: none;
  }

  .cate-collapse-wrap{
    .cell-wrap{
      padding-left: 20px;
    }
    .van-cell__title{
      display: flex;
      align-items: center;
      height: 77px;
    }
    .van-cell{
      align-items: center;
      background-color: transparent;
      padding: 0 0 0 6px;  
      transition: padding .2s cubic-bezier(0.215, 0.61, 0.355, 1);    
      
    }
    .van-cell:not(:last-child)::after{
      display: none;
    }
    .van-collapse-item__content{
      background-color: transparent!important;
      padding: 0;
      color: inherit;
      // margin-top: -10px;
    }
  }

  .web-nav-wrap{
    margin-top: 33px;
    padding-top: 16px;
    border-top: 4px solid #000;
  }

  // 解决cell最底部的线，去掉
  .cate-list-wrap:nth-child(2){
    &>.cell-wrap{
      &::after{
        display: none;
      }
    }
  }

  .search-wrap{
    height: 100px;
    flex: 0 0 100px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 50px;
    background-color: rgba(0,0,0,.6);
    z-index: 30003;
    input::-ms-input-placeholder{text-align: center;}
    input::-webkit-input-placeholder{text-align: center;}
    .van-search{
      padding: 0;
      border-radius: 30px;
      overflow: hidden;
    }
    input{
      height: 60px;
    }
    .van-cell{
      display: flex;
      align-items: center;
      padding-top: 0;
      padding-right: 20px;
      padding-bottom: 0;
    }
    .van-icon-none{
      font-size: 0;
    }
    .van-icon-search{
      font-size: 30px;
    }
  }
  

  .divider-tit{
    display: flex;
    align-items: center;
    line-height: 1;
    padding-left: 6px;
    margin: 33px 0 16px;
    border-color: #000;
    border-style: solid;
    border-width: 0;
    &:after{
      content: "";
      flex: 1;
      border-width: 4px 0 0;
      border-color: inherit;
      border-style: inherit;
      margin-left: 25px;
    }
  }

  .drawer-box{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 96px 0 0;
    z-index: 30002!important;
    background-color: #f0f0f0;
    .cate-wrap{
      flex: 1;
      padding: 0 40px 80px;
      overflow-y: scroll;
    }
  }

  .mask-layout{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 30001;
    background-color: rgba(0,0,0,.3);
    height: 0;
    transition: all .3s;
    .close{
      position: absolute;
      right: 0;
      bottom: 160px;
      display: flex;
      justify-content: center;
      width: 30%;
      font-size: 80px;
      color: #fff;
      transform: scale(0.5);
    }
    &.leave-to{
      .close{
        transform: rotate(180deg) scale(0.5);
        transition: transform .4s cubic-bezier(.215,.61,.355,1);
      }
    }
    &.start-to{
      .close{
        transform: rotate(-180deg) scale(1);
        transition: transform .4s cubic-bezier(.215,.61,.355,1);
      }
    }
  }

  .leave-to{
    animation:leave-to .5s cubic-bezier(.215,.61,.355,1);
    animation-fill-mode: forwards;
  }
  .start-to{
    animation:start-to .5s cubic-bezier(.215,.61,.355,1);
    animation-fill-mode: forwards;
  }

  .cate-list-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    .nav-wrap{
      padding: 20px 0 10px;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 72px;
        height: 90px;
        background-color: #313131;
        color: #fff;
        border-radius: 6px;
      }
    }
  }

  @keyframes leave-to {
    from { opacity: 1;}
    to { opacity: 0; height: 0;}
  }
  @keyframes start-to {
    from { opacity: 0; height: 100%;}
    to { opacity: 1; height: 100%;}
  }
</style>
