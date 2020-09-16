<template>
    <goods-box v-if="goodsList.length">
        <goods-item @click.native="goDetail(item)" v-for="(item,index) in goodsList" :key="index" :goods="item"/>
    </goods-box>
</template>

<script>
    import GoodsBox from "components/goodsList/GoodsBox.vue"
    import GoodsItem from "components/goodsList/GoodsItem.vue"
    export default {
        name:"HomeGoodsList",
        props:{
            goodsList:{
                type:Array,
                default:[]
            }
        },
        components:{
            GoodsBox,
            GoodsItem
        },
        methods:{
            goDetail(item){
                this.$router.push({name:"detail",params:{iid:item.iid}})
            }
        }
    }
</script>

<style scoped>

</style>