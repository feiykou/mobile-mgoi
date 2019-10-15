<template>
	<div class="header-container">
		<div class="header-sec" :style="{height: `${navHeight}px`}">
			<div class="item logo">
				<nuxt-link to="/"><img src="@/static/images/logo.png"/></nuxt-link>
			</div>
			<div class="item-wrap" @click="menuTap">
				<feiy-menu-btn :isShow="isShow"></feiy-menu-btn>
			</div>
		</div>

    <van-popup 
      class="prop-drawer-box" 
      position="top" 
      :overlay="false"
      :duration="0.3"
      v-model="navDrawer" 
      :style="{top: `${navHeight}px`}">
      <div class="drawer-mask">
        <img src="/images/p1.png" style="width: 100%; height: 100%;" alt="" srcset="">
      </div>
      <div class="drawer-wrap">
        <ul class="right-nav">
          <li class="van-hairline--bottom" @click="navClick">
            <nuxt-link to="/"><img src="/images/head/1.png" alt="" srcset=""></nuxt-link>
            <div class="name-desc">
              <nuxt-link to="/">
              <p class="name">首页 San Jip</p>
              </nuxt-link>
            </div>
          </li>
          <li class="van-hairline--bottom" @click="navClick">
            <nuxt-link to="/pets?type=2&cate_id=2">
            <img src="/images/head/2.png" alt="" srcset=""></nuxt-link>
            <div class="name-desc">
              <nuxt-link to="/pets?type=2&cate_id=2">
              <p class="name">猫</p>
              </nuxt-link>
            </div>
          </li>
          <li class="van-hairline--bottom" @click="navClick">
            <nuxt-link to="/pets?type=1&cate_id=3">
            <img src="/images/head/3.png" alt="" srcset=""></nuxt-link>
            <div class="name-desc">
              <nuxt-link to="/pets?type=1&cate_id=3">
              <p class="name">狗</p>
              </nuxt-link>
            </div>
          </li>
          <li class="van-hairline--bottom" @click="navClick">
            <nuxt-link to="/column">
            <img src="/images/head/5.png" alt="" srcset=""></nuxt-link>
            <div class="name-desc">
              <nuxt-link to="/column">
              <p class="name">专栏</p>
              </nuxt-link>
            </div>
          </li>
          <li class="van-hairline--bottom" @click="navClick">
            <nuxt-link to="/about">
            <img src="/images/head/1.png" alt="" srcset=""></nuxt-link>
            <div class="name-desc">
              <nuxt-link to="/about">
              <p class="name">关于我们</p>
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </van-popup>
<!--
    <el-drawer
      :visible.sync="navDrawer"
      direction="ttb"
      custom-class="drawer-box"
      :modal="false"
      :show-close="false"
      :before-close="navDandleClose">
      
    </el-drawer>-->
    <!-- <el-drawer
      class="drawer-container"
      title="我是标题"
      :visible.sync="drawer"
      direction="ltr"
      :before-close="handleClose">
      <span>我来啦!</span>
    </el-drawer> -->
	</div>
</template>

<script>
	import feiyMenuBtn from '@/components/feiy-menu-btn'
	import popupLayer from '@/components/feiy-prop'
  
	export default {
		props: {
			show: Boolean,
			curNavIndex: {
				type: Number,
				default: -1, // 0:首页  1：商品   2：专栏  3：关于  -1：暂无选中
			}
		},
		data(){
			return {
				tabHeight: 65,
        navHeight: 65,
        drawer: false,
        navDrawer: false,
				isShow: { // 是否展示下拉
					val: false
				}
			}
		},
		components:{
			feiyMenuBtn,
			popupLayer
		},
		watch: {
			show: {
				immediate: true,
				handler(newVal, oldVal){
					console.log(newVal)
					this.navHeight = newVal ? 65 : 0
					console.log(this.navHeight)
				}
			}
		},
		methods:{
      navClick(){
        this.setClose()
      },
			menuTap(){
        this.navDrawer = !this.navDrawer
        this.setShow(this.navDrawer)
			},
      handleClose(done) {

      },
      navDandleClose(done) {
        this.setClose()
        done();
      },
      setClose(){
        this.navDrawer = false
        this.setShow()
      },
      setShow(mark=false){
        this.isShow = {
          val: mark
        }
      }
		}
	}
</script>

<style lang="scss" scoped>
  .el-dialog__wrapper{
    top: 60px;
  }
  
  .prop-drawer-box {
    background: linear-gradient(rgba(255,255,255,1) 10%, rgba(255,255,255,.2));
    .drawer-wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 80px 0 30px;
    }
    .drawer-mask{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      filter: blur(160px);
      z-index: -1;
    }

    .right-nav{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 50px;
      li{
        flex: 0 0 280px;
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        &:nth-child(2n){
          margin-left: 30px;
        }
        &::after{
          border-color: #000;
        }
      }
      img{
        flex: 0 0 80px;
        width: 80px;
        height: 75px;
      }
      .name-desc{
        padding-left: 30px;
      }
    }
  }
  .v-modal{
    top: 60px;
  }
  .drawer-container{
    .el-drawer{
      width: 68%!important;
    }
  }
	
	.nav-search-wrap{
		display: flex;
		align-items: center;
		height: 65px;
		margin-bottom: 30px;
		color: #fff;
	}
	
	.header-container{
		position: relative;
		z-index: 21;
		transition: all .3s;
	}
	.header-sec{
		position: fixed;
		left: 0;
    right: 0;
    padding-left: 25px;
		z-index: 3000; 
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		transition: all .3s;
		overflow: hidden;
		border-bottom: 2px solid #eee;
		&>div{
			display: flex;
			align-items: center;
			height: 100%;
		}
		.item-wrap{
      height: 100%;
      padding-right: 25px;
			.item{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 94px;
				height: 100%;
			}
		}
		background-color: #fff;
	}
	.logo{
		flex: 1;
    a{
      line-height: 1;
    }
		img{
			width: 358px;
      height: 75px;
      vertical-align: middle;
		}
	}
	
	
	.search{
		
		img{
			width: 32px;
			height: 32px;
		}
	}
	.navbar-wrap{
		padding: 30px 22px 0 60px;
		.nav-list{
			display: flex;
			flex-wrap: wrap;
			border-top: 2px solid #bababa;
			border-left: 2px solid #bababa;
			.item{
				box-sizing: border-box;
				width: 50%;
				height: 98px;
				background-color: #fff;
				color: #666;
				border-right: 2px solid #bababa;
        border-bottom: 2px solid #bababa;
        a{
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
				&.active{
					background-color: rgba(255,255,255,.86)
				}
			}
		}
	}
</style>
