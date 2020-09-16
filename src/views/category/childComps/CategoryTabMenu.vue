<template>
    <scroll class="scroll" ref="scroll" v-if="tabList.length">
        <div class="tab-menu">
            <div :class="['item',{'is-active':currentIndex === index}]" v-for="(item,index) in tabList" :key="index" @click="chooseItem(index)">{{ item.title }}</div>
        </div>
    </scroll>
</template>

<script>
    import Scroll from "components/scroll/Scroll.vue"
    export default {
        name:"CategoryTabMenu",
        components:{
            Scroll
        },
        data(){
            return {
                currentIndex:0
            }
        },
        props:{
            tabList:{
                type:Array,
                default(){ return [] }
            }
        },
        mounted(){
            setTimeout(() => {
                this.$refs.scroll.refresh()
            }, 500);
        },
        methods:{
            chooseItem(index) {
                this.currentIndex = index
                this.$emit("chooseItem",index)
            }
        }
    }
</script>

<style scoped>
    .scroll {
        width:30vw;
        height:calc(100vh - 12.222vw - 13.889vw);
        overflow:hidden;
    }
    .tab-menu {
        width:100%;
        background:#ff7979;
        color:#fff;
    }
    .item {
        padding:1em 0;
        text-align:center;
        font-size:4vw;
    }
    .is-active {
        background:#fff;
        border-left:2px solid #ff7979;
        color:#000;
    }
</style>