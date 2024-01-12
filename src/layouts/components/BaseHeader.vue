<script lang="ts" setup>
import { toggleDark } from '@/composables'
import { Sunny, Moon } from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const logout = () => {
  router.push("/login")
}
</script>

<template>
  <el-menu class="el-menu-demo" :ellipsis="false" mode="horizontal">
    <div class="header-logo" style="display: flex">
      <!-- LOGO ADMIN -->
      <h3>REHE ADMIN</h3>
    </div>
    <div style="flex-grow: 1" />
    <el-menu-item index="1">
      <RouterLink to="/">首页</RouterLink>
    </el-menu-item>
    <!-- <el-sub-menu index="2">
      <template #title>工作空间</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    
    <el-menu-item index="4-2">
      <RouterLink to="/dataCenter">数据中心</RouterLink>
    </el-menu-item>
    <el-menu-item index="4-3">
      <RouterLink to="/log">日志系统</RouterLink>
    </el-menu-item>
    <div style="flex-grow: 10" />
    <!-- <el-menu-item index="4">展开</el-menu-item> -->
    <el-menu-item index="6" @click="toggleDark()">
      <div>
        <el-icon style="margin: 0;"><Sunny /></el-icon>
      </div>
    </el-menu-item>
  
    <el-sub-menu index="5">
      <template #title>游客:admin</template>
      <el-menu-item index="5-1">个人中心</el-menu-item>
      <el-menu-item index="5-2" @click="logout">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<style>
.header-logo {
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 26px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
