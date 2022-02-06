import { createI18n } from "vue-i18n";

import { en } from "../locales/en.json";
import { es } from "../locales/es.json";
import { fr } from "../locales/fr.json";

const messages = {
   en,
   es,
   fr,
};

const i18n = createI18n({
   legacy: false,
   locale: "en",
   fallbackLocale: "en",
   messages,
});

export default i18n;
