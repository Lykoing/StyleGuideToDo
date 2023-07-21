import { ref } from 'vue'
import { useSearchTask } from './useSearchTask'

export function useFilterTask() {
  const search = useSearchTask()
  const setSearchFiled = search.setSearchFiled
  const isFilteredByImportance = ref(false)
  const isFilteredBySearch = search.isActive

  function filterBySearch(taskList) {
    if (isFilteredBySearch.value)
      return taskList.filter((e) => search.check(e.text))
    return taskList
  }

  function filterByImportance(tasksList) {
    if (isFilteredByImportance.value)
      return tasksList.filter((e) => e.isImportant)
    return tasksList
  }

  function toggleFilteringByImportance() {
    isFilteredByImportance.value = !isFilteredByImportance.value
  }

  function toggleFilteringBySearch() {
    isFilteredBySearch.value = !isFilteredBySearch.value
  }

  return {
    filterByImportance,
    filterBySearch,
    isFilteredByImportance,
    isFilteredBySearch,
    toggleFilteringBySearch,
    toggleFilteringByImportance,
    setSearchFiled,
  }
}
