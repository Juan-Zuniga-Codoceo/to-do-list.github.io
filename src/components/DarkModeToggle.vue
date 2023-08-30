<!--<template>
  <v-btn icon @click="toggleMode">
    <v-icon>{{ isDarkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$emit('toggle-mode', this.isDarkMode);
    }
  }
};
</script>-->

<template>
  <v-btn icon @click="toggleMode">
    <v-icon>{{ isDarkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
      this.$emit('toggle-mode', this.isDarkMode); // Pasar this.isDarkMode al emitir el evento
    }
  }
};
</script>
