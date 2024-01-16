import { useBooksStore } from '@/stores/useBooksStore'
import { useFavoritesStore } from '@/stores/useFavoritesStore'

import { storeToRefs } from 'pinia'

export function useBook() {
  const useBooks = useBooksStore()
  const useFavorites = useFavoritesStore()

  const { saveFavorites, isFavorite } = useFavorites
  const { filtersBooks } = storeToRefs(useBooks)

  return {
    filtersBooks,
    saveFavorites,
    isFavorite
  }
}
