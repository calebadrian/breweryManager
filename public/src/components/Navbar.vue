<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Brewery Manager</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" v-if="user.email">
                <router-link :to="{name: 'Purchase'}">
                    <li class="nav-item">
                        <a class="nav-link">Purchasing</a>
                    </li>
                </router-link>
                <li class="nav-item">
                    <a class="nav-link" href="#">Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Inventory</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Add Brew</a>
                </li>
            </ul>
        </div>
        <div v-if="user.email" class="d-flex">
            <router-link :to="{name: 'Home'}" class="d-flex align-items-center mr-2">
                <img :src="user.profilePic">
                <a class="ml-2">{{user.name}}</a>
            </router-link>
            <button class="btn btn-danger" @click="logout">Logout</button>
        </div>
        <div v-else>
            <button class="btn btn-success" data-toggle="modal" data-target="#loginModal">Login</button>
            <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="login">
                                <input type="text" v-model="loginUser.email" placeholder="email" required>
                                <input type="password" v-model="loginUser.password" placeholder="password" required>
                                <button type="submit" class="btn btn-success">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" data-toggle="modal" data-target="#registerModal">Register</button>
            <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="register">
                                <input type="text" v-model="newUser.name" placeholder="username" required>
                                <input type="url" v-model="newUser.profilePic" placeholder="picture url (optional)">
                                <input type="text" v-model="newUser.email" placeholder="email" required>
                                <input type="password" v-model="newUser.password" placeholder="password" required>
                                <button type="submit" class="btn btn-success">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                loginUser: {
                    email: '',
                    password: ''
                },
                newUser: {
                    name: '',
                    profilePic: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', this.loginUser)
                this.loginUser = { email: '', password: '' }
                $('#loginModal').modal('hide')
            },
            register() {
                this.$store.dispatch('register', this.newUser)
                this.newUser = { name: '', profilePic: '', email: '', password: '' }
                $('#registerModal').modal('hide')
            },
            logout() {
                this.$store.dispatch('logout')
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style scoped>
    img{
        height: 10vh;
        width: 10vh;
        border-radius: 100%;
    }
</style>