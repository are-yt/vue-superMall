import { request } from "./index.js"
export function getCategoryData(){
    return request({
        url:"/category"
    })
}
export function getSubCategories(maitKey) {
    return request({
        url:"/subcategory",
        params:{
            maitKey
        }
    })
}
export function getCategoryDetail(miniWallkey,type) {
    return request({
        url:"subcategory/detail",
        params:{
            miniWallkey,
            type
        }
    })
}