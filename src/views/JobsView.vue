<template>
    <div>
        <ul class="compoWrap">
            <li v-for="item in this.$store.state.jobs" v-bind:key="item.id">
                <span class="title">{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>


<style scoped>
    .compoWrap li {margin:0 0 20px 0; padding:10px; border-bottom:1px solid rgb(202, 202, 202);}
    .compoWrap li .point {display: inline-block; width: 50px; color:rgb(255, 188, 4); font-weight:bold;}
    .compoWrap li .title {margin:0 10px 0; font-size:20px; font-weight:bold;}
</style>>
