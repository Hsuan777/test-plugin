<script setup lang="ts">
import { BaseButton } from './components'
</script>

<template>
  <BaseButton type="secondary" @click="() => alert('Secondary Button Clicked')">
    Secondary Button
  </BaseButton>
</template>