<script setup lang="ts">
  import router from '../routers/router.ts';

  function toLogin() {
    router.push('/login')
  }

  function toRegister() {
    router.push('/register')
  }
</script>

<template>

  <div id="header_list">
    <span><a>平台简介</a></span>
    <span><a>了解作者</a></span>
    <span><a>每日分享</a></span>
    <span><a>知识交流</a></span>
    <span><a>平台反馈</a></span>
  </div>

  <div id="header_button">
    <el-button type="primary" round @click="toLogin">登录</el-button>
    <el-button type="success" round @click="toRegister">注册</el-button>
  </div>
</template>

<style scoped>

#header_list {
  display: inline-block;

  span{

    margin: 0 19px;
    font-size: 14px;
  }
}

#header_button {

  display: inline-block;

  position: absolute;
  right: 20px;
}
</style>