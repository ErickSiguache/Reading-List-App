<script setup lang="ts">
defineProps<{
  creator: string
}>()
</script>
<template>
  <footer>
    <h3>Created with 💖 by {{ creator }}</h3>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 16vh;
  color: var(--text-color);
  background-color: var(--background-color);
  border-top: 0.1px solid var(--general-border);
}
</style>
