import Vue from 'vue'


import {
  SCREEN_CLASS,
  SCREEN_SIZE
} from './mutations-type'

function selClass(paddingH=0){
	let type = ''
	if(paddingH  <= -60){
		if(paddingH > -280){
			type =  'screen-sm-max'
		}else{
			type =  'screen-sm-max screen-sm-min'
		}
	}else if(paddingH > -60 && paddingH < 100){
		type =  'screen-mid'
	}else{
		type =  'screen-max'
	}
	return type
}

let ratio = 1
let feiyCalcHeight = 0
function getGapVal({screenWidth,windowHeight}){
	// 等比例高度 --- 算出实际占用的高度
	const rpx = Math.floor(screenWidth / 750 * 100)  /  100,
		px = 1 / rpx
	const calcHeight = ((windowHeight - rpx * 1334) * px).toFixed(2)
	return calcHeight;
}

export const state = () => ({
  screen: 0,
	screenClass: ''
})

export const mutations = {
  changeScreen(state){
    console.log()
    // uni.getSystemInfo({
    //   success: function(res) {
    //     feiyCalcHeight = getGapVal(res)
    //     state.screen = feiyCalcHeight
    //     state.screenClass = selClass(state.screen)
    //   }
    // })
    // uni.onWindowResize((res) => {
    //   state.screen = getGapVal(res.size)
    //   state.screenClass = selClass(state.screen)
    // })
  }
}
export const actions = {
  changeScreenAction({commit},num){
    commit('changeScreen')
  }
}





// getters: {
//   getScreen(state){
//     return state.screen
//   },
//   getScreenClass(state){
//     return state.screenClass
//   }
// },
