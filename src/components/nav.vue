<template>
    <div class="botm">
        <router-link to="/index">
            <i></i>
            <h2>首页</h2>
        </router-link>
        <router-link to="/fenlei">分类</router-link>
        <router-link to="/cart">购物车</router-link>
        <router-link to="/my">我的</router-link>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    .botm {
        width: 100%;
        height: 1rem;
        background: #369;
        position: fixed;
        bottom: 0;
    }
    .botm a{
        display: block;width: 25%;height: 100%;float: left;
    }
</style>


