<template>
  <div id="app">
    <Login v-if="loginView && !registerView"  @loginSuccess="loginStatus" @onregister="registerPage($event)"/>
    <Register />
    <Header v-if="!loginView && !registerView" />
    <MainView  v-if="!loginView && !registerView"/>
    
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
      loginView:true,
      registerView:false
    }
  },
  methods:{
    // updateTitle(title) {
    //   this.title = title;
    // }
    registerPage(val){
      this.registerView = true;
      this.loginView = false;
      alert(val)
    },
    loginStatus(data){
      this.loginView = false;
      this.registerView = false;
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
  background:#2b3e50;
  height: 100vh;;
}
</style>
