import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as __nuxt_component_4, e as _sfc_main$5 } from "./ProductGrid-deYymTZt.js";
import { t as useProducts, q as useRoute, o as useAppConfig, f as useHelpers, e as useAsyncGql, d as useHead } from "../server.mjs";
import { defineComponent, withAsyncContext, watch, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "@vueform/slider";
import "./ProductCard-CyaaayoS.js";
import "./ProductPrice-DSq3K8MZ.js";
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
  __name: "products",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { setProducts, updateProductList } = useProducts();
    const route = useRoute();
    const { storeSettings } = useAppConfig();
    useHelpers();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql("getProducts")), __temp = await __temp, __restore(), __temp);
    const allProducts = ((_b = (_a = data.value) == null ? void 0 : _a.products) == null ? void 0 : _b.nodes) || [];
    setProducts(allProducts);
    watch(
      () => route.query,
      () => {
        if (route.name !== "products") return;
        updateProductList();
      }
    );
    useHead({
      title: `Products`,
      meta: [{ hid: "description", name: "description", content: "Products" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Filters = _sfc_main$1;
      const _component_ProductResultCount = _sfc_main$2;
      const _component_OrderByDropdown = _sfc_main$3;
      const _component_ShowFilterTrigger = _sfc_main$4;
      const _component_ProductGrid = __nuxt_component_4;
      const _component_NoProductsFound = _sfc_main$5;
      if (unref(allProducts).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container flex items-start gap-16" }, _attrs))}>`);
        if (unref(storeSettings).showFilters) {
          _push(ssrRenderComponent(_component_Filters, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="w-full"><div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">`);
        _push(ssrRenderComponent(_component_ProductResultCount, null, null, _parent));
        if (unref(storeSettings).showOrderByDropdown) {
          _push(ssrRenderComponent(_component_OrderByDropdown, { class: "hidden md:inline-flex" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(storeSettings).showFilters) {
          _push(ssrRenderComponent(_component_ShowFilterTrigger, { class: "md:hidden" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ProductGrid, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(ssrRenderComponent(_component_NoProductsFound, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Could not fecth products from your store. Please check your configuration.`);
            } else {
              return [
                createTextVNode("Could not fecth products from your store. Please check your configuration.")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=products-DID38f0m.js.map
