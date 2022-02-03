<script setup>
import { ref } from "vue";
const pokemons = ref([]);
const loading = ref(true);
const count = ref(1);
const metaData = {};
let endPoinr = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=5";

const getPokemons = async (url) => {
   const res = await fetch(url);
   const data = await res.json();
   metaData.count = data.count;
   metaData.next = data.next;
   metaData.prev = data.previous;
   pokemons.value = await Promise.all(
      data.results.map(async (pokemon) => {
         const res = await fetch(pokemon.url);
         const data = await res.json();
         return data;
      })
   );
   loading.value = false;
};

getPokemons(endPoinr);

const handleNext = () => {
   let url = metaData.next;
   getPokemons(url);
   count.value += 5;
};
const handlePrev = () => {
   let url = metaData.prev;
   getPokemons(url);
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
      <router-link to="/pokemon" v-for="(poke, index) in pokemons" :key="index">
         <figcaption>{{ poke.name }}</figcaption>
         <img
            :src="poke.sprites.other.dream_world.front_default"
            :alt="poke.name"
         />
      </router-link>
   </article>
</template>
