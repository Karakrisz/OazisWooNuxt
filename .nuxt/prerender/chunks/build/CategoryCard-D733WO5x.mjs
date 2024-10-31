import { c as _export_sfc, f as useHelpers, g as __nuxt_component_10, h as __nuxt_component_3$2 } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';

const imgWidth = 220;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CategoryCard",
  __ssrInlineRender: true,
  props: {
    node: { type: Object, required: true },
    imageLoading: { type: String, default: "lazy" }
  },
  setup(__props) {
    const { fallbackImage } = useHelpers();
    const imgHeight = Math.round(imgWidth * 1.125);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      const _component_NuxtImg = __nuxt_component_3$2;
      if (__props.node) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: `/product-category/${decodeURIComponent(__props.node.slug)}`,
          class: "relative flex justify-center overflow-hidden border border-white rounded-xl item snap-mandatory snap-x"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2;
            var _a, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                width: imgWidth,
                height: unref(imgHeight),
                class: "absolute inset-0 object-cover w-full h-full",
                src: ((_a = __props.node.image) == null ? void 0 : _a.sourceUrl) || unref(fallbackImage),
                alt: ((_b = __props.node.image) == null ? void 0 : _b.altText) || __props.node.name,
                title: ((_c = __props.node.image) == null ? void 0 : _c.title) || __props.node.name,
                loading: __props.imageLoading,
                sizes: `${imgWidth / 2}px md:${imgWidth}px`,
                placeholder: "",
                "placeholder-class": "blur-xl"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2" data-v-9fe96486${_scopeId}></div><span class="relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4" data-v-9fe96486${_scopeId}>${(_a2 = __props.node.name) != null ? _a2 : ""}</span>`);
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  width: imgWidth,
                  height: unref(imgHeight),
                  class: "absolute inset-0 object-cover w-full h-full",
                  src: ((_d = __props.node.image) == null ? void 0 : _d.sourceUrl) || unref(fallbackImage),
                  alt: ((_e = __props.node.image) == null ? void 0 : _e.altText) || __props.node.name,
                  title: ((_f = __props.node.image) == null ? void 0 : _f.title) || __props.node.name,
                  loading: __props.imageLoading,
                  sizes: `${imgWidth / 2}px md:${imgWidth}px`,
                  placeholder: "",
                  "placeholder-class": "blur-xl"
                }, null, 8, ["height", "src", "alt", "title", "loading", "sizes"]),
                createVNode("div", { class: "absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2" }),
                createVNode("span", {
                  class: "relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4",
                  innerHTML: __props.node.name
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/CategoryCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fe96486"]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=CategoryCard-D733WO5x.mjs.map
