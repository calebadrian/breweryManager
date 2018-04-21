<template>
  <div class="home">
    <navbar></navbar>
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
    components: {
      navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>