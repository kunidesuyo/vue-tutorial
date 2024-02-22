<script setup lang="ts">
import {ref, computed} from "vue";

const msg = ref("hello world");
const isTextColorRed = ref(true);
const isBgColorBlue = ref(false);
const styles = ref({
  textColorRed: false,
  bgColorBlue: true
});
const computedStyles = computed(
  (): {textColorRed: boolean; bgColorBlue: boolean;} => {
    const randText = Math.round(Math.random());
    let textColorFlg = true;
    if(randText == 0) {
      textColorFlg = false;
    }
    const randBg = Math.round(Math.random());
    let bgColorFlg = true;
    if(randBg == 0) {
      bgColorFlg = false;
    }

    return {
      textColorRed: textColorFlg,
      bgColorBlue: bgColorFlg
    };
  }
);

</script>

<template>
  <p v-bind:class="{textColorRed: true, bgColorBlue: true}">
    {{ msg }}
  </p>
  <p v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
    {{ msg }}
  </p>
  <p v-bind:class="{textColorPink: true}">
    {{ msg }}
  </p>
  <p v-bind:class="{'text-color-pink': true}">
    {{ msg }}
  </p>
  <p class="textSize24" v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">
    {{ msg }}
  </p>
  <p class="textSize24" v-bind:class="styles">
    {{ msg }}
  </p>
  <p v-bind:class="computedStyles">
    {{ msg }}
  </p>
</template>

<style>
.textColorRed {
  color: red;
}
.text-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.textSize24 {
  font-size: 24px;
}

</style>