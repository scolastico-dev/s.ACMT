<template>
  <div
    class="drop-zone opacity-0"
    :class="{
      'opacity-100': hovering,
      'pointer-events-none': !hovering,
    }"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
    draggable="true"
  >
    <h1>Drop file to load.</h1>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['load-obj']);
const hovering = ref(false);

const onDragOver = (e: DragEvent) => {
  e.preventDefault();
  hovering.value = true;
};

const onDragLeave = (e: DragEvent) => {
  e.preventDefault();
  hovering.value = false;
};

const onDrop = (e: DragEvent) => {
  e.preventDefault();
  hovering.value = false;
  const file = e.dataTransfer?.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    emit('load-obj', e.target?.result as string);
  };
  reader.readAsText(file);
};

onMounted(() => {
  document.addEventListener('dragover', onDragOver);
  document.addEventListener('drop', onDrop);
});

onBeforeUnmount(() => {
  document.removeEventListener('dragover', onDragOver);
  document.removeEventListener('drop', onDrop);
});
</script>

<style>
.drop-zone {
  @apply fixed inset-0 flex z-50 bg-black/20;
  @apply transition-opacity duration-300 ease-in-out;
  @apply text-white text-3xl font-bold;
  @apply flex justify-center items-center;
}
</style>
