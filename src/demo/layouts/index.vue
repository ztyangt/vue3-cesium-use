<template>
  <div class="vue3-cesium-use-layout">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <KeepAlive v-if="!route.meta.noKeepAlive">
          <component :is="Component" :key="route.path"></component>
        </KeepAlive>
        <component v-else :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.vue3-cesium-use-layout {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
