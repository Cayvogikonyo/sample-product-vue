<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-4">
                Orders
            </h2>
        </template>
        <data-display>
            <div class="flex justify-end">
                <custom-button> <router-link to="/new-order"> New Order </router-link> </custom-button>
            </div>
            <orders-list :items="items" />
        </data-display>
    </app-layout>
</template>

<script>
import DataDisplay from "../utilities/components/DataDisplay.vue";
import {apiGetService} from '../utilities/ApiService'
import AppLayout from '../utilities/components/AppLayout.vue';
import CustomButton from '../utilities/components/Button';
import OrdersList from './OrdersList.vue';

export default {
  components: { DataDisplay, AppLayout, OrdersList, CustomButton },
    mounted(){
        this.getOrders();
    },
    data(){
        return {
            items: []
        }
    },
    methods:{
        async getOrders(){
            apiGetService('orders').then((result) => {
                this.items = result.data.data;
                console.log(result.data.data)
            }).catch((err) => {
                this.error = err;
            });
        },
        
    }
}
</script>

<style>

</style>