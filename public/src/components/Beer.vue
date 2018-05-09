<template>
    <div class="bur d-flex justify-content-between">
        <h5>{{beer.name}}</h5>
        <h5>{{beer.description}}</h5>
        <h5>{{beer.abv}}</h5>
        <h5>{{beer.ibu}}</h5>
        <div class="d-flex" v-if="kegs[beer._id]">
            <h5>{{kegs[beer._id].quantity}}</h5>
            <div class="d-flex flex-column">
                <i class="fas fa-chevron-up" @click="incKegQuantity(beer)"></i>
                <i class="fas fa-chevron-down" @click="decKegQuantity(beer)"></i>
            </div>
        </div>
        <div class="d-flex" v-if="cases[beer._id]">
            <h5>{{cases[beer._id].quantity}}</h5>
            <div class="d-flex flex-column">
                <i class="fas fa-chevron-up" @click="incCaseQuantity(beer)"></i>
                <i class="fas fa-chevron-down" @click="decCaseQuantity(beer)"></i>
            </div>
        </div>
        <h5>{{beer.onTap}}</h5>
    </div>
</template>

<script>
    export default {
        name: 'Beer',
        props: ['beer'],
        data() {
            return {
            }
        },
        mounted() {
            this.$store.dispatch('getKegs', this.beer._id)
            this.$store.dispatch('getCases', this.beer._id)
        },
        methods: {
            incKegQuantity(beer) {
                this.$store.dispatch('incKegQuantity', beer)
            },
            decKegQuantity(beer){
                this.$store.dispatch('decKegQuantity', beer)
            },
            incCaseQuantity(beer) {
                this.$store.dispatch('incCaseQuantity', beer)
            },
            decCaseQuantity(beer) {
                this.$store.dispatch('decCaseQuantity', beer)
            }
        },
        computed: {
            kegs() {
                return this.$store.state.kegs
            },
            cases() {
                return this.$store.state.cases
            }
        }
    }
</script>

<style scoped>
</style>