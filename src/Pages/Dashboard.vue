<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight p-4">
                Dashboard
            </h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex flex-wrap md:flex-row sm:flex-col max-w-full mx-auto justify-center md:justify-between sm:px-6 md:px-0 md:mx-6">
                    <date-stat  />
                    <dashboard-stat v-bind:element="item" :key="index" v-for="(item, index) in elements" />
                </div>

                <data-display>
                    <div class="flex">
                        <div class="w-full md:w-1/2">
                            <div class="flex justify-center" v-if="loading">
                                <loader />
                            </div>
                            <chart-display :chartdata="chartData" v-else/>
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="flex justify-center" v-if="items.length === 0">
                                <loader />
                            </div>
                            <orders-list :items="items" v-else/>
                        </div>
                    </div>
                </data-display>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '../utilities/components/AppLayout'
    import DateStat from '../utilities/components/DateStat.vue'
    import DashboardStat from '../utilities/components/DashboardStat'
    import {apiGetService} from '../utilities/ApiService'
    import ChartDisplay from '../utilities/components/ChartDisplay.vue'
    import DataDisplay from '../utilities/components/DataDisplay.vue'
    import Loader from '../utilities/components/Loader.vue'
    import OrdersList from './OrdersList.vue'

    export default {
        components: {
            AppLayout,
            DateStat,
            DashboardStat,
            ChartDisplay,
            DataDisplay,
            Loader,
            OrdersList,
        },
        mounted(){
            this.getElements();
            this.getChartData();
            this.topSales();
        },
        data(){
            return {
                loading: true,
                items: [],
                elements: [],
                chartData: null,
            }
        },
        methods:{
            async getElements(){
                apiGetService('elements').then((result) => {
                    this.elements = result.data;
                }).catch((err) => {
                    this.error = err;
                });
            },
            //Fetch graph report data
            async getChartData(){
                apiGetService('reports/product-sales').then((result) => {
                    this.chartData = result.data;
                    //this.loading=false;
                }).catch((err) => {
                    this.error = err;   
                });
            },
            async topSales(){
                apiGetService('top-sales').then((result) => {
                    this.items = result.data.data;
                    console.log(result);
                }).catch((err) => {
                    this.error = err;
                });
            },
        }
    }
</script>
