<template>
  <div id="father">
    <div class="welcome">
      <div id="main_content1">
        <h2 class="title">了解平台</h2>
        <hr class="divider">
        <p class="content-text">
          这里是一个全心专注于 <span class="highlight">Java</span> 和 <span class="highlight">C++</span> 学习的专业网站。在这个知识的宝库中，您能够发掘关于 Java 和 C++ 全方位且详尽入微的文字讲解内容。
          从最基础的语法规则到复杂精妙的算法，每一个步骤都为您精心铺就。
          无论您是初学者还是有经验的开发者，这个网站都能满足您的需求。
        </p>
      </div>

      <div id="main_img" v-if="isLargeScreen">
        <img src="../../assets/主页.jpg" alt="主页" loading="lazy">
      </div>
    </div>

    <div class="typing-container">
      <div class="typing-text">且做等春树,厚积而薄发</div>
    </div>

    <div id="info">
      <!-- 弹窗提示 -->


      <router-link to="/login" v-show="!isLogin" class="login-link">
        去登录，体验完整功能
        <el-icon>
          <ArrowRight />
        </el-icon>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';

const isLogin = ref(false);

const isLargeScreen = ref(window.innerWidth >= 1250);

const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1250;
};

onMounted(() => {
  // 监听窗口大小变化
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

</script>

<style scoped>
/* 弹窗样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.close-btn {
  background: #3498db;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

.close-btn:hover {
  background: #2980b9;
}

/* 默认大屏幕样式 */
.welcome {
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
  position: relative;
}

#main_content1 {
  width: 40%;
  height: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#main_content1:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.title {
  text-align: center;
  font-family: 'Merriweather', serif;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.divider {
  width: 50px;
  height: 3px;
  background-color: #3498db;
  margin-bottom: 1.5rem;
  border: none;
}

.content-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #34495e;
}

.highlight {
  color: #e67e22;
  font-weight: bold;
}

#main_img {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#main_img img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
}

.login-link {
  margin-top: .2rem;
  font-weight: bold;
  color: #3498db;
  text-decoration: none;
  position: absolute;
  right: 40px;
}

.login-link:hover {
  text-decoration: underline;
}

a {
  text-decoration: none;
  color: #333;
}

.typing-container {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; /* 高度自适应内容 */
  padding: 1rem; /* 可选：添加内边距 */
}

.typing-text {
  font-size: 1.3rem;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  color: #3498db;
  white-space: nowrap; /* 防止文字换行 */
  overflow: hidden; /* 隐藏超出容器的文字 */
  border-right: 2px solid #3498db; /* 打字光标效果 */
  animation: typing 4s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: #3498db; }
}

/* 媒体查询用于响应式设计 */
@media (max-width: 1250px) {
  .welcome {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  #main_img {
    display: none;
  }

  #main_content1 {
    width: 80%;
    margin-top: 1rem;
  }

  #info {
    align-items: center;
    margin-top: 1rem;
  }
}

@media (max-width: 850px) {
  .login-link {
    display: none;
  }

  .typing-container {
    display: none;
  }
}


</style>
