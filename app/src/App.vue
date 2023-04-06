<template>
  <div id="app">
    <Header/>
    <nav>
      我是根组件
      </nav>
    <Footer/>
    <router-view/>
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
  }
}
</script>
<style>

</style>
