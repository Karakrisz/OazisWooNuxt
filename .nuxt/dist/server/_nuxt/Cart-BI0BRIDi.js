import { u as useCart, _ as __nuxt_component_0$1, a as __nuxt_component_2, b as _sfc_main$2 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./TrashIcon-DgRm1Dn1.js";
import { defineComponent, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "EmptyCart",
  __ssrInlineRender: true,
  setup(__props) {
    useCart();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TrashIcon = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "cursor-pointer top-6 right-6 md:right-8 absolute",
        title: "Empty Cart"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TrashIcon, null, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/cartElements/EmptyCart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const { cart, toggleCart, isUpdatingCart } = useCart();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Icon = __nuxt_component_0$1;
      const _component_EmptyCart = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_LoadingIcon = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-0 bottom-0 right-0 z-50 flex flex-col w-11/12 max-w-lg overflow-x-hidden bg-white shadow-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:close-outline",
        class: "absolute p-1 bg-white rounded-lg shadow-lg top-6 left-6 md:left-8",
        size: "34",
        onClick: ($event) => unref(toggleCart)(false)
      }, null, _parent));
      if (unref(cart) && !unref(cart).isEmpty) {
        _push(ssrRenderComponent(_component_EmptyCart, { class: "rounded-lg shadow-lg p-1.5 hover:bg-red-400 hover:text-white" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-8 text-center">${ssrInterpolate(_ctx.$t("messages.shop.cart"))} `);
      if ((_b = (_a = unref(cart)) == null ? void 0 : _a.contents) == null ? void 0 : _b.productCount) {
        _push(`<span> (${ssrInterpolate((_d = (_c = unref(cart)) == null ? void 0 : _c.contents) == null ? void 0 : _d.productCount)}) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (unref(isUpdatingCart)) {
        _push(`<div class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-25">`);
        _push(ssrRenderComponent(_component_LoadingIcon, null, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Cart-BI0BRIDi.js.map
