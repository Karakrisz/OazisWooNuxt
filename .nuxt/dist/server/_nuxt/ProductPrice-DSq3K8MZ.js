import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductPrice",
  __ssrInlineRender: true,
  props: {
    regularPrice: {},
    salePrice: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.regularPrice) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex font-semibold" }, _attrs))}><span class="${ssrRenderClass({ "text-gray-400 line-through font-normal": _ctx.salePrice })}">${_ctx.regularPrice ?? ""}</span>`);
        if (_ctx.salePrice) {
          _push(`<span class="ml-2">${_ctx.salePrice ?? ""}</span>`);
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
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductPrice-DSq3K8MZ.js.map
