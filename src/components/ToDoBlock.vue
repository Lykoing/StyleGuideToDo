<script setup>
import TasksList from './TasksList.vue'
import ToDoBlockActions from './ToDoBlockActions.vue'
import TaskFilter from './TaskFilter.vue'
import { usePrepTasks } from '../composable/usePrepTasks'
usePrepTasks()
</script>

<template>
  <div class="toDoBlock">
    <div class="toDoBlock__title">
      <h1>Список задач:</h1>
    </div>
    <TaskFilter />
    <TasksList class="toDoBlock__tasksList" />
    <ToDoBlockActions class="toDoBlock__actions" />
  </div>
</template>

<style scoped>
.toDoBlock {
  @apply p-2 w-1/3 space-y-2 self-start
    border-4 border-tasks-brd rounded-3xl;
}

.toDoBlock__tasksList {
  @apply w-full;
}

.toDoBlock__title {
  @apply p-2 w-full
    flex justify-center;
}

.toDoBlock__actions {
}
</style>
