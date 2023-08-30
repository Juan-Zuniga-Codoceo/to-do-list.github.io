<template>
  <v-app :dark="isDarkMode">
    <v-main>
      <router-view @toggle-mode="toggleMode" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    isDarkMode: false
  }),

  methods: {
    toggleMode(isDarkMode) {
      this.isDarkMode = isDarkMode;
    }
  }
};
</script>

<style>
/* Tipografía global */
body {
  font-family: 'Arial', sans-serif;
}

/* Colores */
.theme-color {
  color: #3498db; /* Cambia a tu color preferido */
}
</style>

