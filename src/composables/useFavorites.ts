import { useFavoritesStore } from '@/stores/useFavoritesStore'
import { useBooksStore } from '@/stores/useBooksStore'
import { type Ref, ref } from 'vue'

import { storeToRefs } from 'pinia'

import { computed, type ComputedRef } from 'vue'
import type { Book } from '@/types/Book'

export function useFavorite() {
  const useFavorites = useFavoritesStore()
  const useBooks = useBooksStore()
  const loading: Ref<boolean> = ref(true)

  const { books } = storeToRefs(useBooks)
  const { booksStorage } = storeToRefs(useFavorites)
  const { removeFavorite } = useFavorites

  const getFavoriteBooks: ComputedRef<Book[]> = computed(() => {
    const data = books.value.filter((book) => booksStorage.value.includes(book.ISBN))
    loading.value = false
    return data
  })

  return {
    loading,
    getFavoriteBooks,
    removeFavorite
  }
}
