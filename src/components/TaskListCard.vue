<!--
<template>
  <div>
    <v-card>
      <v-card-title class="title">Lista de Tareas</v-card-title>
      <v-card-text>
        <ul>
          <li v-for="task in tasks" :key="task.id">
            <input type="checkbox" v-model="task.done" :id="'task-' + task.id">
            <label :for="'task-' + task.id">{{ task.text }}</label>
            <v-icon @click="removeTask(task.id)">mdi-delete</v-icon>
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array
  },
  methods: {
    removeTask(taskId) {
      this.$emit('remove-task', taskId);
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
}
</style>-->

<template>
  <v-card class="elevation-10 card, sombra">
    <v-card-title class="title">
      Lista de Tareas
    </v-card-title>
    <v-card-text>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <label :for="'task-' + task.id">{{ task.text }}</label>
          <v-icon @click="removeTask(task.id)">mdi-delete</v-icon>
        </li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn  @click="removeAllTasks">Eliminar Todo</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    removeTask(taskId) {
      this.$emit('remove-task', taskId);
    },
    removeAllTasks() {
      this.$emit('remove-all-tasks'); // Emitir el evento correctamente
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
}
.sombra{
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

</style>



