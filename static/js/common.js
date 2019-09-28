// 头部bar动画
let curTop = 0
const tabBarAnimate = function(e){
    let mark = true
    const distance = curTop - e.scrollTop
    if(e.scrollTop < 60){
        if(mark == this.isShowTab) return;
        this.isShowTab = true
        return;
    }
    if(Math.abs(distance) > 50){
        mark = distance > 0 ? true : false
        curTop = e.scrollTop
        if(mark == this.isShowTab) return;
		this.isShowTab = mark
    }
}

module.exports = {
    tabBarAnimate
}