import i18n from "i18n-js"
import en from './en.json'


console.log(en)

i18n.fallbacks = true
i18n.translations = { en }

const fallbackLang = "en"
const languageTag = navigator.language
  ? navigator.language
  : fallbackLang

i18n.locale = languageTag
