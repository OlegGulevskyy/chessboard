<script setup lang="ts">
import MainLayout from "@/layouts/main.vue";
import Sidebar from "@/components/sidebar.vue";
import Board from "@/components/board.vue";
</script>

<template>
  <MainLayout>
    <Board />
    <Sidebar />
  </MainLayout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
