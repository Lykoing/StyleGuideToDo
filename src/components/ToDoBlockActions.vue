<script setup>
import AppButton from './app/AppButton.vue'
import { useTasksStore } from '../stores/tasks.store'
import ModTasksItem from './ModTasksItem.vue'
import { ref, inject } from 'vue'

const tasksStore = useTasksStore()
const toggleSortingByOrd = tasksStore.toggleSortingByOrd
const toggleSortingByDate = tasksStore.toggleSortingByDate
const nextPage = inject('tasksNextPage')
const prevPage = inject('tasksPrevPage')
const toLastPage = inject('tasksToLastPage')
const toFirstPage = inject('tasksToFirstPage')
const toggleMod = ref(false)
const lastPage = inject('tasksLastPage')
const currentPage = inject('tasksCurrentPage')

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
    <div class="actions-sorting">
      <AppButton
        class="flex grow"
        @click="toggleSortingByOrd"
        :class="{ red: tasksStore.isSortedByOrd }"
      >
        <strong>Сортировка по ord</strong>
      </AppButton>
      <AppButton
        class="flex grow"
        @click="toggleSortingByDate"
        :class="{ red: tasksStore.isSortedByDate }"
      >
        <strong>Сортировка по Date</strong>
      </AppButton>
    </div>

    <AppButton @click="toggleMod = !toggleMod">
      <strong> Добавить задачу</strong></AppButton
    >

    <div class="actions-moving">
      <span class="flex self-center">
        <strong>Переход по страницам</strong>
      </span>
      <div class="actions-moving-firstRow">
        <AppButton @click="toFirstPage">&lt;&lt;</AppButton>
        <AppButton @click="prevPage">&lt;</AppButton>
        <AppButton @click="nextPage">></AppButton>
        <AppButton @click="toLastPage">>></AppButton>
      </div>
      <span class="flex justify-center"
        ><strong>{{ currentPage.value + 1 }}</strong
        ><strong v-if="lastPage + 1 > 1">...{{ lastPage + 1 }}</strong></span
      >
    </div>
  </div>
</template>

<style scoped>
.actions {
  @apply flex flex-row gap-1 justify-start;
}
.actions-sorting {
  @apply flex flex-col gap-1 justify-start;
}
.actions-moving {
  @apply flex flex-col gap-1 justify-center self-end;
}
.actions-moving-firstRow {
  @apply flex flex-row gap-1 justify-center;
}
.red {
  @apply bg-btn-imp;
}
</style>
