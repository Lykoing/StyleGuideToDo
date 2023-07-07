<script setup>
import { ref, computed } from 'vue'
import TaskItem from './TaskItem.vue'
import ModTasksItemEdit from './ModTasksItem.vue'
import { useTasksStore } from '../stores/tasks.store'

const taskStore = useTasksStore()
const tasksList = computed(() => taskStore.visiblePage)

let isModActive = ref(false)
let editingOrd = ref(0)

let editTask = (ord) => {
  isModActive.value = !isModActive.value
  editingOrd.value = ord
}

let finishEditing = (inputValue) => {
  isModActive.value = !isModActive.value
  if (inputValue) {
    taskStore.editTask(editingOrd.value, inputValue)
  }
}
</script>

<template>
  <div class="itemsList">
    <TaskItem
      v-for="item in tasksList"
      :text="item.text"
      :ischecked="item.checked"
      :ord="item.ord"
      :totalVisibility="item.TotalVisibility"
      :key="item.ord"
      :isImportant="item.isImportant"
      @editTask="editTask"
      class="toDoBlock__taskItem"
    />
    <ModTasksItemEdit
      :isModActive="isModActive"
      @finishEditing="finishEditing"
      class="itemsList__mod"
    />
  </div>
</template>

<style scoped>
.itemsList {
  @apply space-y-2;
}

.inactive {
  @apply hidden;
}
</style>
