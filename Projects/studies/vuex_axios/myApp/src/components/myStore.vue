<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        
        <h2 style="text-align: initial; color: red">Exemplo I: </h2>
            <h3>Post Title: </h3> {{ posts[0].title }}
            <h3>Post Body: </h3>  {{ posts[0].body }}
        
        <hr>
        <h2 style="text-align: initial; color: red">Exemplo II: </h2>

        <div v-for="product in products" :key="product.id">
            {{ product.title}} - {{ product.price }}
        </div>

        <hr>
        <h2 style="text-align: initial; color: red">Exemplo III: </h2>
        <p>Getters</p>
        <div v-for='getteruser in getterusers' :key='getteruser.id'>
            {{getteruser.id}} {{getteruser.name}} {{getteruser.address}}
        </div>
        <p>Actions</p>
        <div v-for="user in users" :key='user.id'>
            {{user.id}} {{user.name}} {{user.address}}
        </div>
    </div>
</template>

<script>
    export default {
        name:'myStore',
        data(){
            return{
                msg: 'Welcome to my Vuex Store'
            }
        }, 
        computed: {
            posts(){
                return this.$store.state.posts
            },
            products(){
                return this.$store.getters.allProducts
            },
            getterusers(){
                return this.$store.getters.allUsers
            },
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch('getPosts')
            this.$store.dispatch('getUsers')
        }
    }
</script>

<style scoped>

</style>