import { getBooksStorage, saveBooksStorage } from '@/services/booksService'

import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useFavoritesStore = defineStore('Favorites', () => {
  const booksStorage: Ref<string[]> = ref([])

  const totalFavorites = computed(() => booksStorage.value.length)

  const getFavoriteBooks = (): void => {
    booksStorage.value = getBooksStorage()
  }

  const saveFavorites = (id: string) => {
    if (!booksStorage.value) saveBooksStorage([id])
    if (booksStorage.value.includes(id)) return

    booksStorage.value.push(id)
    saveBooksStorage(booksStorage.value)
  }

  const removeFavorite = (id: string) => {
    if (!booksStorage.value.includes(id)) return
    booksStorage.value = booksStorage.value.filter((book) => book !== id)
    saveBooksStorage(booksStorage.value)
  }

  const isFavorite = (id: string): boolean => {
    return booksStorage.value.includes(id)
  }

  return {
    booksStorage,
    totalFavorites,
    getFavoriteBooks,
    saveFavorites,
    removeFavorite,
    isFavorite
  }
})
