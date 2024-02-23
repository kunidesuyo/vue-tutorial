<script setup lang="ts">
import {ref} from "vue";

const pBgColor = ref("white");
const onPClick = (bgColor: string): void => {
  pBgColor.value = bgColor;
};
</script>

<template>
  <p v-on:click="onPClick('red')" v-bind:style="{backgroundColor: pBgColor}">
    aaaa
  </p>
</template>