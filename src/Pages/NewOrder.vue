<template>
    <app-layout>
        <template #header>
            <h3>New Order</h3>
        </template>
        <data-display>
            <products-selection :products="products" :selected="selected" v-on:item-selected="addItem"/>
            <div v-if="success">
                <p class="border-2 rounded p-3 px-4 text-green-500 border-green-500" :key="index" v-for="(item, index) in response">{{item}}</p>
                <p>Redirecting...</p>
            </div>
            <div v-else>

                <custom-button :type="'cancel'">
                    <router-link to="/orders">Cancel</router-link>
                </custom-button>
                <custom-button @click="createOrder">
                    Save Order
                </custom-button>
            </div>
        </data-display>
      
    </app-layout>

</template>

<script>
import AppLayout from '../utilities/components/AppLayout.vue'
import ProductsSelection from '../utilities/components/ProductsSelection.vue'
import {apiGetService, apiPostService} from '../utilities/ApiService'
import CustomButton from '../utilities/components/Button.vue'
import DataDisplay from '../utilities/components/DataDisplay.vue'

export default {
  components: { AppLayout, ProductsSelection, CustomButton, DataDisplay },
    mounted(){
      this.getProducts();
    },
    data(){
        return {
            loading: false,
            success: false,
            response: null,
            selected: [],
            products: [],
            cart: [],
            form: {
                items: null,
            }
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
        addItem(item){//Add item to order
            this.selected.push(item.id);
            let obj = {id: item.id, quantity: 1};
            var index = this.cart.indexOf(obj);
            if (index !== -1) {
                var quantity = this.cart[index].quantity;
                obj.quantity = quantity + 1;
                this.cart.splice(index, 1, obj)
                //this.cart.push(obj);
            }else{ 
                this.cart.push(obj);
            }
            console.log(this.selected)
   
        },
        async createOrder(){

            this.form.items = this.cart;

            this.loading = true;
            apiPostService('new-order', this.form)
            .then((responseJson) =>{
                this.loading = false;
                if(responseJson.status === 200){
                    this.success = true;
                    this.response = responseJson.data;
                    var timeOut = setTimeout(()=>{
                        clearInterval(timeOut);
                        this.success = false;
                        this.$router.push('orders')
                    }, 1600)
                    this.loading = false;
                }else if(responseJson.errors){
                    this.errors = responseJson.errors
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
  

}
</script>

<style>

</style>