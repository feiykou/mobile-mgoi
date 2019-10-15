import api from './api'

export default {

    // 获取父级所有分类
    getAlbumList(cate_id=0) {
        if(cate_id <= 0) cate_id=0;
        return api.fetchGet(`album/list/${cate_id}`);
    },

    getSpecialDetail(id) {
      return api.fetchGet(`album/${id}/detail`);
    }
}
