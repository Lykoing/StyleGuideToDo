import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const ordNumber = ref(0)

  const tasksList = ref([
    {
      text: 'Здесь будут ваши задачи',
      dateCreate: new Date(),
      ord: ordNumber.value,
      checked: false,
      visibility: true,
      importance: false,
    },
  ])

  function addTask(text) {
    ordNumber.value += 1
    tasksList.value.push({
      text,
      dateCreate: new Date(),
      ord: ordNumber.value,
      checked: false,
      visibility: true,
      importance: false,
    })
  }

  function deleteTask(ord) {
    tasksList.value = tasksList.value.filter((item) => {
      return item.ord != ord
    })
  }

  function checkTask(ord) {
    tasksList.value.forEach((item) => {
      if (item.ord == ord) {
        item.checked = !item.checked
      }
    })
  }

  function editTask(ord, text) {
    tasksList.value.forEach((item) => {
      if (item.ord == ord) {
        item.text = text
      }
    })
  }

  function makeTaskImp(ord) {
    tasksList.value.forEach((item) => {
      if (item.ord == ord) {
        item.importance = !item.importance
      }
    })
  }

  return {
    tasksList,
    addTask,
    deleteTask,
    checkTask,
    editTask,
    makeTaskImp,
  }
})
