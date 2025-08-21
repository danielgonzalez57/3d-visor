<script setup lang="ts">
import FooterView from '@/components/FooterView.vue'
// import PortfolioGrid from '@/components/PortfolioGrid.vue'
import Banner3D from '@/components/Banner3D.vue'

// Datos de ejemplo para las cards
// const projects = [
//   {
//     id: 1,
//     title: 'Modelo Arquitectónico',
//     category: 'Arquitectura',
//     image: '/src/assets/images/libro.png',
//     description: 'Renderizado profesional de edificio residencial',
//   },
//   {
//     id: 2,
//     title: 'Producto Industrial',
//     category: 'Producto',
//     image: '/src/assets/images/libro.png',
//     description: 'Visualización de producto con materiales realistas',
//   },
//   {
//     id: 3,
//     title: 'Personaje 3D',
//     category: 'Personajes',
//     image: '/src/assets/images/libro.png',
//     description: 'Modelado y texturizado de personaje animado',
//   },
//   {
//     id: 4,
//     title: 'Interior Moderno',
//     category: 'Interiores',
//     image: '/src/assets/images/libro.png',
//     description: 'Diseño de interior con iluminación natural',
//   },
//   {
//     id: 5,
//     title: 'Automóvil Concept',
//     category: 'Automotriz',
//     image: '/src/assets/images/libro.png',
//     description: 'Modelado de vehículo conceptual futurista',
//   },
//   {
//     id: 6,
//     title: 'Paisaje Urbano',
//     category: 'Paisajes',
//     image: '/src/assets/images/libro.png',
//     description: 'Vista aérea de ciudad con efectos atmosféricos',
//   },
//   {
//     id: 7,
//     title: 'Mueble Minimalista',
//     category: 'Mobiliario',
//     image: '/src/assets/images/libro.png',
//     description: 'Diseño de mueble con acabados premium',
//   },
//   {
//     id: 8,
//     title: 'Escena Cinemática',
//     category: 'Animación',
//     image: '/src/assets/images/libro.png',
//     description: 'Secuencia animada con efectos de partículas',
//   },
// ]
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Banner 3D -->
    <Banner3D
      title="Portafolio 3D"
      subtitle="Transformamos Ideas en Realidad"
      description="Explora nuestros proyectos más destacados en diseño y visualización 3D. Creamos experiencias visuales impactantes con tecnología de vanguardia."
      button-text="Ver Proyectos"
    />

    <!-- Grid de Cards -->
    <!-- <PortfolioGrid :projects="projects" :items-per-page="6" /> -->

    <FooterView />
  </main>
</template>

<style scoped>
/* Animaciones personalizadas */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Efecto de brillo sutil */
.group::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.group:hover::before {
  left: 100%;
}
</style>
