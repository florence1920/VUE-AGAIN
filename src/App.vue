<template>
  <div id="app">
      <tool-bar></tool-bar>
      <div class="newsWrap">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
export default {
  name: 'App',
  components: {
    ToolBar

  }
}
</script>

<style scoped>
  .newsWrap {padding:90px 3% 0;}
</style>
