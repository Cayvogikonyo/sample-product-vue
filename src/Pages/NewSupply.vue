<template>
    <app-layout>
        <template #header>
            <h3>New Supply</h3>
        </template>
        <products-selection :products="products" />
    </app-layout>

</template>

<script>
import AppLayout from '../utilities/components/AppLayout.vue'
import ProductsSelection from '../utilities/components/ProductsSelection.vue'
import {apiGetService} from '../utilities/ApiService'

export default {
  components: { AppLayout, ProductsSelection },
    mounted(){
      this.getProducts();
    },
    data(){
        return {
            products: []
        }
    },
    methods:{
        async getProducts(){
            apiGetService('products').then((result) => {
                this.products = result.data.data;
            }).catch((err) => {
                this.error = err;
            });
        },
    }
  

}
</script>

<style>

</style>