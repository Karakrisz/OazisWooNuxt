import { w as useFiltering, _ as __nuxt_component_0 } from "../server.mjs";
import { b as _sfc_main$1 } from "./ProductCard-CyaaayoS.js";
import { defineComponent, withAsyncContext, ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
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
import "./ProductPrice-DSq3K8MZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StarRatingFilter",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getFilter, setFilter, isFiltersActive } = ([__temp, __restore] = withAsyncContext(() => useFiltering()), __temp = await __temp, __restore(), __temp);
    const selectedTerms = ref(getFilter("rating"));
    const isOpen = ref(true);
    watch(isFiltersActive, () => {
      if (!isFiltersActive.value) selectedTerms.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=StarRatingFilter-Cmf1-QDo.js.map
