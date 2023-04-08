<template>
  <div>
    <!-- 三级联动全局组件 已注册为全局组件，不需要引入-->
     <type-nav></type-nav>
     <list-container/>
     <recommend/>
     <rank/>
     <like/>
     <floor/>
     <floor/>
     <brand/>
     <br>
     <!-- <button @click="add">+</button>
<h2>{{'count:' + count}}</h2>
     <button>-</button> -->
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer"
import Recommend from "@/views/Home/Recommend"
import Rank from "@/views/Home/Rank"
import Like from "@/views/Home/Like"
import Floor from "@/views/Home/Floor"
import Brand from "@/views/Home/Brand"
// import {mapState} from 'vuex'
//注意mapState和mapGetters是映射在计算属性里面的，而mapActions和mapMutations是映射在methods里面的
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
  computed:{
    // ...mapState(['count'])
  },methods:{
    add(){
      // this.$store.dispatch('add')
    }
  }
};
</script>

<style lang="less" scoped>

</style>