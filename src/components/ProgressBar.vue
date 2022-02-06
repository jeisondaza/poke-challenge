<script setup>
const props = defineProps({
   value: Number,
   max: Number,
   dir: String,
});

const direction = `bar ${props.dir}`;
const porcent = `width: ${Math.round((props.value * 100) / props.max)}%`;
</script>

<template>
   <div :class="direction">
      <p class="label">{{ props.value }}</p>
      <div class="progress border" :style="porcent"></div>
   </div>
</template>

<style>
.bar {
   display: flex;
   align-items: center;
   background-color: #c0c0c0;
   position: relative;
   border-radius: 10px;
}
.label {
   z-index: 2;
   padding: var(--s-padding);
}
.progress {
   position: absolute;
   z-index: 0;
   height: 30px;
   width: 10%;
   background-color: var(--primary-color);
}
.horizontal {
   height: 30px;
   width: 100%;
}
.border {
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
}
</style>
