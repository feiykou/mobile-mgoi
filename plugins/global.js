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
Vue.directive('anchor', Anchor)



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