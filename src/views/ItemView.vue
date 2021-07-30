<template>
    <div>
        <user-profile>
            <template slot="username">
                {{fetchedItem.user}}
                
            </template>
        </user-profile>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';
export default {
    components:{
        UserProfile
    },
    computed :{
        ...mapGetters(['fetchedItem'])
    },
    created(){
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch('FETCH_ITEM',itemId);
        
    }
}
</script>

<style>

</style>