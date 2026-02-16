import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// --- 1. SETUP SCENE & CAMERA ---
const scene = new THREE.Scene();

// Water parameters
const waterColor = 0x102040;
scene.background = new THREE.Color(waterColor);
scene.fog = new THREE.FogExp2(waterColor, 0.015);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50; // Standard distance

// --- 2. SETUP RENDERER ---
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // sharper on retina screens

// IMPORTANT: Fixes dark/washed out colors
renderer.outputColorSpace = THREE.SRGBColorSpace; 

document.getElementById("container3D").appendChild(renderer.domElement);

// --- 3. LIGHTING ---

// A. Ambient Light (The General Water Glow)
// Intensity increased to 3 so it's visible. 
const ambientLight = new THREE.AmbientLight(0x305060, 5); 
scene.add(ambientLight);

// B. Directional Light (The "Sun" from above)
// Needed for definition and shadows.
const topLight = new THREE.DirectionalLight(0xaaccff, 3); 
topLight.position.set(5, 10, 5); 
scene.add(topLight);

// --- 4. VARIABLES ---
let object; // The fish
let mixer;  // The animation player
const clock = new THREE.Clock();
const swimSpeed = 5;
const objToRender = 'freshwater_angelfish';

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// --- 5. LOAD MODEL ---
const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

loader.load(
  `/models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.position.set(50, 0, 0);
    object.scale.set(2, 2, 2);

    // Setup Animation
    if (gltf.animations && gltf.animations.length > 0) {
      mixer = new THREE.AnimationMixer(object);
      
      const action = mixer.clipAction(gltf.animations[2] || gltf.animations[0]); 
      action.play();
    }

    // Load Texture
    const fishTexture = textureLoader.load(`/models/${objToRender}/textures/AngelfishMain_diffuse.png`);
    fishTexture.flipY = false;
    fishTexture.colorSpace = THREE.SRGBColorSpace; // Important for correct color

    // Apply Material Settings
    object.traverse((child) => {
      if (child.isMesh) {
        child.material.map = fishTexture;
        child.material.transparent = true;

        child.material.metalness = 0.0; 
        child.material.roughness = 0.8; 
        
        child.castShadow = true;

        child.material.depthWrite= true;
      }
    });

    scene.add(object);
    console.log("Fish loaded successfully");
  }
);

// --- 6. ANIMATION LOOP ---
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  if (mixer) mixer.update(delta);

  // Only run this if the fish is loaded
  if (object) {
    // 1. Move Fish
    object.position.x -= swimSpeed * delta;

    // 2. Teleport Loop
    if (object.position.x < -55) {
      object.position.x = 50;
    }

    // 3. Rotation Logic
    if (objToRender === "freshwater_angelfish") {
      object.rotation.y = -1.5; // Face left
      
      // Optional: Gentle tilt based on mouse Y
       object.rotation.x = (mouseY - window.innerHeight / 2) * 0.0005;
    }
  }

  renderer.render(scene, camera);
}

// --- 7. EVENT LISTENERS ---
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

// Start
animate();