<template>
    <div class="inventory">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <button class="btn btn-info" data-toggle="modal" data-target="#addBeerModal">Add New Beer</button>
                    <div class="modal fade" id="addBeerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add A New Beer</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.prevent="addBeer">
                                        <input type="text" v-model="newBeer.name" required>
                                        <input type="text" v-model="newBeer.description" required>
                                        <input type="number" v-model="newBeer.abv" required>
                                        <input type="number" v-model="newBeer.ibu" required>
                                        <input type="number" v-model="newBeer.price" required>
                                        <input type="checkbox" v-model="newBeer.onTap" required>
                                        <button type="submit" class="btn btn-success">Add Beer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 class="col-sm-2">Name</h5>
                <h5 class="col-sm-2">Description</h5>
                <h5 class="col-sm-2">ABV</h5>
                <h5 class="col-sm-2">IBU</h5>
                <h5 class="col-sm-2">Keg Quantity</h5>
                <h5 class="col-sm-2">Case Quantity</h5>
                <div class="col-sm-12" v-for="beer in beers">
                    <inventorybeer :beer="beer"></inventorybeer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from './Navbar'
    import inventorybeer from './InventoryBeer'
    export default {
        name: 'Taplist',
        data() {
            return {
                newBeer: {
                    name: '',
                    description: '',
                    abv: 1,
                    ibu: 1,
                    price: 1,
                    onTap: false
                }
            }
        },
        mounted() {
            this.$store.dispatch('getBeers')
        },
        methods: {
            addBeer() {
                this.newBeer.creatorId = this.$store.state.user._id
                this.$store.dispatch('addBeer', this.newBeer)
                this.newBeer = { name: '', description: '', abv: 1, ibu: 1, price: 1, onTap: false }
            }
        },
        components: {
            navbar,
            inventorybeer
        },
        computed: {
            beers() {
                return this.$store.state.beers
            }
        }
    }
</script>

<style scoped>
</style>