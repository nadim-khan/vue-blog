<template>
    <div>
        <H2 align="center">Users page</H2>
        <b-table hover dark responsive  outlined sticky-header :items="usersList" :fields="fields" :busy="isBusy">
            <template #table-busy>
                <div class="text-center text-warning my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        name:'Users',
        data() {
            return {
                isBusy: true,
                fields: [
                    'id',
                    {
                        key:'employee_name',
                        sortable:true
                    }, 
                    {
                        key:'employee_salary',
                        sortable:true
                    },
                    {
                        key:'employee_age',
                        sortable:true
                    }
                ],
                usersList:[],
            }
        },
        mounted(){
            axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response=>{
                this.usersList = response.data.data;
                setTimeout(()=>{
                   this.isBusy = false;
               },500)
            })
            .catch(error=>{
                alert('Error occured while fetching Users List')
            })
        }
    }
</script>
<style scoped>
</style>