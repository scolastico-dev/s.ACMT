<template>
  <div class="base-panel">
    <h1 v-if="title" class="font-bold text-3xl">{{ title }}</h1>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: String
}>();
</script>

<style>
.base-panel {
  @apply bg-white rounded-xl shadow-inner p-8;
}
</style>
