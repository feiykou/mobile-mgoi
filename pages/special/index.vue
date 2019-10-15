<template>
  <div class="product-section product-list-container">
      <div class="crumb-head-title van-hairline--bottom">
        <thumb class="font12">
          <thumb-item><nuxt-link to="/">首页</nuxt-link></thumb-item>
          <thumb-item>上新产品</thumb-item>
        </thumb>
      </div>
      <div class="list-wrap">
        <div class="item" v-hover-class="'hover-class'" v-for="(item, index) in albumListData" :key="index">
          <nuxt-link :to="`/special/${item.id}`">
          <van-image
            class="img"
            fit="cover"
            :src="item.mobile_imgs_url[0]"
          />
          <div class="tit-desc">
            <p class="tit font20 bold">{{ item.name }}</p>
            <p class="desc">{{ item.description }}</p>
          </div>
          </nuxt-link>
        </div>
      </div>
      <cate-list></cate-list>
  </div>
</template>

<script>
import specialModel from '@/service/special'
export default {
    watchQuery: ['cate_id'],
    layout: 'main',
    data(){
        return {
          albumListData: []
        }
    },
    components: {
     
    },
    async asyncData({ app, query, store, error }) {
      const cate_id = query.id || 0
      let albumListData = await specialModel.getAlbumList(cate_id)
      return {
        albumListData
      }
    },
    fetch({ store, query }){
    
    },
    head(){
        return this.$seo('产品列表 - 唔该','正处于萌芽阶段')
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
    .list-wrap{
      margin: 77px 50px 0;
      .item{
        margin: 0 27px 59px;
        &>a{
          display: flex;
        }
        .img{
          width: 300px;
          flex: 0 0 300px;
          height: 400px;
        }
        .tit-desc{
          flex: 1;
          padding: 35px 0 0 30px; 
          .desc{
            margin-top: 20px;
            line-height: 2;
            text-indent: 1em;
            color: #585858;
          }
        }
      }
    }
   
</style>
