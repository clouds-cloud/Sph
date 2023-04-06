<template>
  <div>
    我是首页
    <!-- 三级联动全局组件 已注册为全局组件，不需要引入-->
     <type-nav></type-nav>
     <list-container/>
     <recommend/>
     <rank/>
     <like/>
     <floor/>
     <floor/>
     <brand/>
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer"
import Recommend from "@/views/Home/Recommend"
import Rank from "@/views/Home/Rank"
import Like from "@/views/Home/Like"
import Floor from "@/views/Home/Floor"
import Brand from "@/views/Home/Brand"

export default {
  name: 'ForOffersIndex',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
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