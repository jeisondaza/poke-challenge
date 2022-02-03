<script>
export default {
   setup() {
      let pokemons = [];
      fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5")
         .then((res) => res.json())
         .then((json) => {
            // console.log(json);
            json.results.forEach((element) => {
               fetch(element.url)
                  .then((res) => res.json())
                  .then((json) => {
                     // console.log(json);
                     pokemons.push(json);
                  });
            });
         });
      console.log(pokemons);
      return {
         pokemons,
      };
   },
};
</script>
<template>
   <div v-for="(poke, index) in pokemons" :key="index">
      <p>{{ poke.name }}</p>
      <img
         :src="poke.sprites.other.dream_world.front_default"
         :alt="poke.name"
      />
   </div>
</template>
