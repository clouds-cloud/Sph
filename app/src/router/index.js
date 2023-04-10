import routes from './routes'
import Vue from 'vue'
import VueRouter from 'vue-router'
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


const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})

export default router