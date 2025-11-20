<script setup lang="ts">
import { isSquareDark, isFirstFile, isFirstRank } from "@/utilities/board";
import type { SquareT } from "@/types";

const { square, isSelected } = defineProps<{
  square: SquareT;
  isSelected: boolean;
}>();
const emit = defineEmits<{
  (e: "square-click", square: SquareT): void;
}>();

const handleClick = () => {
  emit("square-click", square);
};

const fileLetter = (square: string) => square.split("")[0];
const rankNumber = (square: string) => square.split("")[1];
</script>

<template>
  <div
    @click="handleClick"
    :class="[
      'square',
      isSelected && 'square__selected',
      isSquareDark({
        file: square.file,
        rank: square.rank,
      })
        ? 'square__dark'
        : 'square__light',
    ]"
  >
    <div v-if="isFirstFile(square.file)" :class="['rank']">
      {{ rankNumber(square.notation) }}
    </div>
    <div v-if="isFirstRank(square.rank)" :class="['file']">
      {{ fileLetter(square.notation) }}
    </div>
  </div>
</template>

<style scoped>
.square {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
}

.square__dark {
  background-color: #739552;
  color: #ebecd0;
}
.square__light {
  background-color: #ebecd0;
  color: #739552;
}
.square__selected {
  box-shadow:
    inset 0 0 0 3px rgba(255, 48, 92, 1),
    inset 0 0 10px rgba(255, 48, 92, 1);
}

.file {
  position: absolute;
  bottom: 8px;
  right: 8px;
}

.rank {
  position: absolute;
  top: 8px;
  left: 8px;
}

@media (max-width: 768px) {
  .square {
    font-size: 1.2rem;
  }
}
</style>
