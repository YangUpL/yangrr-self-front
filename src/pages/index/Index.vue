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

        <el-footer id="footer">
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>

/* 选择id为'aside'的元素 */
#aside {
  /* 将'aside'元素的高度设置为视口高度的100% */
  height: 100vh;

  display: flex;

  flex-direction: column;

}

/* 选择id为'header'的元素 */
#header {
  /* 在'header'元素内水平居中文本 */
  text-align: center;

  /* 设置'header'元素内文本的行高为60像素 */
  line-height: 60px;

  /* 设置'header'元素的高度为60像素 */
  height: 60px;
}

/* 选择id为'main'的元素 */
#main {
  /* 设置'main'元素的背景颜色为特定的黄色 */
  background-color: #f2f253;


  /* 在'main'元素内水平居中文本 */
  text-align: center;

  /* 设置'main'元素内文本的行高为200像素 */
  line-height: 200px;

  /* 设置'main'元素的高度为视口高度的100%减去120像素 */
  height: calc(100vh - 120px);
}

/* 选择id为'footer'的元素 */
#footer {
  /* 设置'footer'元素的背景颜色为特定的红色 */
  background-color: #f25353;


  /* 在'footer'元素内水平居中文本 */
  text-align: center;

  /* 设置'footer'元素内文本的行高为60像素 */
  line-height: 60px;

  /* 设置'footer'元素的高度为60像素 */
  height: 60px;
}


</style>