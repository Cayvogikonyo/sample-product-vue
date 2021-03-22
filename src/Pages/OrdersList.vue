<template>
  <div>
    <table class="w-full">
        <thead>
            <tr class="bg-gray-800 text-white">
                <th class="p-3">#</th>
                <th class="p-3">Order Number</th>
                <th class="p-3">Product Count</th>
                <th class="p-3">Created</th>
                <th class="p-3">Actions</th>
            </tr>
        </thead>
        <tbody>
        <tr class="bg-white m-2 shadow transform duration-500 hover:-translate-y-1" :key="index" v-for="(item, index) in items">
            <td class="p-4">{{index+1}}</td> 
            <td class="p-4">{{item.orderNumber}}</td> 
            <td class="p-4">{{item.count}}</td> 
            <td class="p-4">{{timeLapsed(item.created_at)}} ago</td> 
            <td class="p-4">
                <cus-button class="mx-3" :type="'cancel'"> Delete </cus-button>
                <cus-button> Open </cus-button>
            </td> 
        </tr>
        </tbody>
    </table>
      
  </div>
</template>

<script>
import CusButton from '../utilities/components/Button.vue';
import TimeUtility from '../utilities/Mixins/TimeUtility';

export default {
    components:{
        CusButton,
    },
    props:{
        top:{
            type: Boolean,
            default: false
        },
        items:{
            type: Array,
            default: ()=>{
                return []
            }
        }

    },
    mixins:[TimeUtility],

    mounted(){

    },
    data(){
        return {

        }
    },
}
</script>

<style>

</style>