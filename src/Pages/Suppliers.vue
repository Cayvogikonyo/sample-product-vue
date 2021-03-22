<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-4">
                Suppliers
            </h2>
        </template>
        <data-display>
            <template #header>
                <h4 class="font-bold">Suppliers</h4>
            </template>
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
        this.getSuppliers();
    },
    data(){
        return {
            items: []
        }
    },
    methods:{
        async getSuppliers(){
            apiGetService('api/suppliers').then((result) => {
                this.items = result.data.data;
                console.log(this.items)
            }).catch((err) => {
                this.error = err;
            });
        },
    }
}
</script>

<style>

</style>