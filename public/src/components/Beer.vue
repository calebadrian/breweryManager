<template>
    <div class="bur d-flex justify-content-between">
        <h5>{{beer.name}}</h5>
        <h5>{{beer.description}}</h5>
        <h5>{{beer.abv}}</h5>
        <h5>{{beer.ibu}}</h5>
        <h5 v-if="kegs[beer._id]">{{kegs[beer._id].quantity}}</h5>
        <h5 v-if="cases[beer._id]">{{cases[beer._id].quantity}}</h5>
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
        computed: {
            kegs(){
                return this.$store.state.kegs
            },
            cases(){
                return this.$store.state.cases
            }
        }
    }
</script>

<style scoped>
</style>