<script setup lang="ts">
	import { ref,reactive,onMounted } from 'vue'
  	const domRef = ref(null)
	
	const props = defineProps(['formInline'])

  	const emit = defineEmits(['query'])

  const formInline11 = reactive(props.formInline)

const zktext = ref('展开')
  const zkis = ref(false)
  const zkis11 = ref(false)

const onSubmit = () => {
	emit('query')
	
  console.log(props.formInline.user)
}


const sf =  () => {
    if (domRef.value.offsetHeight >= 100){
		zkis11.value = true
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
    sf()

})


</script>
<template>
	<div ref="domRef">
		<el-form  :inline="true" :model="formInline" class="query-form-inline">
			<slot />
			<el-form-item>
				<el-button >重置</el-button>

				<el-button type="primary" @click="onSubmit">查询</el-button>
				<el-button
				v-if="zkis11"
				type="primary"
				link
				@click="gg"
				>{{ zktext }}
				<el-icon class="el-icon--right" co>
					<ArrowDownBold v-if="!zkis"/>
					<ArrowUpBold v-if="zkis"/>
				</el-icon>
				
				</el-button>

				</el-form-item>
		</el-form>
	</div>
</template>

<style>

.query-form-inline .rh-form-item {
  margin-right: 20px
}</style>