import Vue from 'vue'
import {
  Swipe, 
  SwipeItem, 
  Popup, 
  Image,
  Slider,
  Tabs,
  Tab,
  Collapse,
  CollapseItem
} from 'vant'
import 'vant/lib/index.css';

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Popup)
  .use(Image)
  .use(Slider)
  .use(Tabs)
  .use(Tab)
  .use(Collapse)
  .use(CollapseItem)
  