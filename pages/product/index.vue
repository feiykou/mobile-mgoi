<template>
  <div class="product-section product-list-container">
      <thumb class="font12">
        <thumb-item>首页</thumb-item>
        <thumb-item @click.native="crumbTap" :data-index="index" v-for="(item,index) in crumbArr" :key="index">
          {{item.name}}
        </thumb-item>
      </thumb>
      <div class="cate-container">
          <div class="current-name">{{ curName }}</div>
          <div class="cate-sec">
              <ul class="cate-list" v-if="cateData">
                  <li v-for="(item, index) in cateData" :key="index" @click="cateTap" :data-id="item.id" :data-name="item.name">
                      <span class="font12">{{ item.name }}</span>
                      <div class="img">
                          <img :src="item.img_url[0]" alt="">
                      </div>
                  </li>
              </ul>
              <CateLoading v-else></CateLoading>
          </div>
      </div>
      <div class="product-wrap">
          <div class="filter-wrap">
              <div class="product-num"><span v-if="productsData">{{productsData.length}}件商品</span></div>
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
// import Menu from '@/components/v-menu/index.vue'

import CateLoading from '@/components/skeleton/product-cate-loading'
import ProductListLoading from '@/components/skeleton/product-list-loading'

import productModel from '@/service/product'


import { mapState } from 'vuex'
import productItem from '@/components/product-item';
import cateList from '@/components/product/cate-list';

export default {
    watchQuery: ['id'],
    layout: 'main',
    data(){
        return {
            cateData: null,
            productsData: null,
            crumbArr: [{name: '产品分类', id: 0}],
            curName: '产品分类',
            curCateId: 0,
            curPriceIndex: 0,
            isShowTab: true,  // 是否展示头部
        }
    },
    components: {
      productItem,
      CateLoading,
      ProductListLoading,
      cateList
    },
    async asyncData({ app, query, store, error }) {
        let {id, name} = query
        let productsData = null,
            cateData = null
        productsData = await productModel.getProductsByCate(id)
        cateData = await productModel.getSonCate(id)
        const crumbData = store.state.cate.crumbCate
        // const crumbData = []
        let arr = [],
            json ={},
            crumb = [{name: '产品分类', id: 0}]
        crumbData.forEach((ele, index) => {
            if(!name && crumbData.length-1 === index){
              name = ele.name
            }
            json.name = ele.name
            json.id = ele.id
            arr.push(json)
            json = {}
        });
        if(!name) name = '产品分类';
        if(!cateData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
        return {
            cateData,
            productsData: productsData.data,
            crumbArr: [...crumb,...arr],
            curName: name,
            curCateId: id
        }
    },
    fetch({ store, query }){
        const id = query.id || 0
        // store.dispatch('cate/getProductCate')
        store.dispatch('cate/getParentCate', id)
    },
    head(){
        return this.$seo('产品列表 - 唔该','正处于萌芽阶段')
    },
    created(){
    },

    methods: {
        // setCrumbData(){
        //     const crumbData = this.$store.state.cate.crumbCate
        //     let arr = [],
        //         json ={},
        //         crumb = [{name: '产品分类', id: 0}],
        //         name = '产品分类'
        //     crumbData.forEach((ele, index) => {
        //         json.name = ele.name
        //         json.id = ele.id
        //         arr.push(json)
        //         json = {}
        //         if(index == crumbData.length-1){
        //             name = ele.name
        //         }
        //     });
        //     this.crumbArr = [...crumb,...arr]
        //     this.curName = name
        // },
        priceSort(e){
            const index = e.currentTarget.dataset.index
            this.curPriceIndex = index
            this.getProductsByCate(this.curCateId, index)
        },
        cateTap(e){
            const id = e.currentTarget.dataset.id,
                curName = e.currentTarget.dataset.name
            this.curName = curName
            this.crumbArr.push({
                id,
                name: curName
            })
            this._loadData(id)
        },

        crumbTap(e){
            const index = e.currentTarget.dataset.index
            let crumbArr = this.crumbArr
            crumbArr = crumbArr.slice(0,index*1+1)
            this.curName = crumbArr[index]['name']
            this.crumbArr = crumbArr
            this._loadData(crumbArr[index]['id'])
        },

        _loadData(id=0){
            this.curCateId = id
            this.getSonCate(id)
            this.getProductsByCate(id)
        },

        getSonCate(id){
            this.cateData =null
            productModel.getSonCate(id)
                .then(res => {
                    setTimeout(() => {
                        this.cateData = res
                    }, 600)
                })
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

<style lang="scss">

    // 分类列表
    .cate-container{
        padding: 40px 35px 60px;
        background-color: #eee;
        .current-name{
            padding-bottom: 30px;
            font-size: 26px;
            border-bottom: 2px solid #707070;
            font-weight: bold;
        }
        .cate-list{
            display: flex;
            flex-wrap: wrap;
            li{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 142px;
                padding: 10px 0;
                margin-top: 50px;
                margin-right: 20px;
                border-bottom: 1px solid #707070;
                -webkit-transition: none .2s cubic-bezier(.215,.61,.355,1);
                transition: none .2s cubic-bezier(.215,.61,.355,1);
                -webkit-transition-property: opacity;
                transition-property: opacity;
                cursor: pointer;
                &::before{
                    content: ' ';
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255,255,255,1e-06);
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 0;
                    -webkit-transition: none .2s cubic-bezier(.215,.61,.355,1);
                    transition: none .2s cubic-bezier(.215,.61,.355,1);
                    -webkit-transition-property: background-color;
                    transition-property: background-color;
                }
                &:hover{
                    &::before{
                        opacity: 0.5;
                    }
                }
                span{
                    font-weight: bold;
                    position: relative;
                    z-index: 1;
                }
                .img{
                    width: 46px;
                    height: 46px;
                    margin: 20px 0;
                    position: relative;
                    z-index: 1;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
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
    
    // 分页
    .el-pager li.active{
        background-color: #32a2c5!important;
    }
</style>
