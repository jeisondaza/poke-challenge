<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const langs = ["en", "es"];
</script>

<template>
   <section>
      <label for="locale">{{ t("label") }}</label>
      <select v-model="locale">
         <option v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang">
            {{ lang.toUpperCase() }}
         </option>
      </select>
   </section>
</template>
