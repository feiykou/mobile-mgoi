<template>
	<div class="container box">
    <div class="page-tit"><span class="font24">专栏</span></div>
		<div class="content-box column-list-box">
			<div class="item van-hairline--bottom" v-for="(item, index) in columnData" :key="index" :data-id="item.id">
				<nuxt-link :to="`/column/list`" class="item-wrap">
          <van-image
            class="img"
            fit="cover"
            :src="item.mobile_imgs_url[0]"
          />
					<div class="tit-desc">
						<div class="tit font14 bold">{{ item.name }}</div>
						<div class="desc">{{ formalDate(item.create_time) }}</div>
						<!-- <div class="introduce font14">{{item.sub_name}}</div> -->
					</div>
				</nuxt-link>
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
  .page-tit{
    margin: 50px 50px 80px;
  }
 
	.content-box{
		padding: 0 50px 69px;
	}
	.column-list-box{
		.item{
			background-color: #fff;
      padding-bottom: 60px;
			margin-bottom: 80px;
      &::after{
        border-color: #626262;
      }
			.img{
				flex: 0 0 369px;
				width: 369px;
				height: 216px;
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
				margin-bottom: 25px;
			}
			.tit{
				margin-bottom: 15px;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3; /*第三行显示 ...*/
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			
		}
	}
</style>
