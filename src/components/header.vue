<template>
    <div class="header">
        <ul>
            <li><img alt="Vue logo" src="../assets/logo.png"></li>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><button @click="updateTitle">Update Title</button></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'Header',
        methods:{
            updateTitle() {
                this.$emit('changeTitle','Hello vue JS');
            }
        }
    }
</script>
<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    li img{
        width:30px;
        height:30px;
        padding:5px;
    }

    li a:hover {
        background-color: #111;
    }
</style>