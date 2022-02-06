import { ref, reactive } from "vue";

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

   const helperFetch = async (url, lang) => {
      const res = await fetch(url);
      const data = await res.json();
      const selected = data.names
         .filter((el) => el.language.name == lang)
         .map((option) => option.name)
         .toString();

      return selected;
   };
   // fetch(url)
   //    .then((res) => res.json())
   //    .then((d) =>
   //       d.names
   //          .filter((el) => el.language.name == lang)
   //          .map((option) => option.name)
   //          .toString()
   //    );

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

      poke.type = await helperFetch(data.types[0].type.url, lang);

      poke.abilities = await Promise.all(
         data.abilities.map((el) => helperFetch(el.ability.url, lang))
      );

      poke.stats = await Promise.all(
         data.stats.map(async (el) => ({
            type: await helperFetch(el.stat.url, lang),
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
