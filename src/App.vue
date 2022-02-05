<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
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
   background-color: var(--light-bg-color);
   color: var(--light-text-color);
   width: 100%;
   min-height: 100vh;
}
.view__container {
   padding-inline: var(--s-padding);
   display: flex;
   flex-direction: column;
   align-items: center;
}
</style>
