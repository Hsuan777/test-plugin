<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset';
}>();
</script>

<template>
  <button :type="type || 'button'">
    <slot />
  </button>
</template>
<style scoped>
button {
  padding: 8px 16px;
  background-color: #42b983;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #369870;
}
</style>