<script lang="ts" setup>
import { ref, reactive, onMounted, inject, watch } from 'vue'
import { useRoute } from 'vue-router'

const baseSideCollapse = inject('baseSideCollapse')
const route = useRoute()
const breadcrumbData = ref([]) as any

const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter((item) => {
    return item.meta && item.meta.title
  })
}

// 监听路由发生改变时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

</script>
<template>
  <div style="display: flex; align-items: center">
    <svg
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      @click="baseSideCollapse = !baseSideCollapse"
    >
      <path
        fill="var(--rh-text-color-primary)"
        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg>
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in breadcrumbData as any" :key="item.path">
        <el-breadcrumb-item v-if="item.meta.parentTitle">{{
          item.meta.parentTitle
        }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="index === 0" :to="{ path: '/' }">{{
          item.meta.title
        }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else>{{ item.meta.title }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
  <el-divider />
</template>

<style scoped>
.hamburger {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
}
</style>
