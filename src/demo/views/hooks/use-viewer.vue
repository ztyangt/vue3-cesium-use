<template>
  <div id="demo-use-viewer"></div>
</template>

<script setup lang="ts">
import * as Cesium from 'cesium'
import { useViewer } from '../../../packages/hooks/useViewer'

const { provideViewer } = useViewer()

provideViewer(() => {
  const viewer = new Cesium.Viewer('demo-use-viewer', {})
  return viewer
})
</script>

<style lang="scss" scoped>
#demo-use-viewer {
  height: 100vh;
  width: 100vw;
}
</style>
