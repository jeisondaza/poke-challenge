<script setup>
import useGetPokemonDetails from "../hooks/useGetPokemonDetails.js";
import { watchEffect } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
   pokeName: String,
});
const { t, locale } = useI18n();
const { poke, getI18nData, loading } = useGetPokemonDetails(props.pokeName);

watchEffect(() => {
   getI18nData(locale.value);
});
</script>

<template>
   <p v-if="loading">Loading....</p>
   <figure v-else class="poke_container">
      <div class="poke_img-container" :class="poke.typeBg">
         <img
            :src="poke.avatar"
            :alt="poke.name"
            class="poke_img"
            decoding="async"
         />
      </div>
      <figcaption class="poke_details">
         <p class="poke_type">{{ poke.type }}</p>
         <h2 class="poke_title">{{ poke.name.toUpperCase() }}</h2>
         <p>{{ poke.description }}</p>
         <section class="poke_sizes">
            <p>{{ t("height") }} {{ poke.height / 10 }} m</p>
            <p>{{ t("weight") }} {{ poke.weight / 10 }} kg</p>
         </section>
         <section class="poke_abilities">
            <h3>{{ t("abilities") }}</h3>
            <ul>
               <li v-for="(ability, index) in poke.abilities" :key="index">
                  {{ ability }}
               </li>
            </ul>
         </section>
         <section class="poke_stats">
            <h3>{{ t("stats") }}</h3>
            <ul>
               <li v-for="(stat, index) in poke.stats" :key="index">
                  {{ stat.type }} : {{ stat.value }}
               </li>
            </ul>
         </section>
      </figcaption>
   </figure>
</template>

<style>
.poke_container {
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   box-shadow: 5px 5px 15px #3b3b3b;
   margin-block: var(--l-padding);
}
.poke_img-container {
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   padding: var(--l-padding);
}
.poke_img {
   width: 100%;
}
.poke_details {
   position: relative;
   display: flex;
   flex-direction: column;
   gap: var(--s-gap);
   background: #ffffff;
   padding: var(--m-padding);
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
}
.poke_type {
   position: absolute;
   color: white;
   padding: var(--s-padding);
   background-color: var(--accent-color);
   top: -17px;
   left: 10px;
}
.poke_title {
   text-align: center;
}
@media screen and (min-width: 400px) {
   .poke_container {
      width: 400px;
   }
}

.normal {
   background: linear-gradient(90deg, #2b2b2b 0%, #cacaca 100%);
}
.fire {
   background: linear-gradient(90deg, #490f05 0%, #c9371d 100%);
}
.water {
   background: linear-gradient(90deg, #022e52 0%, #0394d8 100%);
}
.electric {
   background: linear-gradient(90deg, #545e00 0%, #c0b73a 100%);
}
.grass {
   background: linear-gradient(90deg, #225202 0%, #0aa011 100%);
}
.ice {
   background: linear-gradient(90deg, #255564 0%, #32d0f8 100%);
}
.fighting {
   background: linear-gradient(90deg, #644125 0%, #f8a232 100%);
}
.poison {
   background: linear-gradient(90deg, #632549 0%, #eb56a8 100%);
}
.ground {
   background: linear-gradient(90deg, #3f2e10 0%, #b68b00 100%);
}
.flying {
   background: linear-gradient(90deg, #006c70 0%, #8ebed1 100%);
}
.psychic {
   background: linear-gradient(90deg, #330063 0%, #7b1aca 100%);
}
.bug {
   background: linear-gradient(90deg, #08610f 0%, #2cc54d 100%);
}
.rock {
   background: linear-gradient(90deg, #3b3d23 0%, #fff9a6 100%);
}
.ghost {
   background: linear-gradient(90deg, #3a0202 0%, #9c2525 100%);
}
.dragon {
   background: linear-gradient(90deg, #4b4613 0%, #ffef61 100%);
}
.dark {
   background: linear-gradient(90deg, #000000 0%, #4b5a5f 100%);
}
.steel {
   background: linear-gradient(90deg, #443a3a 0%, #858ea3 100%);
}
.fairy {
   background: linear-gradient(90deg, #41022c 0%, #ff54ff 100%);
}
.unknown {
   background: linear-gradient(90deg, #91bbbe 0%, #ffffff 100%);
}
.shadow {
   background: linear-gradient(90deg, #000000 0%, #69695b 100%);
}
</style>
