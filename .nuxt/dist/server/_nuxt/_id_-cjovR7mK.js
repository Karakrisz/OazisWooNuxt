import { g as __nuxt_component_10 } from "../server.mjs";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const post = ref(null);
    const error = ref(null);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "supage-content position-relative" }, _attrs))}>`);
      if (loading.value) {
        _push(`<div><h2 class="supage-content__h2 f-300">Loading...</h2></div>`);
      } else if (error.value) {
        _push(`<div><h2 class="supage-content__h2 f-300">${ssrInterpolate(error.value)}</h2></div>`);
      } else if (post.value) {
        _push(`<div><h2 class="supage-content__h2 f-300">${ssrInterpolate(post.value.title)}</h2><img class="supage-content__img"${ssrRenderAttr("src", `https://fuggonyoazis.hu/api/public/storage/${post.value.image}`)}${ssrRenderAttr("alt", post.value.title)}><p class="supage-content__p">${post.value.body ?? ""}</p></div>`);
      } else {
        _push(`<div><h2 class="supage-content__h2 f-300">No post available.</h2></div>`);
      }
      _push(`<div class="supage-content__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "supage-content__link-box__NuxtLink text-color-w f-600",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kezdőlap`);
          } else {
            return [
              createTextVNode("Kezdőlap")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-cjovR7mK.js.map
