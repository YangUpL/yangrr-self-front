<script setup lang="ts">
import router from '../routers/router.ts';
import {onMounted,ref} from "vue";
import {ArrowDown} from "@element-plus/icons-vue";
import {logout} from "../api/request.ts";

function toLogin() {
  router.push('/login')
}

function toRegister() {
  router.push('/register')
}

const message = ref('')
const isLogin = ref(false);

function checkLogin() {
  const userInfo = sessionStorage.getItem('userInfo');
  if (userInfo != null) {
    const user = JSON.parse(userInfo);
    message.value = user.username;
    isLogin.value = true;
  } else {
    isLogin.value = false;
  }
}

onMounted(() => {
    checkLogin()
});
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
    <el-button type="primary" round @click="toLogin" v-show="!isLogin">登录</el-button>
    <el-button type="success" round @click="toRegister" v-show="!isLogin">注册</el-button>

    <el-dropdown v-show="isLogin">
    <span class="el-dropdown-link">
      欢迎：{{ message }}
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>

.el-dropdown-link {
  display: block;
  margin-top: 18px;
}

.el-dropdown-link:hover {
  cursor: pointer;
  border: none;
}

#header_list {
  display: inline-block;

  span {

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