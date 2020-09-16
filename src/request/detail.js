import { request } from "./index.js"
export function getDetail(iid) {
    return request({
        url:"/detail",
        params:{
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:"/recommend"
    })
}
export class ItemInfo {
    constructor(itemInfo) {
        this.discountDesc = itemInfo.discountDesc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.title = itemInfo.title
        this.topImages = itemInfo.topImages
        this.nowPrice = itemInfo.highNowPrice
    }
}
export class ItemParams {
    constructor(itemParams) {
        this.goodsParams = itemParams.info.set
        this.goodsRule = itemParams.rule.tables[0]
    }
}
export class Comments {
    constructor(rate) {
        this.userAvatar = rate.user.avatar
        this.username = rate.user.uname
        this.comments = rate.content
        this.created = rate.created
        this.style = rate.style
    }
}
export class ShopInfo {
    constructor(shopInfo) {
        this.cFans = shopInfo.cFans
        this.cGoods = shopInfo.cGoods
        this.storeName = shopInfo.name
        this.storeLogo = shopInfo.shopLogo
        this.services = shopInfo.services
        this.score = shopInfo.score
    }
}