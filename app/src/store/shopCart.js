import { reqCartList, reqDeleteCart, reqcheckCart } from '@/api';

export default {

    state: {
        name: 'cartList',
        cartList: [],
    },
    mutations: {
        CARTLIST(state, cartList) {
            state.cartList = cartList;
            // state.categoryList.length = 16
        },
    },
    actions: {
        async getcartList({ commit }) { //{commit}是解构赋值对应context.commit

            let result = await reqCartList();
            if (result.code == 200) {
                commit("CARTLIST", result.data);
            }
            console.log(result)
        },
        async deleteCartList({ commit }, skuId) {
            let result = await reqDeleteCart(skuId);
            if (result.code == 200) {
                return 'ok';
            } else {
                return Promise.reject(new Error('fail'))
            }
        },
        //        //删除全部勾选的产品
        //   deleteAllCheckedCart({ dispatch, getters }) {
        //     //context:小仓库，commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
        //     let PromiseAll = [];
        //     //获取购物车中全部的产品（是一个数组）
        //     getters.carList.cartInfoList.forEach((item) => {
        //         let Promise =
        //             item.isChecked == 1 ?
        //             dispatch("deleteCartListBySkuId", item.skuId) :
        //             "";
        //         //将每一次返回的Promise添加到数组当中
        //         PromiseAll.push(Promise);
        //     });
        //     //只要全部的p1|p2....都成功，返回结果即为成功
        //     //如果有一个失败，返回即为失败结果
        //     return Promise.all(PromiseAll);
        // },
        async checkCart({ commit }, { skuId, isChecked }) {
            let result = await reqcheckCart(skuId, isChecked);
            if (result.code == 200) {
                return 'ok';
            } else {
                return Promise.reject(new Error('fail'))
            }
        }
    },
    getters: {
        cartList(state) {
            return state.cartList[0] || {}
        },
        cartInfoList(state) {
            return state.cartList[0].cartInfoList || []
        }
        // attrsList(state) {
        //     return state.searchList.attrsList || []
        // },
        // trademarkList(state) {
        //     return state.searchList.trademarkList || []
        // },
    }
}