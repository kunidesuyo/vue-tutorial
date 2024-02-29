<!-- 8-2 -->
<!-- <script setup lang="ts">
import OneSection from "./components/OneSection.vue";
</script>

<template>
  <h1>コンポーネント基礎</h1>
  <section>
    <h2>コンポーネント1個</h2>
    <OneSection />
  </section>
  <section>
    <h2>コンポーネントが複数</h2>
    <OneSection />
    <OneSection />
    <OneSection />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style> -->

<!-- 8-4 -->

<!-- <script setup lang="ts">
import WithModel from "./components/WithModel.vue";
</script>

<template>
  <h1>コンポーネントの独立性</h1>
  <section>
    <h2>v-modelを含むコンポーネント</h2>
    <WithModel />
    <WithModel />
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style> -->

<!-- 8-6 -->

<script setup lang="ts">
import {ref} from "vue";
import OneInfo from "./components/OneInfo.vue";

const propsTitle = ref("発生した乱数");
const rand = Math.round(Math.random() * 100);
const propsContent = ref(rand);
</script>

<template>
  <h1>Props 基礎</h1>
  <section>
    <h2>属性に直接記述</h2>
    <OneInfo v-bind:title="propsTitle" v-bind:content="propsContent"/>
  </section>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>