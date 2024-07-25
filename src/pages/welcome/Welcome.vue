<script setup lang="ts">
import {onMounted, computed,onUnmounted,ref} from "vue";
import {ArrowRight} from "@element-plus/icons-vue";

let uniqueId = ref(null);
let isLogin = ref(false);
let totalSeconds = 30;
let timer:number;

const currentSeconds = ref(totalSeconds);

const countdown = computed(() => {
  return currentSeconds.value >= 0? currentSeconds.value : 0;
});

onMounted(() => {
  timer = setInterval(() => {
    currentSeconds.value--;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});



// 获取sessionStorage中的用户信息
onMounted(() => {
  const sessionUser = sessionStorage.getItem('userInfo');
  if (sessionUser) {
    isLogin.value = true;
    const userInfo = JSON.parse(sessionUser);
    if (userInfo) {
      uniqueId.value = userInfo.uniqueId;
    }
  }
});

// 30秒后清空uniqueId
setTimeout(() => {
  if (uniqueId.value){
    const sessionUser = sessionStorage.getItem('userInfo');
    if (sessionUser) {
      const userInfo = JSON.parse(sessionUser);
      userInfo.uniqueId = null;
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      window.location.reload()
    }
  }
}
, 29000)
</script>

<template>
  <div id="father">
    <div class="welcome">
      <div id="main_content1">
        <span>了解平台</span>
        <hr>
        <br>
        这里是一个全心专注于 Java 和 C++ 学习的专业网站。在这个知识的宝库中，您能够发掘关于 Java 和 C++ 全方位且详尽入微的文字讲解内容。
        无论是 Java 的基础语法，如变量、数据类型、控制结构，还是 C++
        中的指针、引用、模板等复杂概念，这里都有清晰明了的阐述。从最基础的语法规则起步，逐步深入到复杂精妙的算法世界，每一个步骤都为您精心铺就。
        面向对象编程这一重要概念，在网站中更是有着深入浅出的解读。无论是 Java 中类与对象的封装、继承和多态，还是 C++
        中对象模型和运行时类型信息，都通过实际的案例和丰富多样的示例为您呈现。
        无论您是初涉编程领域的初学者，怀揣着对知识的渴望，急切想要打下坚实基础；还是已经拥有一定经验的开发者，期望在技术的海洋中继续深耕，进一步提升自己的技能水平，这个网站都能精准地满足您的需求。网站中的文字清晰易懂，所提供的示例丰富多样，犹如一位耐心的导师，助您轻松理解每一个晦涩难懂的知识点。无需在茫茫的网络世界中四处寻找，这里毫无疑问就是您学习
        Java 和 C++ 的最佳去处，是您通向编程成功的理想之桥。
      </div>

      <div id="main_img">
        <img src="../../assets/主页.jpg" alt="主页" loading="lazy">
      </div>
    </div>

    <div id="info">

      <div id="note" v-show="uniqueId">
        温馨提示: 请妥善保管您的唯一用户表示ID:<br>
        {{ uniqueId }}<br>
        这是你找回密码的唯一方式。<br>
        此信息<span><b>{{countdown}}</b></span>后消失
      </div>

      <div id="begin" v-show="isLogin">
        <router-link to="/studyJavaTec">
          点击这里开启 java 编程之旅
          <el-icon>
            <ArrowRight/>
          </el-icon>
        </router-link>

        <br><br>
        <router-link to="/studyC++Tec">
          点击这里开启 C++ 编程之旅
          <el-icon>
            <ArrowRight/>
          </el-icon>
        </router-link>

      </div>

      <router-link to="/login" style="margin-top: 5vh" v-show="!isLogin">
        去登陆 体验完整功能
        <el-icon>
          <ArrowRight/>
        </el-icon>
      </router-link>
    </div>


  </div>

</template>

<style scoped>

.welcome {
  display: flex;
  justify-content: space-between;
}

#main_content1 {
  width: 30vw;
  height: 30vh;
  margin-top: 3vh;

  el-card {
    width: 100%;
    height: 100%;
  }
}

#main_img {
  width: 45vw;
  height: 55vh;
  margin-top: 5vh;
}

#main_img img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}


#info {
  display: flex;
  justify-content: right;
  align-items: center;
}

#note {
  color: red;
  margin-top: 5vh;
  margin-right: 5vh;
}

#begin {
  margin-top: 15px;
}

a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
