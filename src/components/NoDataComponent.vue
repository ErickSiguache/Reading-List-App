<script setup lang="ts">
defineProps<{
  titleNotData: string
}>()
</script>
<template>
  <section>{{ titleNotData }}</section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-right: 10px;
  margin-bottom: 2rem;
  align-items: center;
  width: 65%;
}

@media only screen and (max-width: 835px) {
  section {
    height: 25vh;
  }
}
</style>
