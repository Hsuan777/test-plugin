<script setup lang="ts">
  import { ref, watch } from 'vue';
  interface Props {
    value?: string
    type?: 'text' | 'password'
  }
  const inputValue = ref('');
  const props = withDefaults(defineProps<Props>(), {
    value: '',
    type: 'text'
  })
  const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    inputValue.value = target.value;
  }
  watch(() => props.value, (newVal) => {
    console.log(newVal);
    
    inputValue.value = newVal || '';
  }, { immediate: true });
</script>

<template>
  <div>
    <input class="border" :value="inputValue" :type="props.type" @input="onChange" />
    <p>{{ inputValue }}</p>
  </div>
</template>