<template>
	<div class="index-section-wrap index-column-section">
		<!-- <div class="title-wrap">专栏</div> -->
		<div class="section-wrap">
			<div class="item-wrap">
        <div class="item animate-hover-class" v-for="(item,index) in columnData" :key="index" :class="index == 0 ? 'big-item' : ''" :data-id="item.id" @click="columnTap" hover-class="hover-class" :hover-stay-time='100'>
          <m-image class="img img-wrap" :src="item.mobile_imgs_url[0]"></m-image>
          <div class="info-wrap">
            <div class="description" :class="index == 0?'':'font12'">{{formalDate(item.create_time)}}</div>
            <div class="title" :class="index == 0?'font16':'font12'">{{item.name}}</div>
          </div>
        </div>
			</div>
			<div class="more-btn-wrap">
        <nuxt-link to="/column" class="btn font15">查看更多</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
	// import mediaList from '@/components/tab-nvue/mediaList'
	export default {
		components: {
		},
		props: {
			columnData: {
				type: Array,
				default: function(){
					return []
				}
			},
		},
		computed:{
		},
		methods: {
			columnTap(e) {
				const id = e.currentTarget.dataset.id
				uni.navigateTo({
					url: '/pages/column/column?id='+id
				})
      },
      formalDate(val){
        const index = val.indexOf(' ');
        return val.substring(0,index);
      }
		},
		data(){
			return {
				// columnData: [
				// 	{
				// 		title: '印泥瓦当',
				// 		description: '中国技术界小奇迹中国技术界小奇技术界小奇迹',
				// 		image_url: '/static/big1.png'
				// 	},
				// 	{
				// 		title: '中国技术界小奇迹中国技术界小奇迹中国技术界小奇迹中国技术界小奇迹',
				// 		description: '中国技术界小奇迹中国技术界小奇小奇迹中国技术界小奇迹',
				// 		image_url: '/static/big1.png'
				// 	},
				// 	{
				// 		title: '中国技术界小奇迹中国奇迹',
				// 		description: '中国技术界小奇迹中国技术界小奇迹中国技术界小奇迹',
				// 		image_url: '/static/big1.png'
				// 	},
				// 	
				// ]
			}
		}
	}
</script>

<style lang="scss" scoped>
	$main_color:#322333;
	/* 公共public */
	.index-section-wrap{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
	}
	.title-wrap{
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		height: 100px;
		flex: 0 0 100px;
		padding-bottom: 24px;
		font-weight: bold;
	}
	.section-wrap{
		flex: 1;
		background-color: #fff;
		.name{
			font-weight: bold;
		}
	}
  /* 公共public end */

	.more-btn-wrap{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 40px;
		text-align: center;
		a{
			display: inline-flex;
			width: 192px;
			height: 64px;
			justify-content: center;
			align-items: center;
			border: 1px solid #000;
			border-radius: 8px;
		}
	}

	.item{
		display: flex;
		padding: 0 0 25px;
		margin: 0 64px 25px;
		border-bottom: 2px solid #eee;
		
		&.big-item{
			border-bottom: 0;
		}
		.img-wrap{
			width: 180px;
			height: 90px;
			flex: 0 0 180px;
      margin-right: 50px;
      overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.info-wrap{
			flex: 1;
			.title{
				line-height: 1.4;
				margin-top: 8px;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1; /*第三行显示 ...*/
				-webkit-box-orient: vertical;
        overflow: hidden;
			}
			.description{
				line-height: 1.5;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1; /*第三行显示 ...*/
				-webkit-box-orient: vertical;
				overflow: hidden;
				letter-spacing: .02em;
				color: #858585;
			}
		}
	}
	.big-item{
		position: relative;
		display: block;
		margin: 0 0 50px 0;
		padding: 0;
		.label{
			position: absolute;
			top: 0;
			right: 0;
			width: 206px;
			text{
				display: inline-block;
				width: 32px;
				padding: 42px 15px;
				color: #fff;
				border: 4px solid $main_color;
				background-color: $main_color;
			}
		}
		.img-wrap{
			width: 100%;
			height: 426px;
			flex: 0 0 426px;
			image{
				width: 100%;
				height: 100%;
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
			padding: 30px 50px 30px 40px;
			// background-color: rgba($color: #000000, $alpha: 0.3);
			color: #fff;
			.title{
        color: #fff;
				font-weight: normal;
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
	}
	
	.screen-sm-max{
		.item-wrap{
			.item:nth-last-child(1){
				display: none;
			}
			.item:nth-last-child(2){
				display: none;
			}
		}
	}
	.screen-sm-min{
		.item-wrap{
			.item:nth-last-child(3){
				display: none;
			}
		}
	}
	
	.screen-mid{
		.item-wrap{
			.item:nth-last-child(1){
				display: none;
			}
		}
	}
	
</style>
