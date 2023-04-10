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
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Detail'),
        meta: { isShow: false }
    }
]
export default routes