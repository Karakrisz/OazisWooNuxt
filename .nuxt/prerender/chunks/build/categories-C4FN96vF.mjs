import { _ as __nuxt_component_6 } from './CategoryCard-D733WO5x.mjs';
import { e as useAsyncGql, d as useHead } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';
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

export { _sfc_main as default };
//# sourceMappingURL=categories-C4FN96vF.mjs.map
