<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { obtainJavaQuestion } from "../../api/request";
import { obtainJavaQuestionDto, questionPageDto } from "../../model/pojo";
import { Search } from '@element-plus/icons-vue'

const questionDtoArray = ref<Array<obtainJavaQuestionDto>>([
  {
    id: 0,
    question: '暂无数据',
    classification: 0
  }
]);

const queName = ref('')
const classification = ref(-1) // 默认为 -1，表示全部
const classificationArray = [
  { value: -1, label: '全部' },
  { value: 0, label: 'java基础' },
  { value: 1, label: '并发' },
  { value: 2, label: '虚拟机JVM' },
  { value: 3, label: 'mysql' },
  { value: 4, label: 'redis' },
]

import type { ComponentSize } from 'element-plus'
import router from "../../routers/router";
const currentPage4 = ref(1)
const pageSize4 = ref(5)
const total = ref(0)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  pageInfo.size = val;
  javaQuestion();
}

const handleCurrentChange = (val: number) => {
  pageInfo.current = val;
  javaQuestion();
}

const pageInfo: questionPageDto = {
  queName: queName.value,
  classification: classification.value,
  size: pageSize4.value,
  current: currentPage4.value
}

function searchQuestion() {
  pageInfo.queName = queName.value;
  pageInfo.classification = classification.value;
  javaQuestion();
}

function selectType(value: number) {
  classification.value = value;
  searchQuestion();
}

function toYuque() {
  router.push("/interviewAnswer");
}

async function javaQuestion() {
  const resp = await obtainJavaQuestion(pageInfo);
  total.value = resp.total;
  const arr = resp.javaQuestionList;

  questionDtoArray.value = arr.length > 0 ? arr : [
    { id: 0, question: '暂无数据', classification: 0 }
  ];
}

onMounted(javaQuestion);

// 监听 queName 的变化，自动调用 searchQuestion
watch(queName, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    searchQuestion();
  }
});
</script>

<template>
  <div class="question">
    <div class="header">
      <el-input v-model="queName" 
        style="width: 250px;" 
        placeholder="搜索题目" 
        clearable
      />
      <!-- <el-button :icon="Search" @click="searchQuestion" class="search-button" /> -->
      
      <el-select v-model="classification" 
        placeholder="选择题目类型" 
        class="classification-select"
      >
        <el-option
          v-for="item in classificationArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          @click="selectType(item.value)"
        />
      </el-select>
    </div>

    <div class="content">
      <el-card shadow="hover" v-for="questionDto in questionDtoArray" :key="questionDto.id" class="question-card">
        <p>{{ questionDto.question }}</p>
        <el-button size="small" 
          v-show="questionDto.question != '暂无数据'"
          @click="toYuque"
          class="answer-button"
        >
          查看答案
        </el-button>
      </el-card>
    </div>

    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[5,10,15,20]"
        :size="size"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped>
  .question {
    width: 90%;
    margin: auto;
    padding: 20px;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .el-input, .el-select {
    margin-right: 10px;
  }

  /* .search-button {
    margin-left: 10px;
  } */

  .classification-select {
    width: 200px;
    margin-left: 450px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .question-card {
    padding: 15px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .answer-button {
    margin-top: 10px;
    background-color: #409eff;
    color: #ffffff;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
</style>
