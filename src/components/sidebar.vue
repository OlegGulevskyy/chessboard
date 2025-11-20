<script setup lang="ts">
const { history, reset } = defineProps<{
  history: { order: number; notation: string }[];
  reset: () => void;
}>();
</script>

<template>
  <section>
    <div class="selection">
      <h1>Selections history</h1>
      <div>
        <button class="reset" @click="reset">Reset</button>
      </div>
      <div class="history">
        <div v-for="item in history" :key="item.order + item.notation">
          {{ item.order }}. {{ item.notation }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 100%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
}

.reset {
  background-color: #739552;
  color: #ebecd0;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

@media (max-width: 768px) {
  section {
    width: 100%;
    flex: 1;
    min-height: 0;
    min-width: unset;
    max-width: unset;
    align-items: flex-start;
    overflow: hidden;
  }
}

h1 {
  font-size: 1.5rem;
  color: white;
  letter-spacing: 1.5px;
  padding: 18px;
}

.selection {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #333;
  overflow-y: auto;
  padding: 24px;
}

@media (max-width: 768px) {
  .selection {
    padding: 16px;
    gap: 12px;
    height: 100%;
  }

  h1 {
    padding: 0px;
    font-size: 1.2rem;
  }
}

.history {
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
