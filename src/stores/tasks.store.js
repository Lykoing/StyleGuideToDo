import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const ordNumber = ref(0)

  const isFilteredByImp = ref(false)
  const isSortedByOrd = ref(false)
  const isSortedByDate = ref(false)

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

  function toggleImpFiltering() {
    isFilteredByImp.value = !isFilteredByImp.value
  }

  function toggleSortingByOrd() {
    isSortedByOrd.value = !isSortedByOrd.value
    isSortedByDate.value = false
  }

  function toggleSortingByDate() {
    isSortedByDate.value = !isSortedByDate.value
    isSortedByOrd.value = false
  }

  return {
    tasksList,
    addTask,
    deleteTask,
    checkTask,
    editTask,
    toggleTaskImp,
    isFilteredByImp,
    isSortedByOrd,
    isSortedByDate,
    toggleImpFiltering,
    toggleSortingByOrd,
    toggleSortingByDate,
  }
})
