<template>
   <router-link :to="{ name: 'Home' }">
      <img class="logo" src="../assets/pokeApp.png" alt="logo" />
   </router-link>
</template>
<style>
.logo {
   width: 160px;
   filter: drop-shadow(1px 1px 2px #3a3a3a);
}
</style>
