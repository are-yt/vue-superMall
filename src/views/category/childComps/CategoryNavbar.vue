<template>
    <div class="navbar">
        <span class="category-title">商 品 分 类</span>
    </div>
</template>

<script>
    export default {
        name:"CategoryNavbar"
    }
</script>

<style scoped>
    .navbar {
        width:100vw;
        height:12.222vw;
        box-shadow:0 1px 1px 1px #ccc;
        background:#ff7979;
        display:flex;
        justify-content:space-around;
        align-items:center;
        color:#fff;
    }
    .category-title {
        font-size:4vw;
    }
</style>