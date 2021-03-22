<template>
  <data-display>
      <div class="flex flex-wrap">
        <div class="bg-white p-4 m-2 shadow transform duration-500 hover:-translate-y-1" :key="index" v-for="(item, index) in items">
            <h5>{{item.name}}</h5>
        </div>
      </div>
  </data-display>
</template>

<script>
import DataDisplay from "../utilities/components/DataDisplay.vue";
import {apiGetService} from '../utilities/ApiService'

export default {
  components: { DataDisplay },
  props:{
      top:{
          type: Boolean,
          default: false
      }

  },
    mounted(){
        if(this.top){
            this.topSales();
        }else{
            this.getOrders();
        }
    },
    data(){
        return {
            items: []
        }
    },
    methods:{
        async getOrders(){
            apiGetService('api/orders').then((result) => {
                this.items = result.data.data;
            }).catch((err) => {
                this.error = err;
            });
        },
        async topSales(){
            apiGetService('api/top-sales').then((result) => {
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