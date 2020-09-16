<template>
    <div class="bottom-bar">
        <div :class="['all-check',{'is-all-check':isAllCheck}]" @click="allCheck">全选<span></span></div>
        <div class="total-price">合计: {{ totalPrice }}</div>
        <div class="go-pay">去结算 ({{ payCount }})</div>
    </div>
</template>

<script>
    export default {
        name:"CarBottombar",
        computed:{
            totalPrice(){
                return this.$store.state.carList.reduce((prev,item,next) => {
                    if(item.isClick) {
                        return prev += item.realPrice * item.count
                    }
                    return prev;
                },0)
            },
            payCount(){
                return this.$store.state.carList.length - this.$store.state.carList.filter(item => !item.isClick).length
            },
            isAllCheck(){
                if(this.$store.state.carList.length === 0) return false;
                return this.$store.state.carList.filter(item => item.isClick).length === this.$store.state.carList.length
            }
        },
        methods:{
            allCheck(){
                if(this.$store.state.carList.length === 0) return;
                let check_count = this.$store.state.carList.filter(item => item.isClick).length
                if(check_count != this.$store.state.carList.length) {
                    // 没有全选时做些什么
                    this.$store.state.carList.forEach(item => {
                        item.isClick = true
                    })
                }else {
                    // 全选时做些什么
                    this.$store.state.carList.forEach(item => {
                        item.isClick = false
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .bottom-bar {
        width:100vw;
        height:12vw;
        position:fixed;
        bottom:13.7vw;
        left:0;
        background:#ecf0f1;
        display:flex;
        align-items:center;
        z-index:100;
    }
    .all-check {
        width:30%;
        height:inherit;
        display:flex;
        align-items:center;
        padding-left:1em;
    }
    .all-check > span {
        width:5.556vw;
        height:5.556vw;
        border-radius:50%;
        border:0.278vw solid #ccc;
        margin-left:2.778vw;
    }
    .total-price {
        width:40%;
        height:inherit;
        font-size:5vw;
        display:flex;
        align-items:center;
    }
    .go-pay {
        flex:1;
        height:inherit;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:#ff7979;
        color:#fff;
    }
    .is-all-check > span {
        background:#ff7979;
    }
</style>