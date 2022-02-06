<template>
   <img
      class="loader"
      src="../assets/pokeball.svg"
      alt="pokeball"
      width="50"
      height="50"
   />
</template>

<style>
.loader {
   position: absolute;
   top: 40vh;
   animation: loader-spin infinite 0.5s linear;
}

@keyframes loader-spin {
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }
}
</style>
