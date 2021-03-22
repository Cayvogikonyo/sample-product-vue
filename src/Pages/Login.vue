<template>
  <app-layout>
      <template #header>
          <h5>Welcome to The Market Place</h5>
      </template>
      <form-component>
          <template #form>
            <div class="flex justify-center">
                <div>
                    <div class="w-full md:w-1/2 m-2">
                        <input type="text" class="w-full rounded" v-model="username" placeholder="Username">
                    </div>
                    <div class="w-full md:w-1/2 m-2">
                        <input type="password" class="w-full rounded" v-model="password" placeholder="Password">
                    </div>
                </div>
            </div>
          </template>
      </form-component>
      <p>Don't Have an account. <router-link to="/register">Register.</router-link></p>
  </app-layout>
</template>

<script>
import AppLayout from '../utilities/components/AppLayout.vue'
import FormComponent from '../utilities/components/FormComponent.vue'
export default {
  components: { AppLayout, FormComponent },
    data(){
        return {
            password: '',
            confirmation: '',
            username: ''
        }
    }
}
</script>

<style>

</style>