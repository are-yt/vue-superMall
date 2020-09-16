<template>
    <swiper class="wrapper-box" ref="swiper" v-if="swiperList.length">
        <swiper-item v-for="(item,index) in swiperList" :key="index">
            <a href="javascript:void(0)">
                <img :src="item" @load="swiperLoad">
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
    import { Swiper,SwiperItem } from "components/swiper/index.js"
    export default {
        name:"DetailSwiper",
        components:{
            Swiper,
            SwiperItem
        },
        props:{
            swiperList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                isLoad:false
            }
        },
        methods:{
            stopTimer() {
		        this.$refs.swiper.stopTimer()
            },
            startTimer() {
		        if (this.$refs.swiper) {
                    this.$refs.swiper.startTimer()
                }
            },
            swiperLoad(){
                !this.isLoad && this.$emit("swiperLoad")
                this.isLoad = true
            }
        }
    }
</script>

<style scoped>
    .wrapper-box {
        height:66.667vw;
    }
</style>
