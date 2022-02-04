import { ref, reactive } from "vue";

export default function useGetPokemonDetails(pokemon) {
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
   const single = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
   const specie = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`;

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
   };
   const getSpecieDetails = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      poke.description = data.flavor_text_entries[2].flavor_text;
   };

   const getAllData = () => {
      getSingleDetails(single);
      getSpecieDetails(specie);
      loading.value = false;
   };

   getAllData();

   return { poke, loading };
}
