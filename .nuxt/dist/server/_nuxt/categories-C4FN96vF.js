import { _ as __nuxt_component_6 } from "./CategoryCard-D733WO5x.js";
import { e as useAsyncGql, d as useHead } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "categories",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql("getProductCategories")), __temp = await __temp, __restore(), __temp);
    const productCategories = (_a = data.value.productCategories) == null ? void 0 : _a.nodes;
    useHead({
      title: `Categories`,
      meta: [{ name: "description", content: "All product categories" }],
      link: [{ rel: "canonical", href: "https://v3.woonuxt.com/categories" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategoryCard = __nuxt_component_6;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      if (unref(productCategories) && unref(productCategories).length) {
        _push(`<div class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4"><!--[-->`);
        ssrRenderList(unref(productCategories), (category, i) => {
          _push(ssrRenderComponent(_component_CategoryCard, {
            key: i,
            node: category,
            "image-loading": i <= 2 ? "eager" : "lazy"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=categories-C4FN96vF.js.map
