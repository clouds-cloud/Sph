import { reqDetailInfo, reqAddOrUpdateShopCart } from '@/api';
//封装游客身份模块
import { getUUID } from '@/utils/uuid_token';
export default {

    state: {
        name: 'detail',
        detailInfo: {},
        ShopCartInfo: {},
        uuid_token: getUUID()
    },
    mutations: {
        GETDETAILINFO(state, detailInfo) {
            state.detailInfo = detailInfo;
        },
        GETCARTINFO(state, ShopCartInfo) {
            state.ShopCartInfo = ShopCartInfo;
        }
    },
    actions: {
        async getDetailInfo({ commit }, skuId) {
            let result = await reqDetailInfo(skuId);
            if (result.code == 200) {
                commit("GETDETAILINFO", result.data);
            }
            // console.log(result)
        },
        async getAddOrUpdateShopCart({ commit }, { skuId, skuNum }) {
            let result = await reqAddOrUpdateShopCart(skuId, skuNum);
            if (result.code == 200) {
                return 'ok'
                    // commit("GETCARTINFO", result.data);
            } else {
                return Promise.reject(new Error('fail'))
            }
            // console.log(result)
        }
    },
    getters: {
        categoryView(state) {
            return state.detailInfo.categoryView || {}
        },
        skuInfo(state) {
            return state.detailInfo.skuInfo || {}
        },
        spuSaleAttrList(state) {
            return state.detailInfo.spuSaleAttrList || {}
        },
    }
}