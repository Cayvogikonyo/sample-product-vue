<template>
  <nav class="shadow-lg h-16 flex justify-between align-center">
    <router-link to="/"> 
      <img alt="Ze Marketplace" class="w-16 h-16" src="./assets/ZE.png">
    </router-link>
    <div class="flex flex-wrap">
      <add-links />
      <create-links />
      <logged-in-nav />
    </div>
  </nav>
  <router-view/>
</template>


<script>
import LoggedInNav from './utilities/components/LoggedInNav.vue'
import '@/assets/app.css';
import CreateLinks from './utilities/components/CreateLinks.vue';
import AddLinks from './utilities/components/AddLinks.vue';

export default {
  components: { LoggedInNav, AddLinks, CreateLinks },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
