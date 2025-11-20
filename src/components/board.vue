<script setup lang="ts">
import Square from "@/components/square.vue";
import { buildSquares } from "@/utilities/board";
const emit = defineEmits<{
  (
    e: "square-click",
    square: { file: number; rank: number; notation: string }
  ): void;
}>();
const { selectedSquares } = defineProps<{
  selectedSquares: Set<string>;
}>();

const ranks = 8;
const files = 8;
const squares = buildSquares({ ranks, files });

const handleSquareClick = (square: {
  file: number;
  rank: number;
  notation: string;
}) => {
  emit("square-click", square);
};
</script>

<template>
  <section>
    <div class="board">
      <Square
        v-for="square in squares"
        :key="square.notation"
        :square="square"
        @square-click="handleSquareClick"
        :is-selected="selectedSquares.has(square.notation)"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  aspect-ratio: 1 / 1;
  width: min(90%, 90vh);
  max-height: 90vh;
}
</style>
