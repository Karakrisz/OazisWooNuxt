import { p as useI18n, o as useAppConfig, c as _export_sfc, _ as __nuxt_component_0$1, q as useRoute, g as __nuxt_component_10, h as __nuxt_component_3 } from "../server.mjs";
import { defineComponent, computed, unref, mergeProps, useSSRContext, ref, watch, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./ProductPrice-DSq3K8MZ.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SaleBadge",
  __ssrInlineRender: true,
  props: {
    node: { type: Object, required: true }
  },
  setup(__props) {
    const { t } = useI18n();
    const { node } = __props;
    const { storeSettings } = useAppConfig();
    const salePercentage = computed(() => {
      if (!(node == null ? void 0 : node.rawSalePrice) || !(node == null ? void 0 : node.rawRegularPrice)) return "";
      const salePrice = parseFloat(node == null ? void 0 : node.rawSalePrice);
      const regularPrice = parseFloat(node == null ? void 0 : node.rawRegularPrice);
      return Math.round((salePrice - regularPrice) / regularPrice * 100) + ` %`;
    });
    const showSaleBadge = computed(() => node.rawSalePrice && storeSettings.saleBadge !== "hidden");
    const textToDisplay = computed(() => {
      if ((storeSettings == null ? void 0 : storeSettings.saleBadge) === "percent") return salePercentage.value;
      return t("messages.shop.onSale") ? t("messages.shop.onSale") : "Sale";
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(showSaleBadge)) {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "red-badge" }, _attrs))} data-v-395a4e44>${ssrInterpolate(unref(textToDisplay))}</span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/SaleBadge.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-395a4e44"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StarRating",
  __ssrInlineRender: true,
  props: {
    rating: { type: Number, default: 0 },
    count: { type: Number, default: null },
    hideCount: { type: Boolean, default: false },
    size: { type: Number, default: 14 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center" }, _attrs))}><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(ssrRenderComponent(_component_Icon, {
          key: i,
          name: "ion:star",
          size: __props.size + "",
          class: "mr-[2px]",
          style: { color: __props.rating < i ? "#ccc" : "#FBBE24" }
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (__props.count !== null && !__props.hideCount) {
        _push(`<span class="text-xs ml-1 text-gray-500">(${ssrInterpolate(__props.count)})</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/StarRating.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const imgWidth = 220;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    node: { type: Object, required: true },
    index: { type: Number, default: 1 }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const route = useRoute();
    const { storeSettings } = useAppConfig();
    const props = __props;
    const imgHeight = Math.round(imgWidth * 1.125);
    const filterQuery = ref((_a = route.query) == null ? void 0 : _a.filter);
    const paColor = ref(((_d = (_c = (_b = filterQuery.value) == null ? void 0 : _b.split("pa_color[")[1]) == null ? void 0 : _c.split("]")[0]) == null ? void 0 : _d.split(",")) || []);
    watch(
      () => route.query,
      () => {
        var _a2, _b2, _c2;
        filterQuery.value = route.query.filter;
        paColor.value = ((_c2 = (_b2 = (_a2 = filterQuery.value) == null ? void 0 : _a2.split("pa_color[")[1]) == null ? void 0 : _b2.split("]")[0]) == null ? void 0 : _c2.split(",")) || [];
      }
    );
    const mainImage = computed(() => {
      var _a2, _b2, _c2, _d2;
      return ((_b2 = (_a2 = props.node) == null ? void 0 : _a2.image) == null ? void 0 : _b2.producCardSourceUrl) || ((_d2 = (_c2 = props.node) == null ? void 0 : _c2.image) == null ? void 0 : _d2.sourceUrl) || "/images/placeholder.jpg";
    });
    const imagetoDisplay = computed(() => {
      var _a2, _b2, _c2, _d2;
      if (paColor.value.length) {
        const activeColorImage = (_b2 = (_a2 = props.node) == null ? void 0 : _a2.variations) == null ? void 0 : _b2.nodes.filter((variation) => {
          var _a3;
          const hasMatchingAttributes = (_a3 = variation.attributes) == null ? void 0 : _a3.nodes.some((attribute) => paColor.value.some((color) => attribute.value.includes(color)));
          const hasMatchingSlug = paColor.value.some((color) => {
            var _a4;
            return (_a4 = variation.slug) == null ? void 0 : _a4.includes(color);
          });
          return hasMatchingAttributes || hasMatchingSlug;
        });
        if (activeColorImage == null ? void 0 : activeColorImage.length) return ((_c2 = activeColorImage[0].image) == null ? void 0 : _c2.producCardSourceUrl) || ((_d2 = activeColorImage[0].image) == null ? void 0 : _d2.sourceUrl) || mainImage.value;
      }
      return mainImage.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      const _component_SaleBadge = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_3;
      const _component_StarRating = _sfc_main$1;
      const _component_ProductPrice = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative product-card" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${decodeURIComponent(__props.node.slug)}`,
        title: __props.node.name
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_SaleBadge, {
              node: __props.node,
              class: "absolute top-2 right-2"
            }, null, _parent2, _scopeId));
            if (unref(imagetoDisplay)) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                width: imgWidth,
                height: unref(imgHeight),
                src: unref(imagetoDisplay),
                alt: ((_a2 = __props.node.image) == null ? void 0 : _a2.altText) || __props.node.name || "Product image",
                title: ((_b2 = __props.node.image) == null ? void 0 : _b2.title) || __props.node.name,
                loading: __props.index <= 3 ? "eager" : "lazy",
                sizes: `${imgWidth / 2}px md:${imgWidth}px`,
                placeholder: "",
                "placeholder-class": "blur-xl"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_SaleBadge, {
                node: __props.node,
                class: "absolute top-2 right-2"
              }, null, 8, ["node"]),
              unref(imagetoDisplay) ? (openBlock(), createBlock(_component_NuxtImg, {
                key: 0,
                width: imgWidth,
                height: unref(imgHeight),
                src: unref(imagetoDisplay),
                alt: ((_c2 = __props.node.image) == null ? void 0 : _c2.altText) || __props.node.name || "Product image",
                title: ((_d2 = __props.node.image) == null ? void 0 : _d2.title) || __props.node.name,
                loading: __props.index <= 3 ? "eager" : "lazy",
                sizes: `${imgWidth / 2}px md:${imgWidth}px`,
                placeholder: "",
                "placeholder-class": "blur-xl"
              }, null, 8, ["height", "src", "alt", "title", "loading", "sizes"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-2">`);
      if (unref(storeSettings).showReviews) {
        _push(ssrRenderComponent(_component_StarRating, {
          rating: __props.node.averageRating,
          count: __props.node.reviewCount
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/product/${decodeURIComponent(__props.node.slug)}`,
        title: __props.node.name
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="mb-2 font-light leading-tight"${_scopeId}>${ssrInterpolate(__props.node.name)}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "mb-2 font-light leading-tight" }, toDisplayString(__props.node.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ProductPrice, {
        class: "text-sm",
        "sale-price": __props.node.salePrice,
        "regular-price": __props.node.regularPrice
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  __nuxt_component_0 as a,
  _sfc_main$1 as b
};
//# sourceMappingURL=ProductCard-CyaaayoS.js.map
