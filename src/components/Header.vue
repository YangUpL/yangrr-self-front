<script setup lang="ts">
import router from '../routers/router';
import { onMounted, ref } from "vue";
import { logout } from "../api/request";
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();

function toLogin() {
  router.push('/login')
}

function toRegister() {
  router.push('/register')
}

function toSelfCenter() {
  router.push('/selfCenter')
}

async function handleLogout() {
  await logout();
  userStore.clearUser();

  // toLogin();  // 跳转到登录页面
}

onMounted(() => {
  const userInfo = sessionStorage.getItem('userInfo');
  if (userInfo) {
    userStore.setUser(JSON.parse(userInfo));
  }
});

</script>
<template>
  <div>
    <div id="header_list">
      <span><router-link to="/welcome/platform-introduction">平台简介</router-link></span>
      <span><router-link to="/welcome/about-author">了解作者</router-link></span>
      <span><router-link to="/welcome/knowledge-exchange">知识交流</router-link></span>
    </div>

    <div id="header_button">
      <el-button type="primary" round @click="toLogin" v-show="!userStore.isLogin">登录</el-button>
      <el-button type="success" round @click="toRegister" v-show="!userStore.isLogin">注册</el-button>

      <el-dropdown v-show="userStore.isLogin" size="primary" split-button type="primary" class="el-dropdown-link">
        欢迎：{{ userStore.userInfo?.username }}
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toSelfCenter">个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.el-dropdown-link {
  display: block;
  margin-top: 10px;
  border: none;
}

.el-dropdown-link:hover {
  cursor: pointer;
}

#header_list {
  display: inline-block;
}

a{
  text-decoration: none;
  cursor: pointer;
  color: black;
}


/* 鼠标悬停时的颜色 */
a:hover {
    color: rgb(139, 72, 0);
    font-size: 16px;
}

/* 当前激活链接的颜色 */
.router-link-active {
  color: rgb(139, 72, 0);
  font-size: 16px;
}

#header_list span{
    margin: 0 2vw;
    font-size: 14px; 

    padding: auto;
}

#header_button {
  display: inline-block;
  position: absolute;
  right: 20px;
}
</style>
