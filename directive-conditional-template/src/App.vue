<script setup lang="ts">
import {computed} from "vue";

const randomNumber = computed(
  (): number => {
    return Math.round(Math.random() * 100);
  }
);
</script>

<template>
  <p>
    点数は{{ randomNumber }}点で
    <template v-if="randomNumber >= 80">
      優です。
      <span style="color: red;">素晴らしい！</span>
    </template>
  </p>
</template>