# My Three.js Project Notes

1) You're gonna wanna start with creating your repository on github and cloning down it down, as per usual, and then 'npm init' your local project repository to create a package.json
> npm init

2) Next you'll want to do your npm installs
> npm i three

3) Then you're going to want to add a 'dist'[tribution] folder for our compiled TypeScript files. Inside of this we're going to have our 'client' and 'server' folders. 
> mkdir dist
> cd dist
> touch client server

4) Next comes our 'src' folder, which will also have 'client' and 'server' folders inside so you can go ahead and just copy them in or just use touch to create all of these
> mkdir src
> cd src
> touch client server

5) Inside of our 'client' folder in 'dist' we'll be creating our 'index.html' 
> touch dist/client/index.html

6) Once you've created your index.html you'll want to add some html boilerplate and connect it to your 'client.js' via a script tag
> <script type="module" src="client.js"></script>

7) After that you'll actually want to create your initial files for the project. First you'll want to add your 'client.ts' file to your 'src' folder's 'client' section. Next you'll want to add your Three.js boilerplate to this file or type it all out for practice remembering what makes up a Three.js scene.
> const scene: THREE.Scene = new THREE.Scene()
> 
> const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera> (75, window.innerWidth / window.innerHeight, 0.1, 1000)
> 
> const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()
> renderer.setSize(window.innerWidth, window.innerHeight)
> document.body.appendChild(renderer.domElement)
> 
> const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()
> const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial(> { color: 0x00ff00, wireframe: true })
> 
> const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
> scene.add(cube)
> 
> camera.position.z = 2
> 
> let animate = function () {
>     requestAnimationFrame(animate)
> 
>     cube.rotation.x += 0.01;
>     cube.rotation.y += 0.01;
> 
>     renderer.render(scene, camera)
> };
> 
> animate(); 

<!-- What makes up a three.js scene exactly?
  1) an import of the { Scene } componenet from 'three'
  2) the scene itself being declared and a new scene being defined
  3) the camera being decalred and a new camera being defined
  4) the renderer being declared and a new renderer being defined
  4) the geometry being declared and a new geometry being defined 
  5) the material being declared and a new material being defined
  6) a new mesh being declared, defined, and added to the scene
  7) the camera position being declared
  8) the animation of the scene being declared and defined
    - this includes the calling of the mesh(es) and the 
  9) the animation being called 

  **NOTE: This does not simple boiler plate description of what's going on doesn't include lighting or really specific instructions cause 1) ain't noboy got time for that and 2) remember how it's laid out, what order the processes need to go in, and what is absolutley neccessary at a minimum is better for memorizing and actually understanding what's going on than just trying to remember it in a formulaic way-->

8) Next we'll want to add a 'server.ts' file to our 'server' folder in our 'src' folder 

9) After doing this we'll add a 'tsconfig.json' to our 'client' folder in our 'src' folder and put in some compiler paramaters 

10) We'll aslo be adding one of these 'tsconfig.json' files to our 'server' folder inside our 'src' folder adn adding some boiler plate config params telling it what to output 