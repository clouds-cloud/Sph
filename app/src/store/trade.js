import { reqAddressInfo, reqOrderInfo } from '@/api';
export default {

    state: {
        name: 'trade',
        address: [],
        orderInfo: {}
    },
    mutations: {
        GETUSERADDRESS(state, address) {
            state.address = address;
        },
        GETORDER(state, orderInfo) {
            state.orderInfo = orderInfo;
        },
    },
    actions: {
        //获取用户地址信息
        async getUserAddress({ commit }) {
            let result = await reqAddressInfo();
            if (result.code == 200) {
                commit("GETUSERADDRESS", result.data);
                return 'ok';
            } else {
                return Promise.reject(new Error('fail'))
            }
        },
        async getOrderInfo({ commit }) {
            let result = await reqOrderInfo();
            if (result.code == 200) {
                commit("GETORDER", result.data);
                return 'ok';
            } else {
                return Promise.reject(new Error('fail'))
            }
        },
    },
    getters: {}
}