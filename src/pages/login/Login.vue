<script setup lang="ts">
  import {ref} from "vue";
  import {login} from "../../api/request";
  import {LoginDto} from "../../model/pojo";
  import router from "../../routers/router";
  import { useUserStore } from '../../stores/userStore';

  const userStore = useUserStore();
  const loginUser = ref<LoginDto>({ userAccount: "", userPassword: "" })

  async function handleLogin() {
  const response = await login(loginUser.value);

  if (response?.data.code === 20000) {
    userStore.setUser(response.data.data);
    router.push('/');
  }
}
</script>

<template>
  <div class="body">
    <div class="loginBox">
      <h2>登录</h2>
        <div class="item">
          <input type="text" required v-model="loginUser.userAccount">
          <label>请输入账号</label>
        </div>
        <div class="item">
          <input type="password" required v-model="loginUser.userPassword">
          <label>请输入密码</label>
        </div>
        <button class="btn" @click="handleLogin">登录
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button class="btn" @click="router.push('register')">去注册</button>
        <button class="btn" @click="router.push('findPwd')">忘记密码
        </button>
    </div>
  </div>
</template>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

input, button {
  background: transparent;
  border: 0;
  outline: none;
}

.body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#141e30, #243b55); /* 你想要的全屏背景色 */
  color: #03e9f4;
}

.loginBox {
  width: 400px;
  height: 364px;
  background-color: #0c1622;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 0 15px 25px 0 rgba(0, 0, 0, .6);
  padding: 40px;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  color: aliceblue;
  margin-bottom: 30px;
  font-family: 'Courier New', Courier, monospace;
}

.item {
  height: 45px;
  border-bottom: 1px solid #fff;
  margin-bottom: 40px;
  position: relative;
}

.item input {
  width: 100%;
  height: 100%;
  color: #fff;
  padding-top: 20px;
  box-sizing: border-box;
}

.item input:focus + label,
.item input:valid + label {
  top: 0;
  font-size: 2px;
}

.item label {
  position: absolute;
  left: 0;
  top: 12px;
  transition: all 0.5s linear;
}

.btn {
  padding: 10px 20px;
  margin-top: 30px;
  color: #03e9f4;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  left: 30%;
}


.btn:hover {
  border-radius: 5px;
  color: #fff;
  background: #03e9f4;
  box-shadow: 0 0 5px 0 #03e9f4,
  0 0 25px 0 #03e9f4,
  0 0 50px 0 #03e9f4,
  0 0 100px 0 #03e9f4;
  transition: all 1s linear;
}

.btn > span {
  position: absolute;
}

.btn > span:nth-child(1) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(to left, transparent, #03e9f4);
  left: -100%;
  top: 0;
  animation: line1 1s linear infinite;
}

@keyframes line1 {

  50%,
  100% {
    left: 100%;
  }
}

.btn > span:nth-child(2) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(to top, transparent, #03e9f4);
  right: 0;
  top: -100%;
  animation: line2 1s 0.25s linear infinite;
}

@keyframes line2 {

  50%,
  100% {
    top: 100%;
  }
}

.btn > span:nth-child(3) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(to left, #03e9f4, transparent);
  left: 100%;
  bottom: 0;
  animation: line3 1s 0.75s linear infinite;
}

@keyframes line3 {

  50%,
  100% {
    left: -100%;
  }
}

.btn > span:nth-child(4) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(to top, transparent, #03e9f4);
  left: 0;
  top: 100%;
  animation: line4 1s 1s linear infinite;
}

@keyframes line4 {

  50%,
  100% {
    top: -100%;
  }
}

</style>