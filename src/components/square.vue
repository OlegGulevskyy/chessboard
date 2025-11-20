<script setup lang="ts">
import { isSquareDark } from "@/utilities/board";

const { square, isSelected } = defineProps<{
  square: {
    file: number;
    rank: number;
    notation: string;
  };
  isSelected: boolean;
}>();

const emit = defineEmits<{
  (
    e: "square-click",
    square: { file: number; rank: number; notation: string }
  ): void;
}>();

const handleClick = () => {
  emit("square-click", square);
};
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
    {{ square.notation }}
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
}

.square__dark {
  background-color: #739552;
}
.square__light {
  background-color: #ebecd0;
}
.square__selected {
  box-shadow:
    inset 0 0 0 3px rgba(255, 48, 92, 1),
    inset 0 0 10px rgba(255, 48, 92, 1);
}
</style>
