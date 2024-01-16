<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import { useFavoritesStore } from '@/stores/useFavoritesStore'
import { ROUTES } from '@/utils/dictionaryRoutes'
import { storeToRefs } from 'pinia'

defineProps<{
  title: string
}>()

const route = useRoute()
const router = useRouter()
const useFavorites = useFavoritesStore()

const { totalFavorites } = storeToRefs(useFavorites)
const { getFavoriteBooks } = useFavorites

const redirectPath = (): void => {
  if (route.name == ROUTES.home) router.push('/favorites')
  if (route.name === ROUTES.favorites) router.push('/')
}

getFavoriteBooks()
</script>
<template>
  <header>
    <section>
      <font-awesome-icon class="icon" icon="fa-solid fa-book" />
      <h1>{{ title }}</h1>
    </section>
    <button @click="redirectPath">
      Favorites <span>{{ totalFavorites }}</span>
    </button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  padding-top: 2rem;
  column-gap: 5px;
  row-gap: 10px;
  height: 19.5vh;
  padding: 16px;
  background: var(--background-color);
  color: var(--text-color);
  border-bottom: 0.1px solid var(--general-border);
}
.icon {
  font-size: 2rem;
  color: var(--primary-color);
}

button {
  font-size: 14px;
  padding: 10px;
  border-radius: 10px;
  color: var(--text-button);
  background-color: var(--border-containers);
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: var(--hover-button);
}

button:active {
  background-color: var(--primary-color);
}

span {
  font-size: 1rem;
  color: var(--text-color);
  width: 27px;
  height: 27px;
  background-color: var(--text-color-minimum);
  border-radius: 50%;
  border: 1px solid var(--background-color);
  position: absolute;
  top: 65px;
}

@media only screen and (max-width: 517px) {
  header {
    flex-direction: column;
    height: auto;
  }

  span {
    top: 110px;
  }
}
</style>
