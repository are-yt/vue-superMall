<template>
    <scroll class="scroll" ref="scroll">
        <div class="right-content" v-if="subCategories.length && Object.keys(categoryDetail).length">
            <div class="sub-categories">
                <a v-for="(item,index) in subCategories" :key="index" :href="item.link">
                    <img v-lazy="item.image" @load="subCategoriesLoad">
                    <span>{{ item.title }}</span>
                </a>
                <a v-for="item in 4 - subCategories.length % 3" :key="item*-1"></a>
            </div>
            <tab-control @chooseItem="chooseItem" class="tab-control" :theme="['综合','新品','销量']"/>
            <goods-box class="goods-box">
                <goods-item v-for="(item,index) in categoryDetail[currentType]" :key="index" :goods="item" @goodsLoad="goodsLoad" :is-bus="false"/>
            </goods-box>
        </div>
    </scroll>
</template>

<script>
import Scroll from "components/scroll/Scroll.vue"
import TabControl from "components/tabControl/TabControl.vue"
import GoodsBox from "components/goodsList/GoodsBox.vue"
import GoodsItem from "components/goodsList/GoodsItem.vue"

import { debounce } from "@/tool/debounce.js"
export default {
    name:"CategoryRightContent",
    props:{
        subCategories:{
            type:Array,
            default(){ return [] }
        },
        categoryDetail:{
            type:Object,
            default(){ return {} }
        }
    },
    data(){
        return {
            debounce:null,
            currentType:'pop'
        }
    },
    components:{
        Scroll,
        TabControl,
        GoodsBox,
        GoodsItem
    },
    created(){
        this.debounce = debounce(this.goRefresh)
    },
    methods:{
        subCategoriesLoad(){
            this.debounce()
        },
        goRefresh(){
            this.$refs.scroll.refresh()
        },
        goodsLoad(){
            this.debounce()
        },
        chooseItem(index) {
            switch(index) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = 'sell'
                    break;
                default:this.currentType = 'pop'
            }
        }
    },
    activated(){
        this.$refs.scroll.refresh()
    }
}
</script>

<style lang="less" scoped>
    .scroll {
        flex:1;
        height:calc(100vh - 15vw);
        overflow:hidden;
    }
    .right-content {
        width:100%;
        .sub-categories {
            width:100%;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            a {
                width:30%;
                text-align:center;
                margin:.5em 0;
                text-decoration:none;
                color:#000;
                img {
                    display:block;
                    width:100%;
                    height:55px;
                }
            }
        }
    }
    .tab-control {
        width:100%;
    }
    .goods-box {
        width:100%;
    }
</style>