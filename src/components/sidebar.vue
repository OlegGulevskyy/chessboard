<script setup lang="ts">
const { history } = defineProps<{
  history: { order: number; notation: string }[];
}>();
</script>

<template>
  <section>
    <div class="selection">
      <h1>Selection history</h1>
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
  width: 35%;
  display: flex;
}

@media (max-width: 768px) {
  section {
    width: 100%;
    align-items: flex-start;
  }
}

h1 {
  font-size: 1.5rem;
  color: white;
  letter-spacing: 1.5px;
}

.selection {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #333;
}
</style>
