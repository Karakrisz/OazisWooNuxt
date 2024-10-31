import { w as useFiltering } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
import "destr";
import "klona";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@iconify/vue";
import "graphql-request";
import "@iconify/utils/lib/css/icon";
const _sfc_main = {
  __name: "ResetFiltersButton",
  __ssrInlineRender: true,
  setup(__props) {
    useFiltering();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-primary rounded-lg font-bold mt-8 text-center text-white text-sm w-full p-2" }, _attrs))}>${ssrInterpolate(_ctx.$t("messages.general.clearFilters"))}</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/ResetFiltersButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ResetFiltersButton-D6NvJ5zR.js.map
