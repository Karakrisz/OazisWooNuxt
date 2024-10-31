import { _ as _sfc_main$1 } from "./WishList-CrRgkyZD.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { c as _export_sfc } from "../server.mjs";
import "./useWishlist-BIY00RKh.js";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_WishList = _sfc_main$1;
  _push(ssrRenderComponent(_component_WishList, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/wishlist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wishlist = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  wishlist as default
};
//# sourceMappingURL=wishlist-DqAA8pyL.js.map
