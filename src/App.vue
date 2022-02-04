<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
   <router-link :to="{ name: 'Home' }">homeLogo</router-link>
   <main class="view__container">
      <router-view></router-view>
   </main>
</template>

<style>
#app {
   background-color: var(--light-bg-color);
   color: var(--light-text-color);
   padding: var(--s-padding);
   width: 100%;
   min-height: 100vh;
}
.view__container {
   display: flex;
   flex-direction: column;
   align-content: center;
}
</style>
