<script setup lang="ts">
import LabelStructure from '@/layouts/LabelStructure.vue'
import GeneralButton from './GeneralButton.vue'
import GeneralInput from './GeneralInput.vue'
import GeneralSelect from './GeneralSelect.vue'

import { useBook } from '@/composables/useBooks'
import InputRangeGeneral from './InputRangeGeneral.vue'
import FilterButtonCard from './FilterButtonCard.vue'

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
    <h2>Filter by:</h2>
    <LabelStructure titleLabel="Search by name">
      <GeneralInput
        typeBtn="search"
        placeText="Juego de Tronos, Harry Potter..."
        nameBtn="search-input"
        v-model="titleToSearch"
      />
    </LabelStructure>
    <LabelStructure titleLabel="Search by genre">
      <GeneralSelect :values="genres" v-model="genre" />
    </LabelStructure>
    <LabelStructure titleLabel="Search by Pages">
      <InputRangeGeneral
        :initialValue="0"
        :totalPages="totalPages"
        :stepValue="10"
        v-model="pageToSearch"
      />
      <FilterButtonCard
        :pagesToChange="pageToSearch"
        :longPages="totalPages"
        @max="maxPages"
        @min="minPages"
      />
    </LabelStructure>
    <article class="reset-container">
      <GeneralButton @click="resetAllSearchResults"> Reset All </GeneralButton>
    </article>
  </section>
</template>

<style scoped>
section {
  text-align: start;
  margin: 1rem;
  min-width: 250px;
  max-height: 378px;
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--primary-color-transparent);
  box-shadow: 1px var(--primary-color);
}

h2 {
  font-size: 1rem;
  padding-bottom: 0.7rem;
}

.reset-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
}
</style>
