import { w as useFiltering, _ as __nuxt_component_0$1 } from './server.mjs';
import { a as _sfc_main$1 } from './ProductCard-CyaaayoS.mjs';
import { defineComponent, withAsyncContext, ref, watch, unref, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';
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
import './ProductPrice-DSq3K8MZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StarRatingFilter",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getFilter, setFilter, isFiltersActive } = ([__temp, __restore] = withAsyncContext(() => useFiltering()), __temp = await __temp, __restore(), __temp);
    const selectedTerms = ref(getFilter("rating"));
    const isOpen = ref(true);
    watch(isFiltersActive, () => {
      if (!isFiltersActive.value)
        selectedTerms.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_StarRating = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center"><span>${ssrInterpolate(_ctx.$t("messages.shop.rating"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        style: unref(isOpen) ? null : { display: "none" },
        name: "ion:chevron-up-outline"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        style: !unref(isOpen) ? null : { display: "none" },
        name: "ion:chevron-down-outline"
      }, null, _parent));
      _push(`</div>`);
      if (unref(isOpen)) {
        _push(`<div class="mt-3 text-sm grid text-gray-500 gap-3"><div class="cursor-pointer flex gap-2 items-center"><input id="star-five"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(selectedTerms), "5")) ? " checked" : ""} type="radio" value="5" aria-label="5 stars"><label class="flex items-center" for="star-five">`);
        _push(ssrRenderComponent(_component_StarRating, {
          rating: 5,
          size: 16
        }, null, _parent));
        _push(`</label></div><div class="cursor-pointer flex gap-2 items-center"><input id="star-four"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(selectedTerms), "4")) ? " checked" : ""} type="radio" value="4" aria-label="4 stars"><label class="flex items-center" for="star-four">`);
        _push(ssrRenderComponent(_component_StarRating, {
          rating: 4,
          size: 16
        }, null, _parent));
        _push(`<span class="ml-1 text-xs">&amp; ${ssrInterpolate(_ctx.$t("messages.general.up"))}</span></label></div><div class="cursor-pointer flex gap-2 items-center"><input id="star-three"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(selectedTerms), "3")) ? " checked" : ""} type="radio" value="3" aria-label="3 stars"><label class="flex items-center" for="star-three">`);
        _push(ssrRenderComponent(_component_StarRating, {
          rating: 3,
          size: 16
        }, null, _parent));
        _push(`<span class="ml-1 text-xs">&amp; ${ssrInterpolate(_ctx.$t("messages.general.up"))}</span></label></div><div class="cursor-pointer flex gap-2 items-center"><input id="star-two"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(selectedTerms), "2")) ? " checked" : ""} type="radio" value="2" aria-label="2 stars"><label class="flex items-center" for="star-two">`);
        _push(ssrRenderComponent(_component_StarRating, {
          rating: 2,
          size: 16
        }, null, _parent));
        _push(`<span class="ml-1 text-xs">&amp; ${ssrInterpolate(_ctx.$t("messages.general.up"))}</span></label></div><div class="cursor-pointer flex gap-2 items-center"><input id="star-one"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(selectedTerms), "1")) ? " checked" : ""} type="radio" value="1" aria-label="1 star"><label class="flex items-center" for="star-one">`);
        _push(ssrRenderComponent(_component_StarRating, {
          rating: 1,
          size: 16
        }, null, _parent));
        _push(`<span class="ml-1 text-xs">&amp; ${ssrInterpolate(_ctx.$t("messages.general.up"))}</span></label></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/StarRatingFilter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=StarRatingFilter-Cmf1-QDo.mjs.map
