<template>
    <div class="home-feature">
        <a href="https://www.baidu.com/">
            <img src="~assets/images/home/feature.jpg" @load="featureLoad">
        </a>    
    </div>
</template>

<script>
    export default {
        name:"HomeFeature",
        methods:{
            featureLoad(){
                this.$emit("featureLoad")
            }
        }
    }
</script>

<style scoped>
    .home-feature {
        width:100%;
        height:70vw;
        background:red;
    }
    .home-feature > a {
        display:block;
        width:100%;
        height:100%;
    }
    .home-feature > a > img {
        display:block;
        width:100%;
        height:100%;
    }
</style>