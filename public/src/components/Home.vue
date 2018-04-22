<template>
  <div class="home">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <img src="//placehold.it/1000x1000">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navbar from './Navbar'
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    mounted(){
      this.$store.dispatch('authenticate')
    },
    components: {
      navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>