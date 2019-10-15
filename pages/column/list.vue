<template>
	<div class="container column-list-container">
    <thumb class="font12">
      <thumb-item><nuxt-link to="/">首页</nuxt-link></thumb-item>
      <thumb-item><nuxt-link to="/special">每月特辑</nuxt-link></thumb-item>
      <thumb-item>圣诞特别篇</thumb-item>
    </thumb>
    <div class="head-img-wrap">
      <van-image
        class="img"
        fit="cover"
        src="http://mgoiweb.cn/upload/20190912/bb5f3181ad0f6d6d8d1a4a806329da29.jpg"
      />
      <div class="tit-desc">
        <div class="tit font16 bold">流蕙刺绣 - 刺绣吊牌 生动活泼</div>
        <div class="desc">刺绣吊牌刺绣吊牌刺绣吊牌刺绣刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌刺绣吊牌吊牌刺绣吊牌</div>
      </div>
    </div>
		<div class="content-box">
      <div class="column-list-box">
        <div class="list-tit font15 bold van-hairline--bottom">饮食篇</div>
        <div class="item van-hairline--bottom" v-for="(item, index) in columnData" :key="index" :data-id="item.id">
          <nuxt-link :to="`/column/${item.id}`" class="item-wrap">
            <van-image
              class="img"
              fit="cover"
              :src="item.mobile_imgs_url[0]"
            />
            <div class="tit-desc">
              <div class="desc">{{ formalDate(item.create_time) }}</div>
              <div class="tit font14">{{ item.name }}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="column-list-box">
        <div class="list-tit font15 bold van-hairline--bottom">外出篇</div>
        <div class="item van-hairline--bottom" v-for="(item, index) in columnData" :key="index" :data-id="item.id">
          <nuxt-link :to="`/column/${item.id}`" class="item-wrap">
            <van-image
              class="img"
              fit="cover"
              :src="item.mobile_imgs_url[0]"
            />
            <div class="tit-desc">
              <div class="desc">{{ formalDate(item.create_time) }}</div>
              <div class="tit font14">{{ item.name }}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
// import ColumnMenu from '@/components/v-column-menu/index.vue';
import columnModel from '@/service/column'
import rescColumn from '@/components/column/resc-column'

import { mapActions } from 'vuex'

export default {
    layout: 'main',
    watchQuery: ['id'],
    components: {
      rescColumn
    },
    data(){
        return {
            headRescData: [],
            cateId: 0,
            isShowTab: true,
            curColumn: '最新专栏'
        };
    },
    created(options){
        this.$store.dispatch('cate/getColumnCate')
        if(this.$route.query.q){
            this.search(this.$route.query.q)
        }
    },
    head(){
        return this.$seo(`专栏列表 - 唔该`,'正处于萌芽阶段')
    },
    computed: {
        id() {
            return Number(this.$route.query.id)
        }
    },
    async asyncData({query, error}) {
        const headRescData = await columnModel.getRescColumn(),
            cateId = query.id | 0,
            columnData = await columnModel.getColumns(cateId)
        if(!columnData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
        return {
            headRescData,
            columnData: columnData.data
        }
    },
    fetch({ store }){
        return store.dispatch('cate/getColumnCate')
    },
    watch: {
        '$route': function(to,from){
            if(to.query.q){
                this.search(to.query.q)
            }
        }
    },
    methods: {
        formalDate(val){
            const index = val.indexOf(' ');
            return val.substring(0,index);
        },
        search(q){
            columnModel.search(q)
                .then(res => {
                    this.columnData = res.data
                })
        },
        // ...mapActions([
        //     'cate', ['getColumnCate']
        // ])
    }
}
</script>

<style lang="scss" scoped>
	$color: #40ce86;
  .column-list-container{
    margin-top: 25px;
  }
  .page-tit{
    margin: 50px 50px 80px;
  }
 
	.content-box{
		padding: 77px 50px 69px;
	}

  .list-tit{
    padding-bottom: 30px;
    margin-bottom: 40px;
    &::after{
      border-color: #000;
    }
  }
	.column-list-box{
		.item{
			background-color: #fff;
      padding-bottom: 30px;
			margin-bottom: 50px;
      &::after{
        border-color: #eee;
      }
			.img{
				flex: 0 0 155px;
				width: 155px;
				height: 92px;
			}
			.item-wrap{
				display: flex;
			}
			.tit-desc{
				flex: 1;
				padding-left: 40px;
			}
			.desc{
				color: #adadad;
        margin-bottom: 5px;
			}
			.tit{
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2; /*第三行显示 ...*/
				-webkit-box-orient: vertical;
				overflow: hidden;
        line-height: 1.4;
			}
			
		}
	}

  .head-img-wrap{
    position: relative;
    .tit-desc{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 30px 50px;
      color: #fff;
      background-color: rgba($color: #000000, $alpha: 0.3);
      .desc{
        display: block;
        margin-top: 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /*第三行显示 ...*/
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: #fff;
      }
    }
  }
  
</style>
