<template>
    <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-6 text-center">Comentarios</h1>
        
        <div v-if="loading" class="text-center">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p class="mt-2 text-gray-600">Cargando comentarios...</p>
        </div>
  
        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Error!</strong>
          <span class="block sm:inline"> {{ error }}</span>
        </div>
  
        <div v-else-if="comments.length === 0" class="text-center text-gray-600">
          No se encontraron comentarios.
        </div>
  
        <div v-else class="space-y-6">
          <div v-for="comment in comments" :key="comment.id" class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ comment.name }}
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                {{ comment.email }}
              </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Comentario
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ comment.body }}
                  </dd>
                </div>
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    ID del Post
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ comment.postId }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const comments = ref([])
  const loading = ref(true)
  const error = ref(null)
  
  const fetchComments = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments')
      if (!response.ok) {
        throw new Error('No se pudieron cargar los comentarios')
      }
      const data = await response.json()
      comments.value = data
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => {
    fetchComments()
  })
  </script>