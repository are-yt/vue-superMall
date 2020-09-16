<template>
    <div class="wrapper" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    export default {
        name:"Scroll",
        data(){
            return {
                scroll:null
            }
        },
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            },
            isClick:{
                type:Boolean,
                default:true
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.scroll,{
                probeType:this.probeType, // 是否监听滚动
                pullUpLoad:this.pullUpLoad, // 是否允许上拉加载
                click:this.isClick // 滚动区域内是否可以出发点击事件
            })
            // 设置运行滚动后给当前scroll添加滚动监听事件
            this.probeType !== 0 && this.probeType !== 1 && this.scroll.on("scroll",position => {
                this.$emit("scrolling",position.y)
            })
            // 设置运行上拉加载时给当前scroll添加上拉加载监听事件
            this.pullUpLoad && this.scroll.on("pullingUp",() => {
                this.$emit("pullUpLoad")
            })
        },
        methods:{
            backTo(y,x=0,time = 1000) {
                this.scroll.scrollTo(x,y,time)
            },
            refresh() {
                this.scroll.refresh() // 滚动区域的html结构发生变化时需要重新计算可滚动高度
            },
            finishLoad(){
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>