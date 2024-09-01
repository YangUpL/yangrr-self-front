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
      <el-button type="primary" @click="handleUpdate(userDto)">确认修改</el-button>
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
      <el-input v-model="userDto.username" style="width: 240px" placeholder="Please input"/>
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
      <el-input v-model="userDto.phone" style="width: 240px" placeholder="Please input"/>
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
      <el-input v-model="userDto.email" style="width: 240px" placeholder="Please input"/>
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
        <el-radio-group v-model="userDto.gender" class="ml-4">
          <el-radio value="0" size="large">男</el-radio>
          <el-radio value="1" size="large">女</el-radio>
        </el-radio-group>
      </div>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Place/>
          </el-icon>
          PlanetCode
        </div>
      </template>
      <el-tag size="small">{{ userDto.planetCode }}</el-tag>
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
      <span v-show="userDto.userRole === 0">普通用户</span>
      <span v-show="userDto.userRole === 1" style="color: red">管理员</span>
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
        <el-col v-show="userDto.userStatus === 0">
          <el-result
              icon="success"
              title="正常"
          >
          </el-result>
        </el-col>

        <el-col v-show="userDto.userStatus === 1">
          <el-result
              icon="error"
              title="封禁"
          >
          </el-result>
        </el-col>
      </el-row>
    </el-descriptions-item>
  </el-descriptions>
  <div id="toHome">
    <router-link to="/">回到主页</router-link>
  </div>
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


import {onMounted} from 'vue'
import {updateDto} from "../../model/pojo";
import {update} from "../../api/request";
import { useUserStore } from '../../stores/userStore';

const userStore = useUserStore();
const userDto = ref<updateDto>({
  username: '',
  phone: '',
  email: '',
  gender: '0',
  planetCode: 0,
  userRole: 0,
  userStatus: 0,
})

onMounted(() => {
  const userInfo = sessionStorage.getItem('userInfo')
  if (userInfo) Object.assign(userDto.value, JSON.parse(userInfo))
})


function handleUpdate(userDto:updateDto){
  update(userDto)
  userStore.setUser(userDto);
}
</script>

<style scoped>
.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}

#toHome{
  margin-top: 10vh;
  font-size: 20px;
  color: #409EFF;
  cursor: pointer;
  margin-left: 50vw;
}
a{
  text-decoration: none;
  color: #409EFF;
}
</style>
