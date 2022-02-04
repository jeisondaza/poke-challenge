<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import useGetPokemons from "../hooks/useGetPokemons.js";
import usePagination from "../hooks/usePagination.js";
import PokeView from "./PokeView.vue";

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
   <header class="pokemos_header">
      <nav class="home_nav">
         <h2 class="home_pag">
            {{ pagination + 1 }} to {{ pagination + 5 }} of
            {{ metaData.count }}
         </h2>
         <div class="home_btns">
            <button
               class="primary_btns"
               @click="handlePrev"
               v-show="metaData.prev"
            >
               Back
            </button>
            <button class="primary_btns" @click="handleNext">Next</button>
         </div>
      </nav>
   </header>
   <p v-if="loading">Loading...</p>
   <article v-else class="pokemons_container">
      <div v-for="(poke, index) in pokemons" :key="index">
         <PokeView :name="poke.name" :avatar="poke.avatar" />
      </div>
   </article>
</template>

<style>
.pokemos_header {
   margin-block: var(--s-margin);
   display: flex;
   flex-direction: column;
   gap: var(--s-gap);
}
.home_nav {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: var(--s-gap);
}
.home_btns {
   display: flex;
   justify-content: space-evenly;
   gap: var(--m-gap);
}
.home_pag {
   font-weight: normal;
}
.pokemons_container {
   display: flex;
   flex-direction: column;
   gap: var(--s-gap);
}
</style>
