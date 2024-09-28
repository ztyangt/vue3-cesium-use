<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

const box = ref<HTMLDivElement>()
const { toggle, isFullscreen } = useFullscreen(box)
</script>

<template>
  <div ref="box" relative :class="isFullscreen && 'overflow-y-auto bg-light dark:bg-dark'">
    <a-button v-show="!isFullscreen" type="primary" @click="toggle">全屏</a-button>
    <slot />
  </div>
</template>
