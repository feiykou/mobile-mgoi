import api from './api'

export default {

  getIndexBanner(){
		return api.fetchGet('index/banner');
	},

  // 上新产品
	getNewsProduct(){
    return api.fetchGet('index/newsProduct');
  },

  // 上新产品
	getRescProduct(){
    return api.fetchGet('index/rescProduct');
  },
  
  // 获取专栏
	getColumn(cateId=0, rescId=1, count=4){
		return api.fetchGet( `column/indexResc?cateId=${cateId}&rescId=${rescId}&count=${count}`);
	},
  
  // 获取礼物分类
  getGiftCate(cateId=98){
      return api.fetchGet( `giftCate/resc?cateId=${cateId}`);
  },

  // 获取菜单分类数据
  getMenuCate(cateId=0){
      return api.fetchGet( `cate/sonAllCate/${cateId}`);
  },

  // 获取菜单分类数据
  getRescTheme(rescId=1){
      return api.fetchGet( `index/rescTheme?rescId=${rescId}`);
  },

  // 栏目分类
  getCategoryCate(){
    return api.fetchGet( `category/list?times=2`);
  }

}