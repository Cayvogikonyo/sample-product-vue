<template>
    <drop-down align="right" width="48">
        <template #trigger>
            <button class="flex text-sm p-2 border-2 border-transparent rounded-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                Add
            </button>

        </template>

        <template #content>
            
        <div>
            <router-link class="block p-3 shadow-sm hover:bg-gray-200" to="/add-product">Add Product</router-link>
            <router-link class="block p-3 shadow-sm hover:bg-gray-200" to="/add-supplier">Add Supplier</router-link>
        </div>
        </template>
    </drop-down>
</template>

<script>
import DropDown from './DropDown.vue'
export default {
  components: { DropDown }
}
</script>

<style>

</style>