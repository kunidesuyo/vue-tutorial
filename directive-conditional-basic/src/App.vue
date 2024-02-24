<script setup lang="ts">
import {computed, ref} from "vue";

const number = ref(80);
const showOrNot = computed(
  (): boolean => {
    let showOrNot = false;
    const rand = Math.round(Math.random() * 100);
    if(rand >= 50) {
      showOrNot = true;
    }
    return showOrNot;
  }
);
</script>

<template>
  <p v-if="number >= 50">
    条件に合致したので表示①
  </p>
  <p v-if="Math.round(Math.random() * 100) >= 50">
    条件に合致したので表示②
  </p>
  <p v-if="showOrNot">
    条件に合致したので表示③
  </p>
</template>