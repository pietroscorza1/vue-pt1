<template>
    <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">Información de Usuarios</h1>
        
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p class="mt-2 text-gray-600">Cargando usuarios...</p>
        </div>
  
        <!-- Error State -->
        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline"> {{ error }}</span>
        </div>
  
        <!-- Users Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="user in users" :key="user.id" class="bg-white shadow rounded-lg overflow-hidden">
            <!-- User Header -->
            <div class="p-6 bg-gray-50 border-b border-gray-200">
              <div class="flex items-center">
                <img :src="user.image" :alt="user.firstName" class="h-16 w-16 rounded-full object-cover" />
                <div class="ml-4">
                  <h2 class="text-xl font-semibold text-gray-900">
                    {{ user.firstName }} {{ user.lastName }}
                  </h2>
                  <p class="text-sm text-gray-500">{{ user.email }}</p>
                </div>
              </div>
            </div>
  
            <!-- User Details -->
            <div class="p-6 space-y-4">
              <!-- Personal Information -->
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Información Personal</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p class="text-gray-500">Edad</p>
                    <p class="font-medium">{{ user.age }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Género</p>
                    <p class="font-medium">{{ user.gender }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Teléfono</p>
                    <p class="font-medium">{{ user.phone }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Fecha de Nacimiento</p>
                    <p class="font-medium">{{ user.birthDate }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Physical Characteristics -->
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Características Físicas</h3>
                <div class="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p class="text-gray-500">Altura</p>
                    <p class="font-medium">{{ user.height }} cm</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Peso</p>
                    <p class="font-medium">{{ user.weight }} kg</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Color de Ojos</p>
                    <p class="font-medium">{{ user.eyeColor }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Cabello</p>
                    <p class="font-medium">{{ user.hair.color }}, {{ user.hair.type }}</p>
                  </div>
                </div>
              </div>
  
              <!-- Address -->
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Dirección</h3>
                <p class="text-sm text-gray-600">
                  {{ user.address.address }}<br>
                  {{ user.address.city }}, {{ user.address.state }} {{ user.address.postalCode }}<br>
                  {{ user.address.country }}
                </p>
              </div>
  
              <!-- Company -->
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Información Laboral</h3>
                <div class="text-sm text-gray-600">
                  <p class="font-medium">{{ user.company.name }}</p>
                  <p>{{ user.company.title }}</p>
                  <p>{{ user.company.department }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios' // Importa axios
  
  interface Hair {
    color: string
    type: string
  }
  
  interface Coordinates {
    lat: number
    lng: number
  }
  
  interface Address {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates
    country: string
  }
  
  interface Company {
    department: string
    name: string
    title: string
    address: Address
  }
  
  interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    address: Address
    company: Company
  }
  
  const users = ref<User[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)
  
  const peticion = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users') // Cambia fetch a axios
      users.value = response.data.users // Ajusta la forma en que accedes a los datos
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Error desconocido'
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => {
    peticion()
  })
  </script>
  