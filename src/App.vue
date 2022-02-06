<script setup>
import AppBar from "./components/AppBar.vue";
</script>

<template>
   <AppBar />
   <main class="view__container">
      <router-view></router-view>
   </main>
</template>

<style>
#app {
}
.view__container {
   padding-inline: var(--s-padding);
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   width: 100%;
}
</style>
