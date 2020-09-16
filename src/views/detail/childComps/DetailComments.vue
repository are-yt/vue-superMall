<template>
    <div class="goods-comments">
        <div class="desc">
            <span>用户评价</span>
            <span>更多</span>
        </div>
        <div class="user-info">
            <img :src="commentsInfo.userAvatar">
            <span>{{ commentsInfo.username }}</span>
        </div>
        <div class="comment-content">
            {{ commentsInfo.comments }}
        </div>
        <div class="by-style">
            <span>{{ createTime }}</span>
            <span>{{ commentsInfo.style }}</span>
        </div>
    </div>
</template>

<script>
    import { format } from "@/tool/format.js"
    export default {
        name:"DetailComments",
        props:{
            commentsInfo:{
                type:Object,
                default(){ return {} }
            }
        },
        computed:{
            createTime(){
                return new Date(this.commentsInfo.created).Format("yyyy-MM-dd")
            }
        }
    }
</script>

<style scoped>
    .goods-comments {
        width:100vw;
        margin-top:1em;
        padding-bottom:1em;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
    }
    .desc {
        display:flex;
        padding:1em 0;
        justify-content:space-between;
    }
    .user-info {
        padding:0 1em;
        display:flex;
        align-items:center;
    }
    .user-info > img {
        display:block;
        width:30px;
        margin-right:1em;
    }
    .user-info > span {
        letter-spacing:.5em;
    }
    .comment-content {
        padding:1em;
        color:#777;
    }
    .by-style {
        padding:0 1em;
    }
    .by-style span:nth-child(1) {
        margin-right:1em;
    }
</style>