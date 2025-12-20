<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset';
}>();
</script>
<!-- 
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String as () => 'button' | 'submit' | 'reset',
      default: 'button',
    },
  },
});
</script> -->

<template>
  <button :type="type || 'button'">
    <slot />
  </button>
</template>
