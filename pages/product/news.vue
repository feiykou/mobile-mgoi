<template>
  <div class="product-section product-list-container">
      <div class="crumb-head-title van-hairline--bottom">
        <thumb class="font12">
          <thumb-item><nuxt-link to="/">首页</nuxt-link></thumb-item>
          <thumb-item>上新产品</thumb-item>
        </thumb>
      </div>
      <div class="product-wrap">
          <div class="filter-wrap">
              <div class="product-num font20"><span v-if="productsData"><i class="bold font24">{{productsData.length}}</i> 件商品</span></div>
              <dl class="filter-list">
                  <dt>排序方式：</dt>
                  <dd :class="{active: curPriceIndex == 1}" @click="priceSort" :data-index='1'>价格高至低</dd>
                  <dd :class="{active: curPriceIndex == 2}" @click="priceSort" :data-index='2'>价格低至高</dd>
              </dl>
          </div>
          
          <div class="product-list">
              <div class="product-item-wrap" v-if="productsData">
                  <productItem class="product-item" :simple="true" :productData="item" v-for="(item, index) in productsData" :key="index"></productItem>
              </div>
              <ProductListLoading v-else></ProductListLoading>
          </div>
          
      </div>
      <cate-list></cate-list>
  </div>
</template>

<script>
import ProductListLoading from '@/components/skeleton/product-list-loading'
import productModel from '@/service/product'

import { mapState } from 'vuex'
import productItem from '@/components/product-item';
import cateList from '@/components/product/cate-list';

export default {
    layout: 'main',
    data(){
        return {
            productsData: null,
            curPriceIndex: 0
        }
    },
    components: {
      productItem,
      ProductListLoading,
    },
    async asyncData({ app, query, store, error }) {
        const {id, name} = query
        let productsData = null
        productsData = await productModel.getProductsByCate(id)

        return {
            productsData: productsData.data
        }
    },
    fetch({ store, query }){
      console.log(store)
        // const id = query.id || 0
        // store.dispatch('cate/getProductCate')
        // store.dispatch('cate/getParentCate', id)
    },
    head(){
        return this.$seo('产品列表 - 唔该','正处于萌芽阶段')
    },
    methods: {
        priceSort(e){
            const index = e.currentTarget.dataset.index
            this.curPriceIndex = index
            this.getProductsByCate(1, index)
        },
      
        _loadData(id=0){
            this.getProductsByCate(id)
        },

        getProductsByCate(cateid=0, sort=0){
            this.productsData = null
            productModel.getProductsByCate(cateid,sort)
                .then(res => {
                    setTimeout(() => {
                        this.productsData = res.data
                    }, 600)
                })
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .head-title{
      margin: 28px 50px 72px;
      &:after{
        border-color: #626262;
      }
      .crumb-wrap{
        margin: 0;
      }
    }
    .product-list-container{
      padding-bottom: 80px;
      .product-wrap{
        margin: 0 50px;
      }
    }
    

    .product-item-wrap{
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
    // 排序
    .filter-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        margin: 140px 0 60px;
        .product-num{
          position: relative;
          width: 240px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1; /*第三行显示 ...*/
          -webkit-box-orient: vertical;
          overflow: hidden;
          top: -70px;
        }
        .filter-list{
            display: flex;
            dt{
                font-weight: bold;
                margin-right: 10px;
            }
            dd{
                margin-right: 20px;
                cursor: pointer;
                &.active{
                    color: #32a2c5;
                }
                &:hover{
                  opacity: 0.5;
                }
            }
        }
    }
    // 分页
    .el-pager li.active{
        background-color: #32a2c5!important;
    }
</style>
