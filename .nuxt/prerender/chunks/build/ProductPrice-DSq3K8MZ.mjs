import { defineComponent, mergeProps, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductPrice",
  __ssrInlineRender: true,
  props: {
    regularPrice: {},
    salePrice: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      if (_ctx.regularPrice) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex font-semibold" }, _attrs))}><span class="${ssrRenderClass({ "text-gray-400 line-through font-normal": _ctx.salePrice })}">${(_a = _ctx.regularPrice) != null ? _a : ""}</span>`);
        if (_ctx.salePrice) {
          _push(`<span class="ml-2">${(_b = _ctx.salePrice) != null ? _b : ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/ProductPrice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProductPrice-DSq3K8MZ.mjs.map
