<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
        <div class="p-6 bg-gray-800">
          <input
            type="text"
            v-model="display"
            readonly
            class="w-full text-right text-4xl bg-transparent text-white focus:outline-none"
          />
        </div>
        <div class="grid grid-cols-4 gap-1 p-4 bg-gray-200">
          <button v-for="btn in buttons" :key="btn" @click="handleInput(btn)" 
                  class="p-4 text-xl font-semibold rounded transition duration-200 ease-in-out"
                  :class="getButtonClass(btn)">
            {{ btn }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const display = ref('0')
  const currentOperation = ref(null)
  const previousValue = ref(null)
  const resetDisplay = ref(true)
  
  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ]
  
  const handleInput = (value) => {
    if (value === 'C') {
      clear()
    } else if (value === '=') {
      calculate()
    } else if (['+', '-', '×', '÷'].includes(value)) {
      setOperation(value)
    } else {
      appendNumber(value)
    }
  }
  
  const appendNumber = (number) => {
    if (resetDisplay.value) {
      display.value = ''
      resetDisplay.value = false
    }
    display.value += number
  }
  
  const setOperation = (operation) => {
    if (currentOperation.value !== null) calculate()
    previousValue.value = parseFloat(display.value)
    currentOperation.value = operation
    resetDisplay.value = true
  }
  
  const calculate = () => {
    if (currentOperation.value === null || resetDisplay.value) return
    
    const current = parseFloat(display.value)
    let result
  
    switch (currentOperation.value) {
      case '+':
        result = previousValue.value + current
        break
      case '-':
        result = previousValue.value - current
        break
      case '×':
        result = previousValue.value * current
        break
      case '÷':
        result = previousValue.value / current
        break
    }
  
    display.value = result.toString()
    currentOperation.value = null
  }
  
  const clear = () => {
    display.value = '0'
    currentOperation.value = null
    previousValue.value = null
    resetDisplay.value = true
  }
  
  const getButtonClass = (btn) => {
    if (['÷', '×', '-', '+', '='].includes(btn)) {
      return 'bg-orange-500 text-white hover:bg-orange-600'
    } else if (btn === 'C') {
      return 'bg-red-500 text-white hover:bg-red-600'
    } else {
      return 'bg-gray-300 text-gray-800 hover:bg-gray-400'
    }
  }
  </script>