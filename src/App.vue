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
  @apply py-10
    flex justify-center;
}
</style>
