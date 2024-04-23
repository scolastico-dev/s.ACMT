<template>
  <div ref="container" class="preview-container" />
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const container = ref() as any as Ref<HTMLDivElement>;
const props = defineProps<{
  obj: string;
}>();

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let axesHelper: THREE.AxesHelper;
let loadedObj: THREE.Object3D | null;

const init = () => {
  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // Camera setup
  camera = new THREE.PerspectiveCamera(75, container.value!.clientWidth / container.value!.clientHeight, 0.1, 1000);
  camera.position.set(0, 5, 100);

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight);
  container.value!.appendChild(renderer.domElement);

  // Controls setup
  controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  // Lighting
  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);

  // Axes helper
  axesHelper = new THREE.AxesHelper(0.1);
  axesHelper.position.set(10, 0, 10)
  scene.add(axesHelper);

  // Grid helper
  const gridHelper = new THREE.GridHelper(1000, 1000);
  scene.add(gridHelper);

  // Handle resizing
  window.addEventListener('resize', onWindowResize, false);

  // Initial rendering
  animate();
};

const onWindowResize = () => {
  camera.aspect = container.value!.clientWidth / container.value!.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight);
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  
  // Define the offsets in the camera's view frustum
  const rightOffset = 0.6; // Distance to the right of the camera center
  const downOffset = -0.6; // Distance below the camera center
  const forwardOffset = -1; // Distance in front of the camera

  // Calculate the camera-space position of the axes helper
  const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion).multiplyScalar(rightOffset);
  const camDown = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion).multiplyScalar(downOffset);
  const camForward = new THREE.Vector3(0, 0, 1).applyQuaternion(camera.quaternion).multiplyScalar(forwardOffset);

  // Combine the offsets to get the world position
  const targetPosition = camRight.add(camDown).add(camForward).add(camera.position);
  axesHelper.position.copy(targetPosition);

  renderer.render(scene, camera);
};

const loadModel = (objData: string) => {
  const objLoader = new OBJLoader();
  loadedObj = objLoader.parse(objData);
  scene.add(loadedObj);
  loadedObj.position.set(0, 0, 0);
};

onMounted(() => {
  init();
  loadModel(props.obj);
});

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize);
  renderer.dispose(); // Dispose of the renderer to clean up resources
});

watch(() => props.obj, (newObj, oldObj) => {
  if (newObj !== oldObj) {
    if (loadedObj) {
      scene.remove(loadedObj);
      loadedObj = null;
    }
    loadModel(newObj);
  }
});
</script>

<style>
.preview-container {
  @apply w-[30vw] h-[30vw];
}
</style>
