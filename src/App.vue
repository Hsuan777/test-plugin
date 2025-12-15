<script setup lang="ts">
import BaseButton from './components/BaseButton.vue';

const onClick = () => {
  alert('Button Clicked')
}
</script>

<template>
  <BaseButton type="primary" @click="onClick">
    Primary Button
  </BaseButton>
  <BaseButton type="secondary" @click="onClick">
    Secondary Button
  </BaseButton>
</template>