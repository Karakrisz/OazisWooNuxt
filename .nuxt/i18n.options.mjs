
// @ts-nocheck
import locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_en_US_json from "../woonuxt_base/app/locales/en-US.json";
import locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_de_DE_json from "../woonuxt_base/app/locales/de-DE.json";
import locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_es_ES_json from "../woonuxt_base/app/locales/es-ES.json";
import locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_fr_FR_json from "../woonuxt_base/app/locales/fr-FR.json";
import locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_it_IT_json from "../woonuxt_base/app/locales/it-IT.json";
import locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_pt_BR_json from "../woonuxt_base/app/locales/pt-BR.json";


export const localeCodes =  [
  "en_US",
  "de_DE",
  "es_ES",
  "fr_FR",
  "it_IT",
  "pt_BR"
]

export const localeLoaders = {
  "en_US": [{ key: "../woonuxt_base/app/locales/en-US.json", load: () => Promise.resolve(locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_en_US_json), cache: true }],
  "de_DE": [{ key: "../woonuxt_base/app/locales/de-DE.json", load: () => Promise.resolve(locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_de_DE_json), cache: true }],
  "es_ES": [{ key: "../woonuxt_base/app/locales/es-ES.json", load: () => Promise.resolve(locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_es_ES_json), cache: true }],
  "fr_FR": [{ key: "../woonuxt_base/app/locales/fr-FR.json", load: () => Promise.resolve(locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_fr_FR_json), cache: true }],
  "it_IT": [{ key: "../woonuxt_base/app/locales/it-IT.json", load: () => Promise.resolve(locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_it_IT_json), cache: true }],
  "pt_BR": [{ key: "../woonuxt_base/app/locales/pt-BR.json", load: () => Promise.resolve(locale__Applications_XAMPP_xamppfiles_htdocs_OazisWooNuxt_woonuxt_base_app_locales_pt_BR_json), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en_US",
      "name": "English 🇺🇸",
      "files": [
        "woonuxt_base/app/locales/en-US.json"
      ]
    },
    {
      "code": "de_DE",
      "name": "Deutsch 🇩🇪",
      "files": [
        "woonuxt_base/app/locales/de-DE.json"
      ]
    },
    {
      "code": "es_ES",
      "name": "Español 🇪🇸",
      "files": [
        "woonuxt_base/app/locales/es-ES.json"
      ]
    },
    {
      "code": "fr_FR",
      "name": "Français 🇫🇷",
      "files": [
        "woonuxt_base/app/locales/fr-FR.json"
      ]
    },
    {
      "code": "it_IT",
      "name": "Italiano 🇮🇹",
      "files": [
        "woonuxt_base/app/locales/it-IT.json"
      ]
    },
    {
      "code": "pt_BR",
      "name": "Português 🇧🇷",
      "files": [
        "woonuxt_base/app/locales/pt-BR.json"
      ]
    }
  ],
  "defaultLocale": "en_US",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": false,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en_US",
    "name": "English 🇺🇸",
    "files": [
      {
        "path": "woonuxt_base/app/locales/en-US.json"
      }
    ]
  },
  {
    "code": "de_DE",
    "name": "Deutsch 🇩🇪",
    "files": [
      {
        "path": "woonuxt_base/app/locales/de-DE.json"
      }
    ]
  },
  {
    "code": "es_ES",
    "name": "Español 🇪🇸",
    "files": [
      {
        "path": "woonuxt_base/app/locales/es-ES.json"
      }
    ]
  },
  {
    "code": "fr_FR",
    "name": "Français 🇫🇷",
    "files": [
      {
        "path": "woonuxt_base/app/locales/fr-FR.json"
      }
    ]
  },
  {
    "code": "it_IT",
    "name": "Italiano 🇮🇹",
    "files": [
      {
        "path": "woonuxt_base/app/locales/it-IT.json"
      }
    ]
  },
  {
    "code": "pt_BR",
    "name": "Português 🇧🇷",
    "files": [
      {
        "path": "woonuxt_base/app/locales/pt-BR.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
