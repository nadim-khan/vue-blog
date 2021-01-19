<template>
  <div id="app">
    <Header v-if="showHeader"/>
    <H1 >{{title}}</H1>
    <Main msg="Main View Loaded" data="Nadeem"/>  
     <button @click="hideIt">Show/hide Header</button>
  </div>
   
    
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/header'

export default {
  name: 'App',
  components: {
    Main,
    Header
  },
  data() {
    return {
      title:'title',
      showHeader:'true'
    }
  },
  methods:{
    // updateTitle(title) {
    //   this.title = title;
    // }
    hideIt(){
      this.showHeader = !this.showHeader;
    }
  }
}
</script>

<style>
#app{
  margin:0px;
  padding:0;
}
</style>
