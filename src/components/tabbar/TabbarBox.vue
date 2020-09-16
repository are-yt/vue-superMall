<template>
    <div class="tabbar-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabbarBox"
}
</script>

<style scoped>
    .tabbar-box {
        position:fixed;
        bottom:0;
        left:0;
        width:100vw;
        height:13.611vw;
        background:#ecf0f1;
        box-shadow:0 -.5px 1px 1px #ccc;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
</style>