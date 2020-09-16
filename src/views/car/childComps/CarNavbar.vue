<template>
    <div class="nav-bar">
        <span class="car-title">购 物 车({{ $store.state.carList.length }})</span>
    </div>
</template>

<script>
    export default {
        name:"CarNavbar"
    }
</script>

<style scoped>
    .nav-bar {
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100vw;
        height:12.222vw;
        background:#ff7979;
        color:#fff;
    }
    .car-title {
        font-size:4vw;
    }
</style>