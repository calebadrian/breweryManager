<template>
    <div class="taplist">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 d-flex justify-content-between">
                    <h5>Name</h5>
                    <h5>Description</h5>
                    <h5>ABV</h5>
                    <h5>IBU</h5>
                    <h5>Price</h5>
                    <h5>Purchase</h5>
                </div>
                <div class="col-sm-12 d-flex justify-content-between" v-for="beer in beers" v-if="beer.onTap">
                    <h1>{{beer.name}}</h1>
                    <h3>{{beer.description}}</h3>
                    <h3>{{beer.abv}}</h3>
                    <h3>{{beer.ibu}}</h3>
                    <h3>{{beer.price}}</h3>
                    <button>Purchase {{beer.name}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from './Navbar'
    export default {
        name: 'Taplist',
        data() {
            return {
            }
        },
        mounted() {
            this.$store.dispatch('getBeers')
        },
        methods: {
            addBeer() {
                this.newBeer.creatorId = this.$store.state.user._id
                this.$store.dispatch('addBeer', this.newBeer)
                this.newBeer = { name: '', description: '', abv: 1, ibu: 1, price: 1, onTap: true }
            }
        },
        components: {
            navbar
        },
        computed: {
            beers() {
                return this.$store.state.beers
            }
        },
    }
</script>

<style scoped>
</style>