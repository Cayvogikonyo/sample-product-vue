<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-4">
                Orders
            </h2>
        </template>
        <data-display>

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
        this.getOrders();
    },
    data(){
        return {
            items: []
        }
    },
    methods:{
        async getOrders(){
            apiGetService('api/orders').then((result) => {
                this.items = result.data;
            }).catch((err) => {
                this.error = err;
            });
        },
    }
}
</script>

<style>

</style>