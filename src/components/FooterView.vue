<script setup lang="ts">
// Footer minimalista y transparente
</script>

<template>
  <footer class="m-4">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {{ new Date().getFullYear() }}
        <a href="#" class="hover:underline text-purple-600 dark:text-purple-400 font-medium">
          Yondani Moreno </a
        >. All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a
            href="#"
            class="hover:underline me-4 md:me-6 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:underline me-4 md:me-6 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:underline hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
