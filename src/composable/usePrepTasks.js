import { computed, provide, ref } from 'vue'
import { useTasksStore } from '../stores/tasks.store'
import { useSearchTask } from './useSearchTask'

/**
 * Подготовка данных с пагинацией и фильтрами
 */
export function usePrepTasks() {
  const tasksStore = useTasksStore()
  const search = useSearchTask()
  const currentPageNum = ref(0)
  const amountOfElementsOnPage = ref(5)

  function compareByOrdFn(task1, task2) {
    return task1.ord - task2.ord
  }

  function compareByDateFn(task1, task2) {
    return task1.dateCreate - task2.dateCreate
  }

  // Получаем все данные
  const itemsAllList = computed(() => {
    let data = tasksStore.tasksList
    if (tasksStore.isSortedByDate) data = data.sort(compareByDateFn)
    if (tasksStore.isSortedByOrd) data = data.sort(compareByOrdFn)
    if (search.isActive.value) {
      currentPageNum.value = 0
      data = data.filter((e) => search.check(e.text))
    }
    if (tasksStore.isFilteredByImp) {
      currentPageNum.value = 0
      data = data.filter((e) => e.isImportant)
    }
    data = data.slice(
      currentPageNum.value * amountOfElementsOnPage.value,
      currentPageNum.value * amountOfElementsOnPage.value +
        amountOfElementsOnPage.value
    )
    return data
  })

  // Считаем колличество всех вдимых записей
  const itemsAllCount = computed(() => itemsAllList.value?.length)
  const lastPageNum = computed(() => {
    if (tasksStore.tasksList.length % amountOfElementsOnPage.value != 0)
      return Math.trunc(
        tasksStore.tasksList.length / amountOfElementsOnPage.value
      )
    return (
      Math.trunc(tasksStore.tasksList.length / amountOfElementsOnPage.value) - 1
    )
  })

  function nextPage() {
    if (currentPageNum.value < lastPageNum.value) currentPageNum.value += 1
  }

  function prevPage() {
    if (currentPageNum.value > 0) currentPageNum.value -= 1
  }

  function toLastPage() {
    console.log('Зашёл на ласт')
    currentPageNum.value = lastPageNum.value
  }

  function toFirstPage() {
    console.log('Зашёл на фёрст')
    currentPageNum.value = 0
  }

  provide('tasksSetSearchField', search.setSearchFiled)
  provide('tasksList', itemsAllList)
  provide('tasksAllCount', itemsAllCount)
  provide('tasksNextPage', nextPage)
  provide('tasksPrevPage', prevPage)
  provide('tasksToLastPage', toLastPage)
  provide('tasksToFirstPage', toFirstPage)
  provide('tasksLastPage', lastPageNum)
  provide(
    'tasksCurrentPage',
    computed(() => currentPageNum)
  )

  return {}
}
