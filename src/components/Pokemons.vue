<script setup>
import { useRoute } from "vue-router";
import { computed, watch } from "vue";
import useGetPokemons from "../hooks/useGetPokemons.js";
import usePagination from "../hooks/usePagination.js";
import PokeView from "./PokeView.vue";
import PaginationBottons from "./PaginationBottons.vue";

const route = useRoute();
const offset = parseInt(route.query.offset) || 0;
const limit = 5;
const { pokemons, metaData, loading, getPokemons } = useGetPokemons(
   offset,
   limit
);
const { pageCount, handleNext, handlePrev, lastPage, firstPage, goHome } =
   usePagination(getPokemons, offset, limit, metaData.count);
const pagination = computed(() => parseInt(pageCount.value));

const reset = () => {
   if (route.fullPath == "/") {
      getPokemons();
      goHome();
   }
   console.log(route.query.offset);
};

watch(() => route.fullPath, reset);
</script>

<template>
   <p v-if="loading">Loading...</p>
   <article v-else class="pokemons_container">
      <header class="pokemos_header">
         <nav class="home_nav">
            <h2 class="home_pag">
               {{ pagination + 1 }} to {{ pagination + 5 }} of
               {{ metaData.count }}
            </h2>
            <div class="home_btns">
               <PaginationBottons
                  text="First"
                  @click="firstPage"
                  outline
                  v-show="metaData.prev"
               />
               <PaginationBottons
                  text="Prev"
                  @click="handlePrev"
                  v-show="metaData.prev"
               />
               <PaginationBottons
                  text="Next"
                  @click="handleNext"
                  v-show="metaData.next"
               />
               <PaginationBottons
                  text="Last"
                  @click="lastPage"
                  outline
                  v-show="metaData.next"
               />
            </div>
         </nav>
      </header>
      <section class="pokemons_view">
         <div v-for="(poke, index) in pokemons" :key="index">
            <PokeView :name="poke.name" :avatar="poke.avatar" />
         </div>
      </section>
   </article>
</template>

<style>
.pokemos_header {
   margin-block: var(--m-margin);
   display: flex;
   flex-direction: column;
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
}
.pokemons_view {
   display: flex;
   flex-direction: column;
   gap: var(--s-gap);
}
@media screen and (min-width: 450px) {
   .pokemons_container {
      flex-wrap: wrap;
   }
}
@media screen and (min-width: 1000px) {
   .pokemons_view {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
   }
}
</style>
