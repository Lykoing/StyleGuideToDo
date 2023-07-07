<script setup>
import { ref } from 'vue'
import AppInput from './app/AppInput.vue'
import AppButton from './app/AppButton.vue'
import AppImpSVG from './app/AppImpSVG.vue'
import { useTasksStore } from '../stores/tasks.store'
const taskStore = useTasksStore()

const inputValue = ref()
const toggleImpFiltering = taskStore.toggleImpFiltering

let updateSearchValue = () => {
  taskStore.updateSearchValue(inputValue.value)
  taskStore.searchFiltering()
}
</script>

<template>
  <div class="search">
    <AppInput
      placeholder="Поиск по задачам"
      v-model="inputValue"
      @input="updateSearchValue"
    />
    <AppButton
      :class="{ red: taskStore.isfilteredByImp }"
      class="flex flex-row"
      @click="toggleImpFiltering"
    >
      <strong>Только</strong> <AppImpSVG />
    </AppButton>
  </div>
</template>

<style scoped>
.search {
  @apply flex flex-row justify-between;
}
.red {
  @apply bg-btn-imp;
}
</style>
