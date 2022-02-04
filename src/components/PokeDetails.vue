<script setup>
import useGetPokemonDetails from "../hooks/useGetPokemonDetails.js";

const props = defineProps({
   pokeName: String,
});
const { poke, loading } = useGetPokemonDetails(props.pokeName);
</script>

<template>
   <p v-if="loading">Loading....</p>
   <main v-else>
      <h3>{{ poke.name }}</h3>
      <img :src="poke.avatar" :alt="poke.name" />
      <p>{{ poke.description }}</p>
      <h3>Type</h3>
      <ul v-for="(type, index) in poke.types" :key="index">
         <li>{{ type }}</li>
      </ul>
      <h3>abilities</h3>
      <ul v-for="(ability, index) in poke.abilities" :key="index">
         <li>{{ ability }}</li>
      </ul>
      <p>height {{ poke.height / 10 }} m</p>
      <p>weight {{ poke.weight / 10 }} kg</p>
      <h3>Stats</h3>
      <ul v-for="(stat, index) in poke.stats" :key="index">
         <li>{{ stat.type }} : {{ stat.value }}</li>
      </ul>
   </main>
</template>
