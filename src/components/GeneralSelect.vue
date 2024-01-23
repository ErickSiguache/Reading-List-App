<script setup lang="ts">
const InternalValue = defineModel<string>()
defineProps<{
  values: string[]
}>()
</script>
<template>
  <select v-model="InternalValue">
    <option value="" :selected="InternalValue !== ''">Select All</option>
    <option v-for="value in values" :key="value" :value="value">{{ value }}</option>
  </select>
</template>

<style scoped>
select {
  width: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  border: none;
  padding: 5px;
  border-radius: 5px;
  outline: var(--primary-color);
}

select option:hover {
  color: red;
}
</style>
