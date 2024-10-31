import { o as useAppConfig, s as useImage, n as useRuntimeConfig, g as __nuxt_component_10 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';

const faviconUrl = "/logo.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const { siteName } = useAppConfig();
    const runtimeConfig = useRuntimeConfig();
    const img = useImage();
    const logoUrl = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.LOGO) ? img((_b = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _b.LOGO) : null;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: "/" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(logoUrl)) {
              _push2(`<img${ssrRenderAttr("src", unref(logoUrl))} alt="Logo" class="object-contain h-10"${_scopeId}>`);
            } else {
              _push2(`<div class="flex items-center gap-2 text-lg font-bold"${_scopeId}><img${ssrRenderAttr("src", faviconUrl)} alt="Logo" width="32" height="32"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(siteName))}</span></div>`);
            }
          } else {
            return [
              unref(logoUrl) ? (openBlock(), createBlock("img", {
                key: 0,
                src: unref(logoUrl),
                alt: "Logo",
                class: "object-contain h-10"
              }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "flex items-center gap-2 text-lg font-bold"
              }, [
                createVNode("img", {
                  src: faviconUrl,
                  alt: "Logo",
                  width: "32",
                  height: "32"
                }),
                createVNode("span", null, toDisplayString(unref(siteName)), 1)
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Logo-BLqsAYqL.mjs.map
