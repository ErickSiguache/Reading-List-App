<script setup lang="ts">
import NoDataComponent from '@/components/NoDataComponent.vue'
import BookCard from '@/components/BookCard.vue'

import { useFavorite } from '@/composables/useFavorites'

const { getFavoriteBooks, removeFavorite, loading } = useFavorite()
</script>
<template>
  <NoDataComponent v-if="loading" titleNotData="Loading....." />
  <template v-if="getFavoriteBooks.length > 0">
    <BookCard :listBooks="getFavoriteBooks" titleButton="Remove" @action="removeFavorite" />
  </template>
  <NoDataComponent v-else titleNotData="No book found in favorites list" />
</template>
