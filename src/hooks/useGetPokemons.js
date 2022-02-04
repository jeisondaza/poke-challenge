import { ref, reactive } from "vue";

export default function useGetPokemons(offset, limit) {
   const endPoint = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
   const pokemons = ref([]);
   const loading = ref(false);
   const metaData = reactive({
      count: 0,
      prev: null,
   });

   const getPokemons = async (url) => {
      loading.value = true;
      const res = await fetch(url);
      const data = await res.json();
      metaData.count = data.count;
      metaData.prev = data.previous;
      pokemons.value = await Promise.all(
         data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return {
               name: data.name,
               avatar: data.sprites.other.dream_world.front_default,
            };
         })
      );
      loading.value = false;
   };

   getPokemons(endPoint);

   return { pokemons, metaData, loading, getPokemons };
}
