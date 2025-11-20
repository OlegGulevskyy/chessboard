<!-- Oh well, I wouldn't ignore something that says "Ignore it" in the code neither... -->
<script setup lang="ts">
import {
  caroKann,
  kid,
  openingMessages,
  viennaGame,
  type OpeningMessageT,
} from "@/utilities/invisible-file";
import { computed, ref, watch } from "vue";

const { selectedSquares } = defineProps<{
  selectedSquares: Set<string>;
}>();

const foundOpenings = ref<Set<string>>(new Set());
const showPopup = ref(false);
const currentOpening = ref<OpeningMessageT | null>(null);

const hasOpening = (selectedSquares: Set<string>, opening: string[]) => {
  return opening.every((square) => selectedSquares.has(square));
};

const discoveredOpening = computed(() => {
  if (
    hasOpening(selectedSquares, viennaGame) &&
    !foundOpenings.value.has("vienna")
  ) {
    return "vienna";
  }
  if (
    hasOpening(selectedSquares, caroKann) &&
    !foundOpenings.value.has("caro")
  ) {
    return "caro";
  }
  if (hasOpening(selectedSquares, kid) && !foundOpenings.value.has("kid")) {
    return "kid";
  }
  return null;
});

watch(discoveredOpening, (newOpening) => {
  if (newOpening) {
    foundOpenings.value.add(newOpening);
    currentOpening.value = newOpening;
    showPopup.value = true;
    setTimeout(() => {
      showPopup.value = false;
    }, 10_000);
  }
});
</script>

<template>
  <Transition name="fade">
    <div v-if="showPopup && currentOpening" class="popup">
      <div class="content">
        <h3>
          {{ openingMessages[currentOpening].title }}
        </h3>
        <p>
          {{ openingMessages[currentOpening].message }}
        </p>
        <div class="counter">{{ foundOpenings.size }}/3</div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  font-family: "Tahoma", sans-serif;
}

.content {
  background: #2a2a2a;
  border: 2px solid #4a4a4a;
  border-radius: 8px;
  padding: 20px;
  min-width: 280px;
  max-width: 320px;
}

h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #ffffff;
}

p {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #cccccc;
  line-height: 1.4;
}

.counter {
  font-size: 12px;
  color: #888888;
  text-align: right;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .popup {
    top: 10px;
    right: 10px;
    left: 10px;
  }

  .content {
    min-width: auto;
    max-width: none;
  }
}
</style>
