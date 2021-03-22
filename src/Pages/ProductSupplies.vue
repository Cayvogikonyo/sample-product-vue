<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-4">
                Product Supplies
            </h2>
        </template>
        <data-display>
            <div class="flex flex-wrap">
                <div class="bg-white p-4 m-2 shadow transform duration-500 hover:-translate-y-1" :key="index" v-for="(item, index) in items">
                    <h5>{{item.name}}</h5>
                </div>
            </div>
        </data-display>
    </app-layout>
</template>

<script>
import DataDisplay from "../utilities/components/DataDisplay.vue";
import {apiGetService} from '../utilities/ApiService'
import AppLayout from '../utilities/components/AppLayout.vue';

export default {
  components: { DataDisplay, AppLayout },
    mounted(){
        this.getProductSupplies();
    },
    data(){
        return {
            items: []
        }
    },
    methods:{
        async getProductSupplies(){
            apiGetService('api/product-supplys').then((result) => {
                this.items = result.data.data;
            }).catch((err) => {
                this.error = err;
            });
        },
    }
}
</script>

<style>

</style>