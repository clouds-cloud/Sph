import { reqDetailInfo } from '@/api';

export default {

    state: {
        name: 'detail',
        detailInfo: {},
    },
    mutations: {
        GETDETAILINFO(state, detailInfo) {
            state.detailInfo = detailInfo;
        },
    },
    actions: {
        async getDetailInfo({ commit }, skuId) {
            let result = await reqDetailInfo(skuId);
            if (result.code == 200) {
                commit("GETDETAILINFO", result.data);
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
        skuSaleAttrValueList(state) {
            return state.detailInfo.skuInfo.skuSaleAttrValueList || []
        },
    }
}