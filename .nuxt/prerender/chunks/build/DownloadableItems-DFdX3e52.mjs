import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';
import { c as _export_sfc, f as useHelpers, g as __nuxt_component_10 } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "orderStatusLabel",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    const props = __props;
    const readableStatus = computed(() => {
      var _a, _b;
      return ((_b = (_a = props.order) == null ? void 0 : _a.status) == null ? void 0 : _b.replace(/_/g, " ")) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [`order-${(_a = _ctx.order) == null ? void 0 : _a.status}`, "order-status"]
      }, _attrs))} data-v-0773288d>${ssrInterpolate(unref(readableStatus))}</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/orderStatusLabel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0773288d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DownloadableItems",
  __ssrInlineRender: true,
  props: {
    downloadableItems: { type: Object, default: [] }
  },
  setup(__props) {
    const { formatDate } = useHelpers();
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<table${ssrRenderAttrs(mergeProps({
        class: "w-full text-left table-auto",
        "aria-label": "Download List"
      }, _attrs))} data-v-e1d90b2a><thead data-v-e1d90b2a><tr data-v-e1d90b2a><th data-v-e1d90b2a>${ssrInterpolate(_ctx.$t("messages.general.product"))}</th><th data-v-e1d90b2a>${ssrInterpolate(_ctx.$t("messages.shop.downloadsRemaining"))}</th><th data-v-e1d90b2a>${ssrInterpolate(_ctx.$t("messages.shop.expires"))}</th><th data-v-e1d90b2a>${ssrInterpolate(_ctx.$t("messages.general.download"))}</th></tr></thead><tbody data-v-e1d90b2a><!--[-->`);
      ssrRenderList(props.downloadableItems, (item) => {
        _push(`<tr data-v-e1d90b2a><td class="rounded-l-lg" data-v-e1d90b2a>`);
        if (item.product) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${item.product.slug}`,
            class: "hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.product.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.product.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td data-v-e1d90b2a>${ssrInterpolate(item.downloadsRemaining || "\u221E")}</td><td data-v-e1d90b2a>${ssrInterpolate(item.accessExpires ? unref(formatDate)(item.accessExpires) : "Never")}</td>`);
        if (item.url) {
          _push(`<td data-v-e1d90b2a><a${ssrRenderAttr("href", item.url)}${ssrRenderAttr("download", item.name)} class="text-primary hover:text-primary-dark hover:underline" data-v-e1d90b2a>${ssrInterpolate(item.name)}</a></td>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tr>`);
      });
      _push(`<!--]--></tbody></table>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/DownloadableItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1d90b2a"]]);

export { __nuxt_component_3 as _, __nuxt_component_5 as a };
//# sourceMappingURL=DownloadableItems-DFdX3e52.mjs.map
