<template>
  <div class="type-nav">
    <!-- <h1>{{ categoryList }}</h1> -->
    <div class="container" @mouseleave="leaveIndex" @mouseenter="enterShow">
      <!-- <div @mouseleave="leaveIndex" @mouseenter="enterShow"> -->
        <h2 class="all">全部商品分类</h2>
        <nav class="nav">
            <a href="###">服装城</a>
            <a href="###">美妆馆</a>
            <a href="###">尚品汇超市</a>
            <a href="###">全球购</a>
            <a href="###">闪购</a>
            <a href="###">团购</a>
            <a href="###">有趣</a>
            <a href="###">秒杀</a>
        </nav>
        <!-- 三级联动 -->
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="gosearch" >
                <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex==index}">
                  <h3 @mouseenter="changeIndex(index)" >
                    <a :data-categoryName=" c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                  </h3>
                  <!-- 二级、三级分类 -->
                  <div class="item-list clearfix" :style="{display:currentIndex ==index? 'block':'none'}">
                    <div class="subitem" v-for="(c2) in c1.categoryChild " :key="c2.categoryId" >
                        <dl class="fore">
                            <dt>
                                <a :data-categoryName=" c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                            </dt>
                            <dd>
                                <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                                    <a :data-category3Id="c3.categoryId" :data-categoryName=" c3.categoryName">{{c3.categoryName}}</a>
                                </em>

                            </dd>
                        </dl>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </transition>
       
      <!-- </div> -->
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
//引入全部，最好按需引入
// import _ from 'lodash'
import {throttle} from "lodash"
// console.log(_)
export default {
  name: 'typeNav',

  data() {
    return {
      //存储鼠标点击一级分类索引
      currentIndex:-1,
      show:true
    };
  },
  mounted(){
    // this.$store.dispatch('categoryList');
    // console.log(this.$route)
    if(this.$route.name=='search'){
    this.show = false;
      
    }
  },
  methods: {
    // changeIndex(i){//修改为ES5写法
    //   //非正常情况，用户操作很快，本身全部的以及分类都应该触发鼠标进入事件，但是经过测试，只有部分h3触发
    //   this.currentIndex = i;
    //    console.log(this.currentIndex);
    // },
    //防抖
    changeIndex: throttle(function(i){
      this.currentIndex = i;
      //  console.log(this.currentIndex);
    },50)
    ,
    leaveIndex(){
      this.currentIndex = -1;
      if(this.$route.name=='search'){
      this.show = false}

    },
    enterShow(){
      this.show = true
    },
    gosearch(event){
      // this.$router.push('/search')
    let element = event.target;
    let {categoryname,category1id,category2id,category3id} = element.dataset;
    // console.log(categoryname)
    if(categoryname){
    // this.$router.push('/search')
    //整理路由跳转参数
    let location ={
       name :"search"
     }
    let query ={
        categoryName : categoryname
     }
    if(category1id){
       query.category1Id = category1id;
    }else if(category2id){
        query.category2Id = category2id;
     }else if(category3id){
       query.category3Id = category3id;
     }

     if(this.$route.params){
      location.params = this.$route.params;
      location.query = query;
      this.$router.push(location)
     }
  // console.log(location,query)
     location.query = query;
       console.log(location)
      this.$router.push(location)
    }
    }
  },
  computed:{
    ...mapState({
      //state为大仓库的数据
      categoryList:state=>state.home.categoryList
    })
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
          width: 210px;
          height: 45px;
          background-color: #e1251b;
          line-height: 45px;
          text-align: center;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
      }

      .nav {
          a {
              height: 45px;
              margin: 0 22px;
              line-height: 45px;
              font-size: 16px;
              color: #333;
          }
   
      }

      .sort {
          position: absolute;
          left: 0;
          top: 45px;
          width: 210px;
          height: 461px;
          position: absolute;
          background: #fafafa;
          z-index: 999;

          .all-sort-list2 {
              .item {
                  h3 {
                      line-height: 28px;
                      font-size: 14px;
                      font-weight: 400;
                      overflow: hidden;
                      padding: 0 20px;
                      margin: 0;

                      a {
                          color: #333;
                      }
                  }

                  .item-list {
                      display: none;
                      position: absolute;
                      width: 734px;
                      min-height: 460px;
                      background: #f7f7f7;
                      left: 210px;
                      border: 1px solid #ddd;
                      top: 0;
                      z-index: 9999 !important;

                      .subitem {
                          float: left;
                          width: 650px;
                          padding: 0 4px 0 8px;

                          dl {
                              border-top: 1px solid #eee;
                              padding: 6px 0;
                              overflow: hidden;
                              zoom: 1;

                              &.fore {
                                  border-top: 0;
                              }

                              dt {
                                  float: left;
                                  width: 54px;
                                  line-height: 22px;
                                  text-align: right;
                                  padding: 3px 6px 0 0;
                                  font-weight: 700;
                              }

                              dd {
                                  float: left;
                                  width: 415px;
                                  padding: 3px 0 0;
                                  overflow: hidden;

                                  em {
                                      float: left;
                                      height: 14px;
                                      line-height: 14px;
                                      padding: 0 8px;
                                      margin-top: 5px;
                                      border-left: 1px solid #ccc;
                                  }
                              }
                          }
                      }
                  }

                  /* &:hover {
                      .item-list {
                          display: block;
                      }
                  } */
              }
            /*  .item:hover{
                background: skyblue;
              }
            */
          .cur{
            background: skyblue;
          }
          }
      }
      /*过渡动画样式*/
      .sort-enter{
        height: 0px;
      }
      .sort-enter-to{
        height: 461px;
      }
      .sort-enter-active{
        transition: all .5s linear;
      }
  }
}

</style>