<!-- 7-1
<script setup lang="ts">
import {ref, computed} from "vue";

//カクテルリストデータを用意。
const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200});
cocktailDataListInit.set(2, {id: 2, name: "ブルーハワイ", price: 1500});
cocktailDataListInit.set(3, {id: 3, name: "ニューヨーク", price: 1100});
cocktailDataListInit.set(4, {id: 4, name: "マティーニ", price: 1500});

//カクテル番号のテンプレート変数を用意。
const cocktailNo = ref(1);
//カクテル番号に対応するカクテル情報の算出プロパティを用意。
const priceMsg = computed(
	(): string => {
		//カクテル番号に該当するカクテルデータを取得。
		const cocktail = cocktailDataListInit.get(cocktailNo.value);
		//カクテル番号に該当する情報がない場合のメッセージを用意。
		let msg = "該当カクテルはありません。";
		//カクテル番号に該当する情報があるなら…
		if(cocktail != undefined) {
			//カクテル番号に該当するカクテルの名前と金額を表示する文字列を生成。
			msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}円です。`;
		}
		//表示文字列をリターン。
		return msg;		
	}
);

//cocktailNoを1秒ごとに1〜4の乱数を使って変更。
setInterval(
	():void => {
		cocktailNo.value = Math.round(Math.random() * 3) + 1;
	},
	1000
);

interface Cocktail {
	id: number;
	name: string;
	price: number;
}
</script>

<template>
	<p>現在のカクテル番号: {{cocktailNo}}</p>
	<p>{{priceMsg}}</p>
</template> -->

<!-- 7-2 -->
<!-- <script setup lang="ts">
import {ref, watchEffect} from "vue";

//カクテル番号のテンプレート変数を用意。
const cocktailNo = ref(1);
//カクテル番号に対応するカクテル情報のテンプレート変数を用意。
const priceMsg = ref("");
//watchEffectを設定。
watchEffect(
	(): void => {
		priceMsg.value = getCocktailInfo(cocktailNo.value);
	}
);

//cocktailNoを1秒ごとに1〜4の乱数を使って変更。
setInterval(
	():void => {
		cocktailNo.value = Math.round(Math.random() * 3) + 1;
	},
	1000
);

interface Cocktail {
	id: number;
	name: string;
	price: number;
}

//カクテル番号に対応するカクテル情報を取得する関数。
function getCocktailInfo(cocktailNo: number): string {
	//カクテルリストデータを用意。
	const cocktailDataListInit = new Map<number, Cocktail>();
	cocktailDataListInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200});
	cocktailDataListInit.set(2, {id: 2, name: "ブルーハワイ", price: 1500});
	cocktailDataListInit.set(3, {id: 3, name: "ニューヨーク", price: 1100});
	cocktailDataListInit.set(4, {id: 4, name: "マティーニ", price: 1500});
	//カクテル番号に該当するカクテルデータを取得。
	const cocktail = cocktailDataListInit.get(cocktailNo);
	//カクテル番号に該当する情報がない場合のメッセージを用意。
	let msg = "該当カクテルはありません。";
	//カクテル番号に該当する情報があるなら…
	if(cocktail != undefined) {
		//カクテル番号に該当するカクテルの名前と金額を表示する文字列を生成。
		msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}円です。`;
	}
	//表示文字列をリターン。
	return msg;
}
</script>

<template>
	<p>現在のカクテル番号: {{cocktailNo}}</p>
	<p>{{priceMsg}}</p>
</template> -->

<!-- 7-3 -->
<!-- <script setup lang="ts">
import {ref, watch} from "vue";

//カクテル番号のテンプレート変数を用意。
const cocktailNo = ref(1);
//カクテル番号に対応するカクテル情報のテンプレート変数を用意。
const priceMsg = ref("");
//watchを設定。
watch(cocktailNo,
	(): void => {
		priceMsg.value = getCocktailInfo(cocktailNo.value);
	},
  {immediate: true}
);

//cocktailNoを1秒ごとに1〜4の乱数を使って変更。
setInterval(
	():void => {
		cocktailNo.value = Math.round(Math.random() * 3) + 1;
	},
	1000
);

interface Cocktail {
	id: number;
	name: string;
	price: number;
}

