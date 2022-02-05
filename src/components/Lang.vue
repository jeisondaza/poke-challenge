<template>
   <p>{{ t("msg") }}</p>
   <p>{{ t("named", { msg }) }}</p>
   <p>{{ t("list", [msg, msg2]) }}</p>
   <p>{{ t("literal") }}</p>
   <p>{{ t("linked") }}</p>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
let msg2 = "perrito";
const { t, locale } = useI18n({
   messages: {
      en: {
         msg: "hola",
         named: "{msg} world!",
         list: "{1} world! lista",
         literal: "{'hello'} world!",
         the_world: "the mundoli",
         dio: "DIO:",
         linked: "@:dio @:the_world XD!!!!",
      },
      ja: {
         msg: "こんにちは",
         named: "{msg} 世界！",
         list: "{0} 世界！",
         literal: "{'こんにちは'} 世界！",
         the_world: "ザ・ワールド！",
         dio: "ディオ:",
         linked: "@:dio @:the_world ！！！！",
      },
   },
});

const msg = computed(() => t("msg"));
</script>
