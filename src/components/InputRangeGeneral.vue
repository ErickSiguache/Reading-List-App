<script setup lang="ts">
const internalSearch = defineModel<number>()
defineProps<{
  initialValue: number
  totalPages: number
  stepValue: number
}>()
</script>
<template>
  <input
    type="range"
    :min="initialValue"
    :max="totalPages"
    :step="stepValue"
    v-model.number="internalSearch"
    placeholder="Number to pages"
  />
</template>
<style scoped>
input[type='range'] {
  width: 100%;
  color: var(--primary-color);
}
</style>
