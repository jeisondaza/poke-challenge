import { createI18n } from "vue-i18n";
import { messages } from "../locales/system.json";

const i18n = createI18n({
   legacy: false,
   locale: "en",
   fallbackLocale: "en",
   messages,
});

export default i18n;