<template>
    <tabbar-box>
        <tabbar-item path="/home">
            <img src="~assets/images/tabbar/home.svg" slot="icon">
            <img src="~assets/images/tabbar/ac-home.svg" slot="acicon">
            <span slot="title">首页</span>
        </tabbar-item>
        <tabbar-item path="/category">
            <img src="~assets/images/tabbar/category.svg" slot="icon">
            <img src="~assets/images/tabbar/ac-category.svg" slot="acicon">
            <span slot="title">分类</span>
        </tabbar-item>
        <tabbar-item path="/car">
            <img src="~assets/images/tabbar/shop-car.svg" slot="icon">
            <img src="~assets/images/tabbar/ac-shopcar.svg" slot="acicon">
            <span slot="title">购物车</span>
        </tabbar-item>
        <tabbar-item path="/profile">
            <img src="~assets/images/tabbar/profile.svg" slot="icon">
            <img src="~assets/images/tabbar/ac-profile.svg" slot="acicon">
            <span slot="title">我的</span>
        </tabbar-item>
    </tabbar-box>
</template>

<script>
import TabbarBox from "components/tabbar/TabbarBox.vue"
import TabbarItem from "components/tabbar/TabbarItem.vue"
export default {
    name:"Tabbar",
    components:{
        TabbarBox,
        TabbarItem
    }
}
</script>

<style lang="less" scoped>

</style>