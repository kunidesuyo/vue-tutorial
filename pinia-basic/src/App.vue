<script setup lang="ts">
import {computed} from "vue";
import {useCounterStore} from "@/stores/counter";

const counterStore = useCounterStore();
const count = computed(
  (): number => {
    return counterStore.counter;
  }
);
const doubleCount = computed(
  (): number => {
    return counterStore.doubleCount;
  }
);
const onIncrementClick = () => {
  counterStore.incrementCount();
};
</script>

<template>
  <p>now point: {{ count }}</p>
  <p>now point double: {{ doubleCount }}</p>
  <button v-on:click="onIncrementClick">add</button>
</template>