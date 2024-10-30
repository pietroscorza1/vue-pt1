<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 text-white">
      <div class="max-w-4xl w-full text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
          Pietro Scorza
        </h1>
        <h2 class="text-3xl md:text-4xl font-semibold mb-8 animate-fade-in-up">
          Calculadora Avanzada
        </h2>
        <p class="text-xl mb-12 max-w-2xl mx-auto animate-fade-in">
          Bienvenido a mi calculadora personalizada. Una herramienta poderosa y fácil de usar para todas tus necesidades de cálculo.
        </p>
        <router-link 
          to="/calculadora" 
          class="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105 inline-block animate-bounce"
        >
          Usar Calculadora
        </router-link>
      </div>
      
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
        <div v-for="icon in ['plus', 'minus', 'x', 'divide']" :key="icon" class="bg-white bg-opacity-20 p-6 rounded-lg">
          <component :is="icon" class="w-12 h-12 mx-auto" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Plus, Minus, X, Divide } from 'lucide-vue-next'
  </script>
  
  <style scoped>
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in-down {
    animation: fadeInDown 1s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
  }
  
  .animate-fade-in {
    animation: fadeIn 2s ease-out;
  }
  </style>