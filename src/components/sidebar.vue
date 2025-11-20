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
      <div class="history">
        <button :disabled="history.length === 0" class="reset" @click="reset">
          Reset
        </button>
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
  margin-bottom: 24px;
}

.reset:disabled {
  opacity: 0.7;
  cursor: default;
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
  font-size: 1.2rem;
  color: hsla(0, 0%, 100%, 0.85);
  letter-spacing: 1.1px;
  padding: 18px;
  background-color: #21201d;
}

.selection {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #262522;
  overflow-y: auto;
}

.history {
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
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

  .history {
    padding: 0;
  }
}
</style>
