<template>
    <div class="bottom-bar">
        <div class="left">
            <span>
                <div></div>
                <div>客服</div>
            </span>
            <span>
                <div></div>
                <div>店铺</div>
            </span>
            <span>
                <div></div>
                <div>收藏</div>
            </span>
        </div>
        <div class="right">
            <span class="join-car" @click="joinCar">加入购物车</span>
            <span class="go-buy">购买</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"DetailBottombar",
        methods:{
            joinCar(){
                this.$emit("joinCar")
            }
        }
    }
</script>

<style lang="less" scoped>
    .bottom-bar {
        width:100vw;
        display:flex;
        height:13.5vw;
        background:#ff7979;
        position:fixed;
        bottom:0;
        left:0;
        box-shadow:0 -0.139vw 0.278vw 0.278vw #ccc;
        .left {
            width:55%;
            height:inherit;
            // background:yellow;
            display:flex;
            justify-content:space-around;
            align-items:center;
            span {
                width:11.111vw;
                height:inherit;
                text-align:center;
                div:nth-child(1) {
                    width:inherit;
                    height:60%;
                    background:url("~assets/images/detail/detail_bottom.png") no-repeat;
                    background-size:70%;
                    background-position:0.1vw -17.667vw;
                    position:relative;
                    left:5px;
                }
            }
            span:nth-child(2) {
                div:nth-child(1) {
                    background-position:0.278vw -33.4vw;
                }
            }
            span:nth-child(3) {
                div:nth-child(1) {
                    background-position:0 1.2vw;
                } 
            }
        }
        .right {
            flex:1;
            display:flex;
            height:inherit;
            align-items:center;
            .join-car {
                width:60%;
                height:inherit;
                display:flex;
                align-items:center;
                justify-content:space-around;
                background:#e74c3c;
                color:#fff;
            }
            .go-buy {
                flex:1;
                height:inherit;
                display:flex;
                justify-content:space-around;
                align-items:center;
                color:#fff;
                background:#d35400;
            }
        }
    }
</style>