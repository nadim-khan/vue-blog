<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>
<script>
import * as Vue from 'vue';
import * as VueAxios from 'vue-axios';
import axios from 'axios';
// Vue.use(VueAxios.axios)// bind axios
export default {
    name:'MainView',
    data(){
        return{
            
        }
    },
    props:{
        
    },
    methods: {
        
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .main{
        background:#2b3e50;
        height:91.2vh;
        color:white;
    }
</style>