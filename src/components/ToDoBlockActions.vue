<script setup>
import AppButton from './app/AppButton.vue'
import AppInput from './app/AppInput.vue'
import { useTasksStore } from '../stores/tasks.store'
import { ref } from 'vue'

const tasksStore = useTasksStore()

const inputValue = ref()

let addTask = () => {
  if (inputValue.value) {
    tasksStore.addTask(inputValue.value)
  }
  document.querySelector('#newTask').value = ''
  inputValue.value = ''
}
</script>

<template>
  <div class="actions">
    <AppInput
      id="newTask"
      v-model="inputValue"
      placeholder="Введите новую задачу"
      @keyup.enter="addTask"
    />
    <AppButton @click="addTask">Добавить</AppButton>
  </div>
</template>

<style scoped>
.actions {
  @apply w-full
    flex flex-row gap-2 justify-end;
}
</style>
