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

<!-- 6-11
<template>
  <ul>
    <li
      v-for="r in 5"
      v-bind:key="r">
      {{ r }} enn {{ 2*r*3.14 }}
    </li>
  </ul>
</template> -->

<!-- 6-12 -->
<!-- <script setup lang="ts">
import {ref, computed} from "vue";

const cocktailDataListInit: Cocktail[] = [
  {id: 2345, name: "whitelady", price: 1200},
  {id: 4412, name: "bluehawaii", price: 1500},
  {id: 6792, name: "newyork", price: 1100},
  {id: 8429, name: "matyni", price: 1500}
];

const cocktailDataList = ref(cocktailDataListInit);
const cocktail1500 = computed(
  (): Cocktail[] => {
    const newList = cocktailDataList.value.filter(
      (cocktailItem: Cocktail): boolean => {
        return cocktailItem.price === 1500;
      }
    );
    return newList;
  }
)

interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <section>
    all cocktail
    <ul>
      <li
        v-for="cocktail in cocktailDataList"
        v-bind:key="cocktail.id">
        {{ cocktail.id }} {{ cocktail.name }} {{ cocktail.price }}
      </li>
    </ul>
  </section>
  <section>
    1500 cocktail
    <ul>
      <li
        v-for="cocktailItem in cocktail1500"
        v-bind:key="'cocktail1500' + cocktailItem.id">
        name: {{ cocktailItem.name }} price: {{ cocktailItem.price }}
      </li>
    </ul>
  </section>
</template> -->

<!-- 6-13 -->
<script setup lang="ts">
import {ref} from "vue";

const cocktailListInit: string[] = ["whitelady", "bluehawaii", "newyork"];
const cocktailList = ref(cocktailListInit);
const changeCocktailList = (): void => {
  cocktailList.value = ["bararaika", "XYZ", "manhattann"];
};
const addCocktailList = (): void => {
  cocktailList.value.push("bluemoon");;
};
const deleteFromCocktailList = (): void => {
  cocktailList.value.pop();
};
</script>

<template>
  <ul>
    <li
      v-for="(cocktailName, index) in cocktailList"
      v-bind:key="cocktailName">
      {{ cocktailName }} (index: {{ index }})
    </li>
  </ul>
  <p>
    CocktailList
    <button v-on:click="changeCocktailList">change</button>
  </p>
  <p>
    CocktailList tail bluemoon
    <button v-on:click="addCocktailList">add</button>
  </p>
  <p>
    CocktailList from tail
    <button v-on:click="deleteFromCocktailList">delete</button>
  </p>
</template>