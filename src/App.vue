<template>
  <div id="app">
    <Header @changeTitle="updateTitle($event)"/>
    <H1 >{{title}}</H1>
    <Main msg="Main View Loaded" data="Nadeem"/>  </div>
    
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
      title:'title'
    }
  },
  methods:{
    updateTitle(title) {
      this.title = title;
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
