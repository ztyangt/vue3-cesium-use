<script setup lang="ts">
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

const box = ref<HTMLDivElement>()
const { toggle, isFullscreen } = useFullscreen(box)
</script>

<template>
  <div class="demo-block-wrap">
    <div ref="box" class="wh-100">
      <slot />
    </div>
    <div class="flex-end p-10">
      <a-tooltip content="全屏" position="bottom" mini>
        <div class="demo-btn" @click="toggle">
          <icon-fullscreen :size="14" :stroke-width="4" />
        </div>
      </a-tooltip>
      <a-tooltip content="源码" position="bottom" mini>
        <div class="demo-btn ml-10" @click="toggle">
          <icon-code :size="14" :stroke-width="4" />
        </div>
      </a-tooltip>
      <a-tooltip content="demo" position="bottom" mini>
        <div class="demo-btn ml-10" @click="toggle">
          <icon-code-square :size="14" :stroke-width="4" />
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<style lang="scss">
.demo-block-wrap {
  border: 1px solid var(--border-color);

  .demo-btn {
    cursor: pointer;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    &:hover {
      border-color: var(--theme-color);
      color: var(--theme-color);
    }
  }
}
</style>
