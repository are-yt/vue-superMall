<template>
    <goods-box>
        <goods-item v-for="(item,index) in recommendList" :key="index" :goods="item"/>
    </goods-box>
</template>

<script>
    import GoodsBox from "components/goodsList/GoodsBox.vue"
    import GoodsItem from "components/goodsList/GoodsItem.vue"
    export default {
        name:"DetailRecommend",
        components:{
            GoodsBox,
            GoodsItem
        },
        props:{
            recommendList:{
                type:Array,
                default(){ return [] }
            }
        }
    }
</script>

<style scoped>
</style>