<script setup lang="ts">
import NoDataComponentVue from '@/components/NoDataComponent.vue'
import BookCard from '@/components/BookCard.vue'

import { useFavorite } from '@/composables/useFavorites'

const { getFavoriteBooks, removeFavorite } = useFavorite()
</script>
<template>
  <template v-if="getFavoriteBooks.length > 0">
    <BookCard :listBooks="getFavoriteBooks" titleButton="Remove" @action="removeFavorite" />
  </template>
  <NoDataComponentVue v-else titleNotData="No se han encontrado libro en la lista de favoritos" />
</template>
