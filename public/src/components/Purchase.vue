<template>
    <div class="purchase">
        <navbar></navbar>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 d-flex justify-content-between">
                    <h1>Beer One</h1>
                    <h3>Beer One Description</h3>
                    <h3>Beer One Price</h3>
                    <button>Beer Purchased</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from './Navbar'
    export default {
        name: 'Purchase',
        data() {
            return {

            }
        },
        mounted() {
            
        },
        components: {
            navbar
        }
    }
</script>

<style scoped>
</style>