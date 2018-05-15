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
        kegs: {},
        cases: {},
        taplist: {}
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setBeers(state, payload) {
            state.beers = payload
        },
        setKegs(state, payload) {
            state.kegs = payload
        },
        addKeg(state, payload) {
            vue.set(state.kegs, payload.id, payload.data)
        },
        setCases(state, payload) {
            state.cases = payload
        },
        addCase(state, payload) {
            vue.set(state.cases, payload.id, payload.data)
        },
        addToTaplist(state, payload) {
            state.taplist.push(payload)
        },
        setTaplist(state, payload){
            state.taplist = payload
        }
    },
    actions: {
        authenticate({ commit, dispatch }, payload) {
            auth.get('authenticate')
                .then(res => {
                    commit('setUser', res.data)
                    dispatch('getTaplist')
                })
                .catch(err => {
                    router.push({ name: 'Home' })
                })
        },
        login({ commit, dispatch }, payload) {
            auth.post('login', payload)
                .then(res => {
                    commit('setUser', res.data.user)
                    dispatch('getTaplist')
                })
                .catch(err => {
                    console.error(err)
                })
        },
        register({ commit, dispatch }, payload) {
            auth.post('register', payload)
                .then(res => {
                    commit('setUser', res.data)
                    dispatch('createTaplist', res.data)
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
                    commit('setKegs', {})
                    commit('setTaplist', {})
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        addBeer({ commit, dispatch, state }, payload) {
            api.post('beers', payload)
                .then(res => {
                    api.post('kegs', { creatorId: state.user._id, beerId: res.data._id })
                    api.post('cases', { creatorId: state.user._id, beerId: res.data._id })
                    dispatch('getBeers', state.user._id)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        getBeers({ commit, dispatch, state }, payload) {
            api.get('beers')
                .then(res => {
                    var temp = []
                    for (var i = 0; i < res.data.length; i++) {
                        if (state.user._id == res.data[i].creatorId) {
                            temp.push(res.data[i])
                        }
                    }
                    commit('setBeers', temp)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        getBeer({ commit, dispatch }, payload) {
            api.get('beers/' + payload.beerId)
                .then(res => {
                    commit('addToTaplist', {beer: res.data, quantity: payload.quantity})
                })
                .catch(err => {
                    console.error(err)
                })
        },
        getKegs({ commit, dispatch }, payload) {
            api.get('kegs/' + payload)
                .then(res => {
                    var temp = res.data[0]
                    commit('addKeg', { id: payload, data: temp })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        getCases({ commit, dispatch }, payload) {
            api.get('cases/' + payload)
                .then(res => {
                    var temp = res.data[0]
                    commit('addCase', { id: payload, data: temp })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        incKegQuantity({ commit, dispatch, state }, payload) {
            state.kegs[payload._id].quantity++;
            api.put('kegs/' + payload._id + '/quantity', state.kegs[payload._id])
                .then(res => {
                    commit('addKeg', { id: res.data.beerId, data: res.data })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        decKegQuantity({ commit, dispatch, state }, payload) {
            state.kegs[payload._id].quantity--;
            api.put('kegs/' + payload._id + '/quantity', state.kegs[payload._id])
                .then(res => {
                    commit('addKeg', { id: res.data.beerId, data: res.data })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        incCaseQuantity({ commit, dispatch, state }, payload) {
            state.cases[payload._id].quantity++;
            api.put('cases/' + payload._id + '/quantity', state.cases[payload._id])
                .then(res => {
                    commit('addCase', { id: res.data.beerId, data: res.data })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        decCaseQuantity({ commit, dispatch, state }, payload) {
            state.cases[payload._id].quantity--;
            api.put('cases/' + payload._id + '/quantity', state.cases[payload._id])
                .then(res => {
                    commit('addCase', { id: res.data.beerId, data: res.data })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        createTaplist({ commit, dispatch }, payload) {
            api.post('taplists', { creatorId: payload._id })
                .then(res => {
                    
                })
                .catch(err => {
                    console.error(err)
                })
        },
        getTaplist({ commit, dispatch, state }, payload) {
            api.get('taplists/' + state.user._id)
                .then(res => {
                    commit('setTaplist', res.data)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        addToTaplist({commit, dispatch, state}, payload){
            api.put('taplists/' + state.user._id + '/beers', {beerId: payload._id, quantity: 1984})
                .then(res => {
                    dispatch('getTaplist')
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
})