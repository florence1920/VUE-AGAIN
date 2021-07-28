<template>
    <div>
        <h2>{{fetchedItem.title}}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
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