<template>
    <div class="box_user">
        <slot name="username"></slot>
        <slot name="karma"></slot>
        <slot name="time"></slot>
    </div>
</template>

<script>
export default {
    props:{
        info:Object
    },
}
</script>

<style scoped>
.box_user {overflow: hidden; width: 450px; margin:10px; background: #212529; padding: 25px 40px;}
.box_user .icon {float: left; width: 20%; margin: 0 5% 0 0; color:#fff; font-size:70px;}
.box_user .name {float: left; margin:15px 0 0; color:#fff; font-size:23px; font-weight: 600; text-decoration:none;}
.box_user .time {float: left; width: 75%; color:#777;}
</style>