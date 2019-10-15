<template>
  <div class="theme-box">
    <div class="crumb-head-title van-hairline--bottom">
      <thumb class="font12">
        <thumb-item><nuxt-link to="/">首页</nuxt-link></thumb-item>
        <thumb-item><nuxt-link to="/special">猫</nuxt-link></thumb-item>
        <thumb-item>文创</thumb-item>
      </thumb>
    </div>
    <div class="theme-wrap">
        <div class="main-tit font16 bold">文创主题</div>
        <ul class="theme-list">
          <li v-for="(item, index) in themeListData" :key="index">
            <van-image
              class="img"
              fit="cover"
              :src="item.mobile_imgs_url[0]"
            />
            <div class="tit-desc">
              <p class="tit font14 bold">{{ item.name }}</p>
              <p class="desc">{{ item.description }}</p>
            </div>
            <mButton :to="`theme/${item.id}`"></mButton>
          </li>
        </ul>
    </div>
    <cate-list></cate-list>
  </div>
</template>

<script>

import mButton from '@/components/mgoi-button'

import themeModel from '@/service/theme'
export default {
    layout: 'main',
    watchQuery: ['id'],
    data(){
        return {
            catData: [],
            dogData: [],
            crumbArr: [{name: '产品分类', id: 0}],
            curName: '产品分类',
            isShowTab: true
        }
    },
    components: {
        mButton
    },
    created(){
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      const cate_id = query.id || 0
      let themeListData = await themeModel.getThemeList(cate_id)
      if(!themeListData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
      return {
        themeListData
      }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

    .theme-wrap{
      margin: 0 50px 100px;
    }
    .main-tit{
      text-align: center;
      margin-bottom: 90px;
    }
    .theme-list{
      li{
        margin-bottom: 100px;
      }
      .img{
        height: 380px;
      }
      .tit-desc{
        margin: 50px 20px;
      }
      .desc{
        line-height: 2;
        margin-top: 10px;
      }
    }
   
</style>
