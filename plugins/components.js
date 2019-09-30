import Vue from 'vue'
import Header from '@/components/common/header.vue'
import Footer from '@/components/common/footer.vue'
import Image from '@/components/mgoi-img.vue'


Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('mImage', Image)

Vue.directive('hoverClass', {
  bind(el, binding) {
    let timeoutflag  = null
    let timer = new Date()
    el.ontouchstart = () => {  
      if( (new Date() - timer) < 500 ){
        clearTimeout(timeoutflag)
      }
      el.classList.add(binding.value)
    }
    el.ontouchend = () => {
      timer = new Date()
      if(!binding.value) return;
      timeoutflag = setTimeout(function(){
        el.classList.remove(binding.value)
      },500)
    }
  }
})