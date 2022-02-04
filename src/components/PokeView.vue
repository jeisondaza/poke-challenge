<script setup>
const props = defineProps({
   name: String,
   avatar: String,
});
</script>

<template>
   <router-link :to="name">
      <h2 class="poke_name">{{ name }}</h2>
      <figure class="poke_card">
         <img class="poke_avatar" :src="avatar" :alt="name" />
      </figure>
   </router-link>
</template>

<style>
router-link {
   text-decoration: none;
}
.poke_card {
   padding: var(--s-padding);
   background-color: #e2d199;
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
}
.poke_name {
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   background-color: white;
   padding: var(--s-padding);
   color: var(--accent-color);
   display: inline-block;
   width: 100%;
   text-decoration: none;
}
.poke_avatar {
   width: 100%;
   height: 300px;
}
</style>
