import { type Ref, ref, computed, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'

import type { Book } from '@/types/Book'
import { getBooks, getTotalPages } from '@/services/booksService'

export const useBooksStore = defineStore('Books', () => {
  const books: Ref<Book[]> = ref(getBooks())
  const totalPages: number = getTotalPages()

  const genre: Ref<string> = ref('')
  const titleToSearch: Ref<string> = ref('')
  const pageToSearch: Ref<number> = ref(totalPages)

  const genres: ComputedRef<string[]> = computed(() => {
    const uniqueGenres = new Set(books.value.map((book) => book.genre))
    return Array.from(uniqueGenres)
  })

  const filtersBooks: ComputedRef<Book[]> = computed((): Book[] => {
    return books.value.filter((book) => {
      if (book.pages <= pageToSearch.value) {
        const titleParce = titleToSearch.value.toLowerCase()
        if (book.genre.includes(genre.value) && book.title.toLowerCase().includes(titleParce)) {
          return true
        }
      }
      return false
    })
  })

  return {
    books,
    totalPages,
    titleToSearch,
    genre,
    genres,
    filtersBooks,
    pageToSearch
  }
})
