<template>
	<div class="feiy-loading container-loading l-container-class content" v-if="loading" :style="{'background': bgColor}">
		<div class="circle-spinner">
		  <div class="spinner-circle spinner-circle_default">
			<div class="spinner-container container1">
			  <div class="circle1 circle-default" :style="{'background':color}"></div>
			  <div class="circle2 circle-default" :style="{'background':color}"></div>
			  <div class="circle3 circle-default" :style="{'background':color}"></div>
			  <div class="circle4 circle-default" :style="{'background':color}"></div>
			</div>
			<div class="spinner-container container2">
			  <div class="circle1 circle-default" :style="{'background':color}"></div>
			  <div class="circle2 circle-default" :style="{'background':color}"></div>
			  <div class="circle3 circle-default" :style="{'background':color}"></div>
			  <div class="circle4 circle-default" :style="{'background':color}"></div>
			</div>
			<div class="spinner-container container3">
			  <div class="circle1 circle-default" :style="{'background':color}"></div>
			  <div class="circle2 circle-default" :style="{'background':color}"></div>
			  <div class="circle3 circle-default" :style="{'background':color}"></div>
			  <div class="circle4 circle-default" :style="{'background':color}"></div>
			</div>
		  </div>
		  
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
        loading: false
      }
		},
		methods:{
			start (e) {
        this.loading = true
      },
      finish () {
          setTimeout(() => {
              this.loading = false
          },100)
      }
		},
		props:{
			// 动画颜色
			color: {
			  circle: String,
			  default: '#32a2c5'
			},
			bgColor: String
		}
	}
</script>

<style lang="scss" scoped>
.container-loading {
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0;
  left: 0;
  background: #fff;
  z-index: 10;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #fff;
	height: 100%;
}

@-webkit-keyframes bounce {
	0%,100% {
		-webkit-transform: scale(0)
	}

	50% {
		-webkit-transform: scale(1)
	}
}

@keyframes bounce {
	0%,100% {
		transform: scale(0);
		-webkit-transform: scale(0)
	}

	50% {
		transform: scale(1);
		-webkit-transform: scale(1)
	}
}


@-webkit-keyframes rotateplane {
	0% {
		-webkit-transform: perspective(120px)
	}

	50% {
		-webkit-transform: perspective(120px) rotateY(180deg)
	}

	100% {
		-webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
	}
}

@keyframes rotateplane {
	0% {
		transform: perspective(120px) rotateX(0) rotateY(0);
		-webkit-transform: perspective(120px) rotateX(0) rotateY(0)
	}

	50% {
		transform: perspective(120px) rotateX(-180.1deg) rotateY(0);
		-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0)
	}

	100% {
		transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
		-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg)
	}
}



@-webkit-keyframes bouncedelay {
	0%,100%,80% {
		-webkit-transform: scale(0)
	}

	40% {
		-webkit-transform: scale(1)
	}
}

@keyframes bouncedelay {
	0%,100%,80% {
		transform: scale(0);
		-webkit-transform: scale(0)
	}

	40% {
		transform: scale(1);
		-webkit-transform: scale(1)
	}
}

.spinner-circle {
	position: relative
}

.spinner-circle_mini {
	width: 40px;
	height: 40px
}

.spinner-circle_default {
	width: 60px;
	height: 60px
}

.spinner-circle_large {
	width: 70px;
	height: 70px
}

.container1>div,.container2>div,.container3>div {
	border-radius: 50%;
	position: absolute;
	background-color: #3963bc;
	-webkit-animation: bouncedelay4 1.2s infinite ease-in-out;
	animation: bouncedelay4 1.2s infinite ease-in-out;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both
}

.circle-default {
	width: 15px;
	height: 15px
}

.spinner-circle .spinner-container {
	position: absolute;
	width: 100%;
	height: 100%
}

.container2 {
	-webkit-transform: rotateZ(45deg);
	transform: rotateZ(45deg)
}

.container3 {
	-webkit-transform: rotateZ(90deg);
	transform: rotateZ(90deg)
}

.circle1 {
	top: 0;
	left: 0
}

.circle2 {
	top: 0;
	right: 0
}

.circle3 {
	right: 0;
	bottom: 0
}

.circle4 {
	left: 0;
	bottom: 0
}

.container2 .circle1 {
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s
}

.container3 .circle1 {
	-webkit-animation-delay: -1s;
	animation-delay: -1s
}

.container1 .circle2 {
	-webkit-animation-delay: -.9s;
	animation-delay: -.9s
}

.container2 .circle2 {
	-webkit-animation-delay: -.8s;
	animation-delay: -.8s
}

.container3 .circle2 {
	-webkit-animation-delay: -.7s;
	animation-delay: -.7s
}

.container1 .circle3 {
	-webkit-animation-delay: -.6s;
	animation-delay: -.6s
}

.container2 .circle3 {
	-webkit-animation-delay: -.5s;
	animation-delay: -.5s
}

.container3 .circle3 {
	-webkit-animation-delay: -.4s;
	animation-delay: -.4s
}

.container1 .circle4 {
	-webkit-animation-delay: -.3s;
	animation-delay: -.3s
}

.container2 .circle4 {
	-webkit-animation-delay: -.2s;
	animation-delay: -.2s
}

.container3 .circle4 {
	-webkit-animation-delay: -.1s;
	animation-delay: -.1s
}

@-webkit-keyframes bouncedelay4 {
	0%,100%,80% {
		-webkit-transform: scale(0)
	}

	40% {
		-webkit-transform: scale(1)
	}
}

@keyframes bouncedelay4 {
	0%,100%,80% {
		transform: scale(0);
		-webkit-transform: scale(0)
	}

	40% {
		transform: scale(1);
		-webkit-transform: scale(1)
	}
}

.rotate {
	border-radius: 50%;
	animation: rotate .7s linear infinite
}


@keyframes rotate {
	0% {
		transform: rotate(0)
	}

	100% {
		transform: rotate(360deg)
	}
}
</style>
