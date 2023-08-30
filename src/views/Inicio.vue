
<!--<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <add-task-card @add-task="addTask" />
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <task-list-card :tasks="tasks" @remove-task="removeTask" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddTaskCard from '@/components/AddTaskCard.vue';
import TaskListCard from '@/components/TaskListCard.vue';

export default {
     name:'Inicio-view',
  components: {
    AddTaskCard,
    TaskListCard
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask(taskText) {
      const newTask = { id: Date.now(), text: taskText };
      this.tasks.push(newTask);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
};
</script>-->

<!--
<template>
  <div class="background">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">¡Bienvenido a mi To-Do App!</span>
        <v-btn icon @click="toggleMode">
          <v-icon>{{ isDarkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </div>
    </nav>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <add-task-card @add-task="addTask" />
        </v-col>
        <v-col cols="12" sm="8" md="6">
          <task-list-card :tasks="tasks" @remove-task="removeTask" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddTaskCard from '@/components/AddTaskCard.vue';
import TaskListCard from '@/components/TaskListCard.vue';

export default {
  name: 'Inicio-View',
  components: {
    AddTaskCard,
    TaskListCard
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask(taskText) {
      const newTask = { id: Date.now(), text: taskText };
      this.tasks.push(newTask);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
};
</script>

<style>
/* Estilo específico para el título */
.theme-color {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}
.background {
  background-image: url('../img/todolist.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 100vh;
}
</style>
-->

<template>
  <div class="background">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">¡Bienvenido To-Do App!</span>
        <dark-mode-toggle @toggle-mode="toggleMode" />
      </div>
    </nav>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <add-task-card @add-task="addTask" />
        </v-col>
        <v-col cols="12" sm="8" md="6">
          <task-list-card :tasks="tasks" @remove-task="removeTask" @remove-all-tasks="removeAllTasks" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AddTaskCard from '@/components/AddTaskCard.vue';
import TaskListCard from '@/components/TaskListCard.vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

export default {
  name: 'InicioView',
  components: {
    AddTaskCard,
    TaskListCard,
    DarkModeToggle
  },
  data() {
    return {
      tasks: [],
      isDarkMode: false
    };
  },
  methods: {
    addTask(taskText) {
      const newTask = { id: Date.now(), text: taskText };
      this.tasks.push(newTask);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    removeAllTasks() {
      this.tasks = []; // Eliminar todas las tareas
    },
    toggleMode(isDarkMode) {
      this.isDarkMode = isDarkMode;

      const app = document.querySelector('.background');
      if (this.isDarkMode) {
        app.classList.add('dark-mode');
      } else {
        app.classList.remove('dark-mode');
      }
    }
  }
};
</script>

<style>
/* Estilo específico para el título */
.theme-color {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}
.background {
  background-image: url('../img/todolist.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  height: 100vh;
}
</style>


