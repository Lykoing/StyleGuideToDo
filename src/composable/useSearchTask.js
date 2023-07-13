import { computed, ref } from 'vue'
import { searchInText } from '../utiles/search.utile'
/**
 * Поиск по записям
 */
export function useSearchTask() {
  const searchField = ref('')

  /**
   * Активен ли поиск?
   */
  const isActive = computed(() => !!searchField.value)

  /**
   * Производим поиск по полям элемента
   * @param {object} item запись
   * @returns true/false
   */
  function check(item) {
    return searchInText(item, searchField.value)
  }

  function setSearchFiled(text) {
    searchField.value = text
  }

  return {
    check,
    isActive,
    setSearchFiled,
  }
}
