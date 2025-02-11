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
const canvas = document.querySelector('.canvas');
const renderer = new THREE.WebGLRenderer({ 
  canvas,
  antialias: true,
  alpha : true
 });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  25, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  100
);
camera.position.z = 5;

// Clock
const clock = new THREE.Clock();

// Geometry
const geometry = new THREE.PlaneGeometry(1,1);

const material = new THREE.MeshBasicMaterial({
  color: 'red'
});
// Material
// const material = new THREE.ShaderMaterial({
//   vertexShader: vertex,
//   fragmentShader: fragment,
//   side : THREE.DoubleSide,
//   // wireframe : true,
//   uniforms: {
//     uTime : { value : 0 },
//     uColorChange : { value : 0 }
//   }
// });

// Mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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
