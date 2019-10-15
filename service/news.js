
import api from './api'

export default{
    // 全部新闻
	getAllNews(){
        return api.fetchGet('/news/all');
    },

    // 新闻详情
	getNewsDetail(id=0){
        return api.fetchGet(`/news/${id}`);
    },

    // 上下篇
    getTopBottomData(id){
        return api.fetchGet(`news/topBottom/${id}`);
    }

    
}