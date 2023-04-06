import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home'
Vue.use(VueRouter)
    //先保存VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
//重写push与replace方法
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
const routes = [
    //重定向
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: { isShow: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login'),
        meta: { isShow: true }
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Register'),
        meta: { isShow: false }
    },
    {
        path: "/search/:keyword?",
        name: 'search',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Search'),
        meta: { isShow: true },
        // props: true //路由传参第一种
        // props:{
        //   a:1,
        //   b:2
        // }
        props: ($route) => {
            return { keyword: $route.params.keyword, k: $route.query.k }
        }
    }
]

const router = new VueRouter({
    routes
})

export default router