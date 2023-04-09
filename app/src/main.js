import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/mockServe'
// import｛ reqCategoryList｝ from '@/axios'
//三级联动组件--全局组件
import typeNav from '@/components/typeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

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
Vue.component(Pagination.name, Pagination);

new Vue({
    router,
    store,
    render: h => h(App),
    //全局事件总线$bus配置
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
}).$mount('#app')