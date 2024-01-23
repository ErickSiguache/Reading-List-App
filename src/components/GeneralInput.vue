<script setup lang="ts">
const internalValue = defineModel<string>()
defineProps<{
  typeBtn: string
  placeText: string
  nameBtn: string
}>()
</script>

<template>
  <input v-model="internalValue" :type="typeBtn" :name="nameBtn" :placeholder="placeText" />
</template>

<style scoped>
input {
  width: 100%;
  border: none;
  padding: 8px 5px;
  border-radius: 5px;
  color: var(--text-color);
  background-color: var(--background-color);
}

input::placeholder {
  color: var(--text-color);
}

input:focus {
  outline: var(--primary-color) solid 1px;
}
</style>
