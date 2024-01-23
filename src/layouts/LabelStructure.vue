<script setup lang="ts">
defineProps<{
  titleLabel: string
}>()
</script>
<template>
  <article>
    <label>
      {{ titleLabel }}
      <slot />
    </label>
  </article>
</template>
<style scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid var(--text-color);
}

article label {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 13px;
  gap: 10px;
  width: 100%;
}
</style>
