<template>
  <div
    class="loading-overlay"
    :class="{
      'opacity-0 pointer-events-none': !props.loading,
    }"
  >
    <div class="loading-spinner" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  loading: boolean;
}>();
</script>

<style>
.loading-overlay {
  @apply fixed inset-0 z-50 flex justify-center;
  @apply items-center bg-black bg-opacity-50;
  @apply transition-opacity duration-300 ease-in-out;
}

.loading-spinner {
  @apply w-16 h-16 border-y-4 border-white;
  @apply rounded-full animate-spin;
}
</style>
