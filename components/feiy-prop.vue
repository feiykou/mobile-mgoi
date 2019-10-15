<template>
	<div v-show="ifshow" @tap="ableClose" @touchmove.stop.prevent class="popup-layer">
		<div ref="popRef" class="popup-content" @tap.stop="stopEvent" :style="_location">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'popup-layer',
		props: {
			direction: {
				type: String,
				default: 'bottom', // 方向  top，bottom，left，right 
			},
			autoClose: {
				type: Boolean,
				default: true,
			},
			isTransNav: {
				type: Boolean,
				default: false
			},
			navHeight: {
				type: Number,
				default: 0
			},
			tabHeight: {
				type: Number,
				default: 0
			},
			isShow: {
				type: Object,
				default: function(){
					return {
						val: false
					}
				}
			}
		},
		data() {
			return {
				ifshow: false, // 是否展示
				translateValue: -100, // 位移距离
				timer: null,
				iftoggle: false,
			};
		},
		created(){
			this.close()
		},
		watch:{
			isShow(value){
				value.val ? this.show():this.close()
			}
		},
		computed: {
			_translate() {
				const transformObj = {
					'top': `transform:translateY(${-this.translateValue}%)`,
					// 'bottom': `transform:translateY(calc(${this.translateValue}% + ${this.tabHeight}px))`,
					'bottom': `transform:translateY(${this.translateValue}%)`,
					'left': `transform:translateX(${-this.translateValue}%)`,
					'right': `transform:translateX(${this.translateValue}%)`
				};
				return transformObj[this.direction]
			},
			_location() {
				const positionValue = {
					'top': 'bottom:0px;width:100%;',
					'bottom': `top:${this.navHeight}px;width:100%;`,
					'left': 'right:0px;height:100%;',
					'right': 'left:0px;height:100%;',
				};
				return positionValue[this.direction] + this._translate;
			}
		},
		methods: {
			show() {
				let _this = this;
				this.ifshow = true;
				let _open = setTimeout(() => {
					if (_this.isTransNav) {
						this.translateValue = this.navHeight;
					} else {
						this.translateValue = 0;
					}
					_open = null;
				}, 10)
				let _toggle = setTimeout(() => {
					this.iftoggle = true;
					_toggle = null;
				}, 10);
			},
			close() {
				if (this.timer !== null || !this.iftoggle) {
					return;
				}
				this.translateValue = -100 - this.navHeight;

				this.timer = setTimeout(() => {
					this.ifshow = false;
					this.timer = null;
					this.iftoggle = false;
				}, 10);
				this.$emit("close")
			},
			ableClose() {
				if (this.autoClose) {
					this.close();
				}
			},
			stopEvent(event) {}
		}
	}
</script>

<style lang="scss" scoped>
	.popup-layer {
		position: fixed;
		z-index: 20;
		background: rgba(0, 0, 0, .5);
		width: 100%;
		height: 630px;
		left: 0px;
		overflow: hidden;
		transition: all .6s;
	}

	.popup-content {
		position: fixed;
		z-index: 20;
		transition: all .4s cubic-bezier(.22,.5,.63,1.04);
	}
</style>
