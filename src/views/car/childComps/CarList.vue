<template>
    <div class="car-list">
        <div class="list-item" v-for="(item,index) in carList" :key="index">
            <span :class="['goods-state',{'is-click':item.isClick}]" @click="changeState(index)"></span>
            <span class="goods-logo"><img :src="item.logo"></span>
            <span class="goods-info">
                <div class="goods-title">{{ item.title }}</div>
                <div class="goods-desc">商品描述：{{ item.title }}</div>
                <div class="price">单价：{{ item.realPrice }}</div>
                <div class="count">数量：{{ item.count }}</div>
            </span>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex"
    export default {
        name:"CarList",
        computed:{
            ...mapState(['carList'])
        },
        methods:{
            changeState(index){
                this.carList[index].isClick = !this.carList[index].isClick
                let check_count = this.carList.filter(item => item.isClick).length
                if(check_count === this.carList.length) {
                    
                }
            }
        }
    }
</script>

<style scoped>
    .car-list {
        width:100vw;
    }
    .list-item {
        width:inherit;
        height:41.667vw;
        padding:1em 0;
        border-bottom:1px solid #ccc;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .list-item > .goods-state {
        width:5.556vw;
        height:5.556vw;
        border-radius:50%;
        border:0.278vw solid #ccc;
    }
    .list-item > .goods-logo {
        width:22%;
    }
    .list-item > .goods-logo > img {
        display:block;
        width:100%;
        height:33vw;
        border-radius:1.389vw;
    }
    .list-item > .goods-info {
        flex:.8;
        height:33vw;
    }
    .list-item > .goods-info > div:nth-child(2) {
        margin-top:.5em;
    }
    .list-item > .goods-info > div:nth-child(3) {
        margin-top:.7em;
        font-size:4vw;
        color:#ff7979;
    }
    .list-item > .goods-info > div:nth-child(4) {
        margin-top:.7em;
    }
    .list-item > .goods-info > .goods-title {
        font-size:4vw;
        width:55vw;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        letter-spacing:.1em;
    }
    .list-item > .goods-info > .goods-desc {
        width:55vw;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        color:#ccc;
    }
    .list-item > .goods-info > .other-info {
        width:55vw;
        background:green;
    }
    .list-item > .is-click {
        background:#ff7979;
    }
</style>