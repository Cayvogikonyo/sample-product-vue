<template>
  <nav class="shadow-lg h-16 flex justify-between align-center">
    <img alt="Vue logo" class="w-16 h-16" src="./assets/ZE.png">
    <logged-in-nav :user="user"/>
  </nav>
  <dashboard msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Dashboard from './Pages/Dashboard'
import '@/assets/app.css';
import LoggedInNav from './utilities/components/LoggedInNav.vue';

export default {
  name: 'App',
  components: {
    Dashboard,
    LoggedInNav
  },
  data(){
    return{
      user:{
        name: 'John Doe',
        profile_photo: null,
      }
    }
  }
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
</style>
