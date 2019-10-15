<template>
	<div class="recruit-box">
    <van-image
      class="img"
      fit="cover"
      src="/images/about/recruit.jpg"
    />
    <van-collapse class="recruit-wrap" v-model="activeNames">
      <van-collapse-item  :title="item.name" :name="index" v-for="(item, index) in listData" :key="index">
        <div :class="val.name" class="font12" v-for="(val, cindex) in item.content" :key="cindex">{{ val.data }}</div>
      </van-collapse-item>
    </van-collapse>
	</div>
</template>

<script>
	export default {
		components: {
		},
		methods:{
		
		},
		watch:{

		},
		data(){
			return {
				activeNames: [0],
				listData: [
					{
						name: '工业设计师',
						content: [
							{ name: 'name', data: '工作内容：'},
							{ name: 'p', data: '1.负责公司产品设计研发、落实执行等。'},
							{ name: 'p', data: '2.进行产品研究，确定产品的设计方向、产品性能，研究产品材料工艺和市场需求。'},
							{ name: 'p', data: '3.配合结构工程师共同优化产品功能以及造型。'},
							{ name: 'p', data: '4.对接不同部门，协助完成产品落地。'},
							{ name: 'name', data: '任职资格：'},
							{ name: 'p', data: '1.工业设计等相关专业，本科以上学历。'},
							{ name: 'p', data: '2.有坚实的产品造型设计能力，有敏锐的洞察力和创新意识，具备对美的认知和高度敏感性，认可唔该的品牌理念。'},
							{ name: 'p', data: '3.有养宠经验者优先，对市面上的宠物用品不满，愿意不择手段地让它们更好用、更好看。'},
							{ name: 'p', data: '4.熟知产品设计流程，能熟练使用AutoCAD/Rhino/Pro E/UG等设计软件。'}
						]
					},
					{
						name: 'web前端工程师',
						content: [
							{ name: 'name', data: '工作内容：'},
							{ name: 'p', data: '1.负责公司产品设计研发、落实执行等。'},
							{ name: 'p', data: '2.进行产品研究，确定产品的设计方向、产品性能，研究产品材料工艺和市场需求。'},
							{ name: 'p', data: '3.配合结构工程师共同优化产品功能以及造型。'},
							{ name: 'p', data: '4.对接不同部门，协助完成产品落地。'},
							{ name: 'name', data: '任职资格：'},
							{ name: 'p', data: '1.工业设计等相关专业，本科以上学历。'},
							{ name: 'p', data: '2.有坚实的产品造型设计能力，有敏锐的洞察力和创新意识，具备对美的认知和高度敏感性，认可唔该的品牌理念。'},
							{ name: 'p', data: '3.有养宠经验者优先，对市面上的宠物用品不满，愿意不择手段地让它们更好用、更好看。'},
							{ name: 'p', data: '4.熟知产品设计流程，能熟练使用AutoCAD/Rhino/Pro E/UG等设计软件。'}
						]
					}
				]
			}
		}
	}
</script>

<style lang="scss">
  $color: #32a2c5;
  @mixin font-dpr($font-size: 12px){
    font-size: $font-size!important;
    [data-dpr="2"] & {
        font-size: $font-size * 2!important;
    }

    [data-dpr="3"] & {
        font-size: $font-size * 3!important;
    }
  }
  .recruit-box{
    .img{
      margin-bottom: 40px;
      width: 100%;
    }
  }
  
  .set-size{
    .van-collapse-item{
      @include font-dpr(14px);
    }
  }
  .recruit-wrap{
    .van-collapse-item__title{
      display: flex;
      align-items: center;
      height: 100px!important;
    }
  }
  
	.recruit-wrap{
		.p{
      text-align: justify;
      line-height: 2;
    }
    .name{
      font-weight: bold;
      margin: 30px 0 10px;
    }
	}

</style>
