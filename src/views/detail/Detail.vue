<template>
    <div id="detail">
        <detail-navbar :current-index="heightLightTagNum" @chooseItem="chooseItem" />
        <back-top @backTop="backTo" v-show="isShowBackTopBtn"/>
        <detail-bottombar @joinCar="joinCar"/>
        <scroll ref="scroll" class="scroll" :probe-type="3" @scrolling="scrolling">
            <detail-swiper :swiper-list="goodsInfo.topImages" @swiperLoad="swiperLoad"/>
            <detail-goods-info :services="shopInfo.services" :goods-info="goodsInfo"/>
            <detail-shop-info :shop-info="shopInfo" @logoLoad="logoLoad"/>
            <detail-goods-demo :demo-list="goodsDemoList" :goods-desc="goodsInfo.title" @demoLoad="demoLoad"/>
            <detail-goods-params ref="goodsParam" :params="goodsParams"/>
            <detail-comments ref="goodsComment" :comments-info="goodsComments"/>
            <detail-recommend ref="goodsRecommend" :recommend-list="recommends"/>
        </scroll>
    </div>
</template>

<script>
import DetailNavbar from "./childComps/DetailNavbar.vue"
import DetailSwiper from "./childComps/DetailSwiper.vue"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue"
import DetailShopInfo from "./childComps/DetailShopInfo.vue"
import DetailGoodsDemo from "./childComps/DetailGoodsDemo.vue"
import DetailGoodsParams from "./childComps/DetailGoodsParams.vue"
import DetailComments from "./childComps/DetailComments.vue"
import DetailRecommend from "./childComps/DetailRecommend.vue"
import DetailBottombar from "./childComps/DetailBottombar.vue"
import Scroll from "components/scroll/Scroll.vue"
import BackTop from "components/backTop/BackTop.vue"

import { getDetail,getRecommend,ItemInfo,ItemParams,Comments,ShopInfo } from "request/detail.js"

import { debounce } from "@/tool/debounce.js"
export default {
    name:"Detail",
    data(){
        return {
            iid:null,
            recommends:[],
            goodsInfo:{},
            goodsParams:{},
            goodsComments:{},
            shopInfo:{},
            goodsDemoList:[],
            tagOffsetTop:[],
            refreshCount:0,
            isShowBackTopBtn:false,
            heightLightTagNum:0,
            changeIf:[0,0]
        }
    },
    components:{
        DetailNavbar,
        DetailSwiper,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailGoodsDemo,
        DetailGoodsParams,
        DetailComments,
        DetailRecommend,
        DetailBottombar,
        Scroll,
        BackTop
    },
    created(){
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(result => {
            const res = result.data.result
            this.goodsInfo = new ItemInfo(res.itemInfo)
            this.goodsParams = new ItemParams(res.itemParams)
            this.goodsComments = new Comments(res.rate.list[0])
            this.shopInfo = new ShopInfo(res.shopInfo)
            this.goodsDemoList = res.detailInfo.detailImage[0].list
        })
        getRecommend().then(res => {
            this.recommends = res.data.data.list
        })
    },
    mounted(){
        let loadDebounce = debounce(this.$refs.scroll.refresh)
        this.$bus.$on("loadFinish",() => {
            loadDebounce()
        })
    },
    methods:{
        swiperLoad(){
            this.refreshCount++
        },
        logoLoad(){
            this.refreshCount++
        },
        demoLoad(){
            this.refreshCount++
        },
        scrolling(pos){
            this.isShowBackTopBtn = -pos >= 1000
            if(-pos >= 0 && -pos < this.tagOffsetTop[0] && this.changeIf[0] === 0) {
                this.heightLightTagNum = 0
                this.changeIf[0] = 1
            }else if(-pos >= this.tagOffsetTop[0] && -pos < this.tagOffsetTop[1] && this.changeIf[0] === 1) {
                this.heightLightTagNum = 1
                this.changeIf[0] = 0
                this.changeIf[1] = 0
            }else if(-pos >= this.tagOffsetTop[1] && -pos < this.tagOffsetTop[2] && this.changeIf[1] === 0) {
                this.heightLightTagNum = 2
                this.changeIf[1] = 1
                this.changeIf[0] = 1
            }else if(-pos >= this.tagOffsetTop[2] && this.changeIf[1] === 1) {
                this.heightLightTagNum = 3
                this.changeIf[1] = 0 
            }
        },
        backTo(where = 0){
            this.$refs.scroll.backTo(where)
        },
        chooseItem(index){
            this.heightLightTagNum = index
            index === 0 ? this.backTo() : this.backTo(-this.tagOffsetTop[index - 1])
        },
        joinCar(){
            let saveGoodsData = {}
            saveGoodsData.iid = this.iid
            saveGoodsData.title = this.goodsInfo.title
            saveGoodsData.realPrice = this.goodsInfo.nowPrice
            saveGoodsData.logo = this.goodsInfo.topImages[0]
            this.$store.dispatch("addGoodsInfo",saveGoodsData).then(res => this.$toast.show(res))
        }
    },
    watch:{
        refreshCount(){
            this.$refs.scroll.refresh()
            this.tagOffsetTop[0] = this.$refs.goodsParam.$el.offsetTop - 48
            this.tagOffsetTop[1] = this.$refs.goodsComment.$el.offsetTop -48
            this.tagOffsetTop[2] = this.$refs.goodsRecommend.$el.offsetTop -48
        }
    }
}
</script>

<style scoped>
    .scroll {
        height:calc(100vh - 44px - 47px);
        overflow:hidden;
    }
</style>