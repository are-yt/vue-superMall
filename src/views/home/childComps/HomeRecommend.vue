<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" @load="recommendLoad">
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HomeRecommend",
        props:{
            recommend:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                isLoad:false
            }
        },
        methods:{
            recommendLoad(){
                if(!this.isLoad) {
                    this.$emit("recommendLoad")
                    this.isLoad = true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .recommend {
        width:100vw;
        display:flex;
        justify-content:space-around;
        align-items:center;
        text-align:center;
        .recommend-item {
            padding:1em 0;
            width:20%;
            a {
                display:block;
                width:100%;
                text-decoration:none;
                color:black;
                img {
                    width:100%;
                }
            }
        }
    }
</style>