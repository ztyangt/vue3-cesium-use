<template>
  <ViewerBlock> 绘画 </ViewerBlock>
</template>

<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'
import * as Cesium from 'cesium'
import { usePoint } from '../../useEntity/index'

const data = shallowRef([
  { id: 1, longitude: 86, latitude: 27 },
  { id: 2, longitude: 86.5, latitude: 27.5 }
])

onMounted(() => {
  //   const { flyTo, toggleShow } = usePoint(data)
})
</script>
