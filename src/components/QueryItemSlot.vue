<script setup lang="ts">

import { ref, onMounted,reactive } from 'vue'
import { ArrowUpBold,ArrowDownBold } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'


defineProps(['queryForm'])
const emit = defineEmits(['query'])

const domRef = ref<Element>()
const unfold = ref(true)
const unfoldStatus = ref(false)
const ruleFormRef = ref(null)


const onSubmit = () => {
  emit('query')
}
const resetForm = () => {
  const rf = ruleFormRef.value! as FormInstance
  rf.resetFields()
}

const init = () => {
  const _domRef = domRef.value! as HTMLDivElement
  if (_domRef.offsetHeight >= 100) {
    const itemList = _domRef.children[0].children

    for (let index = itemList.length - 2; index >= 0; index--) {
      const element = itemList[index] as HTMLDivElement
      if (_domRef.offsetHeight >= 100) {
        element.style.display = 'none'
      } else {
        return;
      }
    }
  } else {
    unfold.value = false
  }
}

const openOrUnfold = () => {
  if (unfoldStatus.value) {
    unfoldStatus.value = false
    init()
  } else {
    unfoldStatus.value = true
    const _domRef = domRef.value! as HTMLDivElement
    const itemList = _domRef.children[0].children
    for (let index = itemList.length - 2; index >= 0; index--) {
      const element = itemList[index] as HTMLDivElement
      if (element.style.display == 'none') {
        element.style.display = ''
      } else {
        return
      }
    }
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <div ref="domRef">
    <el-form ref="ruleFormRef" :inline="true"  :model="queryForm" class="query-form-inline">
      <slot />
      <el-form-item>
        <el-button @click="resetForm()">重置</el-button>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button v-if="unfold" type="primary" link @click="openOrUnfold"
          >{{ unfoldStatus ? '收起':'展开' }}
          <el-icon class="el-icon--right">
            <ArrowDownBold v-if="!unfoldStatus" />
            <ArrowUpBold v-if="unfoldStatus" />
          </el-icon>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
.query-form-inline .rh-form-item {
  margin-right: 20px;
}
</style>
