<script setup>
import { ref, watch } from "vue";
const pokemons = ref([]);
const loading = ref(true);
const count = ref(1);
const metaData = {};
let endPoinr = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";

const getPokemos = async (url) => {
   const res = await fetch(url);
   const data = await res.json();
   metaData.count = data.count;
   metaData.next = data.next;
   metaData.prev = data.previous;
   pokemons.value = data.results;
   loading.value = false;
};

getPokemos(endPoinr);

const handleNext = () => {
   let url = metaData.next;
   getPokemos(url);
   count.value += 5;
};
const handlePrev = () => {
   let url = metaData.prev;
   getPokemos(url);
   count.value -= 5;
};
</script>
<template>
   <h2>PokeChanllenge</h2>
   <p>from {{ count }} to {{ count + 4 }} of {{ metaData.count }}</p>
   <button v-show="metaData.prev" @click="handlePrev">prev</button>
   <button @click="handleNext">next</button>
   <p v-if="loading">Loading...</p>
   <article v-else>
      <p v-for="(poke, index) in pokemons" :key="index">{{ poke.name }}</p>
   </article>
</template>
