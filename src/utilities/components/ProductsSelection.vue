<template>
    <div class="min-w-5xl mx-auto">
        <div class="flex justify-between">
            <div class="w-full md:w-1/3 md:min-w-64 self-start">
                <input type="text" v-model="search" class="w-full rounded" placeholder="search" />
            </div>
        </div>
        <div class="flex flex-wrap" v-if="items.length > 0">
            <product-item :class="selected.includes(item.id) ? 'bg-indigo-200': ''" :item="item"  :key="index" v-for="(item, index) in items" @click="$emit('item-selected', item)"/>
        </div>
        <div v-else>
            <p>No records found</p>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    components: {
        ProductItem
    },
    props:{
        products: {
            type: Array,
            default:()=>{
                return []
            }
        },
        selected: {
            type: Array,
            default:()=>{
                return []
            }
        }
    },
    data(){
        return {
            search: ''
        }
    },
    computed:{
        items(){
            if(this.search !== null || this.search !== ''){
                let filtered = [];
                this.products.forEach(element => {
                    if(element.name.toLowerCase().includes(this.search)){
                        filtered.push(element);
                    }
                });
                return filtered;
            }
            return this.products;
            
        }
    },

}
</script>

<style>

</style>