<script setup>
import ToDoBlock from './components/ToDoBlock.vue'
</script>

<template>
  <div class="content">
    <ToDoBlock class="content__toDoBlock" />
  </div>
</template>

<style scoped>
.content {
  @apply h-screen
    flex justify-center items-center;
}
</style>
