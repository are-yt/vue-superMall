import { request } from "./index.js"
export function getHomeData(){
    return request({
        url:"home/multidata"
    })
}
export function getHomeGoodsList(type,page) {
    return request({
        url:"home/data",
        params:{
            type,
            page
        }
    })
}