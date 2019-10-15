
import api from './api'

export default {
    getSonCate(cateId=0){
        return api.fetchGet(`columnCate/sonCate?cateId=${cateId}`);
    },

    getRescColumn(rescId=2,count=1,id=0){
        return api.fetchGet(`column/resc?rescId=${rescId}&count=${count}&id=${id}`);
    },

    getColumns(cateId=0,page=1,size=10){
        return api.fetchGet(`column/${cateId}?page=${page}&size=${size}`);
    },

    getColumnDetail(id=0){
        return api.fetchGet(`column/detail/${id}`);
    },

    getTopBottomData(id){
        return api.fetchGet(`column/topBottom/${id}`);
    },

    search(q=''){
        return api.fetchGet(`column/search?q=${q}`);
    }
}