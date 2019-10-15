<template>
  <div class="pets-container">
    <div class="pets-tit font24 bold">{{ curName }}</div>
    <ul class="pets-list">
      <li class="van-hairline--bottom" v-hover-class="'hover-class'" v-for="(item, index) in categoryListData" :key="index">
        <nuxt-link :to="item.link_url">
          <div class="tit bold font14">{{ item.name }}</div>
          <p class="desc">{{ item.description }}</p>
          <van-image
            class="img"
            fit="cover"
            :src="item.mobile_imgs_url[0]"
          />
        </nuxt-link>
      </li>
    </ul>
    <cate-list></cate-list>
  </div>
</template>

<script>
import categoryModel from '@/service/category'
import {DOG, CAT} from '@/utils/petsEnum'
export default {
  watchQuery: ['cate_id'],
  layout: 'main',
  data () {
    return {
      curName: '',
      listData: null
    }
  },
  watch: {
    "$route": function({query}){
      const type = query.type
      this.switchData(type)
    }
  },
  async asyncData({ app, query, store, error }) {
    const {type, cate_id} = query
    if(!type || !cate_id){
      return error({ statusCode: 404, message: '页面加载失败，请重新加载' })
    }
    let curName = ''
    if(Number(type) === DOG){
      curName = '狗专区'
    }
    if(Number(type) === CAT){
      curName = '猫专区'
    }

    let categoryListData = await categoryModel.getCategoryCate(0, Number(cate_id))
    if(!categoryListData) return error({ statusCode: 404, message: '页面加载失败，请重新加载' })
    return {
      categoryListData,
      curName
    }
  },
  created(){
    let type = this.$router.history.current.query.type
    this.switchData(type)
  },
  methods: {
    switchData(type){
      this.listData = null
      if(!type){
        this.listData = this.cat
        return;
      }
      if(Number(type) === 2){
        this.listData = this.dog
      } else if(Number(type) === 1){
        this.listData = this.cat
      }
    }
  },
}
</script>

<style lang='scss' scoped>
  .pets-container{
    margin: 0 50px;
  }
  .pets-tit{
    margin: 50px 0 80px;
  }
  .pets-list{
    li{
      padding-bottom: 100px;
      margin-bottom: 56px;
      &::after{
        border-color: #eee;
      }
      &:nth-last-child(1){
        &::after{
          border-color: transparent!important;
        }
      }
    }
    .tit{
      margin-bottom: 20px;
    }
    .desc{
      line-height: 2;
    }
    .img{
      height: 265px;
      margin-top: 24px;
    }
  }
</style>
