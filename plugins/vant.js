import Vue from 'vue'
import 'vant/lib/index.css';
import {
  Swipe, 
  SwipeItem, 
  Popup, 
  Image,
  Slider,
  Tabs,
  Tab,
  Collapse,
  CollapseItem,
  Lazyload,
  Search
} from 'vant'


Vue.use(Swipe)
  .use(SwipeItem)
  .use(Popup)
  .use(Image)
  .use(Slider)
  .use(Tabs)
  .use(Tab)
  .use(Collapse)
  .use(CollapseItem)
  .use(Search)
  .use(Lazyload)
  
// import Vant from 'vant'

// Vue.use(Vant)