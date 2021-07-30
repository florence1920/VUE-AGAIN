<template>
    <div>
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

<style>

</style>