<script setup lang="ts"></script>

<template>
  <div class="root">
    <slot />
  </div>
</template>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
