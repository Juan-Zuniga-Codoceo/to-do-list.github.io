
<template>
  <div class="sombra">
    <v-card>
      <v-card-title class="title">Agregar Tarea</v-card-title>
      <v-card-text>
        <v-text-field v-model="newTask" id="new-task" @keyup.enter="addTask" placeholder="Nueva tarea"></v-text-field>
        <v-btn @click="addTask">Agregar</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      this.$emit('add-task', this.newTask);
      this.newTask = '';
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



