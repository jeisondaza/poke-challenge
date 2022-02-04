<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import useGetPokemons from "../hooks/useGetPokemons.js";
import usePagination from "../hooks/usePagination.js";

const route = useRoute();
const offset = parseInt(route.query.offset) || 0;
const limit = 5;
const { pokemons, metaData, loading, getPokemons } = useGetPokemons(
   offset,
   limit
);
const { pageCount, handleNext, handlePrev } = usePagination(
   getPokemons,
   offset,
   limit
);
const pagination = computed(() => parseInt(pageCount.value));
</script>

<template>
   <h2>PokeChanllenge</h2>
   <p>
      {{ pagination + 1 }} to {{ pagination + 5 }} of
      {{ metaData.count }}
   </p>
   <button @click="handlePrev" v-show="metaData.prev">Back</button>
   <button @click="handleNext">Next</button>
   <p v-if="loading">Loading...</p>
   <article v-else>
      <div v-for="(poke, index) in pokemons" :key="index">
         <router-link :to="poke.name">
            <figcaption>{{ poke.name }}</figcaption>
            <img :src="poke.avatar" :alt="poke.name" />
         </router-link>
      </div>
   </article>
</template>
