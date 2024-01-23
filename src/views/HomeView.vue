<script setup lang="ts">
import NoDataComponent from '@/components/NoDataComponent.vue'
import BookCard from '@/components/BookCard.vue'

import { useBook } from '@/composables/useBooks'

const { filtersBooks, isFavorite, saveFavorites } = useBook()
</script>

<template>
  <template v-if="filtersBooks.length > 0">
    <BookCard
      :listBooks="filtersBooks"
      titleButton="Add"
      optionalTitle="Added"
      :isFavorited="isFavorite"
      @action="saveFavorites"
    />
  </template>
  <NoDataComponent v-else titleNotData="No books found in the list" />
</template>
