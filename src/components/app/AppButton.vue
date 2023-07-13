<script setup>
const emit = defineEmits(['click'])

defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button :class="{ active: isActive }" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  @apply px-4 py-2 
  bg-btn-bg  
  rounded-xl
  transition-all ease-in-out duration-300 delay-75;
}
button:hover {
  @apply bg-btn-bgActive;
}
.active {
  @apply bg-btn-bgActive;
}
</style>
