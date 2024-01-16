<template>
  <button>
    <slot />
  </button>
</template>
<style>
button {
  padding: 0.4rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: var(--text-button);
  background-color: var(--border-containers);
}

button:hover {
  background-color: var(--hover-button);
}

button:active {
  background-color: var(--primary-color);
}

button:disabled {
  background-color: var(--prymary-color-disabled);
}
</style>
