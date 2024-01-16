<script setup lang="ts">
import { ref, reactive, onMounted, provide } from 'vue'

import BaseSide from '@/layouts/components/BaseSide.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

// home下组件需要全局状态 vue3自带的依赖注入 provide 
const baseSideCollapse = ref(false) //左侧菜单展开或收起
provide('baseSideCollapse', baseSideCollapse)
</script>

<template>
  <div class="app-container">
    <div class="left-container">
      <BaseSide  />
    </div>
    <div class="right-container">
      <div class="main">
        <Breadcrumb />
        <RouterView />
      </div>
      <div class="footer">
        <p>
          Edit
          <code>2024@abcdefg</code> to demo.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  padding-top: var(--rh-header-height);
}

.left-container {
  /* display: flex;
  flex-direction: column;
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  height: calc(100vh - var(--rh-header-height) - 3px); */
  /* width: var(--rh-menu-width); */
}

.right-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  height: calc(100vh - var(--rh-footer-height) - var(--rh-header-height) - 3px);
}

.right-container .main {
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: var(--rh-main-padding);
}

.right-container .footer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* width: calc(100vw - var(--rh-menu-width) - 0px); */
  bottom: 0px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--rh-footer-height);
  padding: var(--rh-main-padding);
}
</style>
