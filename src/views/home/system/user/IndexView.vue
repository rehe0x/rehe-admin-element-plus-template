<template>
    <div aria-label="A complete example of page header" style="display: flex;align-items:center">
        <svg
          class="hamburger"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
        >
          <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
        </svg>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-divider/>

    <div>
      <QueryItemSlot @query="fff()" :formInline="formInline">
        <el-form-item label="">
      <el-select
        v-model="formInline.region"
        placeholder="部门"
        clearable
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="注册时间"
        clearable
      />
    </el-form-item>
        <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item>
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item>
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item>
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item> <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item> 
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item> <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item> 
    <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item> <el-form-item label="">
      <el-input v-model="formInline.user" placeholder="关键字" clearable />
    </el-form-item> 
    </QueryItemSlot>
     
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

      <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
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
  import { ref,reactive,onMounted } from 'vue'

  import { Sunny, Moon,ArrowUpBold,ArrowDownBold } from '@element-plus/icons-vue'

  import { ElNotification as notify,FormInstance } from 'element-plus'
  import QueryItemSlot from './QueryItemSlot.vue'

  const zktext = ref('展开')
  const zkis = ref(false)

  const domRef = ref(null)
  const domRef2 = ref<FormInstance>()
    const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

  const fff = () => {

    console.log(formInline.user)
  }
  const sf =  () => {
    if (domRef.value.offsetHeight >= 100){
      console.log(domRef2.value)
      const itemList = domRef.value.children[0].children;
      for (let index = itemList.length - 2; index >= 0; index--) {
        const element = itemList[index];
        if (domRef.value.offsetHeight >= 100) {
            
            element.style.display = 'none';

          }
      }
    }
}

const gg  = () => {
  if (zkis.value) {
    zktext.value='展开'
    zkis.value = false
    sf()
  }else{
    zktext.value='收起'
    zkis.value = true
    const itemList = domRef.value.children[0].children;
    console.log(typeof itemList)
    Object.keys(itemList).reverse().forEach((key) => {
      if (itemList[key].style.display == 'none') {
        itemList[key].style.display = ''
      }
      console.log(itemList[key].style.display)
      console.log(itemList[key]);
  });
  }
}

  onMounted(() => {
    // sf()
  //   console.log(domRef.value.offsetHeight)
  //   if (domRef.value.clientHeight === 100){
  //     const itemList = domRef.value.children[0].children;

  //     itemList[itemList.length-2].style.display = 'none';

  //     itemList[itemList.length-2].style.display = 'none';


  //   }

  //   console.log(domRef.value.children[0].children)
  // console.log(domRef.value)
})




const onSubmit = () => {
  console.log('submit!')
}

  const currentPage4 = ref(4)
  const pageSize4 = ref(100)
  const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
  const onBack = () => {
    notify('Back')
  }

  interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
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
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
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