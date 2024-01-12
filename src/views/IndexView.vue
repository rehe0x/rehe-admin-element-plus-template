<script setup lang="ts">
import BaseHeader from '@/layouts/components/BaseHeader.vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <div class="common-layout">
      <div class="header">
        <BaseHeader />
      </div>
      <RouterView />
    </div>
  </el-config-provider>
</template>

<style scoped>
.common-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}

.header {
  position: fixed;
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--ep-header-height);
  width: 100%;
  z-index: 999;
}
</style>
