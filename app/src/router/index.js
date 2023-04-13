import routes from './routes'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    //引入store
import store from '../store'
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
    //路由守卫
router.beforeEach(async(to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;

    // if (token) {
    //     if (to.path == '/login') {
    //         next('/')
    //     } else {
    // next()
    //     }

    // } else {
    //     if (to.path == '/shopCart') {
    //         next('/')
    //     } else {
    //         next()
    //     }

    // }

    if (token) {
        //已经登录而且还想去登录------不行
        if (to.path == "/login") {
            next("/home");
        } else {
            //已经登陆了,访问的是非登录与注册
            //登录了且拥有用户信息放行
            if (name) {
                next();
            } else {
                //登陆了且没有用户信息
                //在路由跳转之前获取用户信息且放行
                try {
                    //获取用户信息
                    await store.dispatch("getUserInfo");
                    // this.$store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token失效从新登录
                    //清除token
                    await store.dispatch("logout");
                    // 回到登录页
                    this.$router.push("/login");
                }
            }
        }
    } else {
        //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
        //未登录去上面这些路由-----登录
        // let toPath = to.path;
        // if (toPath.includes("/trade") || toPath.includes("/pay") || toPath.includes("/center")) {
        //     //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
        //     next("/login?redirect=" + toPath);
        //     // console.log(toPath);
        // } else {
        //去的不是上面这些路由（home|search|shopCart）---放行
        // next();
        // }


        if (to.path == '/shopCart') {
            next('/')
        } else {
            next()
        }
    }
})
export default router