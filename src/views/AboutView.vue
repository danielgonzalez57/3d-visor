<script setup lang="ts">
// Página minimalista para empresa de diseño 3D
</script>

<template>
  <main class="min-h-screen pt-20 bg-white">
    <!-- Hero Simple -->
    <section class="max-w-4xl mx-auto px-6 py-16 text-center">
      <!-- Logo y título -->
      <div class="flex justify-center items-center space-x-4 mb-8">
        <img
          src="/src/assets/images/3d-modeling.png"
          alt="3D Studio Logo"
          class="w-40 h-40 object-contain"
        />
      </div>

      <!-- Título principal -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Diseño 3D Profesional</h2>

      <!-- Descripción -->
      <p class="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
        Somos un estudio creativo especializado en diseño 3D, modelado y visualización.
        Transformamos ideas en realidades digitales impactantes con tecnología de vanguardia.
      </p>

      <!-- Stats simples -->
      <div class="grid grid-cols-3 gap-8 mb-16">
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900 mb-2">200+</div>
          <div class="text-gray-500 text-sm">Proyectos</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900 mb-2">5+</div>
          <div class="text-gray-500 text-sm">Años Experiencia</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-gray-900 mb-2">100%</div>
          <div class="text-gray-500 text-sm">Satisfacción</div>
        </div>
      </div>
    </section>

    <!-- Qué hacemos -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Nuestros Servicios</h3>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-4xl mb-4">🎨</div>
            <h4 class="font-semibold text-gray-900 mb-2">Modelado 3D</h4>
            <p class="text-gray-600 text-sm">Creación de modelos 3D detallados y realistas</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-4xl mb-4">🏗️</div>
            <h4 class="font-semibold text-gray-900 mb-2">Visualización Arquitectónica</h4>
            <p class="text-gray-600 text-sm">
              Renderizados profesionales para proyectos arquitectónicos
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-4xl mb-4">🎬</div>
            <h4 class="font-semibold text-gray-900 mb-2">Animación 3D</h4>
            <p class="text-gray-600 text-sm">Animaciones fluidas y efectos visuales impactantes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nuestra misión simple -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Nuestra Misión</h3>
        <p class="text-lg text-gray-600 leading-relaxed">
          Creemos en el poder del diseño 3D para transformar ideas en experiencias visuales
          extraordinarias. Nuestro objetivo es crear contenido 3D que inspire, comunique y conecte
          con audiencias de manera efectiva, utilizando las últimas tecnologías y técnicas
          creativas.
        </p>
      </div>
    </section>

    <!-- Tecnologías -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Tecnologías que Utilizamos</h3>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="text-2xl mb-2">📐</div>
            <div class="font-semibold text-gray-900">Blender</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="text-2xl mb-2">🎨</div>
            <div class="font-semibold text-gray-900">Maya</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="text-2xl mb-2">⚡</div>
            <div class="font-semibold text-gray-900">3ds Max</div>
          </div>
          <div class="bg-white rounded-lg p-4 shadow-sm">
            <div class="text-2xl mb-2">🌟</div>
            <div class="font-semibold text-gray-900">Cinema 4D</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA simple -->
    <section class="bg-gray-900 py-16">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h3 class="text-3xl font-bold text-white mb-6">
          ¿Listo para
          <span
            class="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
          >
            Crear
          </span>
          ?
        </h3>
        <p class="text-gray-300 mb-8 text-lg">Convierte tus ideas en realidades 3D impactantes</p>
        <button
          class="bg-gradient-to-r from-purple-400 to-purple-600 cursor-pointer hover:from-purple-500 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Ver Portafolio
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Animaciones sutiles */
.bg-white:hover {
  transform: translateY(-1px);
  transition: transform 0.2s ease;
}
</style>
