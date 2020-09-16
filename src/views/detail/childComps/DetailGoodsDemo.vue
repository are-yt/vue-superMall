<template>
    <div class="goods-demo" v-if="demoList.length">
        <div class="goods-detail-desc">
            <span class="left-top"></span>
            {{ goodsDesc }}
            <span class="right-bottom"></span>
        </div>
        <img v-for="(item,index) in demoList" :key="index"  v-lazy="item" @load="demoLoad">
    </div>
</template>

<script>
    export default {
        name:"DetailGoodsDemo",
        props:{
            demoList:{
                type:Array,
                default(){ return [] }
            },
            goodsDesc:{
                type:String,
                default:""
            }
        },
        data(){
            return {
                loadDebounce:null
            }
        },
        mounted(){
            function debounce(func){
                let timer = null
                return function(){
                    timer && clearTimeout(timer)
                    timer = setTimeout(() => {
                        func()
                    },200)
                }
            }
            this.loadDebounce = debounce(this.goRefresh)
        },
        methods:{
            demoLoad(){
                this.loadDebounce()
            },
            goRefresh(){
                this.$emit("demoLoad")
            }
        }
    }
</script>

<style scoped>
    .goods-demo {
        width:100vw;
        margin-top:1em;
    }
    .goods-detail-desc {
        padding:1em 0;
        position:relative;
    }
    .goods-detail-desc > .left-top {
        position:absolute;
        top:0;
        left:0;
        width:10px;
        height:10px;
        background:#ccc;
    }
    .goods-detail-desc > .right-bottom {
        position:absolute;
        width:2.778vw;
        height:2.778vw;
        right:0;
        bottom:0;
        background:#ccc;
    }
    .goods-detail-desc::before {
        content:"";
        position:absolute;
        width:20%;
        height:1.111vw;
        border-bottom:0.556vw solid #ccc;
        top:0;
        left:2.778vw;
    }
    .goods-detail-desc::after {
        content:"";
        position:absolute;
        width:20%;
        height:1.111vw;
        right:2.778vw;
        bottom:0;
        border-top:0.556vw solid #ccc;
    }
    .goods-demo > img {
        display:block;
        width:100%;
        /* height:105.556vw; */
        margin:.5em 0;
    }
</style>