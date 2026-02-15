import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//Create a Three.JS Scene
const scene = new THREE.Scene();

// TODO: Add the wall behind so that the fish casts shadows on it https://www.youtube.com/watch?v=L3URxWjueyg
// want it to look like an aquarium 

// water color
const waterColor = 0x102040; 
scene.background = new THREE.Color(waterColor);

// fog density 
// scene.fog = new THREE.FogExp2(waterColor, 0.02);

//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);

// keep track of the mouse position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// How fast the fish moves (units per second)
const swimSpeed = 5; 

// keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'freshwater_angelfish';

let mixer; // This will play the animation
const clock = new THREE.Clock(); // This tracks the time delta

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `/models/${objToRender}/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene

console.log("Loaded Animations:", gltf.animations);

    object = gltf.scene;

    object.position.set(50, 0, 0);

if (gltf.animations && gltf.animations.length > 0) {
        mixer = new THREE.AnimationMixer(object);
        
        // "gltf.animations[0]" is usually the main animation. 
        // If your model has multiple (like swim, eat), you might need [1] or [2].
        const action = mixer.clipAction(gltf.animations[2]);
        action.play();
    }

    const textureLoader = new THREE.TextureLoader();
    const fishTexture = textureLoader.load(`/models/${objToRender}/textures/AngelfishMain_diffuse.png`);
    fishTexture.flipY = false; // GLTF textures are usually flipped otherwise

    fishTexture.colorSpace = THREE.SRGBColorSpace;


    // Go through every part of the model
object.traverse((child) => {
      if (child.isMesh) {

      
            child.material.map = fishTexture;

        
        // UPDATE the existing material instead of replacing it
        child.material.transparent = true; // Use true if you want transparency, false if you want opaque
        child.material.opacity = 1;     
        
        child.material.depthWrite = true;  // I don't know what this means, but it fixes the fish  
        
        child.material.side = THREE.DoubleSide; 

        child.castShadow = true;
      }
    });

    scene.add(object);
    object.scale.set(2, 2, 2); // size of the fish
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "freshwater_angelfish" ? 50 : 500;


// Update the Top Light to be a cool, pale blue
const topLight = new THREE.DirectionalLight(0xaaccff, 5); 
topLight.position.set(0, 1, 0); 
topLight.castShadow = true;
scene.add(topLight);

// Add a stronger Ambient Light (general water glow)
// A dark teal ambient light prevents the shadows from being pitch black

// const ambientLight = new THREE.AmbientLight(0x305060, 20); // this isn't working right now
// scene.add(ambientLight);

//Render the scene
function animate() {
  requestAnimationFrame(animate);

  // 1. Get the time passed ONLY ONCE
  const delta = clock.getDelta();

  // 2. Pass that stored time to the mixer
  if (mixer) {
      mixer.update(delta);
  }
object.position.x -= swimSpeed * delta; 

    // CHECK BOUNDARIES:
    // If fish goes too far right (past xLimit), teleport it to the far left
    if (object.position.x < -55) {
        object.position.x = 50;
    }

  // Mouse movement logic
  if (object && objToRender === "freshwater_angelfish") {
    object.rotation.y = -1.5;
    object.rotation.x = 0;
    object.rotation.z = 0;
  }
  
  renderer.render(scene, camera);
}


//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//add mouse position listener, so we can make the eye move
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

//Start the 3D rendering
animate();