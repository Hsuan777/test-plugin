<script setup lang="ts">
</script>

<template>
  <div>
    <form class="form"><slot /></form>
  </div>
</template>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin: 0 auto;
}
</style>