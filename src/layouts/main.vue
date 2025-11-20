<script setup lang="ts"></script>

<template>
  <div class="root">
    <slot />
  </div>
</template>

<style scoped>
* {
  font-family: "Tahoma", sans-serif;
  color: #eeeeee;
}

.root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222c3a;
  gap: 24px;
}

@media (max-width: 768px) {
  .root {
    flex-direction: column;
    padding: 0;
    gap: 0;
  }
}
</style>
