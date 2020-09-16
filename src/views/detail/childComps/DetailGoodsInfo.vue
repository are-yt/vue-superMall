<template>
    <div class="goods-info">
        <span class="goods-title">{{ goodsInfo.title }}</span>
        <div class="price-desc">
            <span class="price">{{ goodsInfo.price }}</span>
            <span class="old-price"><del>{{ goodsInfo.oldPrice }}</del></span>
            <span class="discount-desc">{{ goodsInfo.discountDesc }}</span>
        </div>
        <div class="services">
            <span v-for="(item,index) in services" :key="index">
                <img v-if="item.icon" :src="item.icon">
                <div class="replace" v-else></div>
                <span>{{ item.name }}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"DetailGoodsInfo",
        props:{
            goodsInfo:{
                type:Object,
                default(){
                    return {}
                }
            },
            services:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .goods-info {
        width:100vw;
        padding:.3em;
    }
    .goods-title {
        display:block;
        font-size:3.889vw;
    }
    .price-desc {
        margin:.5em 0;
    }
    .price-desc > .price {
        font-size:3.889vw;
        color:#ff7979;
        margin-right:.5em;
    }
    .price-desc > .old-price {
        color:#ccc;
        margin-right:.5em;
    }
    .price-desc > .discount-desc {
        display:inline-block;
        padding:.2em;
        background:#ff7979;
        color:#fff;
        text-align:center;
    }
    .services {
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    .services img {
        width:4.167vw;
        height:4.167vw;
    }
    .services .replace {
        display:inline-block;
        width:4.167vw;
        height:15.001px;
        border:0.278vw solid #ccc;
    }
    .services img , .services .replace {
        position:relative;
        top:0.833vw;
    }
    .services > span {
        margin:.2em 0;
    }
</style>