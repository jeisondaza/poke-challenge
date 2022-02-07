<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const langs = ["en", "es", "fr"];

const storage = window.localStorage;
const setLang = (e) => storage.setItem("lang", e.target.value);
</script>

<template>
   <section class="locale_conatainer">
      <label class="locale_label" for="locale">{{ t("label") }}</label>
      <select
         class="locale_select"
         v-model="locale"
         id="locale"
         @change="setLang"
      >
         <option
            class="locale_opt"
            v-for="(lang, i) in langs"
            :key="`lang-${i}`"
            :value="lang"
         >
            {{ lang.toUpperCase() }}
         </option>
      </select>
   </section>
</template>

<style>
.locale_conatainer {
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   gap: 5px;
}
.locale_label {
   color: white;
}
.locale_select {
   border: none;
   padding: 4px;
   border-radius: 5px;
   color: var(--accent-color);
   background-color: var(--light-bg-color);
   width: 50px;
   font-weight: bold;
}
.locale_select:focus {
   outline: none;
}
.locale_opt:checked {
   color: white;
   font-weight: bold;
   background-color: var(--primary-color);
}
@media screen and (min-width: 450px) {
   .locale_conatainer {
      flex-direction: row;
      align-items: center;
   }
}
@media screen and (min-width: 1000px) {
   .locale_opt {
      font-size: 15px;
   }
}
</style>
