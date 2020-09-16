<template>
    <div class="list-item">
        <div class="item-logo"><slot name="item-logo"></slot></div>
        <div :class="['item-desc',{'item-last':isLast}]"><slot name="item-desc"></slot></div>
    </div>
</template>

<script>
    export default {
        name:"AnotherListItem",
        props:{
            isLast:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
    .list-item {
        width:100vw;
        display:flex;
        padding:1em 0;
    }
    .item-logo {
        width:15%;
    }
    .item-logo > img {
        width:25px;
        height:25px;
        display:block;
        margin:0 auto;
    }
    .item-desc {
        flex:1;
        padding-bottom:1em;
        border-bottom:2px solid #f5f6fa;
    }
    .item-last {
        border:none;
        padding-bottom:0;
    }
    .item-desc > div {
        font-size:5vw;
    }
</style>