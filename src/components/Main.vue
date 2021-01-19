<template>
    <div >
        <button v-if="!showView" @click="showDetails">Show Details</button>
        <button v-if="showView" @click="showDetails">Hide Details</button>
        <div v-if="showView">
            <h1>Main View</h1>
            <h3>{{msg}} for {{data}}</h3>
            <hr>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.employee_name}}</td>
                        <td>{{user.employee_age}}</td>
                        <td>{{user.employee_salary}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    
    
</template>
<script>
import * as Vue from 'vue';
import * as VueAxios from 'vue-axios';
import axios from 'axios';
// Vue.use(VueAxios.axios)// bind axios
export default {
    name:'Main',
    data(){
        return{
            showView: false,
            users:[],
            loading:true,
            error:false,
            errorDescription:''
        }
    },
    props:{
        msg:String,
        data:String,
    },
    methods: {
        showDetails(){
            this.showView = !this.showView
        }
    },
    mounted(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        // https://api.coindesk.com/v1/bpi/currentprice.json
        .then( resp => {
            this.users=resp.data.data;
        })
        .catch(error=>{
            this.errorDescription = 'Error in getting emplyee details - Contact IT department';
        })
        .finally(()=>{
            this.loading = false
        })
    }
}
</script>

<style scoped>
    table{
        width:60%;
    }
    table tr {
        display:flex;
        justify-content: center;
       
    }
    td,th{
         width:20%;
    }
</style>