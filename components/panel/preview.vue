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
let axesHelperBG: THREE.Object3D;
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
  axesHelper.renderOrder = 100;
  if (Array.isArray(axesHelper.material))
    for (const m of axesHelper.material) m.depthTest = false;
    else axesHelper.material.depthTest = false;
  scene.add(axesHelper);

  // Background plane
  const bgGeometry = new THREE.PlaneGeometry(0.3, 0.3);
  const bgMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  axesHelperBG = new THREE.Mesh(bgGeometry, bgMaterial);
  scene.add(axesHelperBG);

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
  const bgRightOffset = 0.075; // Distance to the right of the camera for the background plane
  const bgDownOffset = -0.05; // Distance below the camera for the background plane
  const bgForwardOffset = -0.1; // Distance in front of the camera for the background plane

  // Calculate the camera-space position of the axes helper
  const camRight = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion).multiplyScalar(rightOffset);
  const camDown = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion).multiplyScalar(downOffset);
  const camForward = new THREE.Vector3(0, 0, 1).applyQuaternion(camera.quaternion).multiplyScalar(forwardOffset);

  // Combine the offsets to get the world position
  const targetPosition = camRight.add(camDown).add(camForward).add(camera.position);
  axesHelper.position.copy(targetPosition);

  // Calculate the camera-space position of the background plane
  const bgRight = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion).multiplyScalar(rightOffset + bgRightOffset);
  const bgDown = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion).multiplyScalar(downOffset + bgDownOffset);
  const bgForward = new THREE.Vector3(0, 0, 1).applyQuaternion(camera.quaternion).multiplyScalar(forwardOffset + bgForwardOffset);

  // Combine the offsets to get the world position
  const bgTargetPosition = bgRight.add(bgDown).add(bgForward).add(camera.position);
  axesHelperBG.position.copy(bgTargetPosition);

  // Rotate the background plane to face the camera
  axesHelperBG.lookAt(camera.position);
  axesHelperBG.rotation.copy(camera.rotation);

  // Render the scene
  renderer.render(scene, camera);
};

const loadModel = (objData: string) => {
  const objLoader = new OBJLoader();
  loadedObj = objLoader.parse(objData);
  // set material to basic, and add outline
  const edges: THREE.EdgesGeometry[] = [];
  loadedObj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshBasicMaterial({ color: 0x222222 });
      edges.push(new THREE.EdgesGeometry(child.geometry));
    }
  });
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x555555 });
  for (const edge of edges) {
    const line = new THREE.LineSegments(edge, lineMaterial);
    loadedObj.add(line);
  }
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
