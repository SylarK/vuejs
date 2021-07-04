import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    products: [
    {
        id: 1,
        title: 'Shirt',
        price: 'R$40'
    },
    {
        id: 2,
        title: 'Trouser',
        price: 'R$10'
    }
    ],
    posts: [],
    users: []
}

const getters = {
    allProducts: (state) => state.products,
    allUsers: (state) => state.users
}

const actions = {
    getPosts({ commit }){
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
            })
    },
    getUsers({commit}){
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                commit('SET_USERS', response.data)
            })
    }
}

const mutations = {
    SET_POSTS(state, posts){
        state.posts = posts
    },
    SET_USERS(state, users){
        state.users = users
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})