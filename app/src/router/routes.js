import HomeView from '../views/Home'
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
        meta: { isShow: false }
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
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Detail'),
        meta: { isShow: false }
    },
    {
        path: '/addCartSuccess',
        name: 'addCartSuccess',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AddCartSuccess'),
        meta: { isShow: false }
    },
    {
        path: '/shopCart',
        name: 'shopCart',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ShopCart'),
        meta: { isShow: false },

    },
    {
        path: '/trade',
        name: 'trade',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Trade'),
        meta: { isShow: false },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopCart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/pay',
        name: 'pay',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Pay'),
        meta: { isShow: false },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        name: 'paysuccess',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/PaySuccess'),
        meta: { isShow: false }
    },
    {
        path: '/center',
        name: 'center',
        redirect: '/center/myorder',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Center'),
        meta: { isShow: false },
        children: [{
            path: 'myorder',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Center/myOrder'),
        }, {
            path: 'grouporder',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Center/groupOrder'),
        }]
    },

]
export default routes