import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false, // Cambia esto a true para activar el modo oscuro
        themes: {
          light: {
            primary: '#3498db', // Cambia los colores según tus preferencias
            secondary: '#9c27b0',
            accent: '#ff5722',
            // ...
          },
          dark: {
            primary: '#3498db', // Cambia los colores según tus preferencias para el modo oscuro
            secondary: '#9c27b0',
            accent: '#ff5722',
            // ...
          }
        }
      }
});
