import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const ordNumber = ref(0)
  const isfilteredByImp = ref(false)
  const pageNum = ref(0)
  const searchValue = ref('')

  function incPage() {
    pageNum.value += 1
  }
  function decPage() {
    pageNum.value -= 1
  }

  const tasksList = ref([
    {
      text: 'Здесь будут ваши задачи',
      dateCreate: new Date(),
      ord: 10,
      checked: false,
      isImportant: false,
      searchVisibility: true,
      TotalVisibility: true,
    },
  ])

  const visiblePage = computed(() =>
    tasksList.value.filter((item, i) => {
      if (i >= 5 * pageNum.value && i < 5 * pageNum.value + 5) {
        return item
      }
    })
  )

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
    setTotalVisibility()
  }

  function setTotalVisibility() {
    tasksList.value.forEach((item) => {
      if (isfilteredByImp.value) {
        item.TotalVisibility = item.searchVisibility && item.isImportant
      } else {
        item.TotalVisibility = item.searchVisibility
      }
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

  function searchFiltering() {
    tasksList.value.forEach((item) => {
      if (item.text.includes(searchValue.value)) {
        item.searchVisibility = true
      } else {
        item.searchVisibility = false
      }
    })
    setTotalVisibility()
  }

  function toggleImpFiltering() {
    isfilteredByImp.value = !isfilteredByImp.value
    setTotalVisibility()
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
    setTotalVisibility()
  }

  function updateSearchValue(newSearchValue) {
    searchValue.value = newSearchValue
    setTotalVisibility()
  }
  function sortByOrd() {
    tasksList.value.sort(conpareTasks)
  }

  function conpareTasks(a, b) {
    return a.ord - b.ord
  }

  return {
    tasksList,
    addTask,
    deleteTask,
    checkTask,
    editTask,
    toggleTaskImp,
    isfilteredByImp,
    toggleImpFiltering,
    searchValue,
    searchFiltering,
    updateSearchValue,
    sortByOrd,
    visiblePage,
    incPage,
    decPage,
    pageNum,
  }
})
