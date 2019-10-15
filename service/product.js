import api from './api'

export default {

    // 获取下级分类
	getSonCate(id=0){
		return api.fetchGet( `cate/sonCate/${id}`);
    },

    // 获取父级所有分类
    getParentCate(id=0){
        if(id <= 0) return [];
        return api.fetchGet(`cate/parents/${id}`);
    },

    // 根据分类，获取产品列表
    getProductsByCate(cateid=0,sort=0,page=1,size=10){
        let url =  `product/list/${cateid}?page=${page}&size=${size}`
        if(sort == 1 || sort == 2){
            url += '&sort=' + sort
        }
        return api.fetchGet( url );
    },

    // 获取产品详情
    getProductDetail(id){
        if(id <= 0) return;
        return api.fetchGet( `product/${id}/detail`);
    },

    // 获取推荐产品
    getRescProduct(rescId=5,count=5,id=0){
        return api.fetchGet( `product/resc?rescId=${rescId}&count=${count}&id=${id}`);
    },

    // 搜索
    searchResult(q='',sort=0,page=1,size=12){
        let qa = q
        if(qa=='undefined') qa = ''
        qa = encodeURI(encodeURI(qa));
        console.log(sort)
        return api.fetchGet(`product/search?q=${qa}&sort=${sort}&page=${page}&size=${size}`)
    }

}
