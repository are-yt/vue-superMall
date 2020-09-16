<template>
    <div class="card-package">
        <div class="item">
            <div><span>0.00</span>元</div>
            <div>我的余额</div>
        </div>
        <div class="item">
            <div><span>0</span>个</div>
            <div>我的优惠</div>
        </div>
        <div class="item">
            <div><span>0</span>分</div>
            <div>我的积分</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProfileCardPackage"
}
</script>

<style scoped>
    .card-package {
        width:100vw;
        padding:1em 0;
        background:#fff;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .card-package > .item {
        width:33%;
        padding:1em 0;
    }
    .card-package > .item > div {
        text-align:center;
    }
    .card-package > .item > div > span {
        font-size:6vw;
        color:#ff7979;
        font-weight:bold;
    }
    .item:nth-child(1) , .item:nth-child(2) {
        border-right:2px solid #f5f6fa;
    }
</style>