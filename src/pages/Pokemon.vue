<script setup>
import { useRoute } from "vue-router";
import PokeDetails from "../components/PokeDetails.vue";
const route = useRoute();
</script>

<template>
   <h1>Pokemon Page</h1>

   <PokeDetails :pokeName="route.params.pokemon" />
</template>
