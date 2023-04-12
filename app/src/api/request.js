import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
import store from '@/store'
//引入进度条样式
import "nprogress/nprogress.css"
//request.js是创造axios的实例和axios的拦截器以及发送真正的网络请求的地方
console.log(nprogress)
    //1、创建实例
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
});

//2、axios拦截器
requests.interceptors.request.use(config => {
    // console.log(store.state.detail.uuid_token)
    if (store.state.detail.uuid_token) {
        //字段后端已经写好
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    nprogress.start();
    return config
}, err => {
    console.log(err)
})
requests.interceptors.response.use(res => {
        nprogress.done();

        return res.data
    }, err => {
        console.log(err)
        return Promise.reject(new err('fail'))
    })
    // })
export default requests
//原理是什么： 传入的函数就是 res => {} 这里是外边传入的，当封装面的res => {}被调用的时候执行这个外边定义的函数这样套了一层就能起到外边儿控制里面

// export function request(config) {
//   return new Promise((resolve, reject) => {
//       const instance = axios.create({
//           baseURL: 'http://123.207.32.32:8000',
//           timeout: 5000
//       })

//       instance(config)
//           .then(res => {
//               // console.log(res);
//               // config.success(res)
//               resolve(res)
//           })
//           .catch(err => {
//               // console.log(err);
//               // config.failure(err)
//               reject(err)
//           })
//   })
// }