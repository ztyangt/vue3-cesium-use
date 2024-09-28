<template>
  <DemoBlock>
    <div class="demo-layout-viewer wh-100">
      <div ref="viewerRef" class="wh-100"></div>
      <template v-if="isMounted">
        <slot></slot>
      </template>
    </div>
  </DemoBlock>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as Cesium from 'cesium'
import DemoBlock from './DemoBlock.vue'
import { provideViewer } from '../../../src/packages/hooks/useViewer'

const viewerRef = ref<HTMLElement>()

const { isMounted } = provideViewer(async () => {
  const viewer = new Cesium.Viewer(viewerRef.value!, {
    infoBox: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    vrButton: false,
    baseLayerPicker: false
  })

  // 隐藏版权信息
  // @ts-ignore
  viewer._cesiumWidget._creditContainer.style.display = 'none'

  viewer.resolutionScale = window.devicePixelRatio

  // 加载地形
  viewer.terrainProvider = await Cesium.createWorldTerrainAsync({
    requestVertexNormals: true,
    requestWaterMask: true
  })

  return viewer
})
</script>
