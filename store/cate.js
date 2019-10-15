import {
    UPDATE_PRODUCT_CATE,
    UPDATE_PARENT_CATE,
    UPDATE_CATEGORY_CATE
} from './mutations-type'

import api from '@/service/category'
import productModel from '@/service/product'


export const state = () => ({
    productCate: [],
    crumbCate: [],
    categoryCate: []
})

export const mutations = {
    [UPDATE_PRODUCT_CATE] (state, data) {
        state.productCate = data
    },
    [UPDATE_PARENT_CATE] (state, data) {
        state.crumbCate = data
    },
    [UPDATE_CATEGORY_CATE] (state, data) {
        state.categoryCate = data
  }
}

export const actions = {
  
    async getCategoryCate ({ commit }) {
        try {
            let categoryCate = await api.getCategoryCate();
            commit(UPDATE_CATEGORY_CATE, categoryCate)
            return Promise.resolve(categoryCate)
        } catch (error) {
            return Promise.reject(error)
        }
    },

    // async getProductCate ({ commit }) {
    //     try {
    //         let productCate =  await api.getMenuCate();
    //         commit(UPDATE_PRODUCT_CATE, productCate)
    //         return Promise.resolve(productCate)
    //     } catch (error) {
    //         return Promise.reject(error)
    //     }
    // },
    async getParentCate ({ commit }, id) {
        try {
            let crumbCate =  await productModel.getParentCate(id);
            commit(UPDATE_PARENT_CATE, crumbCate)
            return Promise.resolve(crumbCate)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}