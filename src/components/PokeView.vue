<script setup>
const props = defineProps({
   name: String,
   avatar: String,
});
</script>

<template>
   <router-link :to="name">
      <figure class="poke_card">
         <img class="poke_avatar" :src="avatar" :alt="name" decoding="async" />
         <h2 class="poke_name">{{ name }}</h2>
      </figure>
   </router-link>
</template>

<style>
router-link {
   text-decoration: none;
}
.poke_card {
   background: radial-gradient(circle, #c84b31 0%, #2d4263 100%);
   display: flex;
   flex-direction: column;
   justify-content: center;
   border-radius: 10px;
   width: 304px;
}
.poke_name {
   background-color: white;
   padding: var(--s-padding);
   color: var(--accent-color);
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   text-align: center;
}
.poke_avatar {
   padding: var(--s-padding);
   width: 100%;
   height: 300px;
   object-fit: contain;
}
@media screen and (min-width: 400px) {
   .poke_card {
      width: 400px;
   }
}
</style>
