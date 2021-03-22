<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-4">
                Products
            </h2>
        </template>
        <data-display>
            <div class="flex justify-end">
                <custom-button> <router-link to="/new-product"> New Product </router-link> </custom-button>
            </div>
            <products-selection :products="products" class="w-full md:w-2/3 mx-auto"/>
        </data-display>
    </app-layout>
</template>

<script>
import DataDisplay from "../utilities/components/DataDisplay.vue";
import {apiGetService} from '../utilities/ApiService'
import AppLayout from '../utilities/components/AppLayout.vue';
import ProductsSelection from '../utilities/components/ProductsSelection.vue';
import CustomButton from '../utilities/components/Button.vue';

export default {
  components: { DataDisplay, AppLayout, ProductsSelection, CustomButton },
    mounted(){
      this.getProducts();
    },
    data(){
        return {
            products: [],
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