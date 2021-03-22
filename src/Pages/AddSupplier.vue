<template>
    <app-layout>
        <template #header>
            <h3 class="p-4">New Supplier</h3>
        </template>
        <data-display>
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
                    </div>
                </template>
                <template #actions>
                    <div v-if="success">
                        <p class="border-2 rounded p-3 px-4 text-green-500 border-green-500" :key="index" v-for="(item, index) in response">{{item}}</p>
                        <span>Redirecting...</span>
                    </div>
                    <div v-else>
                        <custom-btn :type="'cancel'"> <router-link to="/"> Cancel </router-link> </custom-btn>
                        <custom-btn @click="createNewsupplier"> Create</custom-btn>
                    </div>
                
                    <div v-if="errors.length > 0">
                        <p class="text-yellow-600">Something went wrong</p>
                    </div>
                
                </template>
            </form-component>
        </data-display>
    </app-layout>

</template>

<script>
import AppLayout from '../utilities/components/AppLayout.vue'
import DataDisplay from '../utilities/components/DataDisplay.vue'
import { apiPostService } from '../utilities/ApiService'
import CustomBtn from '../utilities/components/Button.vue'
import FormComponent from '../utilities/components/FormComponent.vue'

export default {
  components: { AppLayout, DataDisplay, CustomBtn, FormComponent },
  data(){
    return {
      errors: [],
      loading:false,
      success:false,
      response: {},
      form: {
        name: '',
        description: '',
        quantity: 0,
      }
    }
  },
  methods: {
    createNewsupplier() {
      this.loading = true;
       apiPostService('new-supplier', this.form)
       .then((responseJson) =>{
         this.loading = false;
         if(responseJson.status === 200){
           this.success = true;
            this.response = responseJson.data;
           var timeOut = setTimeout(()=>{
             clearInterval(timeOut);
             this.success = false;
             this.$router.push('suppliers')
           }, 1600)
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