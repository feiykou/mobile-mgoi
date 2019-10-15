<template>
	<div class="btn-menu" :class="isShowClose?'btn-close':''">
		<ul class="ul">
			<li class="li"></li>
			<li class="li"></li>
      <!--
        <li class="li"></li>
      -->
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isShowClose: false
			}
		},
		props:{
			isShow: {
				type: Object,
				default: function(){
					return {
						val: false
					}
				}
			}
		},
		watch:{
			isShow(value){
				this.isShowClose = value.val
			}
		}
	}
</script>

<style lang="scss">
	.btn-menu{
		width: 72px;
		height: 90px;
	}
	.btn-menu .ul,.btn-close .ul{
		position: relative;
		transition: transform 240ms cubic-bezier(0.165, 0.84, 0.44, 1);
		height: 100%;
  }
  
	.btn-menu .li,.btn-close .li{
		position: absolute;
		top: 50%;
		right: 0;
		width: 56px;
		height: 2px;
    // transform: scaleY(.5);
		// -webkit-transform: scaleY(0.5); 
		// transform: scaleY(0.5); 
		// -webkit-transform-origin: 0 0; 
		// transform-origin: 0 0; 
		background-color: #000;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		transition-duration: 240ms;
		transition-property: width,margin,opacity,transform;
  }
  .btn-menu .li:nth-child(3){
    width: 72px;
  }
	.btn-menu .ul:active .li:nth-child(1),
	.btn-menu .ul:hover .li:nth-child(1) {
		margin-top: -12px;
	}
	.btn-menu .ul:active .li:nth-child(2),
	.btn-menu .ul:hover .li:nth-child(2) {
		margin-top: 12px;
	}
	.btn-menu .ul .li:nth-child(1) {
		margin-top: -12px;
	}
	.btn-menu .li:nth-child(2) {
		margin-top: 12px;
	}
	.btn-menu .li:nth-child(3){
		display: block;
	}
	
	
	.btn-close{
		z-index: 100;
	}
	.btn-close .ul .li {
		margin-top: 0!important;
	}
	.btn-close .ul .li:nth-child(1) {
		-webkit-transform: translate(-50%, 0) rotate(165deg);
		-ms-transform: translate(-50%, 0) rotate(165deg);
    transform: translate(-50%, 0) rotate(135deg);
    right: -24px;
	}
	.btn-close .ul .li:nth-child(2) {
		-webkit-transform: translate(-50%, 0) rotate(-165deg);
		-ms-transform: translate(-50%, 0) rotate(-165deg);
    transform: translate(-50%, 0) rotate(-135deg);
    right: -24px;
	}
	.btn-close .ul .li:nth-child(3){
		display: none;
	}

	
	.btn-close:active .ul .li:nth-child(1),
	.btn-close:focus .ul .li:nth-child(1),
	.btn-close:hover .ul .li:nth-child(1) {
		-webkit-transform: translate(-50%, 0) rotate(135deg);
		-ms-transform: translate(-50%, 0) rotate(135deg);
    transform: translate(-50%, 0) rotate(135deg);
    right: -24px;
	}
	.btn-close:active .ul .li:nth-child(2),
	.btn-close:focus .ul .li:nth-child(2),
	.btn-close:hover .ul .li:nth-child(2) {
		-webkit-transform: translate(-50%, 0) rotate(-135deg);
		-ms-transform: translate(-50%, 0) rotate(-135deg);
    transform: translate(-50%, 0) rotate(-135deg);
    right: -24px;
	}
</style>
