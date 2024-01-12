<template>
  <el-menu
    default-active="1"
    class="ep-menu-vertical-demo"
    :collapse="isCollapse"
    unique-opened="true"
    @open="handleOpen"
    @close="handleClose"
  >
  <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title>平台概括</template>
    </el-menu-item>

    <el-sub-menu index="1-4">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="1-4-1">用户管理</el-menu-item>
      <el-menu-item index="1-4-2">角色管理</el-menu-item>
      <el-menu-item index="1-4-3">权限管理</el-menu-item>
      <el-menu-item index="1-4-4">部门管理</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="1-5">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系统配置</span>
      </template>
      <el-menu-item index="1-5-1">基础配置</el-menu-item>
      <el-menu-item index="1-5-2">定时任务</el-menu-item>
      <el-menu-item index="1-5-3">支付管理</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>禁用菜单</template>
    </el-menu-item>
 
    <el-menu-item index="4" @click="toPage('/login')">
      <el-icon><setting /></el-icon>
      <template #title>登录
      </template>
    </el-menu-item>

    <el-menu-item index="999" @click="isCollapse  = !isCollapse">
      <el-icon><setting /></el-icon>
      <template #title>折叠</template>
    </el-menu-item>

   
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const toPage = (url: string) => {
  router.push(url)
}
</script>

<style>
.ep-menu-vertical-demo:not(.ep-menu--collapse) {
  flex: 1;
  width: var(--ep-menu-width);
}
</style>
