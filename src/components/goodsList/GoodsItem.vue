<template>
    <div class="goods-item">
        <img v-lazy="( goods.img || goods.image || goods.show.img)" @load="goodsLoad">
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-info">
            <span class="goods-price">￥{{ goods.price }}</span>
            <div class="goods-cfav">
                <img src="~assets/images/common/collect.svg">
                <span>{{ goods.cfav }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"GoodsItem",
        props:{
            goods:{
                type:Object,
                default(){ return {} }
            },
            isBus:{
                type:Boolean,
                default:true
            }
        },
        data(){
            return {
                debounce:null
            }
        },
        methods:{
            goodsLoad(){
                if(this.isBus) {
                    this.$bus.$emit("loadFinish")
                }
                this.$emit("goodsLoad")
            }
        }
    }
</script>

<style lang="less" scoped>
     .goods-item {
         width:45%;
         margin:.5em 0;
         img {
             width:100%;
            //  height:55.556vw;
             border-radius:1.389vw;
         }
         .goods-info {
             display:flex;
             justify-content:space-around;
             .goods-cfav {
             display:flex;
             justify-content:space-around;
             align-items:center;
             color:#ccc;
             margin-top:.3em 0;
             img {
                 width:4.167vw;
                 height:4.167vw;
             }
         }
         .goods-price {
            color:orange;
         }
     }
     .goods-title {
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    } 
}
</style>