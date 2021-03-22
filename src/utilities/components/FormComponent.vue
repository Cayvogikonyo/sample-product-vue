<template>
    <div class="max-w-6xl md:w-2/3 mx-auto sm:px-6 lg:px-8">

        <form @submit.prevent="$emit('submitted')">
            <div class="overflow-hidden">
                <div class="px-4 py-5 sm:p-6">
                    <slot name="form"></slot>
                </div>

                <div class="flex items-center relative justify-end px-4 py-3 bg-white dark:bg-gray-800 text-right sm:px-6" v-if="hasActions">
                    <div v-if="loading" >
                     <loader />
                    </div>
                    <slot name="actions" v-else></slot>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
import Loader from "./Loader.vue"


    export default { 
        components: { Loader },
        props: {
            loading: {
                type: Boolean,
                default:false
            }
        },
        computed: {
            hasActions() {
                return !! this.$slots.actions
            }
        }
    }
</script>
