import { a as __nuxt_component_2 } from "../server.mjs";
import { u as useWishlist } from "./useWishlist-BIY00RKh.js";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WishList",
  __ssrInlineRender: true,
  setup(__props) {
    const { theList } = useWishlist();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow min-h-[400px] w-full p-4 md:p-12 justify-center items-start" }, _attrs))}><div class="container"><div class="flex justify-between items-center mb-4"><h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("messages.shop.wishlist"))}</h1><span class="text-gray-400">Items: ${ssrInterpolate(unref(theList).length)}</span></div>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/WishList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=WishList-CrRgkyZD.js.map
