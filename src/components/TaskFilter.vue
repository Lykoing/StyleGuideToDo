<script setup>
import { ref } from 'vue'
import AppInput from './app/AppInput.vue'
import AppButton from './app/AppButton.vue'
import AppImpSVG from './app/AppImpSVG.vue'

const emit = defineEmits(['find', 'toggleOnlyImp'])

const inputValue = ref()
</script>

<template>
  <div class="search">
    <AppInput
      placeholder="Поиск по задачам"
      v-model="inputValue"
      @input="emit('find', inputValue)"
    />
    <AppButton class="flex flex-row" @click="emit('toggleOnlyImp')">
      <strong>Только</strong> <AppImpSVG />
    </AppButton>
  </div>
</template>

<style scoped>
.search {
  @apply flex flex-row justify-between;
}
</style>
