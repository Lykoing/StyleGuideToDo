<script setup>
import { ref } from 'vue'
import AppInput from './app/AppInput.vue'
import AppButton from './app/AppButton.vue'

const emit = defineEmits(['find'])

const inputValue = ref()
</script>

<template>
  <div class="search">
    <AppInput
      placeholder="Поиск по задачам"
      v-model="inputValue"
      @input="emit('find', inputValue)"
    />
    <AppButton>Важные</AppButton>
  </div>
</template>

<style scoped>
.search {
}
</style>
