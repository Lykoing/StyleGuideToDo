<script setup>
import AppButton from './app/AppButton.vue'
import AppEditSVG from './app/AppEditSVG.vue'
import AppImpSVG from './app/AppImpSVG.vue'
import AppCheckSVG from './app/AppCheckSVG.vue'
import AppDeleteSVG from './app/AppDeleteSVG.vue'

const emit = defineEmits(['editTask', 'deleteTask', 'checkTask'])
const props = defineProps({
  task: {
    type: String,
    default: '',
  },
  ischecked: {
    type: Boolean,
    default: false,
  },
  ord: {
    type: Number,
    default: 0,
  },
  isimportant: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div :class="{ important: props.isimportant }" class="tasksItem">
    <div :class="{ checked: props.ischecked }" class="taskItem__text">
      {{ props.task }}
    </div>
    <div class="taskItem__actions">
      <div class="flex flex-col space-y-1">
        <AppButton
          class="taskItem__actions__imp"
          @click="emit('makeTaskImp', ord)"
          ><AppImpSVG
        /></AppButton>

        <AppButton
          class="taskItem__actions__check"
          @click="emit('checkTask', ord)"
        >
          <AppCheckSVG />
        </AppButton>
      </div>
      <div class="flex flex-col space-y-1">
        <AppButton
          class="taskItem__actions__edit"
          @click="emit('editTask', ord)"
        >
          <AppEditSVG />
        </AppButton>
        <AppButton
          class="taskItem__actions__delete"
          @click="emit('deleteTask', ord)"
        >
          <AppDeleteSVG />
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tasksItem {
  @apply p-2
    flex flex-row justify-between
    bg-tasks-item-bg
    border-2 border-tasks-item-brd rounded-xl
    transition-all ease-in-out duration-300 delay-75;
}

.taskItem__actions {
  @apply flex flex-row gap-1;
}

.taskItem__text {
  @apply w-1/2;
}

.checked {
  @apply line-through;
}

.taskItem__edit {
}

.taskItem__actions__check {
}

.inactive {
  @apply hidden;
}

.important {
  @apply bg-tasks-item-bg-imp;
}
</style>
