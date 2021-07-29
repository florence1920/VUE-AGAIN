<template>
    <div>
        <ul class="compoWrap">
            <li v-for="item in this.$store.state.news" v-bind:key="item.id">
                <span class="point">{{ item.points || 0}}</span>
                <span class="title">
                    <a v-bind:href="item.url">{{ item.title }}</a>
                </span>
                {{ item.time_ago }}               
                <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
    },
    computed:{

    }
}
</script>

<style scoped>
    .compoWrap li {margin:0 0 20px 0; padding:10px; border-bottom:1px solid rgb(202, 202, 202);}
    .compoWrap li .point {display: inline-block; width: 50px; color:rgb(255, 188, 4); font-weight:bold;}
    .compoWrap li .title {margin:0 10px 0; font-size:20px; font-weight:bold;}
</style>>
