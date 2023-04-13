import { reqCode, reqRegister, reqLogin, reqUserInfo } from '@/api';
import { setToken, getToken } from '@/utils/token';
export default {

    state: {
        name: 'userInfo',
        code: '',
        token: getToken(),
        userInfo: {}
    },
    mutations: {
        GETCODE(state, code) {
            state.code = code;
            // state.categoryList.length = 16
        },
        USERLOGIN(state, token) {
            state.token = token
        },
        GETUSERINFO(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        async sendCode({ commit }, phone) {
            let result = await reqCode(phone);
            if (result.code == 200) {
                commit("GETCODE", result.data);
                return 'ok';
            } else {
                return Promise.reject(new Error('fail'))
            }
        },
        async getRegister({ commit }, user) {
            let result = await reqRegister(user);
            if (result.code == 200) {
                // commit("REGISTER", result.data);
                // console.log(result)
                return 'ok';
            } else {
                alert('失败')
                return Promise.reject(new Error('fail'))
            }
        },
        async userLogin({ commit }, data) {
            let result = await reqLogin(data);
            if (result.code == 200) {
                commit("USERLOGIN", result.data.token);
                //持久化存储token
                setToken(result.data.token)
                console.log(result)
                return 'ok';
            } else {
                alert('失败')
                return Promise.reject(new Error('fail'))
            }
        },
        async getUserInfo({ commit }) {
            let result = await reqUserInfo();
            if (result.code == 200) {
                commit("GETUSERINFO", result.data);
                console.log(result)
                return 'ok';
            } else {
                alert('失败')
                    // return Promise.reject(new Error('fail'))
            }
        },

    },
    getters: {
        // cartList(state) {
        //     return state.cartList[0] || {}
        // },
        // cartInfoList(state) {
        //     return state.cartList[0].cartInfoList || []
        // }

    }
}