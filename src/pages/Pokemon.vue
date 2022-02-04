<script setup>
import { useRoute } from "vue-router";
import PokeDetails from "../components/PokeDetails.vue";
const route = useRoute();
</script>

<template>
   <PokeDetails :pokeName="route.params.pokemon" />
</template>
