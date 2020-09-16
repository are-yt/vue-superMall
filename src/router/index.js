import vueRouter from "vue-router"
import Vue from "vue"
Vue.use(vueRouter)
const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Car = () => import("../views/car/Car.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Detail = () => import("../views/detail/Detail.vue")
const router = new vueRouter({
    routes:[
        {path:"",redirect:"/home"},
        {path:"/home",component:Home,name:"home"},
        {path:"/category",component:Category,name:"category"},
        {path:"/car",component:Car,name:"car"},
        {path:"/profile",component:Profile,name:"profile"},
        {path:"/detail",component:Detail,name:"detail"},
        {path:"*",redirect:"/home"}
    ],
    mode:"history"
})
export default router