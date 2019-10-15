<template>
  <div class="product-section product-list-container">
      <div class="crumb-head-title van-hairline--bottom">
        <thumb class="font12">
          <thumb-item><nuxt-link to="/">首页</nuxt-link></thumb-item>
          <thumb-item><nuxt-link to="/special">每月特辑</nuxt-link></thumb-item>
          <thumb-item>圣诞特别篇</thumb-item>
        </thumb>
      </div>
      <div class="special-content">
        <h1 class="tit">{{ specialData.name }}</h1>
        <div class="con" v-html="specialData.content">
        </div>
        <div class="relative-product" v-if="specialData.product">
          <div class="filter-wrap">
              <div class="product-num"><span>{{specialData.product.length}}件商品</span></div>
              <dl class="filter-list">
                  <dt>排序方式：</dt>
                  <dd :data-index='1'>价格高至低</dd>
                  <dd :data-index='2'>价格低至高</dd>
              </dl>
          </div>
          <div class="product-list">
            <productItem v-for="(item, index) in specialData.product" :key="index" :productData="item" :simple="true"></productItem>
          </div>
        </div>
      </div>
      <cate-list></cate-list>
  </div>
</template>

<script>
import specialModel from '@/service/special'
import productItem from '@/components/product-item'
export default {
    layout: 'main',
    data(){
        return {
          
        }
    },
    components: {
     productItem
    },
    async asyncData({ app, params, store, error }) {
      const id = Number(params.id)
      let specialData = await specialModel.getSpecialDetail(id)
      console.log(specialData)
      if(!specialData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
      return {
          specialData
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

<style lang="scss" >
    .special-content{
      margin: 0 50px;
      h1.tit{
        margin-bottom: 70px;
      }
      .con{
        p{
          line-height: 2;
          margin-bottom: 62px;
          &.txt{
            margin: 0 15px 62px;
          }
        }
        .img{
          width: 100%;
          height: 265px;
        }
      }
    }

    .relative-product{
      margin-top: 100px;
    }
    .product-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .product-item{
        width: 310px!important;
        margin-bottom: 60px;
        &>.img{
          height: 310px!important;
        }
      }
    }
</style>
