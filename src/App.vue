<template>
  <div id="app">
    <Login v-if="loginView"  @loginSuccess="loginStatus"/>
    <Header v-if="!loginView" />
    <MainView  v-if="!loginView"/>
    
  </div>
   
    
</template>

<script>

import Login from './components/Login';
import Header from './components/Header';
import MainView from './components/MainView'

export default {
  name: 'App',
  components: {
    Login,
    Header,
    MainView
  },
  data() {
    return {
      title:'title',
      showHeader:'true',
      loginView:true
    }
  },
  methods:{
    // updateTitle(title) {
    //   this.title = title;
    // }
    loginStatus(data){
      this.loginView = false;
    },
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
