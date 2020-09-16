<template>
    <navbar-box>
        <span slot="center" class="home-title">购 物 街</span>
    </navbar-box>
</template>

<script>
    import  NavbarBox from "components/navbar/NavbarBox.vue"
    export default {
        name:"HomeNavbar",
        components: {
            NavbarBox
        }
    }
</script>

<style scoped>
    .home-title {
        font-size:4vw;
        color:#fff;
    }
</style>