<template>
	<div class="contact-box">
		<div class="map-wrap">
      <van-image
        class="img"
        fit="cover"
        src="/images/about/recruit.jpg"
      />
			<div class="address-wrap">
				<div class="item"><span class="name">企业名称：</span><span class="val">唔该（广州）文化创意有限公司</span></div>
				<div class="item"><span class="name">企业电话：</span><span class="val">020 38608003</span></div>
				<div class="item"><span class="name">企业地址：</span><span class="val">广州市海珠区光汉直街40号</span></div>
				<div class="item"><span class="name">企业邮箱：</span><span class="val">m3goil@163.com</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
  .contact-box{
    .img{
      margin-bottom: 40px;
      width: 100%;
    }
  }
  
	.address-wrap{
		padding: 0 36px 50px;
		.item{
			padding: 30px 0 15px;
      overflow: hidden;
      border-bottom: 2px solid #ddd;
			&>span{
				&.name{
					float: left;
				}
				&.val{
					display: block;
					overflow: hidden;
				}
			}
		}
	}
</style>
