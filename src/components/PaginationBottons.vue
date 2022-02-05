<script setup>
const props = defineProps({
   text: String,
   outline: Boolean,
});
const classes = `btn ${!props.outline ? "bg" : "outline"}`;
</script>

<template>
   <button :class="classes">
      {{ props.text }}
   </button>
</template>

<style>
.btn {
   border: none;
   border-radius: 6px;
   padding-block: var(--s-padding);
   padding-inline: var(--m-padding);
   font-size: 15px;
   font-weight: bold;
   cursor: pointer;
}
.bg {
   color: white;
   background-color: var(--primary-color);
}
.bg:active {
   background-color: var(--primary-color-active);
}
.outline {
   border: 1px solid var(--primary-color);
   color: var(--primary-color);
   background-color: var(--light-bg-color);
}
.outline:hover {
   color: white;
   background-color: var(--primary-color);
}
</style>
