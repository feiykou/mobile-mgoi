<template>
  <div class="about-wrap set-size">
      <van-tabs class="tabs-wrap" v-model="activeName" title-active-color="#000" :border="false" color="#000" @click="handleClick">
          <van-tab title="唔该理念" name="about">
              <div class="about-item">
                  <nuxt-child></nuxt-child>
              </div>
          </van-tab>
          <van-tab title="唔该新闻" name="news">
              <nuxt-child name="news"></nuxt-child>
          </van-tab>
          <van-tab title="唔该招聘" name="recruit"><nuxt-child name="recruit"></nuxt-child></van-tab>
          <van-tab title="联系唔该" name="contact"><nuxt-child name="contact"></nuxt-child></van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
    layout: 'main',
    data() {
      return {
        activeName: 'about',
        isShowTab: true
      };
    },
    created() {
        this.setTab(this.$route.hash)
    },
    watch: {
        '$route': function(route){
            const hash = route.hash
            this.setTab(hash)
        }
    },
    methods: {
        handleClick(name, title) {
            this.activeName = name
        },
        setTab(hash){
            if(!hash) return;
            let tabName = ''
            switch(hash){
                case '#news':
                    tabName = 'news'
                    break;
                case '#recruit':
                    tabName = 'recruit'
                    break;
                case '#contact':
                    tabName = 'contact'
                    break;
                default:
                    tabName = 'about'
            }
            this.activeName = tabName
        }
    },
    components: {
    }
}
</script>

<style lang="scss">
  @mixin font-dpr($font-size: 12px){
    font-size: $font-size!important;
    [data-dpr="2"] & {
        font-size: $font-size * 2!important;
    }

    [data-dpr="3"] & {
        font-size: $font-size * 3!important;
    }
  }


  .van-tabs__wrap{
    height: 60px!important;
    margin-bottom: 50px;
  }
  .set-size{
    .van-ellipsis{
      @include font-dpr(12px);
    }
    .van-tabs__wrap,.van-cell__title {
      @include font-dpr(14px);
    }
  }
  .about-wrap{
      padding: 60px 50px;
      .el-tabs__nav-wrap::after{
        height: 0!important;
      }
      .el-tabs__nav{
          display: flex;
          float: none!important;
          justify-content: space-between;
          .el-tabs__active-bar{
              display: none;
          }
          &>div.el-tabs__item{
              display: flex;
              justify-content: center;
              align-items: center;
              height: 72px;
              width: 280px;
              padding: 0;
              &::after{
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-12px);
                height: 20px;
                width: 2px;
                background-color: #000;
              }
              &:nth-last-child(1)::after{
                opacity: 0;
              }
              &.is-active{
                  border-bottom: 0;
                  color: #000!important;
                  opacity: 0.5;
              }
          }
      }
  }
</style>