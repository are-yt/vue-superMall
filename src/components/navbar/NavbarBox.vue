<template>
    <div class="navbar-box">
        <div class="leftContent"><slot name="left"></slot></div>
        <div class="centerContent"><slot name="center"></slot></div>
        <div class="rightContent"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name:"NavbarBox"
    }
</script>

<style scoped>
    .navbar-box {
        display:flex;
        width:100vw;
        height:12.222vw;
        background:hotpink;
        justify-content:space-around;
        align-items:center;
        box-shadow:0 .5px 1px 1px #ccc;
    }
    .leftContent ,.centerContent ,.rightContent {
        height:100%;
    }
    .leftContent {
        width:20%;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .centerContent {
        flex:1;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .rightContent {
        width:20%;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
</style>