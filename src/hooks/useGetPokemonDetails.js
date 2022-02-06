import { ref, reactive } from "vue";
import usePokeLocation from "./usePokeLocation";

export default function useGetPokemonDetails(pokemon) {
   const poke = reactive({
      id: 0,
      typeBg: "",
      name: "",
      avatar: "",
      description: "",
      type: "",
      abilities: [],
      height: 0,
      weight: 0,
      stats: [],
   });
   const loading = ref(false);
   const single = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
   const specie = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`;

   const getFixedData = (data) => {
      poke.id = data.id;
      poke.name = data.name;
      poke.avatar =
         data.sprites.other.dream_world.front_default ||
         data.sprites.other["official-artwork"].front_default ||
         data.sprites.other.home.front_default;
      poke.typeBg = data.types[0].type.name;
      poke.height = data.height;
      poke.weight = data.weight;
   };

   const getI18nData = async (lang) => {
      const res = await fetch(single);
      const data = await res.json();

      poke.description = await fetch(specie)
         .then((res) => res.json())
         .then((d) =>
            d.flavor_text_entries
               .filter((el) => el.version.name == "shield")
               .filter((version) => version.language.name == lang)
               .map((option) => option.flavor_text.replace(/\n|\r|\f/g, " "))
               .toString()
         );

      poke.type = await usePokeLocation(data.types[0].type.url, lang);

      poke.abilities = await Promise.all(
         data.abilities.map((el) => usePokeLocation(el.ability.url, lang))
      );

      poke.stats = await Promise.all(
         data.stats.map(async (el) => ({
            type: await usePokeLocation(el.stat.url, lang),
            value: el.base_stat,
         }))
      );
   };

   const getDetails = async () => {
      loading.value = true;
      const res = await fetch(single);
      const data = await res.json();
      getFixedData(data);

      loading.value = false;
   };

   getDetails();

   return { poke, loading, getI18nData };
}
