import * as THREE from 'three';
import LocomotiveScroll from 'locomotive-scroll';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const locomotiveScroll = new LocomotiveScroll();

var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  pagination: {
    clickable: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 4,
      spaceBetween: 100,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    }
  }
});

// Setup
const scene = new THREE.Scene();
const cameraDistance = 5;
const fov = 2 * Math.atan((window.innerHeight / 2) / cameraDistance) * (180 / Math.PI);
const camera = new THREE.PerspectiveCamera(
  fov, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  100
);
camera.position.z = cameraDistance;
const canvas = document.querySelector('.canvas');
const renderer = new THREE.WebGLRenderer({ 
  canvas,
  antialias: true,
  alpha : true
});

const images = document.querySelectorAll("img");
const planes =[];
images.forEach(image => {
  const imageBounds = image.getBoundingClientRect();
  const texture = new THREE.TextureLoader().load(image.src);
  const material = new THREE.MeshBasicMaterial({ map : texture });
  const geometry = new THREE.PlaneGeometry(imageBounds.width,imageBounds.height);
  const plane = new THREE.Mesh(geometry  , material);
  plane.position.set(
    imageBounds.left - window.innerWidth / 2 + imageBounds.width / 2 , 
    -imageBounds.top + window.innerHeight / 2 - imageBounds.height / 2 ,
    0
  );
  planes.push(plane)
  scene.add(plane);
})
// // Geometry & Material
// const geometry = new THREE.PlaneGeometry(100,100);
// const material = new THREE.MeshBasicMaterial({
//   color: 'red'
// });
// // Mesh
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// Resize handler
const handleResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

window.addEventListener('resize', handleResize);
handleResize();

// Clock
const clock = new THREE.Clock();

// Animation
const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  
  // Update uniforms
  // material.uniforms.uTime.value = elapsedTime;
  
  // Render
  renderer.render(scene, camera);
  
  requestAnimationFrame(animate);
};

animate();


