<template>
    <div id="shop-car">
        <car-bottombar/>
        <car-navbar/>
        <scroll class="scroll">   
            <car-list/>
        </scroll>
    </div>
</template>

<script>
import CarNavbar from "./childComps/CarNavbar.vue"
import CarList from "./childComps/CarList.vue"
import CarBottombar from "./childComps/CarBottombar.vue"
import Scroll from "components/scroll/Scroll.vue"
export default {
    name:"Car",
    components:{
        CarNavbar,
        CarList,
        CarBottombar,
        Scroll,
    }
}
</script>

<style scoped>
    .scroll {
        height:calc(100vh - 12.222vw - 13.889vw - 12.222vw);
        overflow:hidden;
    }
</style>