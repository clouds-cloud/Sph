import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/mockServe'
// import｛ reqCategoryList｝ from '@/axios'
//三级联动组件--全局组件
import typeNav from '@/components/typeNav'
import Carousel from '@/components/Carousel'

//引入swiper样式
import 'swiper/css/swiper.css'
// import { reqCategoryList } from '@/api'
// import { reqCategoryList } from '@/api/index';

// import { reqSearchList } from '@/api'
console.log
    // reqCategoryList();
    // console.log(reqSearchList({})),
Vue.config.productionTip = false
Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')