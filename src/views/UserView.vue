<template>
    <div>
        {{userInfo.id}}
        {{userInfo.karma}}
        {{userInfo.created}}
    </div>
</template>

<script>
export default {
    computed:{
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){
        const userName = this.$route.params.id
        this.$store.dispatch('FETCH_USER',userName);
    }
}
</script>

<style>

</style>