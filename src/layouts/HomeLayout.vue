<script setup lang="ts">
import BaseSide from '@/layouts/components/BaseSide.vue'
</script>

<template>
  <div class="app-container">
    <div class="menu-container">
      <BaseSide />
    </div>
    <div class="home-container">
      <div class="main-container">
        <RouterView />
      </div>
      <div class="footer-container">
        <p>
          Edit
          <code>2020@abcdefg</code> to test components.
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

.menu-container {
  display: flex;
  flex-direction: column;
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  height: calc(100vh - var(--rh-header-height) - 3px);
  /* width: var(--rh-menu-width); */
}

.home-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  height: calc(100vh - var(--rh-footer-height) - var(--rh-header-height) - 3px);
}

.main-container {
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: var(--rh-main-padding);
}

.footer-container {
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
