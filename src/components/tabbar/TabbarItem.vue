<template>
    <div class="tabbar-item" @click="goWhere">
        <slot name="acicon" v-if="isActive"></slot>
        <slot name="icon" v-else></slot>
        <div :class="{'active':isActive}"><slot name="title"></slot></div>
    </div>
</template>

<script>
export default {
    name:"TabbarItem",
    props:{
        path:{
            type:String,
            required:true
        }
    },
    computed:{
        isActive(){
            return this.$route.path === this.path
        }   
    },
    methods:{
        goWhere(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style lang="less" scoped>
    .tabbar-item {
        width:20%;
        height:100%;
        text-align:center;
        margin-top:0.833vw;
        img {
            width:6.944vw;
            height:6.944vw;
        }
        span {
            position:relative;
            display:block;
        }
        .active {
            color:#f40;
        }
    }
</style>