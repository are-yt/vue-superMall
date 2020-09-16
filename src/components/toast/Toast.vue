<template>
    <div class="toast" v-show="isShow">
        {{ message }}
    </div>
</template>

<script>
    export default {
        name:"Toast",
        data(){
            return {
                message:"",
                isShow:false,
                timer:null
            }
        },
        methods:{
            show(message="操作结果提示信息未说明",delay=1000){
                this.timer && clearTimeout(this.timer)
                this.isShow = true
                this.message = message
                this.timer = setTimeout(() => {
                    this.isShow = false
                    this.isShow = ""
                },delay)
            }
        }
    }
</script>

<style scoped>
    .toast {
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        padding:1em;
        background:rgba(99, 96, 96, 0.8);
        color:#fff;
    }
</style>