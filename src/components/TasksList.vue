<script setup>
import { ref, computed } from 'vue'
import TaskItem from './TaskItem.vue'
import ModTasksItemEdit from './ModTasksItemEdit.vue'
import { useTasksStore } from '../stores/tasks.store'

const props = defineProps({
  searchValue: {
    type: String,
    default: '',
  },
})

const taskStore = useTasksStore()

let isModActive = ref(false)
let editingOrd = ref(0)

let taskListFiltered = computed(() => {
  return taskStore.tasksList.filter(function (item) {
    return item.text.includes(props.searchValue)
  })
})

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
      v-for="item in taskListFiltered"
      :task="item.text"
      :ischecked="item.checked"
      :ord="item.ord"
      :key="item.ord"
      :isimportant="item.importance"
      @editTask="editTask"
      @deleteTask="(ord) => taskStore.deleteTask(ord)"
      @checkTask="(ord) => taskStore.checkTask(ord)"
      @makeTaskImp="(ord) => taskStore.makeTaskImp(ord)"
      class="toDoBlock__taskItem"
    />
    <ModTasksItemEdit
      v-if="isModActive"
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
