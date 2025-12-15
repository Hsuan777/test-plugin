<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  type?: 'primary' | 'secondary'
  click?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  click: () => {
    /* default no-op */
  }
})

const buttonClass = computed(() => ({
  'btn': true,
  'primary': props.type === 'primary',
  'secondary': props.type === 'secondary'
}))
</script>

<template>
  <button class="base-button" :class="buttonClass" @click="props.click">
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