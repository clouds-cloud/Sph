import { reqCategoryList } from '@/api';
export default {
    state: {
        name: 'home',
        categoryList: [],
    },
    mutations: {
        CATEGORYLIST(state, categoryList) {
            state.categoryList = categoryList;
            // state.categoryList.length = 16
        }
    },
    actions: {

        async categoryList({ commit }) { //{commit}是解构赋值对应context.commit

            let result = await reqCategoryList();
            if (result.code == 200) {
                commit("CATEGORYLIST", result.data);
            }
            console.log(result)
        }
    },
    getters: {}
}