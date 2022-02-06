import { useRouter } from "vue-router";
import { ref } from "vue";

export default function usePagination(getFunction, offset, limit) {
   const router = useRouter();
   const pageCount = ref(offset);

   const handleRoute = () => {
      router.push({
         path: "/",
         query: {
            offset,
         },
      });
      pageCount.value = offset;
   };

   const handleNext = () => {
      getFunction(
         `https://pokeapi.co/api/v2/pokemon?offset=${(offset += 5)}&limit=${limit}`
      );
      handleRoute();
   };

   const handlePrev = () => {
      getFunction(
         `https://pokeapi.co/api/v2/pokemon?offset=${(offset -= 5)}&limit=${limit}`
      );
      handleRoute();
   };

   const lastPage = () => {
      let final = 1118 - limit;
      getFunction(
         `https://pokeapi.co/api/v2/pokemon?offset=${final}&limit=${limit}`
      );
      offset = final;
      handleRoute();
   };

   const firstPage = () => {
      goHome();
      getFunction(
         `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      handleRoute();
   };

   const goHome = () => {
      offset = 0;
      handleRoute();
   };

   return {
      pageCount,
      handleNext,
      handlePrev,
      lastPage,
      firstPage,
      goHome,
   };
}
