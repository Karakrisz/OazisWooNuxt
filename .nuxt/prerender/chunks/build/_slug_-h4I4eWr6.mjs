import { _ as _sfc_main$5, a as _sfc_main$4, b as _sfc_main$b, c as _sfc_main$3, d as __nuxt_component_4 } from './ProductGrid-deYymTZt.mjs';
import { t as useProducts, f as useHelpers, o as useAppConfig, q as useRoute, e as useAsyncGql, d as useHead } from './server.mjs';
import { defineComponent, withAsyncContext, watch, unref, mergeProps, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';
import './ProductCard-CyaaayoS.mjs';
import './ProductPrice-DSq3K8MZ.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/graphql-request/build/esm/index.js';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/cookie-es/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/utils/lib/css/icon.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const { setProducts, updateProductList } = useProducts();
    useHelpers();
    const { storeSettings } = useAppConfig();
    const route = useRoute();
    const slug = route.params.slug;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql("getProducts", { slug })), __temp = await __temp, __restore(), __temp);
    const productsInCategory = ((_b = (_a = data.value) == null ? void 0 : _a.products) == null ? void 0 : _b.nodes) || [];
    setProducts(productsInCategory);
    watch(
      () => route.query,
      () => {
        if (route.name !== "product-category-slug")
          return;
        updateProductList();
      }
    );
    useHead({
      title: "Products",
      meta: [{ hid: "description", name: "description", content: "Products" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Filters = _sfc_main$5;
      const _component_ProductResultCount = _sfc_main$4;
      const _component_OrderByDropdown = _sfc_main$b;
      const _component_ShowFilterTrigger = _sfc_main$3;
      const _component_ProductGrid = __nuxt_component_4;
      if (unref(productsInCategory).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container flex items-start gap-16" }, _attrs))}>`);
        if (unref(storeSettings).showFilters) {
          _push(ssrRenderComponent(_component_Filters, { "hide-categories": true }, null, _parent));
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
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/product-category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-h4I4eWr6.mjs.map
