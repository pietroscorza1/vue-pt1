<template>
    <header class=" bg-gray-800 text-white shadow-lg">
      <nav class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="text-xl font-bold">Mi Aplicación</div>
          
          <!-- Menú de navegación para pantallas grandes -->
          <div class="hidden md:flex space-x-4">
            <router-link v-for="item in navItems" :key="item.path" :to="item.path"
              class="px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              :class="[$route.path === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
            >
              {{ item.name }}
            </router-link>
          </div>
          
          <!-- Botón de menú para móviles -->
          <button @click="toggleMobileMenu" class="md:hidden focus:outline-none" aria-label="Abrir menú">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              <path v-else fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            </svg>
          </button>
        </div>
        
        <!-- Menú móvil -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div v-if="isMobileMenuOpen" class="md:hidden mt-2">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <router-link v-for="item in navItems" :key="item.path" :to="item.path"
                class="block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                :class="[$route.path === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </transition>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Calculadora', path: '/calculadora' },
    { name: 'Fetch', path: '/fetch' },
    { name: 'Axios', path: '/axios' }
  ]
  
  const isMobileMenuOpen = ref(false)
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }
  </script>