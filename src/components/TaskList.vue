<!--<template>
  <div>
    <h2>Lista de Tareas</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.text }}
        <button @click="removeTask(task.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    removeTask(taskId) {
      this.$emit('remove-task', taskId);
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para el componente */
</style>
-->

<template>
  <div>
    <h2>Lista de Tareas</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.text }}
        <v-btn icon small @click="removeTask(task.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    removeTask(taskId) {
      this.$emit('remove-task', taskId);
    }
  }
};
</script>
