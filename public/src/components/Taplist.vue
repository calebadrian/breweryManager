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
            this.$store.dispatch('authenticate')
            this.$store.dispatch('getBeers')
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