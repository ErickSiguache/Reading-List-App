import BookList from '@/database/books.json'
import type { Book } from '@/types/Book'
import { getItems, setItem } from '@/utils/localStorageFunctions'

const LOCAL_STORAGE_VARIABLE = 'books.storage'

export function getBooks(): Book[] {
  return BookList.library.map((bookList) => bookList.book)
}

export function getTotalPages(): number {
  const listNumberPages = getBooks().map((book) => book.pages)
  return listNumberPages.sort((valOne, valTwo) => valOne - valTwo).reverse()[0]
}

export function getBooksStorage(): string[] | [] {
  const books = getItems(LOCAL_STORAGE_VARIABLE)
  return books ? books : []
}

export function saveBooksStorage(books: string[]): void {
  setItem(LOCAL_STORAGE_VARIABLE, JSON.stringify(books))
}
