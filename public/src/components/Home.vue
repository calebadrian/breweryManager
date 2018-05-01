<template>
  <div class="home">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 head d-flex flex-column justify-content-center align-items-center">
          <h1>Brewery Manager</h1>
          <h3>Your one stop for managing your brewery efficiently</h3>
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
  .head{
    background: url('../assets/home-bg.jpeg');
    min-height: 91vh;
    color: white;
  }
</style>