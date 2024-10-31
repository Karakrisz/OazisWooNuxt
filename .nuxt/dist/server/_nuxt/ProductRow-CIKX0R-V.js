import { _ as _sfc_main$1 } from "./ProductCard-CyaaayoS.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "ProductRow",
  __ssrInlineRender: true,
  props: {
    products: { type: Array, default: null }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = _sfc_main$1;
      if (__props.products) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-8" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.products, (node, i) => {
          _push(ssrRenderComponent(_component_ProductCard, {
            key: node.databaseId,
            class: ["w-full", {
              hidden: i === __props.products.length - 1,
              "lg:block": i === __props.products.length - 1
            }],
            node,
            index: i
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/ProductRow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductRow-CIKX0R-V.js.map
