<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit: string[] = ["white lady", "blue hawaii", "newyork"];
const cocktailList = ref(cocktailListInit);
</script>

<template>
  <ul>
    <li
      v-for="cocktailName in cocktailList"
      v-bind:key="cocktailName">
      {{ cocktailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(cocktailName, index) in cocktailList"
      v-bind:key="cocktailName">
      {{ cocktailName }}(index {{ index }})
    </li>
  </ul>
</template>