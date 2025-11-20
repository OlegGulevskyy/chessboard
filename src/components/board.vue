<script setup lang="ts">
import Square from "@/components/square.vue";
import type { SquareT } from "@/types";
import { buildSquares } from "@/utilities/board";

const emit = defineEmits<{
  (e: "square-click", square: SquareT): void;
}>();
const { selectedSquares } = defineProps<{
  selectedSquares: Set<string>;
}>();

const squares = buildSquares();

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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  section {
    flex: 0 0 auto;
    height: auto;
  }
}

.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  max-width: 100vh;
  max-height: 100vh;
}

@media (max-width: 768px) {
  .board {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: none;
  }
}
</style>
