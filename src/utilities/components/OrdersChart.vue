<template>
    <div class="w-full md:w-1/2">
        <div class="flex justify-center" v-if="loading">
            <loader />
        </div>
        <chart-display :chartdata="chartData" v-if="chartData"/>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>