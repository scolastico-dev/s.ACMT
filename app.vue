<template>
  <base-layout>
    <base-panel v-if="cfg.preview">
      <panel-preview :obj="preview" />
    </base-panel>
    <base-panel>
      <panel-config
        v-model="cfg"
        @load-obj="loadedObj = $event"
        @click-dl="downloadObj"
      />
    </base-panel>
  </base-layout>
</template>

<script lang="ts" setup>
import JSZip from 'jszip';

import { centerObj } from '~/lib/center.js';
import { rotateObj } from '~/lib/rotate.js';
import { splitObjByGroup, splitGroupByObject } from './lib/split';

const errorObjectString = await fetch('/assets/error.obj').then(r => r.text())
const loadedObj = ref<string>(errorObjectString)
const preview = ref<string>(errorObjectString)

const defaultConfig = (): Config => ({
  rotate: { x: 0, y: 0, z: 0 },
  preview: true,
});

const storedConfig = window.localStorage.getItem('config');
const cfg = ref(storedConfig ? JSON.parse(storedConfig) : defaultConfig());

function newPreview(cfg: Config, obj: string) {
  preview.value = rotateObj(centerObj(obj), cfg.rotate.x, cfg.rotate.y, cfg.rotate.z);
}

watch(cfg, (newCfg) => {
  window.localStorage.setItem('config', JSON.stringify(newCfg));
  newPreview(newCfg, loadedObj.value);
}, { deep: true });

watch(loadedObj, (newObj) => {
  newPreview(cfg.value, newObj);
});

function startDownload(filename: string, content: string|Blob) {
  const a = document.createElement('a');
  const url = content instanceof Blob
    ? URL.createObjectURL(content)
    : URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
  a.href = url;
  a.download = filename;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function downloadObj(asZip: boolean) {
  const rand = Math.random().toString(36).substring(7);
  const file = `${rand}.${asZip ? 'zip' : 'obj'}`;
  const r = cfg.value.rotate;
  const whole = rotateObj(centerObj(loadedObj.value),r.x, r.y, r.z);
  if (!asZip) return startDownload(file, whole);
  const zip = new JSZip();
  const prefix = `acmt-output-${rand}/`;
  zip.file(prefix + 'input.obj', loadedObj.value);
  zip.file(prefix + 'output.obj', whole);
  let groupCounter = 0;
  let individualCounter = 0;
  for (const group of splitObjByGroup(loadedObj.value)) {
    zip.file(
      prefix + `groups/${groupCounter++}/group.obj`,
      rotateObj(centerObj(group), r.x, r.y, r.z)
    );
    let groupIndividualCounter = 0;
    for (const obj of splitGroupByObject(group)) {
      const content = rotateObj(centerObj(obj), r.x, r.y, r.z);
      zip.file(prefix + `individuals/${individualCounter++}.obj`, content);
      zip.file(prefix + `groups/${groupCounter - 1}/individuals/${groupIndividualCounter++}.obj`, content);
    }
  }
  zip.generateAsync({ type: 'blob' }).then((content) => startDownload(file, content));
}
</script>
