<template>
  <div class="home">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 head d-flex flex-column justify-content-center align-items-center">
          <h1>Brewery Manager</h1>
          <h3>Your one stop for managing your brewery efficiently</h3>
        </div>
        <div class="col-sm-12">
          <h1>Tap List</h1>
          <p>Here is where you can purchase beers to give customers a total. Now when the customer checks out and you actually
            pour the beer we will track that beer as being poured and it will come out of your inventory. Keg levels are
            tracked and will let you know when it is almost empty to let your employees know when a change is needed.</p>
        </div>
        <div class="col-sm-12">
          <h1>Brew Schedule</h1>
          <p>This is where you can schedule your brew days and what you are going to brew on those days. You can also set reminders
            for when you would like to be reminded and how far in advance you would like notice before your brew day.</p>
        </div>
        <div class="col-sm-12">
          <h1>Employee Schedule</h1>
          <p>This is where you can manage your employees scheduling and scheduling them for shifts. You can also print the schedules
            from this spot or email them directly to your employees whatever you choose.</p>
        </div>
        <div class="col-sm-12">
          <h1>Inventory</h1>
          <p>This is where you can see and manage your inventory. We keep all your beers that you create in the system just
            in case you ever decide to revive one you won't have to create a new one. It will show you how many kegs and
            cases of bottles that you have remaining of each beer. This section will also let you put a beer on tap and replace
            a beer that is currently there or fill an empty space.</p>
        </div>
        <div class="col-sm-12">
          <h1>Purchasing</h1>
          <p>Here you can purchase supplies for your brew day or any other supplies you might need for the brewery.</p>
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
    mounted() {
      this.$store.dispatch('authenticate')
    },
    components: {
      navbar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head {
    background: url('../assets/home-bg.jpeg');
    min-height: 91vh;
    color: white;
  }
</style>