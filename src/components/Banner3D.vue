<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import * as THREE from 'three'

// Props del componente
interface Props {
  modelPath?: string
}

const props = withDefaults(defineProps<Props>(), {
  // =============================AQUI COLOCAS EL ARCHIVO 3D =============================
  modelPath: '/models/pc.glb', // <------- AQUI COLOCAS EL ARCHIVO 3D
  // =============================AQUI COLOCAS EL ARCHIVO 3D =============================
})

// Referencias del DOM
const containerRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLCanvasElement>()

// Variables de Three.js
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let model: THREE.Group
let animationId: number

// Variables de interacción
let isMouseDown = false
let mouseX = 0
let mouseY = 0
let targetRotationX = 0
let targetRotationY = 0
let currentRotationX = 0
let currentRotationY = 0
let targetZoom = 6
let currentZoom = 6

// Inicializar Three.js
const initThreeJS = () => {
  if (!canvasRef.value || !containerRef.value) return

  // Crear escena
  scene = new THREE.Scene()
  scene.background = null

  // Crear cámara
  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.set(0, 0, currentZoom)

  // Crear renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    alpha: true,
    antialias: true,
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)

  // Configurar iluminación
  setupLighting()

  // Crear modelo 3D
  createModel()

  // Eventos de mouse
  setupMouseEvents()

  // Iniciar animación
  animate()
}

// Configurar iluminación
const setupLighting = () => {
  // Luz ambiental
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  // Luz direccional
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  // Luz puntual
  const pointLight = new THREE.PointLight(0x8b5cf6, 1, 100)
  pointLight.position.set(-5, 5, -5)
  scene.add(pointLight)
}

// Crear modelo 3D
const createModel = async () => {
  try {
    // Crear un grupo para el modelo
    model = new THREE.Group()

    // Cargar el modelo GLB
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader')
    const loader = new GLTFLoader()

    loader.load(
      props.modelPath,
      (gltf: { scene: THREE.Group }) => {
        // Agregar el modelo cargado al grupo
        model.add(gltf.scene)

        // Centrar y escalar el modelo
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())

        // Centrar el modelo
        model.position.sub(center)

        // Escalar el modelo para que sea más grande
        const maxDim = Math.max(size.x, size.y, size.z) || 1
        const scale = 8.5 / maxDim
        model.scale.setScalar(scale)

        // Ajustar posición para centrarlo mejor
        model.position.set(0, -2.5, 0) // Bajado más en Y para centrarlo mejor

        // Agregar el modelo a la escena
        scene.add(model)
      },
      (progress: { loaded: number; total: number }) => {
        console.log('Cargando modelo:', (progress.loaded / progress.total) * 100 + '%')
      },
      (error: Error) => {
        console.error('Error cargando el modelo:', error)
        // Fallback: crear un cubo si falla la carga
        createFallbackModel()
      },
    )
  } catch (error) {
    console.error('Error importando GLTFLoader:', error)
    createFallbackModel()
  }
}

// Modelo de respaldo si falla la carga
const createFallbackModel = () => {
  model = new THREE.Group()

  // Cubo principal
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshPhongMaterial({
    color: 0x8b5cf6,
    transparent: true,
    opacity: 0.8,
    shininess: 100,
  })
  const cube = new THREE.Mesh(geometry, material)
  model.add(cube)

  scene.add(model)
}

// Configurar eventos de mouse
const setupMouseEvents = () => {
  if (!canvasRef.value) return

  canvasRef.value.addEventListener('mousedown', onMouseDown)
  canvasRef.value.addEventListener('mousemove', onMouseMove)
  canvasRef.value.addEventListener('mouseup', onMouseUp)
  canvasRef.value.addEventListener('mouseleave', onMouseUp)
  canvasRef.value.addEventListener('wheel', onWheel, { passive: false })
}

// Eventos de mouse
const onMouseDown = (event: MouseEvent) => {
  isMouseDown = true
  mouseX = event.clientX
  mouseY = event.clientY
}

const onMouseMove = (event: MouseEvent) => {
  if (!isMouseDown) return

  const deltaX = event.clientX - mouseX
  const deltaY = event.clientY - mouseY

  targetRotationY += deltaX * 0.01
  targetRotationX += deltaY * 0.01

  mouseX = event.clientX
  mouseY = event.clientY
}

const onMouseUp = () => {
  isMouseDown = false
}

// Evento de zoom con la rueda del mouse
const onWheel = (event: WheelEvent) => {
  event.preventDefault()

  const zoomSpeed = 0.1
  const zoomDelta = event.deltaY > 0 ? zoomSpeed : -zoomSpeed

  targetZoom += zoomDelta
  targetZoom = Math.max(2, Math.min(20, targetZoom)) // Limitar zoom entre 2 y 20
}

// Función de animación
const animate = () => {
  animationId = requestAnimationFrame(animate)

  // Rotación suave hacia el objetivo
  currentRotationX += (targetRotationX - currentRotationX) * 0.05
  currentRotationY += (targetRotationY - currentRotationY) * 0.05

  // Zoom suave hacia el objetivo
  currentZoom += (targetZoom - currentZoom) * 0.1

  // Aplicar rotación al modelo
  if (model) {
    model.rotation.x = currentRotationX
    model.rotation.y = currentRotationY
  }

  // Aplicar zoom a la cámara
  if (camera) {
    camera.position.z = currentZoom
  }

  // Rotación automática lenta cuando no hay interacción
  if (!isMouseDown) {
    targetRotationY += 0.005
  }

  renderer.render(scene, camera)
}

// Manejar redimensionamiento
const handleResize = () => {
  if (!containerRef.value || !camera || !renderer) return

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

// Función para obtener el nombre del archivo sin extensión
const getFileName = (path: string) => {
  const fileName = path.split('/').pop() || ''
  return fileName.replace(/\.[^/.]+$/, '') // Remover extensión
}

// Función para recargar el visor
const reloadViewer = () => {
  // Limpiar recursos existentes
  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  if (scene && model) {
    scene.remove(model)
  }

  // Reinicializar
  initThreeJS()
}

// Lifecycle hooks
onMounted(async () => {
  await nextTick()
  initThreeJS()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)

  if (canvasRef.value) {
    canvasRef.value.removeEventListener('mousedown', onMouseDown)
    canvasRef.value.removeEventListener('mousemove', onMouseMove)
    canvasRef.value.removeEventListener('mouseup', onMouseUp)
    canvasRef.value.removeEventListener('mouseleave', onMouseUp)
    canvasRef.value.removeEventListener('wheel', onWheel)
  }
})
</script>

<template>
  <section class="relative min-h-screen overflow-hidden flex flex-col items-center">
    <!-- Título y botón de reload -->
    <div class="w-[90vw] max-w-[1400px] mx-auto px-1 mt-30 mb-4">
      <div class="flex items-center justify-between">
        <h2 class="text-lg md:text-xl font-medium text-gray-800 tracking-tight select-none">
          {{ getFileName(props.modelPath) }}
        </h2>
        <button
          @click="reloadViewer"
          class="px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          ↻ Recargar
        </button>
      </div>
    </div>

    <!-- Visor 3D centrado -->
    <div class="relative w-full flex items-center justify-center mb-20">
      <div
        class="relative w-[90vw] max-w-[1400px] h-[85vh] mx-auto rounded-2xl border border-gray-200"
      >
        <div ref="containerRef" class="relative w-full h-full">
          <canvas
            ref="canvasRef"
            class="w-full h-full cursor-grab active:cursor-grabbing rounded-2xl"
          ></canvas>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Canvas con bordes redondeados */
canvas {
  border-radius: 20px;
}
</style>
