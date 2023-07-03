<script setup>
import AppButton from './app/AppButton.vue'
import { useTasksStore } from '../stores/tasks.store'
import ModTasksItem from './ModTasksItem.vue'
import { ref } from 'vue'

const tasksStore = useTasksStore()

const toggleMod = ref(false)

let addTask = (inputValue) => {
  if (inputValue) {
    tasksStore.addTask(inputValue)
  }
  toggleMod.value = !toggleMod.value
}
</script>

<template>
  <div class="actions">
    <ModTasksItem :isModActive="toggleMod" @finishEditing="addTask" />
    <AppButton @click="toggleMod = !toggleMod">Добавить задачу</AppButton>
  </div>
</template>

<style scoped>
.actions {
  @apply w-full
    flex flex-row gap-2 justify-end;
}
</style>
