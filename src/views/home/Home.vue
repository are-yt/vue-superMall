<template>
    <div id="home">
        <home-navbar/>
        <back-top @backTop="backTop" v-show="showBackBtn"/>
        <home-tab-control class="tab-control2" :theme="['流行','新款','精选']" @chooseItem="chooseItem" ref="tabControl2" v-show="showTabControl2"/>
        <scroll ref="scroll" class="scroll" :pull-up-load="true" :probe-type="3" @pullUpLoad="pullUpLoad" @scrolling="scrolling">
            <home-swiper :banners="banners" @swiperLoad="swiperLoad"/>
            <home-recommend :recommend="recommends" @recommendLoad="recommendLoad"/>
            <home-feature @featureLoad="featureLoad"/>
            <home-tab-control :theme="['流行','新款','精选']" @chooseItem="chooseItem" ref="tabControl1"/>
            <home-goods-list :goods-list="goods[currentGoods].list"/>
        </scroll>
    </div>
</template>

<script>
import HomeNavbar from "./childComps/HomeNavbar.vue"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import HomeFeature from "./childComps/HomeFeature.vue"
import HomeRecommend from "./childComps/HomeRecommend.vue"
import HomeTabControl from "components/tabControl/TabControl.vue"
import HomeGoodsList from "./childComps/HomeGoodsList.vue"
import Scroll from "components/scroll/Scroll.vue"
import BackTop from "components/backTop/BackTop.vue"

import { getHomeData,getHomeGoodsList } from "request/home.js"
import { debounce } from "@/tool/debounce.js"
export default {
    name:"Home",
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'sell':{page:0,list:[]},
                'new':{page:0,list:[]}
            },
            currentGoods:"pop",
            tabControlOffsetTop:0,
            showTabControl2:false,
            showBackBtn:false,
            refreshCount:0
        }
    },
    components: {
        HomeNavbar,
        HomeSwiper,
        HomeFeature,
        HomeRecommend,
        HomeTabControl,
        HomeGoodsList,
        Scroll,
        BackTop
    },
    created(){
        this._getHomeData()
        // 请求默认商品数据
        this.getGoodsList('pop')
        this.getGoodsList('sell')
        this.getGoodsList('new')
    },
    mounted(){
        // function debounce(func){
        //     let timer = null
        //     return function(){
        //         timer && clearTimeout(timer)
        //         timer = setTimeout(() => {
        //             func()
        //             console.log(1)
        //         },50)
        //     }
        // }
        // let loadDebounce = debounce(this.$refs.scroll.refresh)
        // this.$bus.$on("loadFinish",() => loadDebounce())
        let loadDebounce = debounce(this.$refs.scroll.refresh)
        this.$bus.$on("loadFinish",() => loadDebounce())
    },
    watch:{
        refreshCount(){
            this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
        }
    },
    methods:{
        _getHomeData(){
            getHomeData().then(res => {
                // swiper数据
                this.banners = res.data.data.banner.list
                // recommend数据
                this.recommends = res.data.data.recommend.list
            })
        },
        swiperLoad(){
            this.$refs.scroll.refresh()
            // console.log(1)
            // this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
            this.refreshCount += 1
        },
        recommendLoad(){
            this.$refs.scroll.refresh()
            // console.log(2)
            // this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
            this.refreshCount += 1
        },
        featureLoad(){
            this.$refs.scroll.refresh()
            // console.log(3)
            // this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop
            this.refreshCount += 1
        },
        async pullUpLoad(){
            await this.getGoodsList(this.currentGoods)
            this.$refs.scroll.finishLoad()
        },
        getGoodsList(type){
            // 请求商品列表数据
            getHomeGoodsList(type,this.goods[type].page+1).then(res => {
                this.goods[type].list.push(...res.data.data.list)
                this.goods[type].page += 1
            })
        },
        chooseItem(index){
            switch(index) {
                case 0:
                    this.currentGoods = "pop"
                    break;
                case 1:
                    this.currentGoods = "new"
                    break;
                case 2:
                    this.currentGoods = "sell"
                    break;
                default:this.currentGoods = "pop"
            }
            this.$refs.tabControl2.currentIndex = index
            this.$refs.tabControl1.currentIndex = index
        },
        scrolling(position){
            this.showTabControl2 = (-position) >= this.tabControlOffsetTop - 15
            this.showBackBtn = (-position) >= 1000
        },
        backTop(){
            this.$refs.scroll.backTo(0)
        }
    },
    activated(){
        this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
    .scroll {
        width:100vw;
        height:calc(100vh - 50px - 45px);
        overflow:hidden;
    }
    .tab-control2 {
        position:absolute;
        top:12.222vw;
        left:0;
        z-index:100;
        background:#fff; 
    }
</style>