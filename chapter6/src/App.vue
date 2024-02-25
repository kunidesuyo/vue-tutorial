<!-- 6-10 -->
<!-- <script setup lang="ts">
import {ref} from "vue";

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, {id: 2345, name: "white lady", price: 1200});
cocktailDataListInit.set(4412, {id: 4412, name: "blue hawaii", price: 1500});
cocktailDataListInit.set(6792, {id: 6792, name: "newyork", price: 1100});
cocktailDataListInit.set(8429, {id: 8429, name: "matyni", price: 1500});
const cocktailDataList = ref(cocktailDataListInit);

interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <ul>
    <li
      v-for="[id, cocktailItem] in cocktailDataList"
      v-bind:key="id">
      {{ cocktailItem.name }} price {{ cocktailItem.price }}
    </li>
  </ul>
</template> -->

<template>
  <ul>
    <li
      v-for="r in 5"
      v-bind:key="r">
      {{ r }} enn {{ 2*r*3.14 }}
    </li>
  </ul>
</template>