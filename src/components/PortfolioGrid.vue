<script setup lang="ts">
import { ref, computed } from 'vue'

// Props del componente
interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
}

interface Props {
  projects: Project[]
  itemsPerPage?: number
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 6,
})

// Paginación
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.projects.length / props.itemsPerPage))

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return props.projects.slice(start, end)
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 pb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in paginatedProjects"
        :key="project.id"
        class="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2"
      >
        <!-- Imagen -->
        <div class="relative overflow-hidden h-64 bg-gradient-to-br from-purple-50 to-purple-100">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <!-- Overlay con categoría -->
          <div class="absolute top-4 left-4">
            <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              {{ project.category }}
            </span>
          </div>
          <!-- Overlay hover -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="absolute bottom-4 left-4 right-4">
              <button
                class="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200"
              >
                Ver Proyecto
              </button>
            </div>
          </div>
        </div>

        <!-- Contenido -->
        <div class="p-6">
          <h3
            class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200"
          >
            {{ project.title }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Paginación -->
    <div v-if="totalPages > 1" class="flex justify-center items-center mt-12 space-x-2">
      <!-- Botón Anterior -->
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <!-- Números de página -->
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer',
          currentPage === page
            ? 'bg-purple-600 text-white shadow-lg'
            : 'text-gray-600 hover:bg-gray-100 border border-gray-300',
        ]"
      >
        {{ page }}
      </button>

      <!-- Botón Siguiente -->
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Estilos adicionales si los necesitas */
</style>
