<script setup lang="ts">
import MainLayout from "@/layouts/main.vue";
import Sidebar from "@/components/sidebar.vue";
import Board from "@/components/board.vue";
import { computed, ref } from "vue";

// Ignore this...
import SuperSecret from "@/components/super-secret-file.vue";

const selectionHistory = ref<{ order: number; notation: string }[]>([]);

const selectedSquares = computed(() => {
  const selected = new Set<string>();
  selectionHistory.value.forEach((item) => selected.add(item.notation));
  return selected;
});

const onSquareClick = ({ notation }: { notation: string }) => {
  // Do not add duplicate selections
  if (selectedSquares.value.has(notation)) {
    return;
  }
  selectionHistory.value.push({
    order: selectionHistory.value.length + 1,
    notation,
  });
};

const resetHistory = () => {
  selectionHistory.value = [];
};
</script>

<template>
  <MainLayout>
    <Board @square-click="onSquareClick" :selectedSquares="selectedSquares" />
    <Sidebar :history="selectionHistory" :reset="resetHistory" />
  </MainLayout>

  <!-- No, seriously, ignore this... -->
  <SuperSecret :selectedSquares="selectedSquares" />
</template>
