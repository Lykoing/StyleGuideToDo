import { computed, provide, watch } from 'vue'
import { useTasksStore } from '../stores/tasks.store'
import { useSortTask } from './useSortTask'
import { useFilterTask } from './useFilterTask'
import { usePagingTask } from './usePagingTask'

/**
 * Подготовка данных с пагинацией, фильтрацией и сортировками
 */
export function usePrepTasks() {
  const tasksStore = useTasksStore()
  const sorting = useSortTask()
  const filtering = useFilterTask()
  const paging = usePagingTask()

  const itemsFiltered = computed(() => {
    let data = tasksStore.tasksList
    sorting.sortByDate(data)
    sorting.sortByOrd(data)
    data = filtering.filterByImportance(data)
    data = filtering.filterBySearch(data)
    return data
  })

  const itemsOnPage = computed(() => {
    let data = itemsFiltered.value
    data = paging.getElementsOnPage(data)
    paging.setLastPageNum(tasksStore)
    return data
  })

  watch([filtering.isFilteredByImportance, filtering.isFilteredBySearch], () =>
    paging.setCurrenPageNum(0)
  )
  watch(paging.checkExtraPage, (isExtraExist) => {
    if (isExtraExist)
      if (paging.currentPageNum.value > 0)
        paging.setCurrenPageNum(paging.currentPageNum.value - 1)
  })

  provide('tasksSetSearchField', filtering.setSearchFiled)
  provide('tasksList', itemsOnPage)
  provide('tasksNextPage', paging.nextPage)
  provide('tasksPrevPage', paging.prevPage)
  provide('tasksToLastPage', paging.toLastPage)
  provide('tasksToFirstPage', paging.toFirstPage)
  provide('tasksLastPage', paging.lastPageNum)
  provide(
    'tasksCurrentPage',
    computed(() => paging.currentPageNum)
  )
  provide('tasksToggleSortingByOrd', sorting.toggleSortingByOrd)
  provide('tasksToggleSortingByDate', sorting.toggleSortingByDate)
  provide('tasksIssortedByOrd', sorting.isSortedByOrd)
  provide('tasksIssortedByDate', sorting.isSortedByDate)
  provide(
    'tasksToggleFilteringByImportance',
    filtering.toggleFilteringByImportance
  )
  provide('tasksIsFilteredByImportance', filtering.isFilteredByImportance)
  return {}
}
