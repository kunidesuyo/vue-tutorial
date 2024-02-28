<script setup lang="ts">
import {ref} from "vue";

const cocktailDataListInit: Cocktail[] = [
  {id: 2345, name: "white lady", price: 1200},
  {id: 4412, name: "blue hawaii", price: 1500},
  {id: 6792, name: "newyork", price: 1100},
  {id: 8429, name: "matini", price: 1500},
];
const cocktailDataList = ref(cocktailDataListInit);


</script>

<template>
  <ul>
    <li
      v-for="cocktailItem in cocktailDataList"
      v-bind:key="cocktailItem.id">
      {{ cocktailItem.name }}の値段は{{ cocktailItem.price }}円
    </li>
  </ul>
</template>