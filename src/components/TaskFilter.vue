<script setup>
import { ref, inject } from 'vue'
import AppInput from './app/AppInput.vue'
import AppButton from './app/AppButton.vue'
import AppImpSVG from './app/AppImpSVG.vue'

const inputValue = ref()
const toggleFilteringByImportance = inject('tasksToggleFilteringByImportance')
const isFilteredByImportance = inject('tasksIsFilteredByImportance')

const setSearchField = inject('tasksSetSearchField')
</script>

<template>
  <div class="search">
    <AppInput
      placeholder="Поиск по задачам"
      v-model="inputValue"
      @input="setSearchField(inputValue)"
    />
    <AppButton
      :class="{ red: isFilteredByImportance }"
      class="flex flex-row"
      @click="toggleFilteringByImportance"
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
