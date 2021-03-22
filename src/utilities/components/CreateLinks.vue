<template>
    <drop-down align="right" width="48">
        <template #trigger>
            <button class="flex text-sm border-2 p-2 border-transparent rounded-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                Create
            </button>

        </template>

        <template #content>
            
        <div>
            <router-link class="block p-3 shadow-sm hover:bg-gray-200" to="/new-order">New Order</router-link> 
            <router-link class="block p-3 shadow-sm hover:bg-gray-200" to="/new-supply">New Supply</router-link>
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