<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Estado para controlar el menú mobile
const isMobileMenuOpen = ref(false)

// Estado para controlar la visibilidad del header
const isHeaderVisible = ref(true)
let lastScrollY = 0

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Función para detectar scroll y ocultar/mostrar header
const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Ocultar header al hacer scroll hacia abajo, mostrar al hacer scroll hacia arriba
  if (currentScrollY > lastScrollY && currentScrollY > 40) {
    // Scroll hacia abajo y más de 100px
    isHeaderVisible.value = false
  } else if (currentScrollY < lastScrollY) {
    // Scroll hacia arriba
    isHeaderVisible.value = true
  }

  lastScrollY = currentScrollY
}

// Lifecycle hooks para el scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-50 transition-transform duration-300"
    :class="{ '-translate-y-full': !isHeaderVisible }"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3">
            <img src="/src/assets/images/cube.png" alt="3d Logo" class="w-10 h-10 object-contain" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-8">
            <router-link
              to="/"
              class="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-primary-purple"
            >
              Inicio
            </router-link>
            <router-link
              to="/about"
              class="text-gray-700 hover:text-primary-purple px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-primary-purple"
            >
              Acerca de
            </router-link>
          </div>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button
            class="p-2 rounded-lg text-gray-700 hover:text-primary-purple hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            title="Toggle Dark Mode"
          >
            <!-- Moon Icon -->
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>

          <!-- CTA Button -->
          <button
            class="bg-primary-purple cursor-pointer hover:bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm"
          >
            Ver más
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-2">
          <!-- Dark Mode Toggle Mobile -->
          <button
            class="p-2 rounded-lg text-gray-700 hover:text-primary-purple cursor-pointer transition-colors duration-200"
            title="Toggle Dark Mode"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>

          <!-- Hamburger Menu -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-purple hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Abrir menú principal</span>
            <!-- Hamburger icon -->
            <svg
              class="h-6 w-6"
              :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Close icon -->
            <svg
              class="h-6 w-6"
              :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        class="md:hidden transition-all duration-300 overflow-hidden"
        :class="{
          'max-h-96 opacity-100': isMobileMenuOpen,
          'max-h-0 opacity-0': !isMobileMenuOpen,
        }"
      >
        <div
          class="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-gray-100 mt-4 bg-white/95 backdrop-blur-md rounded-lg"
        >
          <router-link
            to="/"
            class="text-gray-700 hover:text-primary-purple hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-primary-purple bg-purple-50"
            @click="isMobileMenuOpen = false"
          >
            Home
          </router-link>
          <router-link
            to="/rifas"
            class="text-gray-700 hover:text-primary-purple hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-primary-purple bg-purple-50"
            @click="isMobileMenuOpen = false"
          >
            Rifas
          </router-link>
          <router-link
            to="/explore"
            class="text-gray-700 hover:text-primary-purple hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-primary-purple bg-purple-50"
            @click="isMobileMenuOpen = false"
          >
            Explore
          </router-link>
          <router-link
            to="/about"
            class="text-gray-700 hover:text-primary-purple hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-primary-purple bg-purple-50"
            @click="isMobileMenuOpen = false"
          >
            About Us
          </router-link>
          <div class="pt-4">
            <button
              class="w-full bg-primary-purple cursor-pointer hover:bg-purple-600 text-primary-navy px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 shadow-sm"
            >
              Crear Rifa
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
