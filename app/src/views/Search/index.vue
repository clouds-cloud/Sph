<template>
  <div>
    <!-- 搜索模块 -->
    <!-- <h2>params参数:{{$route.params.keyword}}======{{ keyword }}
    </h2>
    <h2>query参数:{{$route.query.k}}======={{ k }}</h2> -->
    <type-nav></type-nav>
  </div>
</template>

<script>
export default {
  name: 'ForOffersIndex',
  props:['keyword','a','b','k'],
  data() {
    return {
      
    };
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>

</style>