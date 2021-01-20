<template>
    <div>
        <h3>Articles</h3>
        <div>
            <b-container class="bv-example-row">
                <b-row v-for="article in detailedData" :key="article.id"> 
                    <b-col cols="1"></b-col>
                    <b-col cols="10">{{article.title}}</b-col>
                    <b-col cols="1">Read More...</b-col>
                </b-row>
            </b-container>
        </div>
        
    </div>
</template>
<script>
    // import Ninput from '../custom/checkbox'
    import axios from 'axios';

    let one = "https://gorest.co.in/public-api/users"
    let two = "https://gorest.co.in/public-api/posts"
    let three = "https://gorest.co.in/public-api/comments"

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three); 
    export default {
        name:'Home', 
        data(){
            return {
                allUsers:[],
                allPosts:[],
                allComments:[],
                detailedData:[]
            }
        },
        components:{
            // Ninput
        },
        methods:{
            getCheckedVal(val){
                alert(val)
            }
        },
        mounted(){
            axios.all([requestOne, requestTwo, requestThree])
            .then(axios.spread((...responses) => {
                this.allUsers = responses[0];
                this.allPosts = responses[1];
                this.allComments = responses[2];
                this.detailedData =  this.allPosts.data.data.map(post=> {
                this.allUsers.data.data.forEach(user =>{
                    if(post.user_id === user.id) {
                        post = Object.assign({},post,{userDetail : user});
                        console.log(post)
                    }
                })
                return post;
                });
            }))
        }
            
    }
    
</script>

<style scoped>
.bv-example-row{
    height:80vh;
    overflow-y: scroll;
}
</style>