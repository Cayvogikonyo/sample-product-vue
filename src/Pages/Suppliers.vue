<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-4">
                Suppliers
            </h2>

        </template>
        <data-display>
            <div class="flex justify-end">
                <custom-button> <router-link to="/new-supplier"> New Supplier </router-link> </custom-button>
            </div>
            <div class="flex flex-wrap">
                <table class="w-full">
                    <thead>
                        <tr class="bg-gray-800 text-white">
                            <th class="p-3">#</th>
                            <th class="p-3">Name</th>
                            <th class="p-3">Created</th>
                            <th class="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr class="bg-white m-2 shadow transform duration-500 hover:-translate-y-1" :key="index" v-for="(item, index) in items">
                        <td class="p-4">{{index+1}}</td> 
                        <td class="p-4">{{item.name}}</td> 
                        <td class="p-4">{{timeLapsed(item.created_at)}} ago</td> 
                        <td class="p-4">
                            <custom-button class="mx-3" :type="'cancel'"> Delete </custom-button>
                            <custom-button> Open </custom-button>
                        </td> 
                    </tr>
                    </tbody>
                </table>
            </div>
        </data-display>
    </app-layout>
</template>

<script>
import DataDisplay from "../utilities/components/DataDisplay.vue";
import {apiGetService} from '../utilities/ApiService'
import AppLayout from '../utilities/components/AppLayout.vue';
import TimeUtility from '../utilities/Mixins/TimeUtility';
import CustomButton from '../utilities/components/Button.vue';

export default {
    
  components: { DataDisplay, AppLayout, CustomButton },
    mounted(){
        this.getSuppliers();
    },
    data(){
        return {
            items: []
        }
    },
    mixins:[TimeUtility],
    methods:{
        async getSuppliers(){
            apiGetService('suppliers').then((result) => {
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