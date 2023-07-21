import { ref } from 'vue'

export function useSortTask() {
  const isSortedByDate = ref(false)
  const isSortedByOrd = ref(false)
  /**
   * Функции сравнения для array.sort()
   * @param {object} task1 элемент taskStore
   * @param {object} task2 элемент taskStore
   */
  function compareByOrd(task1, task2) {
    return task1.ord - task2.ord
  }

  /**
   * Функции сравнения для array.sort()
   * @param {object} task1 элемент taskStore
   * @param {object} task2 элемент taskStore
   */
  function compareByDate(task1, task2) {
    return task1.dateCreate - task2.dateCreate
  }

  function sortByOrd(taskStore) {
    if (isSortedByOrd.value) return taskStore.sort(compareByOrd)
  }

  function sortByDate(taskStore) {
    if (isSortedByDate.value) taskStore.sort(compareByDate)
  }

  function toggleSortingByDate() {
    isSortedByDate.value = !isSortedByDate.value
  }

  function toggleSortingByOrd() {
    isSortedByOrd.value = !isSortedByOrd.value
  }
  return {
    toggleSortingByDate,
    toggleSortingByOrd,
    sortByDate,
    sortByOrd,
    isSortedByDate,
    isSortedByOrd,
  }
}
