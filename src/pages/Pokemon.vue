<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
   <h1>Pokemon Page</h1>
   <p>Ya tenesmo a {{ route.params.pokemon }}</p>
</template>
