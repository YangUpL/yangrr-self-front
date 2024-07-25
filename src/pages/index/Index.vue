<script setup lang="ts">

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" id="aside">
        <Aside></Aside>
      </el-aside>


      <el-container>
        <el-header id="header">
          <Header></Header>
        </el-header>

        <el-main id="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>

.common-layout{
  font-size: 0;
}

/* 选择id为'aside'的元素 */
#aside {
  /* 将'aside'元素的高度设置为视口高度的100% */
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vh;
  font-size: 14px;
}

/* 选择id为'header'的元素 */
#header {
  /* 在'header'元素内水平居中文本 */
  text-align: center;
  /* 设置'header'元素内文本的行高为60像素 */
  line-height: 10vh;
  /* 设置'header'元素的高度为60像素 */
  height: 10%;
  font-size: 14px;

  border-bottom: 1px solid #9d9393;
}

/* 选择id为'main'的元素 */
#main {
  /* 在'main'元素内水平居中文本 */
  text-align: center;
  font-size: 14px;
}

/* 针对Webkit浏览器（如Chrome和Safari） */
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}


</style>