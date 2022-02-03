<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
   pokeName: String,
});

const poke = reactive({
   name: "",
   description: "",
   avatar: "",
   types: [],
   abilities: [],
   height: 0,
   weight: 0,
   stats: [],
   weakness: [],
});
const loading = ref(true);
const single = `https://pokeapi.co/api/v2/pokemon/${props.pokeName}/`;
const specie = `https://pokeapi.co/api/v2/pokemon-species/${props.pokeName}/`;

const getSingleDetails = async (url) => {
   const res = await fetch(url);
   const data = await res.json();
   poke.name = data.name;
   poke.avatar = data.sprites.other.dream_world.front_default;
   poke.types = data.types.map((el) => el.type.name);
   poke.abilities = data.abilities.map((el) => el.ability.name);
   poke.height = data.height;
   poke.weight = data.weight;
   poke.stats = data.stats.map((el) => ({
      type: el.stat.name,
      value: el.base_stat,
   }));
   console.log(poke.description);
};
const getSpecieDetails = async (url) => {
   const res = await fetch(url);
   const data = await res.json();
   poke.description = data.flavor_text_entries[0].flavor_text;
};

const getAllData = () => {
   getSingleDetails(single);
   getSpecieDetails(specie);
   loading.value = false;
};

getAllData();
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
