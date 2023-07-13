<script setup>
import { ref, inject } from 'vue'
import AppInput from './app/AppInput.vue'
import AppButton from './app/AppButton.vue'
import AppImpSVG from './app/AppImpSVG.vue'
import { useTasksStore } from '../stores/tasks.store'
const taskStore = useTasksStore()

const inputValue = ref()
const toggleImpFiltering = taskStore.toggleImpFiltering

let setSearchField = inject('tasksSetSearchField')
</script>

<template>
  <div class="search">
    <AppInput
      placeholder="Поиск по задачам"
      v-model="inputValue"
      @input="setSearchField(inputValue)"
    />
    <AppButton
      :class="{ red: taskStore.isFilteredByImp }"
      class="flex flex-row"
      @click="toggleImpFiltering"
    >
      <strong>Только</strong> <AppImpSVG />
    </AppButton>
  </div>
</template>

<style scoped>
.search {
  @apply flex flex-row justify-between flex-wrap;
}
.red {
  @apply bg-btn-imp;
}
</style>
