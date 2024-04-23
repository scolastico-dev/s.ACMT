<template>
  <div class="base-layout">
    <h1 class="absolute top-4 left-4 text-3xl font-bold text-white">
      Wavefront OBJ - Auto Centering Multi Tool
    </h1>
    <slot />
  </div>
</template>

<style>
.base-layout {
  @apply bg-gradient-to-b from-zinc-600 to-zinc-800;
  @apply min-h-screen flex justify-center items-center gap-8;
}
.base-layout input {
  @apply focus:outline-none px-2 py-1 border-black border rounded;
}
</style>
