<template>
  <el-radio-group v-model="size">
    <el-radio value="large">Large</el-radio>
    <el-radio value="default">Default</el-radio>
    <el-radio value="small">Small</el-radio>
  </el-radio-group>

  <el-descriptions
      class="margin-top"
      title="您的个人信息如下："
      :column="3"
      :size="size"
      border
  >
    <template #extra>
      <el-button type="primary">确认修改</el-button>
    </template>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user/>
          </el-icon>
          Username
        </div>
      </template>
      <el-input v-model="input_username" style="width: 240px" placeholder="Please input"/>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone/>
          </el-icon>
          Telephone
        </div>
      </template>
      <el-input v-model="input_tel" style="width: 240px" placeholder="Please input"/>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Comment/>
          </el-icon>
          Email
        </div>
      </template>
      <el-input v-model="input_email" style="width: 240px" placeholder="Please input"/>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Avatar/>
          </el-icon>
          Gender
        </div>
      </template>
      <div class="mb-2 flex items-center text-sm">
        <el-radio-group v-model="radio1" class="ml-4">
          <el-radio value="1" size="large">男</el-radio>
          <el-radio value="2" size="large">女</el-radio>
        </el-radio-group>
      </div>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Place/>
          </el-icon>
          PlantedCode
        </div>
      </template>
      <el-tag size="small">1</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Medal/>
          </el-icon>
          UserRole
        </div>
      </template>
      普通用户
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Check/>
          </el-icon>
          用户状态
        </div>
      </template>
      <el-row>
        <el-col>
          <el-result
              icon="success"
              title="正常"
          >
          </el-result>
        </el-col>
      </el-row>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {
  Avatar,
  Check, Comment,
  Iphone,
  Medal,
  Place,
  User,
} from '@element-plus/icons-vue'
import type {ComponentSize} from 'element-plus'

const size = ref<ComponentSize>('default')

const iconStyle = computed(() => {
  const marginMap: any = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})

const radio1 = ref('1')
const input_username = ref('')
const input_tel = ref('')
const input_email = ref('')
</script>

<style scoped>
.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}
</style>
