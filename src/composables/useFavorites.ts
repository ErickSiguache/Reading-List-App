import { useFavoritesStore } from '@/stores/useFavoritesStore'
import { useBooksStore } from '@/stores/useBooksStore'

import { storeToRefs } from 'pinia'

import { computed, type ComputedRef } from 'vue'
import type { Book } from '@/types/Book'

export function useFavorite() {
  const useFavorites = useFavoritesStore()
  const useBooks = useBooksStore()

  const { books } = storeToRefs(useBooks)
  const { booksStorage } = storeToRefs(useFavorites)
  const { removeFavorite } = useFavorites

  const getFavoriteBooks: ComputedRef<Book[]> = computed(() => {
    return books.value.filter((book) => booksStorage.value.includes(book.ISBN))
  })

  return {
    getFavoriteBooks,
    removeFavorite
  }
}
