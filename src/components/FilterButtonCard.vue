<script setup lang="ts">
defineProps<{
  pagesToChange: number
  longPages: number
}>()

const emits = defineEmits<{
  (e: 'min'): void
  (e: 'max'): void
}>()
</script>
<template>
  <article>
    <button @click="emits('min')" :disabled="pagesToChange <= 0">-</button>
    <p>{{ pagesToChange }}</p>
    <button @click="emits('max')" :disabled="pagesToChange >= longPages">+</button>
  </article>
</template>
<style scoped>
article {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
}

article button {
  padding: 10px;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--primary-color);
  cursor: pointer;
}

article button:hover {
  border: 1px solid var(--hover-button);
}

article button:disabled {
  border: 1px solid var(--prymary-color-disabled);
}
</style>
