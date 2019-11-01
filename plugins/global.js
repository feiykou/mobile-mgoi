import Vue from 'vue';
import Anchor from '@/utils/anchor'

Vue.mixin({
    methods: {
        $seo(title, content, payload=[]){
            return {
                title,
                meta: [{
                  hid: 'description',
                  name: 'description',
                  content
                }].concat(payload)
            }
        }
    }
})

// hover-class
Vue.directive('hoverClass', {
  bind(el, binding) {
    let timeoutflag  = null
    let timer = new Date()
    el.ontouchstart = () => { 
      if( (new Date() - timer) < 200 ){
        clearTimeout(timeoutflag)
      }
      el.classList.add(binding.value)
    }
    el.ontouchend = () => {
      timer = new Date()
      if(!binding.value) return;
      timeoutflag = setTimeout(function(){
        el.classList.remove(binding.value)
      },300)
    }
  }
})

// 锚点
Vue.directive('anchor', Anchor)



Vue.directive('isIphoneX', {
  bind: function (el, binding) {
      const _local = 'ios'
      let isIphoneX = false
      if (_local === 'ios' && window.screen.height) {
          isIphoneX = window.screen.height > 750 ? true : false
      }
      if (isIphoneX) {
          if (binding.value === 'margin') {
              console.log('use margin')
              el.setAttribute('style', 'margin-bottom: 8vw !important;')
          } else if (binding.value === 'height') {
              console.log('use height')
              el.setAttribute(
                  'style',
                  ` margin-bottom: 15vh !important;min-height: 85vh !important;`
              )
          } else {
              console.log('use padding')
              el.setAttribute('style', 'margin-bottom: 8vw !important;')
          }
      } else {
          if (binding.value === 'height') {
              el.setAttribute(
                  'style',
                  ` margin-bottom: 11vh !important;min-height: 89vh !important;`
              )
          }
      }
  },
  update: function (el, binding) { }
})


const tabBarAnimate = function(){
    let mark = true
    let curTop = this.headTcurTop
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const distance = curTop - scrollTop
    if(scrollTop < 60){
        if(mark == this.isShowTab) return;
        this.isShowTab = true
        return;
    }
    if(Math.abs(distance) > 10){
        mark = distance > 0 ? true : false
        this.headTcurTop = scrollTop
        if(mark == this.isShowTab) return;
		    this.isShowTab = mark
    }
}
Vue.prototype.$tabBarAnimate = tabBarAnimate