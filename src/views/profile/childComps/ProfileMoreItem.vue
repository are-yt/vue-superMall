<template>
    <div class="more-item">
        <div class="more-item-top">
            <another-list-item>
                <img src="~assets/images/profile/letter.svg" slot="item-logo">
                <div slot="item-desc">我 的 消 息</div>
            </another-list-item>
            <another-list-item>
                <img src="~assets/images/profile/package.svg" slot="item-logo">
                <div slot="item-desc">我 的 积 分</div>
            </another-list-item>
            <another-list-item :is-last="true">
                <img src="~assets/images/profile/VIP.svg" slot="item-logo">
                <div slot="item-desc">会 员 卡</div>
            </another-list-item>
        </div>
        <div class="division"></div>
        <div class="more-item-bottom">
            <another-list-item>
                <img src="~assets/images/profile/shopCar.svg" slot="item-logo">
                <div slot="item-desc">我的购物车</div>
            </another-list-item>
            <another-list-item :is-last="true">
                <img src="~assets/images/profile/download.svg" slot="item-logo">
                <div slot="item-desc">下载购物APP</div>
            </another-list-item>
        </div>
    </div>
</template>

<script>
    import AnotherListItem from "components/anotherList/AnotherListItem.vue"
    export default {
        name:"ProfileMoreItem",
        components:{
            AnotherListItem
        }
    }
</script>

<style scoped>
    .more-item {
        width:100vw;
        background:#fff;
    }
    .more-item-top {
        margin:2em 0;
    }
    .division {
        width:100vw;
        height:2em;
        background:#f5f6fa;
    }
</style>