import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

var production = !window.location.host.includes('localhost')
var baseUrl = production ? '//brewmanager.herokuapp.com/' : '//localhost:3000/'

var auth = axios.create({
    baseURL: baseUrl + 'auth/',
    timeout: 5000,
    withCredentials: true
})

var api = axios.create({
    baseURL: baseUrl + 'api/',
    timeout: 5000,
    withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        user: {},
        beers: [],
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        updateBeers(state, payload) {
            for (var i = 0; i < payload.length; i++) {
                if (payload[i].creatorId == state.user._id) {
                    state.beers.push(payload[i])
                }
            }
        },
        setBeers(state, payload) {
            state.beers = payload
        }
    },
    actions: {
        authenticate({ commit, dispatch }, payload) {
            auth.get('authenticate')
                .then(res => {
                    commit('setUser', res.data)
                })
                .catch(err => {
                    router.push({ name: 'Home' })
                })
        },
        login({ commit, dispatch }, payload) {
            auth.post('login', payload)
                .then(res => {
                    commit('setUser', res.data.user)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        register({ commit, dispatch }, payload) {
            auth.post('register', payload)
                .then(res => {
                    commit('setUser', res.data)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        logout({ commit, dispatch }, payload) {
            auth.delete('logout')
                .then(res => {
                    commit('setUser', {})
                    commit('setBeers', [])
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        addBeer({ commit, dispatch, state }, payload) {
            api.post('beers', payload)
                .then(res => {
                    dispatch('getBeers', state.user._id)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        getBeers({ commit, dispatch, state }, payload) {
            api.get('beers')
                .then(res => {
                    commit('updateBeers', res.data)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
})