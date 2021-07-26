<template>
    <div>
        <ul class="navBar">
            <li>
                <router-link to="/jobs">JOBS</router-link>
            </li>
            <li>
                <router-link to="/ask">ASK</router-link>
            </li>
            <li>
                <router-link to="/news">NEWS</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navBar {overflow: hidden; background: rgb(255, 188, 4); width: 100%; height: 70px; position:fixed;}
.navBar li {float:right; margin:0 1% 0; line-height: 70px;}
.navBar li:nth-child(1) {margin:0 2% 0 1%;}
.navBar li a {color:#fff; font-weight: bold;}

</style>