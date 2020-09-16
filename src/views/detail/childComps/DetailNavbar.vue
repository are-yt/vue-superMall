<template>
    <navbar-box class="navbar-box">
        <div class="left-content" slot="left" @click="goBack"><img src="~assets/images/common/back.svg"></div>
        <span :class="{'active':currentIndex === index}" v-for="(item,index) in theme" :key="index" slot="center" @click="chooseItem(index)">{{ item }}</span>
    </navbar-box>
</template>

<script>
    import NavbarBox from "components/navbar/NavbarBox.vue"
    export default {
        name:"DetailNavbar",
        data(){
            return {
                theme:['商品','参数','评论','推荐']
            }
        },
        props:{
            currentIndex:{
                type:Number,
                default:0
            }
        },
        components:{
            NavbarBox
        },
        methods:{
            goBack(){
                this.$router.back()
            },
            chooseItem(index){
                this.$emit("chooseItem",index)
            }
        }
    }
</script>

<style scoped>
    .navbar-box {
        background:#ff7979;
    }
    .left-content > img {
        display:block;
        width:80%;
        height:80%;
    }
    .active {
        color:#fff;
    }
</style>