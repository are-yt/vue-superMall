<template>
    <div class="navbar">
        <navbar-box class="navbar">
            <div slot="center" class="title">个 人 信 息</div>
        </navbar-box>
    </div>
</template>

<script>
    import NavbarBox from "components/navbar/NavbarBox.vue"
    export default {
        name:"ProfileNavbar",
        components:{
            NavbarBox
        }
    }
</script>

<style scoped>
    .navbar {
        background:#ff7979;
        height:12.222vw;
    }
    .title {
        font-size:5vw;
        color:#fff;
    }
</style>