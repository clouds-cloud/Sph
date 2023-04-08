import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import｛ reqCategoryList｝ from '@/axios'
//三级联动组件--全局组件
import typeNav from '@/components/typeNav'
import { reqCategoryList } from '@/api'
// import { reqCategoryList } from '@/api/index';
reqCategoryList();
Vue.config.productionTip = false
Vue.component(typeNav.name, typeNav);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')