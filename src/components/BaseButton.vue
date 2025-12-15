<script setup lang="ts">

defineProps({
  type: {
    type: String,
    default: 'primary', // 預設按鈕類型
  },
})

const emit = defineEmits(['click'])

function onClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <button class="base-button" :class="type" @click="onClick">
    <slot />
  </button>
</template>


<style scoped>
.base-button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.base-button.primary {
  background-color: #42b883;
  color: white;
}

.base-button.secondary {
  background-color: #646cff;
  color: white;
}
</style>