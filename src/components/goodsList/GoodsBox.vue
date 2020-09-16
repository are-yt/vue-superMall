<template>
    <div class="goods-box">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"GoodsBox"
    }
</script>

<style scoped>
    .goods-box {
        display:flex;
        width:100vw;
        flex-wrap:wrap;
        justify-content:space-around;
    }
</style>