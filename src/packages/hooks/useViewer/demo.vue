<template>
  <DemoBlock>
    <div id="demo-use-viewer" class="wh-100"></div>
  </DemoBlock>
</template>

<script setup lang="ts">
import * as Cesium from 'cesium'
import { provideViewer } from '../useViewer/index'

// Cesium.Ion.defaultAccessToken = '<TOKEN>'

provideViewer(async () => {
  const viewer = new Cesium.Viewer('demo-use-viewer', {
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
