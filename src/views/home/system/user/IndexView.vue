<template>
  <Breadcrumb />
  <div>
    <QueryItemSlot @query="query()" :queryForm="queryForm">
      <el-form-item label="" prop="region">
        <el-select v-model="queryForm.region" placeholder="部门" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-date-picker v-model="queryForm.date" type="date" placeholder="注册时间" clearable />
      </el-form-item>
      <el-form-item label="" prop="user">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="" prop="user">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="queryForm.user" placeholder="关键字" clearable />
      </el-form-item>
    </QueryItemSlot>

    <div style="display: flex; justify-content: space-between; margin-bottom: 18px">
      <div>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>
      <div>
        <el-button-group class="ml-4">
          <el-button type="" :icon="Edit" />
          <el-button type="" :icon="Share" />
          <el-button type="" :icon="Delete" />
        </el-button-group>
      </div>
    </div>

    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>

    <el-pagination
      style="margin-top: 25px"
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Delete, Edit, Share } from '@element-plus/icons-vue'
import QueryItemSlot from '@/components/QueryItemSlot.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

onMounted(() => {})

const queryForm = reactive({
  user: '',
  region: '',
  date: ''
})
const query = () => {
  console.log(queryForm.user)
}


const currentPage4 = ref(4)
const pageSize4 = ref(100)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({ row, rowIndex }: { row: User; rowIndex: number }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
  // {
  //   date: '2016-05-01',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-03',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-02',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-04',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-01',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-03',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-02',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-04',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-01',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-03',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-02',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-04',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
  // {
  //   date: '2016-05-01',
  //   name: 'Tom',
  //   address: 'No. 189, Grove St, Los Angeles',
  // },
]
</script>

<style>
.hamburger {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
}
.rh-table .warning-row {
  --rh-table-tr-bg-color: var(--rh-color-warning-light-9);
}
.rh-table .success-row {
  --rh-table-tr-bg-color: var(--rh-color-success-light-9);
}

.query-form-inline .rh-input {
  --rh-input-width: 220px;
}

.query-form-inline .rh-select {
  --rh-select-width: 220px;
}

/* .query-form-inline .rh-form-item {
  margin-right: 20px
} */
</style>
