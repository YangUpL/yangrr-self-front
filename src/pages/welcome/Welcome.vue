<script setup lang="ts">
import {onMounted, ref} from "vue";


let uniqueId = ref('');
let username = ref('');
onMounted(function getUniqueId() {
  const sessionUser = sessionStorage.getItem('userInfo')

  if (sessionUser) {
    const userInfo = JSON.parse(sessionUser)
    if (userInfo) {
      uniqueId.value = userInfo.uniqueId
      username.value = userInfo.username
    }
  }
})
</script>

<template>
  <div class="welcome">
    <div id="main_content1">
      <el-card style="width: 50vh">
        <template #header>了解平台</template>
            这里是专注于 Java 和 C++ 学习的网站。
            在这里，您能找到关于 Java 和 C++ 全面且详细的文字讲解内容。从基础语法到复杂的算法，从面向对象编程的概念到实际项目的应用，应有尽有。
            无论是初学者，想要打下坚实基础，还是有一定经验的开发者，期望提升技能，这些网站都能满足您的需求。文字清晰易懂，示例丰富多样，助您轻松理解每一个知识点。
            无需四处寻找，这里就是您学习 Java 和 C++ 的最佳去处
      </el-card>
    </div>
    
    <div id="main_img">
      <img src="../../assets/主页.jpg" alt="aa">
    </div>

    <div id="main_content2">
      <el-card style="width: 50vh">
        <template #header>熟悉平台</template>
        在这个知识的宝库中，您将发现 Java和C++基础知识与面试题的精彩汇聚,
        无论是 Java 面向对象编程的精髓，还是 C++高效内存管理的秘诀，都能在此一一探寻。
        众多基础概念，如数据类型、控制结构等，清晰呈现。而丰富多样的面试题，涵盖算法、设计模式等关键领域，助您应对挑战。
        例如,Java 中线程安全的实现方式，C++中指针与引用的区别。
        相信在这里深入学习，您定能收获满满，为未来的编程之路打下坚实基础，开启成功的大门。
      </el-card>
    </div>
    <div id="note">
      温馨提示: 请妥善保管您的唯一用户表示ID:{{uniqueId}}
      这是你找回密码的唯一方式
    </div>
  </div>

</template>

<style scoped>

#note{
  display: block;
  margin-top: 50px;
  color:red
}

#main_img{
  display: inline-block;
  width: 70vh;
  height:40vh;

  img{
    width: 100%;
    height: 100%;
  }

}

#main_content1:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;

  cursor: pointer;
}

#main_content1{
  margin-top: 20px;
  font-size: 14px;
  display: inline-block;
  padding-right: 20px;
}

#main_content2:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;

  cursor: pointer;
}
#main_content2{
  margin-top: 20px;
  font-size: 14px;
  display: inline-block;
  padding-left: 20px;
}
</style>