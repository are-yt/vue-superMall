<template>
    <div id="category">
        <navbar/>
        <div class="content-box" v-if="leftContent && Object.keys(rightContent).length">
            <category-tab-menu :tab-list="leftContent" @chooseItem="chooseItem"/>
            <category-right-content :sub-categories="rightContent[currentIndex].subCategories" :category-detail="rightContent[0].categoryDetail"/>
        </div>
    </div>
</template>

<script>
import CategoryTabMenu from "./childComps/CategoryTabMenu.vue"
import CategoryRightContent from "./childComps/CategoryRightContent.vue"
import Navbar from "./childComps/CategoryNavbar.vue"
import Scroll from "components/scroll/Scroll.vue"

import { getCategoryData,getSubCategories,getCategoryDetail } from "request/category.js"
export default {
    name:"Category",
    components:{
        CategoryTabMenu,
        CategoryRightContent,
        Navbar,
        Scroll
    },
    data(){
        return {
            leftContent:[],
            rightContent:{

            },
            currentIndex:0
        }
    },
    created(){
        this._getCategoryData()
    },
    methods:{
        _getCategoryData(){
            getCategoryData().then(res => {
                // 获取左边选项列表数据
                this.leftContent = res.data.data.category.list
                // 初始化列表项的每个子项数据
                for(let i = 0;i < this.leftContent.length;i++) {
                    this.rightContent[i] = {
                        subCategories:[],
                        categoryDetail:{
                            'pop':[],
                            'new':[],
                            'sell':[]
                        }
                    }
                }
                // 初始化数据，第一次进来默认渲染第一个子项的数据
                this._getSubCategories(0)
            })
        },
        _getSubCategories(index){
            const maitKey = this.leftContent[index].maitKey
            this.currentIndex = index
            getSubCategories(maitKey).then(res => {
                this.rightContent[index].subCategories = res.data.data.list
                this.rightContent = {...this.rightContent}
                this._getCategoryDetail('pop')
                this._getCategoryDetail('new')
                this._getCategoryDetail('sell')
            })
        },
        _getCategoryDetail(type){
            const miniWallkey = this.leftContent[this.currentIndex].miniWallkey
            getCategoryDetail(miniWallkey,type).then(res => {
                this.rightContent[this.currentIndex].categoryDetail[type] = res.data
            })
        },
        goRefresh(){
            this.$refs.scroll.refresh()
        },
        chooseItem(index){
            this._getSubCategories(index)
        }
    }
}
</script>

<style scoped>
    .scroll-1 {
        width:100vw;
        height:calc(100vh - 12.222vw - 13.889vw);
        overflow:hidden;
    }
    .content-box {
        display:flex;
        justify-content:space-around;
    }
</style>