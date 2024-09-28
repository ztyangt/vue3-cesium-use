<template>
  <DemoLayout>
    <div id="demo-use-viewer" class="wh-100"></div>
  </DemoLayout>
</template>

<script setup lang="ts">
import * as Cesium from 'cesium'
import { useViewer } from '../useViewer/index'

const { provideViewer } = useViewer()

provideViewer(() => {
  const viewer = new Cesium.Viewer('demo-use-viewer', {
    infoBox: false,
    selectionIndicator: false,
    baseLayerPicker: false
  })
  return viewer
})
</script>

<style lang="scss" scoped>
#demo-use-viewer {
  // width: 100%;
}
</style>
