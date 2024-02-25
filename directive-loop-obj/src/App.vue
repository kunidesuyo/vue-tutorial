<script setup lang="ts">
import {ref} from "vue";
const whiteLadyInit: {
  id: number;
  name: string;
  price: number;
  recipe: string;
} = {
  id: 2345,
  name: "white lady",
  price: 1200,
  recipe: "jin 30ml + cowantoro 15ml + lemon juice 15ml"
};
const whiteLady = ref(whiteLadyInit);
</script>

<template>
  <dl>
    <template
      v-for="(value, key) in whiteLady"
      v-bind:key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </dl>
</template>