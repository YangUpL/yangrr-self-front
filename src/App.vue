<script setup lang="ts">

import Index from "./pages/index/Index.vue";
import MusicPlayer from "./components/Music/index.vue";

import {computed, onMounted} from "vue"
import {useRoute} from 'vue-router'
import {current} from "./api/request";
import {useDefer} from './utils/useDefer'
const defer = useDefer();

const route = useRoute() // 路由信息对象
// 判断是否显示Index组件
const isIndex = computed(() => {
  return route.name !== "Login" && 
  route.name !== "Register" && 
  route.name !== "SelfCenter" &&
  route.name !== "FindPwd";
})

onMounted(() => {
  current()
})
</script>

<template>

  <div>
    
        <!--  v-show 是 Vue.js 中一个用于条件性地显示 DOM 元素的指令。
        它根据 JavaScript 表达式的真值来决定是否显示元素。与 v-if 不同，
        后者会从 DOM 中添加或删除元素，v-show 只是切换元素的 display CSS 属性。-->
        <Index v-show="isIndex" v-if="defer(1)"></Index>

          <!--  显示路由信息-->
        <router-view v-show="!isIndex" v-if="defer(0)"></router-view>

        <MusicPlayer v-if="defer(2)"/>
  
        
  </div>


</template>

<style scoped>

</style>