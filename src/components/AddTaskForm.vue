<template>
  <div>
    <input v-model="newTaskText" @keyup.enter="addTask" placeholder="Nueva tarea">
    <button @click="addTask">Agregar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskText: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() !== '') {
        this.$emit('add-task', this.newTaskText);
        this.newTaskText = '';
      }
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para el componente */
</style>
