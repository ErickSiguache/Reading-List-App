<script setup lang="ts">
import type { Book } from '@/types/Book'
import GeneralButton from './GeneralButton.vue'

const props = defineProps<{
  listBooks: Book[]
  titleButton: string
  isFavorited?: Function
  optionalTitle?: string
}>()

const emits = defineEmits<{
  (e: 'action', id: string): void
  (e: 'isFavorited', id: string): boolean
}>()

const isFavoritedBook = (value: string): boolean => {
  return props.isFavorited ? props.isFavorited(value) : false
}

const isFavoritedTitle = (value: string): string | undefined => {
  return isFavoritedBook(value) ? props.optionalTitle : props.titleButton
}
</script>
<template>
  <ul>
    <li v-for="book in listBooks" :key="book.ISBN">
      <img :src="book.cover" :alt="`Logo of the book: ${book.title}`" />
      <section>
        <article class="container-text">
          <h2>{{ book.title }}</h2>
          <p>{{ book.author.name }}</p>
        </article>
        <article class="container-button">
          <GeneralButton @click="emits('action', book.ISBN)" :disabled="isFavoritedBook(book.ISBN)">
            {{ isFavorited ? isFavoritedTitle(book.ISBN) : titleButton }}
          </GeneralButton>
        </article>
      </section>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 65%;
  margin-top: 1rem;
  margin-right: 10px;
  margin-bottom: 2rem;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 1rem;
  border: 1px solid var(--primary-color-transparent);
  transition: all 100ms ease-in-out;
  transition-duration: 0.2s;
  transition-property: box-shadow;
}

li:hover {
  box-shadow: 0 0 10px var(--primary-color);
}

li img {
  width: 220px;
  height: 300px;
  border-radius: 3px;
}

section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 7px;
  width: 100%;
}

.container-text {
  display: flex;
  text-align: start;
  flex-direction: column;
  width: 80%;
  font-size: 1rem;
  overflow: hidden;
}

.container-text h2 {
  width: 90%;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.container-text p {
  font-size: 14px;
}

.container-button {
  display: flex;
  justify-content: flex-end;
  width: 25%;
}

@media only screen and (max-width: 891px) {
  ul {
    width: 100%;
    margin: 1rem;
    padding: 10px;
  }
}
</style>
