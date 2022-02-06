<script setup>
import Logo from "./Logo.vue";
import LangSelector from "./LangSelector.vue";
</script>

<template>
   <nav class="appBar">
      <Logo />
      <LangSelector />
   </nav>
</template>

<style>
.appBar {
   background-color: var(--accent-color);
   padding-block: var(--s-padding);
   padding-inline: var(--m-padding);
   display: flex;
   justify-content: space-between;
   align-items: center;
}
</style>
