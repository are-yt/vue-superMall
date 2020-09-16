import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        carList:[]
    },
    mutations:{
        addCarList(state,payload){
            state.carList.push(payload)
        },
        updataGoodsInfo(state,payload) {
            state.carList.filter(item => {
                if(item.iid === payload.iid) {
                    item.count++
                }
            })
        }
    },
    actions:{
        addGoodsInfo(content,payload){
            let hasGoods = false
            return new Promise((resolve,reject) => {
                if(content.state.carList.length === 0) {
                    // 一开始啥都没有，直接添加进购物车
                    payload.count = 1
                    payload.isClick = false
                    content.commit("addCarList",payload)
                    resolve("商品已添加进购物车")
                    return;
                }
                content.state.carList.filter(item => {
                    if(item.iid === payload.iid) {
                        // 已存在该商品做些什么处理
                        payload.count++
                        content.commit("updataGoodsInfo",payload)
                        hasGoods = true
                        resolve("商品数量加1")
                        return true;
                    }
                })
                if(!hasGoods) {
                    // 不存在该商品又做些什么处理
                    payload.count = 1
                    payload.isClick = false
                    content.commit("addCarList",payload)
                    resolve("商品已添加进购物车")
                }
            })
        }
    }
})
export default store