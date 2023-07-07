<script setup>
import AppButton from './app/AppButton.vue'
import { useTasksStore } from '../stores/tasks.store'
import ModTasksItem from './ModTasksItem.vue'
import { ref, computed } from 'vue'

const tasksStore = useTasksStore()
const sortByOrd = tasksStore.sortByOrd
const incPage = tasksStore.incPage
const decPage = tasksStore.decPage
const toggleMod = ref(false)
const page = computed(() => tasksStore.pageNum)

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
    <AppButton class="flex flex-row" @click="sortByOrd">
      <strong>Сортировка по ord</strong>
    </AppButton>
    <AppButton @click="toggleMod = !toggleMod">Добавить задачу</AppButton>
    <AppButton @click="decPage">Пред. стр</AppButton>
    <AppButton @click="incPage">След. стр</AppButton>
    <span
      ><strong>{{ page }}</strong></span
    >
  </div>
</template>

<style scoped>
.actions {
  @apply w-full
    flex flex-row gap-2 justify-end;
}
</style>
