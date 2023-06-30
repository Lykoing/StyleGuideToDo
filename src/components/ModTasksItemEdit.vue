<script setup>
import { ref } from 'vue'
import AppButton from './app/AppButton.vue'
import AppInput from './app/AppInput.vue'

const emit = defineEmits(['finishEditing'])

const inputValue = ref()
</script>

<template>
  <div class="editWindow__bg">
    <div class="editWindow__content">
      <div><h1>Введите новый текст задачи:</h1></div>
      <AppInput v-model="inputValue" class="editWindow__content__input" />
      <AppButton
        @click="emit('finishEditing', inputValue)"
        class="editWindow__content__btn"
      >
        <p>Готово</p>
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
.editWindow__bg {
  @apply w-full h-full left-0 top-0
    flex justify-center items-center fixed
    bg-mod-bg/70;
}
.editWindow__content {
  @apply w-1/4 h-1/5 p-4 space-y-2
    flex flex-col
    bg-main-bg
    rounded-3xl border-4 border-mod-brd;
}

.editWindow__content__btn {
  @apply w-1/4
    self-end;
}

.editWindow__content__input {
}
</style>
