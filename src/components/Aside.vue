<script setup lang="ts">

import {
  Menu as IconMenu,
  Location, Edit,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div id="logo">
    <img src="../assets/vue.svg">
  </div>

  <el-row class="tac">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"

    >
      <el-menu-item index="1">
        <el-icon>
          <icon-menu/>
        </el-icon>

        <router-link to="/">welcome</router-link>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>学技术</span>
        </template>
        <el-sub-menu index="1-1">
          <template #title>知识点学习</template>
          <el-menu-item index="1-1-1">
            <router-link to="/studyJavaTec">java核心</router-link>
          </el-menu-item>
          <el-menu-item index="1-1-2">c++核心</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-2">
          <template #title>面试题学习</template>
          <el-menu-item index="1-2-1">java面试题</el-menu-item>
          <el-menu-item index="1-2-2">c++面试题</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-3">
          <template #title>项目教学</template>
          <el-menu-item index="1-3-1">java项目</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="3">
        <el-icon>
          <Edit/>
        </el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
    <el-col :span="12">
    </el-col>
  </el-row>
</template>

<style scoped>
#logo {
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
}

.tac {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
}

* {

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  background-color: transparent;
  border: none;
}

a {
  color: #333333;
}
</style>