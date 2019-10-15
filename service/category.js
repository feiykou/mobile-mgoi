
import api from './api'

export default {

  // 栏目分类
  getCategoryCate(times=2, cate_id=0){
    return api.fetchGet( `category/list?times=${times}&cate_id=${cate_id}`);
  }

}