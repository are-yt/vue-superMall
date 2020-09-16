<template>
    <div class="profile">
        <navbar/>
        <scroll class="scroll" ref="scroll">
            <control/>
            <card-package/>
            <more-item/>
        </scroll>
    </div>
</template>

<script>
import Navbar from "./childComps/ProfileNavbar.vue"
import Control from "./childComps/ProfileControl.vue"
import CardPackage from "./childComps/ProfileCardPackage.vue"
import MoreItem from "./childComps/ProfileMoreItem.vue"
import Scroll from "components/scroll/Scroll.vue"
export default {
    name:"Profile",
    components:{
        Navbar,
        Control,
        CardPackage,
        MoreItem,
        Scroll
    },
    mounted(){
        setTimeout(() => {
            console.log("刷新高度")
            this.$refs.scroll.refresh()
        },3000)
    }
}
</script>

<style scoped>
    .profile {
        width:100vw;
        height:100vh;
        background:#f5f6fa;
    }
    .scroll {
        height:calc(100vh - 12.222vw - 14.889vw);
        overflow:hidden;
    }
</style>