<template>
  <div>
    <h2 class="text-xl mb-2">Rotation</h2>
    <div class="form-grid">
      <label for="rotate-x">X:</label>
      <input
        id="rotate-x"
        type="number"
        v-model.number="cfg.rotate.x"
        min="-180"
        max="180"
        step="1"
      />
      <label for="rotate-y">Y:</label>
      <input
        id="rotate-y"
        type="number"
        v-model.number="cfg.rotate.y"
        min="-180"
        max="180"
        step="1"
      />
      <label for="rotate-z">Z:</label>
      <input
        id="rotate-z"
        type="number"
        v-model.number="cfg.rotate.z"
        min="-180"
        max="180"
        step="1"
      />
    </div>
    <div class="border-t-2 border-black/20 w-full my-4" />
    <div class="form-grid">
      <label for="preview">Show Preview:</label>
      <input
        id="preview"
        type="checkbox"
        v-model="cfg.preview"
      />
    </div>
    <input ref="fileInput" type="file" accept=".obj" @change="loadObj" class="hidden" />
    <button class="form-button" @click="loadObjClick">Load OBJ</button>
    <button class="form-button" @click="emits('click-dl', false)">Download OBJ</button>
    <button class="form-button" @click="emits('click-dl', true)">Download ZIP</button>
  </div>
</template>

<script lang="ts" setup>
const fileInput = ref('fileInput') as any as Ref<HTMLInputElement>;

const emits = defineEmits(['load-obj', 'click-dl', 'update:modelValue']);
const props = defineProps<{
  modelValue: Config;
}>();

const cfg = computed({
  get: () => props.modelValue,
  set: (value: Config) => emits('update:modelValue', value)
});

const loadObjClick = () => {
  fileInput.value.click();
};

const loadObj = () => {
  const file = fileInput.value.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    emits('load-obj', reader.result?.toString());
  };
  reader.readAsText(file);
};
</script>

<style>
.form-grid {
  @apply grid grid-cols-[auto,1fr];
  @apply items-center justify-center gap-2;
}

.form-button {
  @apply px-4 py-2 block mt-2 w-full;
  @apply bg-zinc-700 text-white rounded-md;
  @apply transition-colors duration-200;
  @apply hover:bg-zinc-800;
}
</style>
