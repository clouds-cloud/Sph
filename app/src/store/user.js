import { reqCode, reqRegister } from '@/api';

export default {

    state: {
        name: 'userInfo',
        code: '',
    },
    mutations: {
        GETCODE(state, code) {
            state.code = code;
            // state.categoryList.length = 16
        },
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
        }

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