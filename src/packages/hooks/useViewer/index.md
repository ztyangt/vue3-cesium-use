---
outline: deep
---

<script setup>
import demo from './demo.vue'
</script>

# useViewer

基于依赖注入实现 viewer 的管理，提供以下两个方法：
+ `provideViewer`：创建并注入viewer实例;
+ `getViewer`：获取viewer实例。

## 使用

### provideViewer

对于父组件，使用 `provideViewer` 创建并向下注入 `viewer`, 接受一个返回 `viewer` 实例的回调函数（支持异步）：

```javascript
import { provideViewer } from 'vue3-cesium-use'

provideViewer(() => {
  const viewer = new Cesium.Viewer('demo-use-viewer', {
    // ...options
  })
  return viewer
})
```

**返回值：**
+ `isMounted`：初始值`ref(false)`，`Viewer` 完成挂载后变为 `ref(true)`；
+ `viewer`：初始值`shallowRef(undefined)`， 完成挂载后变为 `shallowRef(viewer)` 。

::: info
该回调函数会在 `onMounted` 钩子中调用，因此可以放心地在回调函数中使用DOM。
:::


### getViewer
对于子组件，使用 `getViewer` 获取父组件提供的viewer实例。

```javascript
import { getViewer } from 'vue3-cesium-use'

const viewer = getViewer()
```

## 示例


<demo />

```javascript
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
```
