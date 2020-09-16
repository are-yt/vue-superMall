<template>
    <div class="goods-params">
        <table class="rule">
            <tbody>
                <tr v-for="(item,index) in params.goodsRule" :key="index">
                    <td v-for="(item,index) in item" :key="index*2">{{ item }}</td>
                </tr>
            </tbody>
        </table>
        <table class="params">
            <tbody>
                <tr v-for="item in params.goodsParams" :key="item.key">
                    <td>{{ item.key }}</td>
                    <td>{{ item.value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:"DetailGoodsParams",
        props:{
            params:{
                type:Object,
                default(){ return {} }
            }
        },
    }
</script>

<style scoped>
    .goods-params {
        width:100vw;
    }
    .rule , .params {
        width:100%;
        padding:0 1em;
    }
    .rule tr , .params tr {
        line-height:3em;
    }
    .rule tr > td , .params tr > td {
        color:#ff7979;
    }
    .rule tr > td:nth-child(1) , .params tr > td:nth-child(1) {
        color:inherit;
    }
    .params tr {
        display:flex;
        align-items:center;
    }
    .params tr > td:nth-child(1) {
        width:24.5vw;
    }
</style>