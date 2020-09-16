<template>
    <div class="tab-control">
        <div :class="['item',{active:currentIndex===index}]" v-for="(item,index) in theme" :key="index" @click="chooseItem(index)">{{ item }}</div>
    </div>
</template>

<script>
    export default {
        name:"TabControl",
        props:{
            theme:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            chooseItem(index){
                this.currentIndex = index
                this.$emit("chooseItem",index)
            }
        }
    }   
</script>

<style scoped>
    .tab-control {
        width:100vw;
        display:flex;
        justify-content:space-around;
        align-items:center;
        background:#fff;
    }
    .item {
        padding:.5em 0;
    }
    .active {
        border-bottom:3px solid hotpink;
        color:hotpink;
    }
</style>