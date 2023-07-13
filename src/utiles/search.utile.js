/**
 * Поиск по тексту
 * @param {string} text
 * @param {string} search
 * @returns true - если есть вхождения, иначе false
 */
export function searchInText(text, search) {
  return text.toLowerCase().includes(search.toLowerCase())
}
