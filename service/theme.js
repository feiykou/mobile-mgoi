import api from './api'

export default {

    // 获取产品详情
    getThemeDetail(id){
        if(id <= 0) return;
        return api.fetchGet( `theme/${id}/detail`);
    },

    // 获取主题列表
    getThemeList(cate_id){
        return api.fetchGet( `theme/list/${cate_id}`);
    }

}