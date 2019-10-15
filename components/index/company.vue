<template>
	<div class="index-section-wrap " style="padding-top: 70px;">
		<!-- <div class="title-wrap">唔该</div> -->
		<div class="section-wrap">
			<div class="tit">唔该</div>
			<div class="con">
				<div class="p">唔，是一种声音，有你、我之意<br/>该，是一种约定，有完备之意</div>
				<div class="p">在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度</div>
				<div class="p">取名唔该意在表达“唔该”在服务过程中怎么做都无法表达您对宠物热爱的一份感激</div>
				<div class="p">唔，是一种声音，有你、我之意<br/>该，是一种约定，有完备之意</div>
				<div class="p">在粤语中唔该是最常用的礼貌用语，不仅有感谢的意思，在服务行业，更是被广泛使用，说的是自己服务质量的“不完备”还是一种做事情的态度</div>
			</div>
			<!-- <div class="more-btn-wrap">
				<text>了解更多</text>
			</div> -->
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	/* 公共public */
	.index-section-wrap{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		// background: url("/images/head/3.jpg") no-repeat;
		background-size: cover;
	}
	.title-wrap{
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		height: 100px;
		flex: 0 0 100px;
		padding-bottom: 24px;
		font-size: 32px;
		font-weight: bold;
	}
	.section-wrap{
		position: relative;
		flex: 1;
		padding: 20px 46px 15px;
		.name{
			font-weight: bold;
		}
	}
  /* 公共public end */
  
  
	.section-wrap{
		display: flex;
		flex-direction: column;
		padding: 80px 156px 110px 64px;
		color: #333;
		
	}
	.box{
		position: relative;
		margin: 32px 25px 0 25px;
	}

	.con{
		margin: 60px 0 120px;
		flex: 1;	
		overflow: hidden;
		.p{
			line-height: 1.6;
			margin-bottom: 30px;
			text-align: justify;
		}
	}
	.more-btn-wrap{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 90px;
		text-align: center;
		text{
			display: inline-flex;
			width: 192px;
			height: 64px;
			justify-content: center;
			align-items: center;
			border: 1px solid #fffefe;
			border-radius: 8px;
			font-size: 30px;
		}
	}
	
</style>
