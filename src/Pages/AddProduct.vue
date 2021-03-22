<template>
    <app-layout>
        <template #header>
            <h3 class="p-4">New Product</h3>
        </template>
        <form-component :loading="loading">
          <template #description>
            <div :key="index" v-for="(item, index) in  errors">
              <p>{item}</p>
            </div>
          </template>
          <template #form>
            <div class="flex flex-wrap">
              <div class="p-4 w-full md:w-1/2">
                <label for="name" class="block text-left">Name</label>
                <input class="form-input rounded-md shadow-sm w-full" type="text" v-model="form.name"/>
              </div>
              <div class="p-4 w-full md:w-1/2">
                <label for="description" class="block text-left">Description</label>
                <textarea class="rounded w-full" v-model="form.description"/>
              </div>
              <div class="p-4 w-full md:w-1/2">
                <label for="quantity" class="block text-left">Quantity</label>
                <input class="form-input rounded-md shadow-sm w-full" type="number" min="0" v-model="form.quantity"/>
              </div>
            </div>
            
          </template>
          <template #actions>
            <custom-btn :type="'cancel'"> <router-link to="/"> Cancel </router-link> </custom-btn>
            <custom-btn @click="createNewProduct"> Create</custom-btn>
          </template>
        </form-component>
    </app-layout>

</template>

<script>
import { apiPostService } from '../utilities/ApiService'
import AppLayout from '../utilities/components/AppLayout.vue'
import CustomBtn from '../utilities/components/Button.vue'
import FormComponent from '../utilities/components/FormComponent.vue'
export default {
  components: { AppLayout, FormComponent, CustomBtn },
  mounted(){

  },
  data(){
    return {
      errors: [],
      loading:false,
      form: {
        name: '',
        description: '',
        quantity: 0,
      }
    }
  },
  methods: {
    createNewProduct() {
      this.loading = true;
       apiPostService('new-product', this.form)
       .then((responseJson) =>{
         this.loading = false;
         if(responseJson.status === 200){
           this.loading = false;
         }else if(responseJson.errors){
           this.errors = responseJson.errors
         }
       }).catch((err) => {
         console.log(err);
       })
    },
  }
}
</script>

<style>

</style>