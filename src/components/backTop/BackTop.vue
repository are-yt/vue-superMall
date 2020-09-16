<template>
    <div class="back-top" @click="backTop">
        <img src="~assets/images/common/top.png">
    </div>
</template>

<script>
    export default {
        name:"BackTop",
        methods:{
            backTop(){
                this.$emit("backTop")
            }
        }
    }
</script>

<style scoped>
    .back-top {
        position:fixed;
        bottom:10%;
        right:5%;
        z-index:200;
    }
    .back-top > img {
        display:block;
        width:40px;
        height:40px;
    }
</style>