import { Scene } from "three";

const scene: THREE.Scene = new THREE.Scene()

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer: THREE.WebGL1Renderer = new THREE.WebGL1Renderer
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()

const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0xffc0cb, wireframe: true })

const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 2

let animate = function () {
  requestAnimationFrame(animate)

  cube.rotation.x = 0.01
  cube.rotation.y = 0.01

  renderer.render(scene, camera)
};

animate();