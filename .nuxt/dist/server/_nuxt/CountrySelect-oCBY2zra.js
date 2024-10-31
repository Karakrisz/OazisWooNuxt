import { ref, watch, unref, mergeProps, useSSRContext, computed } from "vue";
import { m as GqlGetStates, c as _export_sfc } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main$1 = {
  __name: "StateSelect",
  __ssrInlineRender: true,
  props: ["modelValue", "countryCode", "countryStates"],
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const states = ref(props.countryStates || []);
    async function updateState() {
      try {
        const { countryStates } = await GqlGetStates({ country: (props == null ? void 0 : props.countryCode) || "IE" });
        states.value = countryStates;
      } catch (error) {
        console.error(error);
      }
    }
    watch(
      () => props.countryCode,
      () => {
        updateState();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(states).length) {
        _push(`<select${ssrRenderAttrs(mergeProps({ class: "h-[42px]" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(states), (state) => {
          _push(`<option${ssrRenderAttr("value", state.code)}${ssrIncludeBooleanAttr(state.code === props.modelValue) ? " selected" : ""}>${ssrInterpolate(state.name)}</option>`);
        });
        _push(`<!--]--></select>`);
      } else {
        _push(`<input${ssrRenderAttrs(mergeProps({
          type: "text",
          placeholder: "State"
        }, _attrs))}>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/StateSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const StateSelect = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$1
});
const countries = [
  { countryName: "Afghanistan", countryCode: "AF" },
  { countryName: "Åland Islands", countryCode: "AX" },
  { countryName: "Albania", countryCode: "AL" },
  { countryName: "Algeria", countryCode: "DZ" },
  { countryName: "Andorra", countryCode: "AD" },
  { countryName: "Angola", countryCode: "AO" },
  { countryName: "Anguilla", countryCode: "AI" },
  { countryName: "Antarctica", countryCode: "AQ" },
  { countryName: "Antigua and Barbuda", countryCode: "AG" },
  { countryName: "Argentina", countryCode: "AR" },
  { countryName: "Armenia", countryCode: "AM" },
  { countryName: "Aruba", countryCode: "AW" },
  { countryName: "Australia", countryCode: "AU" },
  { countryName: "Austria", countryCode: "AT" },
  { countryName: "Azerbaijan", countryCode: "AZ" },
  { countryName: "Bahamas", countryCode: "BS" },
  { countryName: "Bahrain", countryCode: "BH" },
  { countryName: "Bangladesh", countryCode: "BD" },
  { countryName: "Barbados", countryCode: "BB" },
  { countryName: "Belarus", countryCode: "BY" },
  { countryName: "Belgium", countryCode: "BE" },
  { countryName: "Belau", countryCode: "PW" },
  { countryName: "Belize", countryCode: "BZ" },
  { countryName: "Benin", countryCode: "BJ" },
  { countryName: "Bermuda", countryCode: "BM" },
  { countryName: "Bhutan", countryCode: "BT" },
  { countryName: "Bolivia", countryCode: "BO" },
  { countryName: "Bonaire, Saint Eustatius and Saba", countryCode: "BQ" },
  { countryName: "Bosnia and Herzegovina", countryCode: "BA" },
  { countryName: "Botswana", countryCode: "BW" },
  { countryName: "Bouvet Island", countryCode: "BV" },
  { countryName: "Brazil", countryCode: "BR" },
  { countryName: "British Indian Ocean Territory", countryCode: "IO" },
  { countryName: "British Virgin Islands", countryCode: "VG" },
  { countryName: "Brunei", countryCode: "BN" },
  { countryName: "Bulgaria", countryCode: "BG" },
  { countryName: "Burkina Faso", countryCode: "BF" },
  { countryName: "Burundi", countryCode: "BI" },
  { countryName: "Cambodia", countryCode: "KH" },
  { countryName: "Cameroon", countryCode: "CM" },
  { countryName: "Canada", countryCode: "CA" },
  { countryName: "Cape Verde", countryCode: "CV" },
  { countryName: "Cayman Islands", countryCode: "KY" },
  { countryName: "Central African Republic", countryCode: "CF" },
  { countryName: "Chad", countryCode: "TD" },
  { countryName: "Chile", countryCode: "CL" },
  { countryName: "China", countryCode: "CN" },
  { countryName: "Christmas Island", countryCode: "CX" },
  { countryName: "Cocos (Keeling) Islands", countryCode: "CC" },
  { countryName: "Colombia", countryCode: "CO" },
  { countryName: "Comoros", countryCode: "KM" },
  { countryName: "Congo (Brazzaville)", countryCode: "CG" },
  { countryName: "Congo (Kinshasa)", countryCode: "CD" },
  { countryName: "Cook Islands", countryCode: "CK" },
  { countryName: "Costa Rica", countryCode: "CR" },
  { countryName: "Croatia", countryCode: "HR" },
  { countryName: "Cuba", countryCode: "CU" },
  { countryName: "CuraÇao", countryCode: "CW" },
  { countryName: "Cyprus", countryCode: "CY" },
  { countryName: "Czech Republic", countryCode: "CZ" },
  { countryName: "Denmark", countryCode: "DK" },
  { countryName: "Djibouti", countryCode: "DJ" },
  { countryName: "Dominica", countryCode: "DM" },
  { countryName: "Dominican Republic", countryCode: "DO" },
  { countryName: "Ecuador", countryCode: "EC" },
  { countryName: "Egypt", countryCode: "EG" },
  { countryName: "El Salvador", countryCode: "SV" },
  { countryName: "Equatorial Guinea", countryCode: "GQ" },
  { countryName: "Eritrea", countryCode: "ER" },
  { countryName: "Estonia", countryCode: "EE" },
  { countryName: "Ethiopia", countryCode: "ET" },
  { countryName: "Falkland Islands", countryCode: "FK" },
  { countryName: "Faroe Islands", countryCode: "FO" },
  { countryName: "Fiji", countryCode: "FJ" },
  { countryName: "Finland", countryCode: "FI" },
  { countryName: "France", countryCode: "FR" },
  { countryName: "French Guiana", countryCode: "GF" },
  { countryName: "French Polynesia", countryCode: "PF" },
  { countryName: "French Southern Territories", countryCode: "TF" },
  { countryName: "Gabon", countryCode: "GA" },
  { countryName: "Gambia", countryCode: "GM" },
  { countryName: "Georgia", countryCode: "GE" },
  { countryName: "Germany", countryCode: "DE" },
  { countryName: "Ghana", countryCode: "GH" },
  { countryName: "Gibraltar", countryCode: "GI" },
  { countryName: "Greece", countryCode: "GR" },
  { countryName: "Greenland", countryCode: "GL" },
  { countryName: "Grenada", countryCode: "GD" },
  { countryName: "Guadeloupe", countryCode: "GP" },
  { countryName: "Guatemala", countryCode: "GT" },
  { countryName: "Guernsey", countryCode: "GG" },
  { countryName: "Guinea", countryCode: "GN" },
  { countryName: "Guinea-Bissau", countryCode: "GW" },
  { countryName: "Guyana", countryCode: "GY" },
  { countryName: "Haiti", countryCode: "HT" },
  { countryName: "Heard Island and McDonald Islands", countryCode: "HM" },
  { countryName: "Honduras", countryCode: "HN" },
  { countryName: "Hong Kong", countryCode: "HK" },
  { countryName: "Hungary", countryCode: "HU" },
  { countryName: "Iceland", countryCode: "IS" },
  { countryName: "India", countryCode: "IN" },
  { countryName: "Indonesia", countryCode: "ID" },
  { countryName: "Iran", countryCode: "IR" },
  { countryName: "Iraq", countryCode: "IQ" },
  { countryName: "Republic of Ireland", countryCode: "IE" },
  { countryName: "Isle of Man", countryCode: "IM" },
  { countryName: "Israel", countryCode: "IL" },
  { countryName: "Italy", countryCode: "IT" },
  { countryName: "Ivory Coast", countryCode: "CI" },
  { countryName: "Jamaica", countryCode: "JM" },
  { countryName: "Japan", countryCode: "JP" },
  { countryName: "Jersey", countryCode: "JE" },
  { countryName: "Jordan", countryCode: "JO" },
  { countryName: "Kazakhstan", countryCode: "KZ" },
  { countryName: "Kenya", countryCode: "KE" },
  { countryName: "Kiribati", countryCode: "KI" },
  { countryName: "Kuwait", countryCode: "KW" },
  { countryName: "Kyrgyzstan", countryCode: "KG" },
  { countryName: "Laos", countryCode: "LA" },
  { countryName: "Latvia", countryCode: "LV" },
  { countryName: "Lebanon", countryCode: "LB" },
  { countryName: "Lesotho", countryCode: "LS" },
  { countryName: "Liberia", countryCode: "LR" },
  { countryName: "Libya", countryCode: "LY" },
  { countryName: "Liechtenstein", countryCode: "LI" },
  { countryName: "Lithuania", countryCode: "LT" },
  { countryName: "Luxembourg", countryCode: "LU" },
  { countryName: "Macao S.A.R., China", countryCode: "MO" },
  { countryName: "Macedonia", countryCode: "MK" },
  { countryName: "Madagascar", countryCode: "MG" },
  { countryName: "Malawi", countryCode: "MW" },
  { countryName: "Malaysia", countryCode: "MY" },
  { countryName: "Maldives", countryCode: "MV" },
  { countryName: "Mali", countryCode: "ML" },
  { countryName: "Malta", countryCode: "MT" },
  { countryName: "Marshall Islands", countryCode: "MH" },
  { countryName: "Martinique", countryCode: "MQ" },
  { countryName: "Mauritania", countryCode: "MR" },
  { countryName: "Mauritius", countryCode: "MU" },
  { countryName: "Mayotte", countryCode: "YT" },
  { countryName: "Mexico", countryCode: "MX" },
  { countryName: "Micronesia", countryCode: "FM" },
  { countryName: "Moldova", countryCode: "MD" },
  { countryName: "Monaco", countryCode: "MC" },
  { countryName: "Mongolia", countryCode: "MN" },
  { countryName: "Montenegro", countryCode: "ME" },
  { countryName: "Montserrat", countryCode: "MS" },
  { countryName: "Morocco", countryCode: "MA" },
  { countryName: "Mozambique", countryCode: "MZ" },
  { countryName: "Myanmar", countryCode: "MM" },
  { countryName: "Namibia", countryCode: "NA" },
  { countryName: "Nauru", countryCode: "NR" },
  { countryName: "Nepal", countryCode: "NP" },
  { countryName: "Netherlands", countryCode: "NL" },
  { countryName: "Netherlands Antilles", countryCode: "AN" },
  { countryName: "New Caledonia", countryCode: "NC" },
  { countryName: "New Zealand", countryCode: "NZ" },
  { countryName: "Nicaragua", countryCode: "NI" },
  { countryName: "Niger", countryCode: "NE" },
  { countryName: "Nigeria", countryCode: "NG" },
  { countryName: "Niue", countryCode: "NU" },
  { countryName: "Norfolk Island", countryCode: "NF" },
  { countryName: "North Korea", countryCode: "KP" },
  { countryName: "Norway", countryCode: "NO" },
  { countryName: "Oman", countryCode: "OM" },
  { countryName: "Pakistan", countryCode: "PK" },
  { countryName: "Palestinian Territory", countryCode: "PS" },
  { countryName: "Panama", countryCode: "PA" },
  { countryName: "Papua New Guinea", countryCode: "PG" },
  { countryName: "Paraguay", countryCode: "PY" },
  { countryName: "Peru", countryCode: "PE" },
  { countryName: "Philippines", countryCode: "PH" },
  { countryName: "Pitcairn", countryCode: "PN" },
  { countryName: "Poland", countryCode: "PL" },
  { countryName: "Portugal", countryCode: "PT" },
  { countryName: "Qatar", countryCode: "QA" },
  { countryName: "Reunion", countryCode: "RE" },
  { countryName: "Romania", countryCode: "RO" },
  { countryName: "Russia", countryCode: "RU" },
  { countryName: "Rwanda", countryCode: "RW" },
  { countryName: "Saint Barthélemy", countryCode: "BL" },
  { countryName: "Saint Helena", countryCode: "SH" },
  { countryName: "Saint Kitts and Nevis", countryCode: "KN" },
  { countryName: "Saint Lucia", countryCode: "LC" },
  { countryName: "Saint Martin (French part)", countryCode: "MF" },
  { countryName: "Saint Martin (Dutch part)", countryCode: "SX" },
  { countryName: "Saint Pierre and Miquelon", countryCode: "PM" },
  { countryName: "Saint Vincent and the Grenadines", countryCode: "VC" },
  { countryName: "San Marino", countryCode: "SM" },
  { countryName: "São Tomé and Príncipe", countryCode: "ST" },
  { countryName: "Saudi Arabia", countryCode: "SA" },
  { countryName: "Senegal", countryCode: "SN" },
  { countryName: "Serbia", countryCode: "RS" },
  { countryName: "Seychelles", countryCode: "SC" },
  { countryName: "Sierra Leone", countryCode: "SL" },
  { countryName: "Singapore", countryCode: "SG" },
  { countryName: "Slovakia", countryCode: "SK" },
  { countryName: "Slovenia", countryCode: "SI" },
  { countryName: "Solomon Islands", countryCode: "SB" },
  { countryName: "Somalia", countryCode: "SO" },
  { countryName: "South Africa", countryCode: "ZA" },
  { countryName: "South Georgia/Sandwich Islands", countryCode: "GS" },
  { countryName: "South Korea", countryCode: "KR" },
  { countryName: "South Sudan", countryCode: "SS" },
  { countryName: "Spain", countryCode: "ES" },
  { countryName: "Sri Lanka", countryCode: "LK" },
  { countryName: "Sudan", countryCode: "SD" },
  { countryName: "Suriname", countryCode: "SR" },
  { countryName: "Svalbard and Jan Mayen", countryCode: "SJ" },
  { countryName: "Swaziland", countryCode: "SZ" },
  { countryName: "Sweden", countryCode: "SE" },
  { countryName: "Switzerland", countryCode: "CH" },
  { countryName: "Syria", countryCode: "SY" },
  { countryName: "Taiwan", countryCode: "TW" },
  { countryName: "Tajikistan", countryCode: "TJ" },
  { countryName: "Tanzania", countryCode: "TZ" },
  { countryName: "Thailand", countryCode: "TH" },
  { countryName: "Timor-Leste", countryCode: "TL" },
  { countryName: "Togo", countryCode: "TG" },
  { countryName: "Tokelau", countryCode: "TK" },
  { countryName: "Tonga", countryCode: "TO" },
  { countryName: "Trinidad and Tobago", countryCode: "TT" },
  { countryName: "Tunisia", countryCode: "TN" },
  { countryName: "Turkey", countryCode: "TR" },
  { countryName: "Turkmenistan", countryCode: "TM" },
  { countryName: "Turks and Caicos Islands", countryCode: "TC" },
  { countryName: "Tuvalu", countryCode: "TV" },
  { countryName: "Uganda", countryCode: "UG" },
  { countryName: "Ukraine", countryCode: "UA" },
  { countryName: "United Arab Emirates", countryCode: "AE" },
  { countryName: "United Kingdom (UK)", countryCode: "GB" },
  { countryName: "United States (US)", countryCode: "US" },
  { countryName: "Uruguay", countryCode: "UY" },
  { countryName: "Uzbekistan", countryCode: "UZ" },
  { countryName: "Vanuatu", countryCode: "VU" },
  { countryName: "Vatican", countryCode: "VA" },
  { countryName: "Venezuela", countryCode: "VE" },
  { countryName: "Vietnam", countryCode: "VN" },
  { countryName: "Wallis and Futuna", countryCode: "WF" },
  { countryName: "Western Sahara", countryCode: "EH" },
  { countryName: "Western Samoa", countryCode: "WS" },
  { countryName: "Yemen", countryCode: "YE" },
  { countryName: "Zambia", countryCode: "ZM" },
  { countryName: "Zimbabwe", countryCode: "ZW" }
];
const _sfc_main = {
  __name: "CountrySelect",
  __ssrInlineRender: true,
  props: ["modelValue", "props.allowedCountries"],
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const countriesToShow = computed(
      () => {
        var _a;
        return ((_a = props.allowedCountries) == null ? void 0 : _a.length) ? countries.filter((country) => props.allowedCountries.includes(country.countryCode)) : countries;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({ value: __props.modelValue }, _attrs))} data-v-a0ab6c01><option value="" disabled data-v-a0ab6c01>Select a country</option><!--[-->`);
      ssrRenderList(unref(countriesToShow), (country) => {
        _push(`<option${ssrRenderAttr("value", country.countryCode)} data-v-a0ab6c01>${ssrInterpolate(country.countryName)}</option>`);
      });
      _push(`<!--]--></select>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/CountrySelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0ab6c01"]]);
export {
  StateSelect as S,
  _sfc_main$1 as _,
  __nuxt_component_1 as a
};
//# sourceMappingURL=CountrySelect-oCBY2zra.js.map
