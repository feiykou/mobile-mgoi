<template>
	<div class="container box">
    <thumb class="font12">
      <thumb-item><nuxt-link to="/column" hover-class="hover-class">专栏列表</nuxt-link></thumb-item>
      <thumb-item>专栏详情</thumb-item>
    </thumb>
		<div class="column-box">
      <div class="head-con">
        <div class="img-box">
          <div class="img-bg" :style="{'backgroundImage': 'url('+detailData.mobile_imgs_url[0]+')'}"></div>
          <img :src="detailData.mobile_imgs_url[0]" alt="">
        </div>
        <div class="info-wrap">
					<div class="title">{{detailData.name}}</div>
					<div class="description font12">{{detailData.introduce}}</div>
				</div>
        <!-- <div class="title font16">{{detailData.name}}</div> -->
        <!-- <div class="sub_name font15">{{detailData.sub_name}}</div> -->
      </div>
			<div class="section-wrap">
					<div class="detail">
						<div v-html="detailData.content"></div>
						<!-- <u-parse :content="detailData.content"></u-parse> -->
					</div>
					<div class="page-wrap" v-if="topBottomData">
						<div class="page">
							<span>上一篇：</span>
              <nuxt-link v-if="topBottomData.prev_info" :to="`/column/${topBottomData.prev_info.id}`">{{ topBottomData.prev_info.name }}</nuxt-link>
							<i v-else>没有了</i>
						</div>
						<div class="page">
							<span>下一篇：</span>
              <nuxt-link v-if="topBottomData.next_info" :to="`/column/${topBottomData.next_info.id}`">{{ topBottomData.next_info.name }}</nuxt-link>
							<i v-else>没有了</i>
						</div>
					</div>
					<div class="relative-wrap">
						<div class="title">相关推荐</div>
						<div class="con">
							<div class="list">
								<div class="list-item" v-for="(item,index) in rescData" :key="index">
									<img :src="item.mobile_imgs_url[0]"/>
									<div class="tit">
										{{ item.name }}
									</div>
									<!-- <div class="desc">{{ item.description }}</div> -->
								</div>
								<div class="list-item"></div>
								<div class="list-item"></div>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
	
</template>

<script>
// import ColumnMenu from '@/components/v-column-menu/index.vue';
import columnModel from '@/service/column'
export default {
    layout: 'main',
    data(){
        return {
            detailData: null,
            topBottomData: null,
            rescData: [],
            curId: 0,
            isShowTab: true
        }
    },
    async asyncData({ params, error }) {
        const id = Number(params.id),
            detailData = await columnModel.getColumnDetail(id)
        if(!detailData) error({ statusCode: 404, message: '页面加载失败，请重新加载' })
        detailData['content'] = detailData['content'].replace(/<img/g, "<img style='width:100%;'")
        return {
            detailData
        }
    },
    fetch({ store }){
        return store.dispatch('cate/getColumnCate')
    },
    head(){
        return this.$seo(`${this.detailData.name} - 唔该`,'正处于萌芽阶段')
    },
    validate({ params }) {
        return /^\d+$/.test(params.id) // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
    },
    created() {
        this.curId = Number(this.$route.params.id)
        this._loadData()
    },
    watch: {
        '$route': function(to,from){
            this.curId = to.params.id
            this._loadData()
        }
    },
    methods: {
        _loadData(){
            this.getTopBottom(this.curId)
            this.getRescData()
        },
        getTopBottom(id){
            columnModel.getTopBottomData(id)
                .then(res => {
                    this.topBottomData = res
                })
        },
        getRescData(){
            // 3：相关推荐  4：展示个数
            columnModel.getRescColumn(3,3,this.curId)
                .then(res => {
                    this.rescData = res
                })
        },
        formalDate(val){
            const index = val.indexOf(' ');
            return val.substring(0,index);
        }
    },
}
</script>

<style lang="scss" scoped>

  $main_color: #40ce86;
	@mixin one-px(){
		display: block;
		width: 100%;
		height: 1px;
		-webkit-transform: scaleY(0.5); 
		transform: scaleY(0.5); 
		background-color: #eee;
  }
  
  .img-box{
    height: 316px;
    .img-bg{
      height: 100%;
      background-size: cover; 
      background-position: center center;
      background-repeat: no-repeat;
    }
    img{
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  .info-wrap{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 30px 50px;
		background-color: rgba($color: #000000, $alpha: 0.3);
		color: #fff;
		.title{
			color: #fff;
		}
		.description{
			display: block;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1; /*第三行显示 ...*/
			-webkit-box-orient: vertical;
			overflow: hidden;
			color: #fff;
		}
	}
	
	// 相关推荐
	.relative-wrap{
		margin-top: 60px;
		padding-top: 60px;
		border-top: 2px solid #727272;
		.title{
			font-weight: bold;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.list-item{
			width: 30%;
			img{
				width: 100%;
				height: 110px;
			}
			.tit{
				font-weight: bold;
				margin-top: 10px;
			}
			.desc{
				color: #aaa;
			}
		}
	}

	
	/* 公共public */
	.column-box{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		padding-bottom: 45px;
	}
	.arrow-icon{
		position: relative;
		top: 10px;
		vertical-align: middle;
		margin: 0 5px 0;
	}
	.section-wrap{
		padding: 50px 60px;
		background-color: #fff;
		.name{
			font-weight: bold;
		}
	}
	/* 公共public end */
	
	.content-box{
		padding: 70px 50px 60px;
	}
	.head-con{
    position: relative;
	}
	// .sub_name{
	// 	display: inline-block;
	// 	color: #ababab;
	// 	margin-top: 10px;
	// 	padding-bottom: 10px;
	// 	border-bottom: 4px solid #707070;
	// }
	// .title{
	// 	margin-bottom: 30px;
	// }
	.detail{
    overflow: hidden;
		&>div{
			line-height: 1.6;
			margin-bottom: 20px;
			text-align: justify;
    }
    img {
      width: 100%;
    }
	}
		
	.page-wrap{
		margin-top: 80px;
		line-height: 1.8;
		color: $main_color;
		.page{
			display: flex;
			flex-wrap: wrap;
		}
		span{
			color: #666;
			font-weight: bold;
		}
		i{
			color: #999;
			font-style: normal;
		}
	}
	.text{
		padding: 10px 0;
	}
	
</style>
