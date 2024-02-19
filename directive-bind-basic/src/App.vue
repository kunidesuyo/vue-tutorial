<script setup lang="ts">
import {ref} from "vue";
const url = ref("https://vuejs.org/");
</script>

<template>
  <p><a v-bind:href="url" target="_blank">Vue.jsのサイト</a> </p>
  <p
</template>