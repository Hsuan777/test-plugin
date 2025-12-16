<script setup lang="ts">
// import BaseInput from './components/BaseInput.vue';
import BaseForm from './components/BaseForm.vue';
import BaseButton from './components/BaseButton.vue';
</script>

<template>
  <BaseButton>Click Me</BaseButton>
  <!-- <BaseInput type="text" value="Sample Text" /> -->
  <BaseForm>
    <BaseInput type="password" />
  </BaseForm>
</template>