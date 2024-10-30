<!-- src/App.vue -->

<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'; // Asegúrate de que la ruta sea correcta
export default {
  name: 'App',
  components: {
    HeaderNav
  }
};
</script>
 <!--  -->
