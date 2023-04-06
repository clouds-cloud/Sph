import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//三级联动组件--全局组件
import TypeNav from '@/views/Home/TypeNav'
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')