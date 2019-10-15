
import {
    SET_NAV_NAME
} from './mutations-type'

export const state = () => ({
    curname: ''
})

export const mutations = {
    [SET_NAV_NAME] (state, name) {
        state.curname = name
    }
}