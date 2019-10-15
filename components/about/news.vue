<template>
	<div class="news-box">
    <van-image
      class="img"
      fit="cover"
      src="/images/about/recruit.jpg"
    />
    <div v-for="(item,index) in newsData" :key="index" class="item" :data-id="item.id">
      <div class="img-wrap">
        <nuxt-link :to="`/news/${item.id}`">
          <m-image class="img-item" :src="item.mobile_imgs_url[0]"></m-image>
        </nuxt-link>
      </div>
      <div class="info-wrap">
        <nuxt-link :to="`/news/${item.id}`">
          <div class="title">{{item.name}}</div>
          <div class="date">{{ item.create_time }}</div>
        </nuxt-link>
        <!-- <div class="description">{{item.description}}</div> -->
      </div>
    </div>
	</div>
</template>

<script>
import newsModel from '@/service/news'
export default {
    data() {
        return {
            newsData: [],
            newsDetail: null
        }
    },
    created() {
        this.getAllNews()
    },
    methods: {
        getAllNews(){
            this.newsDetail = null
            newsModel.getAllNews()
                .then(res => {
                    console.log(res)
                    this.newsData = res.data
                })
        },
        getNewsDetail(id){
            newsModel.getNewsDetail(id)
                .then(res => {
                    console.log(res)
                    this.newsDetail = res
                })
        },
        newsClick(e){
            const id = e.currentTarget.dataset.id
            this.getNewsDetail(id)
        },
        formalDate(val){
            const index = val.indexOf(' ');
            return val.substring(0,index);
        },
        backNewsClick(){
            this.newsDetail = null
        }
    },
}
</script>

<style lang="scss" scoped>
	// 			text-overflow: ellipsis;
	// 			display: -webkit-box;
	// 			-webkit-line-clamp: 1; /*第三行显示 ...*/
	// 			-webkit-box-orient: vertical;
	// 			overflow: hidden;

	// 			text-overflow: ellipsis;
	// 			display: -webkit-box;
	// 			-webkit-line-clamp: 2; /*第三行显示 ...*/
	// 			-webkit-box-orient: vertical;
  // 			overflow: hidden;

	.news-box{
    .img{
      width: 100%;
      margin-bottom: 40px;
    }
		.item{
			display: flex;
			margin-bottom: 50px;
			padding-bottom: 50px;
			border-bottom: 2px solid #ededed;
			.img-wrap{
				width: 196px;
				flex: 0 0 196px;
				height: 112px;
				.img-item{
					width: 100%;
					height: 100%;
				}
			}
			.info-wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
				flex: 1;
				padding-left: 60px;
				.title{
					margin-bottom: 4px;
					font-weight: bold;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1; /*第三行显示 ...*/
					-webkit-box-orient: vertical;
					overflow: hidden;
        }
        .date{
          color: #aaa;
          margin-top: 20px;
        }
				.description{
					color: #aaa;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2; /*第三行显示 ...*/
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}
		}
	}
	
</style>
