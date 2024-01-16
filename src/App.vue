<script setup lang="ts">
import { RouterView } from 'vue-router'

import MainStructure from './layouts/MainStructure.vue'

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import FilterCard from '@/components/FilterCard.vue'
</script>

<template>
  <TheHeader title="Reading List App" />
  <MainStructure>
    <template #main>
      <FilterCard />
      <RouterView />
    </template>
  </MainStructure>
  <TheFooter creator="Erick A. Siguache" />
</template>
