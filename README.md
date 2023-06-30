# STYLEGUIDE

## Общие правила

- Используйте форматирование кода Prettier.
- Следуйте правилам линтера ESlint.
- Используйте стиль именования CamelCase, например someVariable
- Называйте переменные и функции в соответствии с их предназначением
- Для переменных boolean префикс is, has
- Для переменных обозначающих количество префикс count
- Для массивов используйте название с list, например someList, а для одного элемента из такого списка - someItem
- Для функций префикс это действие, которое выполняет функция в виде глагола, например setItem, getItem, countItems
- При получении одного элемента из функции используйте в названии префикс get, при получении массива - gets, например getById, getsByParentId
- Документируйте функции и участки кода, логика которых неочевидна и/или требует пояснения

## JavaScript

- Не используйте var для объявления переменных, вместо этого использовать let или const.
- Выносите в папку utiles функции, которые могут использоваться в различных частях приложения, например работа с датой, преобразования значений...
- Можно использовать переменные с префиксом `_` в функциях для удобства, например: `(_val) => { val = _val}`

## VUE

- Используйте `<script setup>`.
- Используйте defineProps для явного задания пропсов, которые принимает компонент.
- Описывайте props подробно (type, required / default).
- Используйте defineEmits для явного задания событий, которые генерирует компонент.
- Используйте pinia, в стиле composition api.
- Избегайте прямого изменения props.
- Используйте краткую запись атрибутов, например: `<SomeComponent :value="name" @click="func()">`.
- По возможности ставьте import и инициализацию из него рядом, например:
  `import { useSome } from '../../useSome'` и `const some = useSome()` в соседних строчках, одним блоком

## HTML

- Используйте методологию БЭМ для названия классов, в стиле CamelCase, наример: `someBlock__someElement_someModificator`.
- Избегайте использования inline стилей, лучше использовать классы.

## CSS

- Используйте tailwind css.
- Используйте `<style scoped>` в компонентах.
- Описывайте стили в файлах компонентов.
- Общие классы описывайте в файле css/styles.css, начиная с `_`, например `h1 { @apply text-2xl; } _form { @apply sapce-y-2; }`.
- Цвета описывайте в файле tailwind.config.js.
- Порядок записи классов после @apply - отступы (p-2, m-2), тип отображения (flex gap-2, space-y-2), text, цвета, border, прочие классы, hover:, focus:

## ПРАВИЛА ИМЕНОВАНИЯ ФАЙЛОВ

- Называйте файлы vue минимум в два слова, напрмер SomePage.vue, SomeLayout.vue, SomeList.vue, SomeItem.vue.
- Компоненты в одной директории должны иметь общий префикс имени файла, например, в директории some - SomeItem.vue.
- Называйте компоненты с модальным окном с префикса Mod, например ModSomeItemEdit.vue.
- Компоненты, которые используются лишь раз дожны быть с префиксом The, например TheHeader.vue, TheFooter.vue, TheSomeNav.vue
- Базовые компоненты, которые часто используются, например реализация обычной кнопки, начинаются с App, например AppButton.vue, они инициализируются глобально
- файлы хранилища в виде some.store.js
- файлы в папке api в виде some.api.js
- файлы в папке utiles в виде some.utile.js
- файлы в папке composable в виде useSome.js