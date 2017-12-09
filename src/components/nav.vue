<template>
    <div class="botm">
        <router-link to="/index" class="router">
            <Icon type="android-home" size="25"></Icon>
            <h2>首页</h2>
        </router-link>
        <router-link to="/fenlei" class="router">
            <Icon type="grid"></Icon>
            <h2>分类</h2>
        </router-link>
        <router-link to="/cart" class="router">
            <Icon type="android-cart"></Icon>
            <h2>购物车</h2>
        </router-link>
        <router-link to="/my" class="router">
            <Icon type="android-person"></Icon>
            <h2>我的</h2>
        </router-link>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
    .botm {
        width: 100%;
        height: 1rem;
        /* background: #369; */
        position: fixed;
        bottom: 0;
        color: #000!important;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
    }
    /* .botm a {
        display: block;
       
        float: left;
    } */
    .router {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
         width: 24%;
        height: 100%;
    }
    .router h2{
        font-size: 0.2rem;
    }
</style>


