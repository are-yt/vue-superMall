<template>
    <div class="shop-info">
        <div class="shop-name">
            <img :src="shopInfo.storeLogo" @logoLoad="logoLoad">
            <span>{{ shopInfo.storeName }}</span>
        </div>
        <div class="shop-detail">
            <div class="shop-data">
                <span>
                    <p>{{ shopInfo.cFans }}</p>
                    <span>总销量</span>
                </span>
                <span>
                    <p>{{ shopInfo.cGoods }}</p>
                    <span>全部宝贝</span>
                </span>
            </div>
            <div class="shop-score">
                <div v-for="(item,index) in shopInfo.score" :key="index">
                    <span>{{ item.name }}</span>
                    <span>{{ item.score }}</span>
                    <span class="level" :class="{'is-better':item.isBetter}">{{ item.isBetter | scoreEval }}</span>
                </div>
            </div>
        </div>
        <div class="go-shop"><span>进 店 看 看</span></div>
    </div>
</template>

<script>
    export default {
       name:"DetailShopInfo",
       props:{
           shopInfo:{
               type:Object,
               default(){ return {} }
           }
       },
       filters:{
           scoreEval(val) {
              return val ? "高" : "低"
           }
       },
       methods:{
           logoLoad(){
               this.$emit("logoLoad")
           }
       }
    }
</script>

<style scoped>
    .shop-info {
        width:100vw;
        padding:.5em 0.833vw;
    }
    .shop-name {
        display:flex;
        align-items:center;
    }
    .shop-name > img {
        width:20%;
        margin:0 5% 0 0;
    }
    .shop-name > span {
        font-size:4.444vw;
        font-weight:bold;
        letter-spacing:.5em;
    }
    .shop-detail {
        display:flex;
        align-items:center;
    }
    .shop-data {
        width:55%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:30vw;
        text-align:center;
        line-height:3em;
    }
    .shop-score {
        flex:1;
        line-height:3em;
        text-align:center;
    }
    .shop-score  span {
        margin:0 1.667vw;
    }
    .shop-score .level {
        background:hotpink;
        padding:.4em;
        color:#fff;
    }
    .shop-score .is-better {
        background:#ff7979;
        padding:.4em;
        color:#fff;
    }
    .go-shop {
        display:flex;
        justify-content:space-around;
        margin-top:1em;
    }
    .go-shop > span {
        padding:1em 0;
        width:50%;
        background:#ff7979;
        color:#fff;
        text-align:center;
    }
</style>