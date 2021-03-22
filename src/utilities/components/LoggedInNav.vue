<template>
    <drop-down align="right" width="48">
        <template #trigger>
            <button v-if="user" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                <img class="h-8 w-8 rounded-full overflow-hidden object-cover" :src="user.profile_photo" :alt="user.name" />
            </button>

            <button  v-else class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                <div v-if="user">{{ user}}</div>

                <div class="ml-1">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </button>
        </template>

        <template #content>
            <!-- Account Management -->
            <div class="block px-4 py-2 text-xs text-gray-400">
                {{user.name}}
            </div>



            <div class="border-t border-gray-100"></div>


            <!-- Authentication -->
            <form @submit.prevent="logout">
                <drop-down-link as="button">
                    Logout
                </drop-down-link>
            </form>
        </template>
    </drop-down>
</template>

<script>
import DropDown from './DropDown.vue'
import DropDownLink from './DropDownLink.vue'
export default {
  components: { DropDown,DropDownLink },
    props:{
        user:{
            type: Object,
            default:() => {
                return {}
            }
        }
    }
}
</script>

<style>

</style>