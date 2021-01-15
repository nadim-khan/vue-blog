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
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    
    
</template>
<script>
export default {
    name:'Main',
    data(){
        return{
            showView: false,
            users:[
                {id:1, name:'Nadeem', email:'nadeem@test.com'},
                {id:2, name:'Vivek', email:'Vivek@test.com'},
                {id:3, name:'Sukant', email:'Sukant@test.com'},
                {id:4, name:'Shyam', email:'Shyam@test.com'},
            ]
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
}
</script>

<style scoped>
    table{
        width:60%;
        
    }
</style>