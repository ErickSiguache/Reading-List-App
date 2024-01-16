import { useBooksStore } from '@/stores/useBooksStore'
import { useFavoritesStore } from '@/stores/useFavoritesStore'

import { storeToRefs } from 'pinia'

export function useBook() {
  const useBooks = useBooksStore()
  const useFavorites = useFavoritesStore()

  const { saveFavorites, isFavorite } = useFavorites
  const { filtersBooks, genre, genres, pageToSearch, titleToSearch } = storeToRefs(useBooks)
  const { totalPages } = useBooks

  const minPages = (): void => {
    pageToSearch.value = pageToSearch.value - 10
  }
  const maxPages = (): void => {
    pageToSearch.value = pageToSearch.value + 10
  }

  const resetAllSearchResults = (): void => {
    genre.value = ''
    titleToSearch.value = ''
    pageToSearch.value = totalPages
  }

  return {
    filtersBooks,
    genres,
    genre,
    pageToSearch,
    titleToSearch,
    totalPages,
    saveFavorites,
    isFavorite,
    minPages,
    maxPages,
    resetAllSearchResults
  }
}
