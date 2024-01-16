<template>
  <main>
    <slot name="main" />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding-top: 2rem;
  min-height: 70vh;
  max-width: 100%;
  box-sizing: border-box;
}

@media only screen and (max-width: 320px) {
  main {
    padding: 0;
    align-items: center;
  }
}
</style>
