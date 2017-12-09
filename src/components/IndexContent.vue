<template>
  <div class="box">
    <el-carousel :interval="1000" arrow="always">
      <el-carousel-item v-for="v in $store.state.playArr">
        <img :src="v" :style="style">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    computed:{

    },
    mounted(){
      
    }
  }
</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
  }
</style>
