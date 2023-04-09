import { reqSearchList } from '@/api';

export default {

    state: {
        name: 'search',
        searchList: [],
    },
    mutations: {
        SEARCHLIST(state, searchList) {
            state.searchList = searchList;
            // state.categoryList.length = 16
        },
    },
    actions: {
        async getsearchList({ commit, params = {} }) { //{commit}是解构赋值对应context.commit

            let result = await reqSearchList(params);
            if (result.code == 200) {
                commit("SEARCHLIST", result.data);
            }
            console.log(result)
        },
    },
    getters: {
        goodsList(state) {
            return state.searchList.goodsList
        },
        attrsList(state) {
            return state.searchList.attrsList
        },
        trademarkList(state) {
            return state.searchList.trademarkList
        },
    }
}