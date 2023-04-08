import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api';
export default {
    state: {
        name: 'home',
        categoryList: [],
        bannerList: [],
        floorList: [],
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList;
            // state.categoryList.length = 16
        },
        GETBANNERLIST(state, bannerList) {
            state.bannerList = bannerList;
        },
        GETFLOORLIST(state, floorList) {
            state.floorList = floorList;
        },
    },
    actions: {

        async categoryList({ commit }) { //{commit}是解构赋值对应context.commit

            let result = await reqCategoryList();
            if (result.code == 200) {
                commit("CATEGORYLIST", result.data);
            }
            console.log(result)
        },
        async getBannerList({ commit }) {
            let result = await reqGetBannerList();
            if (result.code == 200) {
                commit("GETBANNERLIST", result.data);
            }
            console.log(result)
        },
        async getFloorList({ commit }) {
            let result = await reqGetFloorList();
            if (result.code == 200) {
                commit("GETFLOORLIST", result.data);
            }
            console.log(result)
        }

    },
    getters: {}
}