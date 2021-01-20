<template>
    <div>
        
    <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-brand tag="h1" class="mb-0" to="/">Vue Blog</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="home">Home</b-nav-item>
            <b-nav-item to="users">Users</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>
<script>
    export default {
        name:'Header',
        data(){
            return{
                
            }
        },
        methods:{
           
        },
        created:function(){
            console.warn("Created called",this.title)
        },
        beforeCreate: function(){
            console.warn("Before Created called",this.title)
        },
        beforeMount:function(){
            console.warn("beforeMount called",this.title)
        },
        mounted:function(){
            console.warn("mounted called",this.title)
        },
        beforeUpdate:function(){
            console.warn("beforeUpdate called",this.title)
        },
        updated:function(){
            console.warn("updated called",this.title)
        },
        beforeDestroy:function(){
            console.warn("beforeDestroy called",this.title)
        },
        destroyed() {
            console.warn("destroyed called",this.title)
        },
    }
</script>
<style scoped>
    b-navbar{
        background: red;
    }
</style>