// Tipos personalizados para Three.js
declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, EventDispatcher } from 'three'

  export class OrbitControls extends EventDispatcher {
    constructor(camera: Camera, domElement?: HTMLElement)

    // Propiedades
    enabled: boolean
    target: import('three').Vector3
    minDistance: number
    maxDistance: number
    minZoom: number
    maxZoom: number
    minPolarAngle: number
    maxPolarAngle: number
    minAzimuthAngle: number
    maxAzimuthAngle: number
    enableDamping: boolean
    dampingFactor: number
    enableZoom: boolean
    zoomSpeed: number
    enableRotate: boolean
    rotateSpeed: number
    enablePan: boolean
    panSpeed: number
    screenSpacePanning: boolean
    keyPanSpeed: number
    autoRotate: boolean
    autoRotateSpeed: number
    enableKeys: boolean
    keyCode: {
      LEFT: number
      UP: number
      RIGHT: number
      BOTTOM: number
    }
    mouseButtons: {
      LEFT: number
      MIDDLE: number
      RIGHT: number
    }
    touches: {
      ONE: number
      TWO: number
    }

    // Métodos
    update(): void
    reset(): void
    dispose(): void
    getPolarAngle(): number
    getAzimuthalAngle(): number
    listenToKeyEvents(domElement: HTMLElement): void
    stopListenToKeyEvents(): void
    saveState(): void
    reset(): void
    update(): void
    dispose(): void
  }
}

declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Group } from 'three'

  export class GLTFLoader {
    load(
      url: string,
      onLoad: (gltf: { scene: Group }) => void,
      onProgress?: (progress: { loaded: number; total: number }) => void,
      onError?: (error: Error) => void,
    ): void
  }
}