//カクテル番号に対応するカクテル情報を取得する関数。
function getCocktailInfo(cocktailNo: number): string {
	//カクテルリストデータを用意。
	const cocktailDataListInit = new Map<number, Cocktail>();
	cocktailDataListInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200});
	cocktailDataListInit.set(2, {id: 2, name: "ブルーハワイ", price: 1500});
	cocktailDataListInit.set(3, {id: 3, name: "ニューヨーク", price: 1100});
	cocktailDataListInit.set(4, {id: 4, name: "マティーニ", price: 1500});
	//カクテル番号に該当するカクテルデータを取得。
	const cocktail = cocktailDataListInit.get(cocktailNo);
	//カクテル番号に該当する情報がない場合のメッセージを用意。
	let msg = "該当カクテルはありません。";
	//カクテル番号に該当する情報があるなら…
	if(cocktail != undefined) {
		//カクテル番号に該当するカクテルの名前と金額を表示する文字列を生成。
		msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}円です。`;
	}
	//表示文字列をリターン。
	return msg;
}
</script>

<template>
	<p>現在のカクテル番号: {{cocktailNo}}</p>
	<p>{{priceMsg}}</p>
</template> -->

<!-- 7-4 -->
<!-- <script setup lang="ts">
import {ref, watch} from "vue";

//カクテル番号のテンプレート変数を用意。
const cocktailNo = ref(1);
//カクテル番号に対応するカクテル情報のテンプレート変数を用意。
const priceMsg = ref("");
//watchを設定。
watch(cocktailNo,
	(newVal: number, oldVal: number): void => {
		//表示用文字列を用意。
		let msg = "前のカクテル: ";
		msg += getCocktailInfo(oldVal);
		msg += "現在のカクテル: ";
		msg += getCocktailInfo(newVal);
		//表示文字列をpriceMsgに設定。
		priceMsg.value = msg;
	}
);

//cocktailNoを1秒ごとに1〜4の乱数を使って変更。
setInterval(
	():void => {
		cocktailNo.value = Math.round(Math.random() * 3) + 1;
	},
	1000
);

interface Cocktail {
	id: number;
	name: string;
	price: number;
}

//カクテル番号に対応するカクテル情報を取得する関数。
function getCocktailInfo(cocktailNo: number): string {
	//カクテルリストデータを用意。
	const cocktailDataListInit = new Map<number, Cocktail>();
	cocktailDataListInit.set(1, {id: 1, name: "ホワイトレディ", price: 1200});
	cocktailDataListInit.set(2, {id: 2, name: "ブルーハワイ", price: 1500});
	cocktailDataListInit.set(3, {id: 3, name: "ニューヨーク", price: 1100});
	cocktailDataListInit.set(4, {id: 4, name: "マティーニ", price: 1500});
	//カクテル番号に該当するカクテルデータを取得。
	const cocktail = cocktailDataListInit.get(cocktailNo);
	//カクテル番号に該当する情報がない場合のメッセージを用意。
	let msg = "該当カクテルはありません。";
	//カクテル番号に該当する情報があるなら…
	if(cocktail != undefined) {
		//カクテル番号に該当するカクテルの名前と金額を表示する文字列を生成。
		msg = `該当するカクテルは${cocktail.name}で、価格は${cocktail.price}円です。`;
	}
	//表示文字列をリターン。
	return msg;
}
</script>

<template>
	<p>現在のカクテル番号: {{cocktailNo}}</p>
	<p>{{priceMsg}}</p>
</template> -->


<!-- 7-5 -->

<script setup lang="ts">
import {ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered} from "vue";
import type {DebuggerEvent} from "vue";

const heightInit = Math.round(Math.random() * 10);
const widthInit = Math.round(Math.random() * 10);
const height = ref(heightInit);
const width = ref(widthInit);
const area = computed(
	(): number => {
		return height.value * width.value;
	}
);
const change = (): void => {
	height.value = Math.round(Math.random() * 10);
	width.value = Math.round(Math.random() * 10);
}
onBeforeMount(
	(): void => {
		console.log(`beforeMount called: ${height.value} * ${width.value}`);
	}
);
onMounted(
	(): void => {
		console.log(`mounted called: ${height.value} * ${width.value}`);
	}
);
onBeforeUpdate(
	(): void => {
		console.log(`beforeUpdate called: ${height.value} * ${width.value}`);
	}
);
onUpdated(
	(): void => {
		console.log(`updated called: ${height.value} * ${width.value}`);
	}
);
onRenderTracked(
	(event: DebuggerEvent): void => {
		console.log(`renderTracked called: ${height.value} * ${width.value}`);
		console.log(event);
	}
);
onRenderTriggered(
	(event: DebuggerEvent): void => {
		console.log(`renderTriggered called: ${height.value} * ${width.value}`);
		console.log(event);
	}
);
</script>

<template>
	<p>縦が{{height}}、横が{{width}}の長方形の面積は{{area}}</p>
	<button v-on:click="change">値を変更</button>
</template>
