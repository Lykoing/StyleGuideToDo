import { ref, computed } from 'vue'

export function usePagingTask() {
  const currentPageNum = ref(0)
  const amountOfElementsOnPage = ref(5)
  const lastPageNum = ref(0)

  function setCurrenPageNum(value) {
    currentPageNum.value = value
  }
  function setLastPageNum(tasksList) {
    if (tasksList.length % amountOfElementsOnPage.value != 0)
      lastPageNum.value = Math.trunc(
        tasksList.length / amountOfElementsOnPage.value
      )
    else
      lastPageNum.value =
        Math.trunc(tasksList.length / amountOfElementsOnPage.value) - 1
  }

  function getElementsOnPage(taskList) {
    return taskList.slice(
      currentPageNum.value * amountOfElementsOnPage.value,
      currentPageNum.value * amountOfElementsOnPage.value +
        amountOfElementsOnPage.value
    )
  }

  function nextPage() {
    if (currentPageNum.value < lastPageNum.value) currentPageNum.value += 1
  }

  function prevPage() {
    if (currentPageNum.value > 0) currentPageNum.value -= 1
  }

  function toLastPage() {
    currentPageNum.value = lastPageNum.value
  }

  function toFirstPage() {
    currentPageNum.value = 0
  }

  const checkExtraPage = computed(
    () => currentPageNum.value > lastPageNum.value
  )
  return {
    currentPageNum,
    setCurrenPageNum,
    lastPageNum,
    setLastPageNum,
    getElementsOnPage,
    nextPage,
    prevPage,
    toLastPage,
    toFirstPage,
    checkExtraPage,
  }
}
