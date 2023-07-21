import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const ordNumber = ref(0)
  const length = computed(() => tasksList.value.length)
  const tasksList = ref([
    {
      text: 'Здесь будут ваши задачи',
      dateCreate: new Date(8.64e15),
      ord: ordNumber.value,
      checked: false,
      isImportant: false,
      searchVisibility: true,
      TotalVisibility: true,
    },
  ])

  function addTask(text) {
    ordNumber.value += 1
    tasksList.value.push({
      text,
      dateCreate: new Date(),
      ord: ordNumber.value,
      checked: false,
      isImportant: false,
      searchVisibility: true,
      TotalVisibility: true,
    })
  }

  function deleteTask(ord) {
    tasksList.value = tasksList.value.filter((item) => {
      return item.ord != ord
    })
  }

  function editTask(ord, text) {
    tasksList.value.forEach((item) => {
      if (item.ord == ord) {
        item.text = text
      }
    })
  }

  function checkTask(ord) {
    tasksList.value.forEach((item) => {
      if (item.ord == ord) {
        item.checked = !item.checked
      }
    })
  }

  function toggleTaskImp(ord) {
    tasksList.value.forEach((item) => {
      if (item.ord == ord) {
        item.isImportant = !item.isImportant
      }
    })
  }

  return {
    tasksList,
    addTask,
    deleteTask,
    checkTask,
    editTask,
    toggleTaskImp,
    length,
  }
})
