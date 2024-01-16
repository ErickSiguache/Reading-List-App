<script setup lang="ts">
import GeneralButton from './GeneralButton.vue'

import { useBook } from '@/composables/useBooks'

const {
  genres,
  genre,
  pageToSearch,
  titleToSearch,
  totalPages,
  minPages,
  maxPages,
  resetAllSearchResults
} = useBook()
</script>
<template>
  <section>
    <article class="search-input-text">
      <label>
        Book
        <input
          type="search"
          name="search-input"
          v-model="titleToSearch"
          placeholder="The name of the book"
        />
      </label>
    </article>
    <article class="search-input-text">
      <label>
        Filters:
        <select v-model="genre">
          <option value="" :selected="genre !== ''">Select All</option>
          <option v-for="gen in genres" :key="gen" :value="gen">{{ gen }}</option>
        </select>
      </label>
    </article>
    <article>
      <label>
        Total Pages:
        <input
          type="range"
          min="0"
          :max="totalPages"
          step="10"
          v-model.number="pageToSearch"
          placeholder="Number to pages"
        />
      </label>
    </article>
    <article class="filter-pages">
      <button @click="minPages" :disabled="pageToSearch <= 0">-</button>
      <p>{{ pageToSearch }}</p>
      <button @click="maxPages" :disabled="pageToSearch >= totalPages">+</button>
    </article>
    <article>
      <GeneralButton @click="resetAllSearchResults"> Reset All </GeneralButton>
    </article>
  </section>
</template>

<style scoped>
section {
  margin: 1rem;
  min-width: 250px;
  max-height: 300px;
  border: 1px solid var(--background-color);
  border-radius: 5px;
  box-sizing: border-box;
  background-color: var(--primary-color-transparent);
  border: 1px solid var(--border-containers);
}
article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid white;
}

.search-input-text {
  width: 100%;
}

.search-input-text label {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%;
}

.search-input-text input[type='search'] {
  width: 100%;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: var(--text-color);
  background-color: var(--background-color);
}

.search-input-text input[type='search']::placeholder {
  color: var(--text-color);
}

.search-input-text input[type='search']:focus {
  outline: var(--primary-color) solid 1px;
}

.filter-pages {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 100%;
}

.filter-pages button {
  padding: 10px;
  color: var(--text-color);
  background-color: transparent;
  border: 1px solid var(--primary-color);
  cursor: pointer;
}

.filter-pages button:hover {
  border: 1px solid var(--hover-button);
}

.filter-pages button:disabled {
  border: 1px solid var(--prymary-color-disabled);
}
</style>
