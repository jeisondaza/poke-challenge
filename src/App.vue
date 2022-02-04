<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
   <nav class="navBar">
      <router-link :to="{ name: 'Home' }">
         <img class="logo" src="./assets/pokeApp.png" alt="logo" />
      </router-link>
   </nav>
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
.navBar {
   background-color: var(--accent-color);
}
.view__container {
   padding-inline: var(--s-padding);
   display: flex;
   justify-content: center;
}
.logo {
   padding: var(--s-padding);
   width: 160px;
   filter: drop-shadow(1px 1px 2px #3a3a3a);
}
</style>
