import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18n.use(initReactI18next).use(Backend).init({
    resources: {},
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",

    partialBundledLanguages: true,
    ns: [],
});

fetch('https://ruru92.wraith.com.tr/locales/en.json').then(res => res.text()).then(data => {
    i18n.addResourceBundle('en', 'translation', JSON.parse(data), true, true);
});

fetch('https://ruru92.wraith.com.tr/locales/tr.json').then(res => res.text()).then(data => {
    i18n.addResourceBundle('tr', 'translation', JSON.parse(data), true, true);
});

export default i18n;