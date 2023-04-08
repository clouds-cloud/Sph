<template>
  <div id="app">
    <Header/>
    <nav>

      <!-- <router-link to="/home" tag="button" replace >Home</router-link> |
      <router-link to="/login" tag="button" replace >login</router-link> |
      <router-link to="/register" tag="button" replace >register</router-link> |
      <router-link to="/search" tag="button" replace >search</router-link>  -->
      <router-view/>
      </nav>
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>
<script type='text/javascript'>
import Header from './components/Header'
import Footer from './components/Footer'

export default{
  name :'',
  components:{
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch('categoryList');
  }
}
</script>
<style>

</style>
