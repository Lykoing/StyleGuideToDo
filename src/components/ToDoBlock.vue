<script setup>
import { ref } from 'vue'
import TasksList from './TasksList.vue'
import ToDoBlockActions from './ToDoBlockActions.vue'
import TaskSearch from './TaskSearch.vue'

let searchValue = ref('')

let updateSearchValue = (value) => {
  searchValue.value = value
}
</script>

<template>
  <div class="toDoBlock">
    <div class="toDoBlock__title"><h1>Список задач:</h1></div>
    <TaskSearch @find="updateSearchValue" />
    <TasksList :searchValue="searchValue" class="toDoBlock__tasksList" />
    <ToDoBlockActions class="toDoBlock__actions" />
  </div>
</template>

<style scoped>
.toDoBlock {
  @apply p-2 w-1/4 space-y-2
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
