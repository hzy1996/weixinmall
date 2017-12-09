<template>
  <div class="box">
    <top/>
    <my-content />
    <my-nav/>
  </div>
</template>

<script>
  import top from './components/top.vue'
  import MyContent from './components/MyContent.vue'
  import MyNav from './components/nav.vue'
  export default {
    components: {
      top,
      MyContent,
      MyNav,
    }
  }
</script>

<style scoped>
  .box {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
