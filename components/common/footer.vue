<template>
	<div class="bottomer font12" :style="{'background-color':bgColor}">
		<div class="share-wrap">
			<img class="share-img" src="/images/footer/share.png" />
		</div>
		<div class="link-wrap">
			<div class="item"><nuxt-link to="/">首页</nuxt-link></div>
			<div class="item"><nuxt-link to="/product">产品</nuxt-link></div>
			<div class="item"><nuxt-link to="/theme">猫的礼品</nuxt-link></div>
			<div class="item"><nuxt-link to="/theme">狗的礼品</nuxt-link></div>
			<div class="item"><nuxt-link to="/column">专栏</nuxt-link></div>
			<div class="item"><nuxt-link to="/about">唔该新闻</nuxt-link></div>
			<div class="item"><nuxt-link to="/about">招聘</nuxt-link></div>
			<div class="item"><nuxt-link to="/about">关于唔该</nuxt-link></div>
		</div>
		<div class="copyright">
			<div class="copyright-company">				
				<div class="copyright">Copyright:2018-2019</div>
        <div class="company">唔该（深圳）文化创意有限公司</div>
			</div>
			<div class="logo">
				<img src="/images/footer/logo.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			bgColor: String
		},
		methods: {
			aboutTap(e){
			  const type = e.currentTarget.dataset.type
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottomer {
	  position: relative;
	  background-color: #eee;
	  padding: 80px 56px 100px;
	  color: #333;
    a{
      color: #626262;
    }
	}
	.share-wrap {
	  display: flex;
	  justify-content: center;
	}
	.share-wrap .share-img {
	  width: 498px;
	  height: 80px;
	}
	.link-wrap {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  margin: 60px 0 90px;
	}
	.link-wrap .item {
	  display: flex;
	  align-items: center;
	  width: 45%;
	  height: 73px;
    padding-left: 8px;
    box-sizing: border-box;
	  border-bottom: 1px solid #999;
	}
	.copyright-company {
	  line-height: 1.4;
	  margin-right: 20px;
	}
	.copyright {
	  display: flex;
	  justify-content: space-between;
  }
  .copyright .logo{
    text-align: right;
  }
	.copyright .logo img {
	  width: 125px;
	  height: 74px;
	}

</style>
