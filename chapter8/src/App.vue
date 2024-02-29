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

<!-- <script setup lang="ts">
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
</style> -->

<!-- 8-9 -->

<script setup lang="ts">
import {ref} from "vue";
import OneInfo from "./components/OneInfo.vue";

const weatherListInit = new Map<number, Weather>();
weatherListInit.set(1, {id: 1, title: "今日の天気", content: "今日は一日中、晴れでしょう。"});
weatherListInit.set(2, {id: 2, title: "明日の天気", content: "明日は一日中、雨でしょう。"});
weatherListInit.set(3, {id: 3, title: "明後日の天気", content: "明後日は一日中、雪でしょう。"});
const WeatherList = ref(weatherListInit);

interface Weather {
  id: number;
  title: string;
  content: string;
}
</script>

<template>
  <h1>Props基礎</h1>
  <section>
    <h2>ループでコンポーネントを生成</h2>
    <OneInfo
      v-for="[id, weather] in WeatherList"
      v-bind:key="id"
      v-bind:title="weather.title"
      v-bind:content="weather.content"/>
  </section>
</template>