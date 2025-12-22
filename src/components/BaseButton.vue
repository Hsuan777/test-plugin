<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
}>();
</script>

<template>
  <button :type="type || 'button'" :class="`btn-${variant || 'primary'}`">
    <slot />
  </button>
</template>
<style lang="scss" scoped>
button {
  padding: 8px 16px;
  background-color: #42b983;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &.btn-primary {
    background-color: #42b983;
  }
  &.btn-primary:hover {
    background-color: #369870;
  }
  &.btn-secondary {
    background-color: #35495e;
  }
  &.btn-secondary:hover {
    background-color: #2c3e50;
  }
}
button:hover {
  background-color: #369870;
}
</style>