<template>
    <div class="bg-white p-4 m-2 shadow  cursor-pointer transform duration-500 hover:-translate-y-1">
        <h5>{{item.name}}</h5>
        <p>Quantity:{{item.quantity}}</p>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            default: () => {
                return {}
            }
        }
    }

}
</script>

<style>

</style>