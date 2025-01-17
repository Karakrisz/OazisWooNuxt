import { v as useSorting, o as useAppConfig, _ as __nuxt_component_0, w as useFiltering, n as useRuntimeConfig, e as useAsyncGql, q as useRoute, c as _export_sfc, f as useHelpers, t as useProducts, g as __nuxt_component_10, x as useSearching } from "../server.mjs";
import { withAsyncContext, ref, watch, mergeProps, unref, useSSRContext, isRef, defineAsyncComponent, defineComponent, computed, withCtx, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import Slider from "@vueform/slider";
import { _ as _sfc_main$c } from "./ProductCard-CyaaayoS.js";
const _sfc_main$b = {
  __name: "OrderByDropdown",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getOrderQuery, setOrderQuery } = ([__temp, __restore] = withAsyncContext(() => useSorting()), __temp = await __temp, __restore(), __temp);
    const { storeSettings } = useAppConfig();
    const selectedOrder = ref(getOrderQuery());
    const orderby = ref(selectedOrder.value.orderBy || "date");
    const order = ref(selectedOrder.value.order);
    watch([orderby, order], () => {
      setOrderQuery(orderby.value, order.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex ml-auto -space-x-px shadow-sm rounded-m isolate" }, _attrs))}><button class="relative inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20" aria-label="Sort">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:filter-outline",
        size: "18",
        class: [unref(order) === "ASC" ? "rotate-180" : "", "transition-transform transform transform-origin-center"]
      }, null, _parent));
      _push(`</button><select class="bg-white rounded-l-none" aria-label="Order by"><option value="date"${ssrIncludeBooleanAttr(Array.isArray(unref(orderby)) ? ssrLooseContain(unref(orderby), "date") : ssrLooseEqual(unref(orderby), "date")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("messages.general.latest"))}</option><option value="alphabetically"${ssrIncludeBooleanAttr(Array.isArray(unref(orderby)) ? ssrLooseContain(unref(orderby), "alphabetically") : ssrLooseEqual(unref(orderby), "alphabetically")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("messages.general.alphabetically"))}</option><option value="price"${ssrIncludeBooleanAttr(Array.isArray(unref(orderby)) ? ssrLooseContain(unref(orderby), "price") : ssrLooseEqual(unref(orderby), "price")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("messages.shop.price"))}</option>`);
      if (unref(storeSettings).showReviews) {
        _push(`<option value="rating">${ssrInterpolate(_ctx.$t("messages.shop.rating"))}</option>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<option value="discount"${ssrIncludeBooleanAttr(Array.isArray(unref(orderby)) ? ssrLooseContain(unref(orderby), "discount") : ssrLooseEqual(unref(orderby), "discount")) ? " selected" : ""}>${ssrInterpolate(_ctx.$t("messages.shop.discount"))}</option></select></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/OrderByDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "PriceFilter",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const { getFilter, setFilter, isFiltersActive } = useFiltering();
    const runtimeConfig = useRuntimeConfig();
    const maxPrice = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.MAX_PRICE) || 1e3;
    const currencySymbol = ((_b = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _b.CURRENCY_SYMBOL) || "$";
    const activeFilters = ref(getFilter("price"));
    const price = activeFilters.value.length ? ref(activeFilters.value) : ref([0, maxPrice]);
    const isOpen = ref(true);
    const resetSlider = () => {
      price.value = [0, maxPrice];
    };
    const applyPrice = () => {
      setFilter("price", price.value);
    };
    watch(isFiltersActive, () => {
      if (!isFiltersActive.value) resetSlider();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center"><span>${ssrInterpolate(_ctx.$t("messages.shop.price"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:chevron-down-outline",
        class: ["transform", unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="mt-3 grid gap-4 grid-cols-2"><div class="flex relative items-center"><input id="price-from"${ssrRenderAttr("value", unref(price)[0])} class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm" type="number" placeholder="From" min="0"><label for="price-from" class="leading-none px-2 text-gray-400 absolute">${unref(currencySymbol) ?? ""}</label></div><div class="flex relative items-center"><input id="price-to"${ssrRenderAttr("value", unref(price)[1])} class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm" type="number" placeholder="Up to" min="1"><label for="price-to" class="leading-none px-2 text-gray-400 absolute">${unref(currencySymbol) ?? ""}</label></div><div class="mx-1 mt-1 col-span-full">`);
      _push(ssrRenderComponent(unref(Slider), {
        modelValue: unref(price),
        "onUpdate:modelValue": ($event) => isRef(price) ? price.value = $event : null,
        tooltips: false,
        min: 0,
        max: unref(maxPrice),
        ariaLabelledby: "price-from price-to",
        onChange: applyPrice
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/PriceFilter.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "CategoryFilter",
  __ssrInlineRender: true,
  props: {
    label: { type: String, default: "" },
    hideEmpty: { type: Boolean, default: false },
    showCount: { type: Boolean, default: false },
    open: { type: Boolean, default: true }
  },
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const props = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql("getProductCategories")), __temp = await __temp, __restore(), __temp);
    const allCategories = ((_b = (_a = data.value) == null ? void 0 : _a.productCategories) == null ? void 0 : _b.nodes) || [];
    const { getFilter, setFilter, isFiltersActive } = useFiltering();
    const selectedTerms = ref(getFilter("category") || []);
    const route = useRoute();
    const categorySlug = route.params.categorySlug;
    if (categorySlug) selectedTerms.value = [categorySlug];
    const isOpen = ref(props.open);
    watch(isFiltersActive, () => {
      if (!isFiltersActive.value) selectedTerms.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      if (unref(allCategories).length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="cursor-pointer flex font-semibold mt-8 justify-between items-center"><span>${ssrInterpolate(__props.label || _ctx.$t("messages.shop.category", 2))}</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ion:chevron-down-outline",
          class: ["transform", unref(isOpen) ? "rotate-180" : ""]
        }, null, _parent));
        _push(`</div><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="mt-3 mr-1 max-h-[240px] grid gap-1.5 overflow-auto custom-scrollbar"><!--[-->`);
        ssrRenderList(unref(allCategories), (color) => {
          _push(`<div class="flex gap-2 items-start"><input${ssrRenderAttr("id", color.slug)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedTerms)) ? ssrLooseContain(unref(selectedTerms), color.slug) : unref(selectedTerms)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", color.slug)}><label${ssrRenderAttr("for", color.slug)} class="cursor-pointer m-0 text-sm flex-1 leading-tight"><span>${color.name ?? ""}</span>`);
          if (__props.showCount) {
            _push(`<span class="ml-1 text-gray-400 tabular-nums">(${ssrInterpolate(color.count || 0)})</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</label></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/CategoryFilter.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "ColorFilter",
  __ssrInlineRender: true,
  props: {
    filterSlug: { type: String, default: "", required: true },
    label: { type: String, default: "" },
    hideEmpty: { type: Boolean, default: false },
    showCount: { type: Boolean, default: false },
    open: { type: Boolean, default: true }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { getFilter, setFilter, isFiltersActive } = useFiltering();
    const props = __props;
    const TaxonomyEnum = props == null ? void 0 : props.filterSlug.toUpperCase().replace("_", "");
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql("getAllTerms", {
      taxonomies: TaxonomyEnum,
      hideEmpty: props.hideEmpty
    })), __temp = await __temp, __restore(), __temp);
    const allPaTerms = ((_a = data.value.terms) == null ? void 0 : _a.nodes) || [];
    const selectedTerms = ref(getFilter(props.filterSlug) || []);
    const isOpen = ref(props.open);
    watch(isFiltersActive, () => {
      if (!isFiltersActive.value) selectedTerms.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center" data-v-a8727dab><span data-v-a8727dab>${ssrInterpolate(__props.label || __props.filterSlug)}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:chevron-down-outline",
        class: ["transform", unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="mt-3 mr-6 max-h-[240px] grid gap-1.5 swatches overflow-auto custom-scrollbar" data-v-a8727dab><!--[-->`);
      ssrRenderList(unref(allPaTerms), (color) => {
        _push(`<div style="${ssrRenderStyle({ "--color": color.slug })}"${ssrRenderAttr("title", color.name)} data-v-a8727dab><input${ssrRenderAttr("id", color.slug)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedTerms)) ? ssrLooseContain(unref(selectedTerms), color.slug) : unref(selectedTerms)) ? " checked" : ""} class="hidden" type="checkbox"${ssrRenderAttr("value", color.slug)} data-v-a8727dab><label${ssrRenderAttr("for", color.slug)} class="cursor-pointer m-0" data-v-a8727dab></label></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/ColorFilter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a8727dab"]]);
const _sfc_main$7 = {
  __name: "GlobalFilter",
  __ssrInlineRender: true,
  props: {
    filterSlug: { type: String, default: "", required: true },
    label: { type: String, default: "" },
    hideEmpty: { type: Boolean, default: false },
    showCount: { type: Boolean, default: false },
    open: { type: Boolean, default: true }
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { getFilter, setFilter, isFiltersActive } = useFiltering();
    const { filterSlug, label, hideEmpty, showCount, open } = __props;
    const taxonomies = filterSlug.toUpperCase().replace("_", "");
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql("getAllTerms", { taxonomies, hideEmpty })), __temp = await __temp, __restore(), __temp);
    const allPaTerms = ((_a = data.value.terms) == null ? void 0 : _a.nodes) || [];
    const selectedTerms = ref(getFilter(filterSlug) || []);
    const filterTitle = ref(label || filterSlug);
    const isOpen = ref(open);
    watch(isFiltersActive, () => {
      if (!isFiltersActive.value) selectedTerms.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center"><span>${ssrInterpolate(unref(filterTitle))}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:chevron-down-outline",
        class: ["transform", unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="mt-3 mr-1 max-h-[240px] grid gap-1 overflow-auto custom-scrollbar"><!--[-->`);
      ssrRenderList(unref(allPaTerms), ({ count, slug, name }) => {
        _push(`<div class="flex gap-2 items-center"><input${ssrRenderAttr("id", slug)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedTerms)) ? ssrLooseContain(unref(selectedTerms), slug) : unref(selectedTerms)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", slug)}><label${ssrRenderAttr("for", slug)} class="cursor-pointer m-0 text-sm flex items-center flex-wrap"><span>${name ?? ""}</span>`);
        if (__props.showCount) {
          _push(`<small class="ml-1 text-gray-400 tabular-nums" aria-hidden="true">(${ssrInterpolate(count || 0)})</small>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/GlobalFilter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "OnSaleFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const { getFilter, setFilter, isFiltersActive } = useFiltering();
    const selectedTerms = ref(getFilter("sale") || []);
    const isOpen = ref(true);
    watch(isFiltersActive, () => {
      if (!isFiltersActive.value) selectedTerms.value = [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center"><span>Sale Products Only</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:chevron-down-outline",
        class: ["transform", unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</div>`);
      if (unref(isOpen)) {
        _push(`<div class="mt-3 mr-1 max-h-[240px] grid gap-1 overflow-auto custom-scrollbar"><div class="flex gap-2 items-center"><label for="sale-true" class="cursor-pointer m-0 text-sm sr-only" aria-label="Only show products on sale"> Only show products on sale</label><input id="sale-true"${ssrIncludeBooleanAttr(Array.isArray(unref(selectedTerms)) ? ssrLooseContain(unref(selectedTerms), true) : unref(selectedTerms)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", true)} aria-label="Sale Products Only"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/OnSaleFilter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6_lazy = defineAsyncComponent(() => import("./StarRatingFilter-Cmf1-QDo.js").then((c) => c.default || c));
const __nuxt_component_7_lazy = defineAsyncComponent(() => import("./ResetFiltersButton-D6NvJ5zR.js").then((c) => c.default || c));
const _sfc_main$5 = {
  __name: "Filters",
  __ssrInlineRender: true,
  props: { hideCategories: { type: Boolean, default: false } },
  setup(__props) {
    var _a;
    const { isFiltersActive } = useFiltering();
    useHelpers();
    const runtimeConfig = useRuntimeConfig();
    const { storeSettings } = useAppConfig();
    const globalProductAttributes = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.GLOBAL_PRODUCT_ATTRIBUTES) || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OrderByDropdown = _sfc_main$b;
      const _component_PriceFilter = _sfc_main$a;
      const _component_CategoryFilter = _sfc_main$9;
      const _component_ColorFilter = __nuxt_component_3;
      const _component_GlobalFilter = _sfc_main$7;
      const _component_OnSaleFilter = _sfc_main$6;
      const _component_LazyStarRatingFilter = __nuxt_component_6_lazy;
      const _component_LazyResetFiltersButton = __nuxt_component_7_lazy;
      _push(`<!--[--><aside id="filters">`);
      _push(ssrRenderComponent(_component_OrderByDropdown, { class: "block w-full md:hidden" }, null, _parent));
      _push(`<div class="relative z-30 grid mb-12 space-y-8 divide-y">`);
      _push(ssrRenderComponent(_component_PriceFilter, null, null, _parent));
      if (!__props.hideCategories) {
        _push(ssrRenderComponent(_component_CategoryFilter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(globalProductAttributes), (attribute) => {
        _push(`<div>`);
        if (attribute.slug == "pa_color" || attribute.slug == "pa_colour") {
          _push(ssrRenderComponent(_component_ColorFilter, {
            "filter-slug": attribute.slug,
            label: attribute.label,
            open: attribute.openByDefault,
            "show-count": attribute.showCount,
            "hide-empty": attribute.hideEmpty
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_GlobalFilter, {
            "filter-slug": attribute.slug,
            label: attribute.label,
            open: attribute.openByDefault,
            "show-count": attribute.showCount,
            "hide-empty": attribute.hideEmpty
          }, null, _parent));
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_OnSaleFilter, null, null, _parent));
      if (unref(storeSettings).showReviews) {
        _push(ssrRenderComponent(_component_LazyStarRatingFilter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isFiltersActive)) {
        _push(ssrRenderComponent(_component_LazyResetFiltersButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside><div class="fixed inset-0 z-50 hidden bg-black opacity-25 filter-overlay"></div><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/Filters.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProductResultCount",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { products } = useProducts();
    const { productsPerPage } = useHelpers();
    const page = ref(parseInt(route.params.pageNumber) || 1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-sm font-light" }, _attrs))}><span>Showing </span>`);
      if (unref(products).length === 0) {
        _push(`<span class="font-normal">No products</span>`);
      } else {
        _push(`<!--[--><span class="font-normal">${ssrInterpolate((unref(page) - 1) * unref(productsPerPage) + 1)}</span><span> to </span><span class="font-normal">${ssrInterpolate(Math.min(unref(page) * unref(productsPerPage), unref(products).length))}</span><span> of </span><span class="font-normal">${ssrInterpolate(unref(products).length)}</span><!--]-->`);
      }
      _push(`</span>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/ProductResultCount.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ShowFilterTrigger",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHelpers();
    const { isFiltersActive } = ([__temp, __restore] = withAsyncContext(() => useFiltering()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-flex -space-x-px shadow-sm rounded-m isolate" }, _attrs))}><button class="relative inline-flex items-center p-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:z-20" aria-label="Show filters" title="Show filters">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:funnel-outline",
        size: "18",
        class: "transition-transform transform transform-origin-center"
      }, null, _parent));
      _push(`</button>`);
      if (unref(isFiltersActive)) {
        _push(`<span class="absolute z-20 w-2.5 h-2.5 rounded-full bg-primary -top-1 -right-1"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/filtering/ShowFilterTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { productsPerPage } = useHelpers();
    const { products } = useProducts();
    const currentQuery = computed(() => {
      const query = route.query;
      const queryKeys = Object.keys(query);
      let currentQuery2 = "";
      if (queryKeys.length > 0) {
        queryKeys.forEach((key, index) => {
          currentQuery2 += index === 0 ? `${key}=${query[key]}` : `&${key}=${query[key]}`;
        });
      }
      return decodeURIComponent(currentQuery2);
    });
    const page = ref(route.params.pageNumber ? parseInt(route.params.pageNumber) : 1);
    const numberOfPages = computed(() => Math.ceil(products.value.length / productsPerPage || 1));
    const prevSrc = (pageNumber) => {
      if (currentQuery.value === "") {
        return decodeURIComponent(`/products/page/${pageNumber > 1 ? pageNumber - 1 : pageNumber}`);
      } else {
        return decodeURIComponent(
          pageNumber > 1 ? `/products/page/${pageNumber - 1}/?${currentQuery.value}` : `/products/page/${pageNumber}/?${currentQuery.value}`
        );
      }
    };
    const nextSrc = (pageNumber) => {
      if (currentQuery.value === "") {
        return decodeURIComponent(`/products/page/${pageNumber < numberOfPages.value ? pageNumber + 1 : pageNumber}`);
      } else {
        return decodeURIComponent(
          pageNumber < numberOfPages.value ? `/products/page/${pageNumber + 1}/?${currentQuery.value}` : `/products/page/${pageNumber}/?${currentQuery.value}`
        );
      }
    };
    const numberSrc = (pageNumber) => {
      if (currentQuery.value === "") {
        return decodeURIComponent(`/products/page/${pageNumber}`);
      } else {
        return decodeURIComponent(`/products/page/${pageNumber}/?${currentQuery.value}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center mt-8 mb-16 col-span-full tabular-nums" }, _attrs))} data-v-4d434fae>`);
      if (unref(numberOfPages) && unref(numberOfPages) > 1) {
        _push(`<nav class="inline-flex self-end -space-x-px rounded-md shadow-sm isolate" aria-label="Pagination" data-v-4d434fae>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: prevSrc(unref(page)),
          class: ["prev", { "cursor-not-allowed": unref(page) == 1 }],
          disabled: unref(page) == 1,
          "aria-disabled": unref(page) == 1,
          "aria-label": "Previous"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ion:chevron-back-outline",
                size: "20",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ion:chevron-back-outline",
                  size: "20",
                  class: "w-5 h-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(numberOfPages), (pageNumber) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: pageNumber,
            to: numberSrc(pageNumber),
            "aria-current": pageNumber === unref(page) ? "page" : void 0,
            class: "page-number"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(pageNumber)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(pageNumber), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: nextSrc(unref(page)),
          class: ["next", { "cursor-not-allowed": unref(page) === unref(numberOfPages) }],
          disabled: unref(page) === unref(numberOfPages),
          "aria-disabled": unref(page) === unref(numberOfPages),
          "aria-label": "Next"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ion:chevron-forward-outline",
                size: "20",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ion:chevron-forward-outline",
                  size: "20",
                  class: "w-5 h-5"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4d434fae"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NoProductsFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { allProducts } = useProducts();
    useSearching();
    useFiltering();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full my-16 lg:my-24" }, _attrs))}><div class="flex flex-col items-center justify-center w-full text-center text-pretty">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:sad-outline",
        size: "156",
        class: "opacity-25 mb-10"
      }, null, _parent));
      _push(`<h2 class="text-2xl font-bold">No products found</h2><p class="mt-4 max-w-md">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`Try adjusting your search or filter to find what you&#39;re looking for.`);
      }, _push, _parent);
      _push(`</p><div>`);
      if (unref(allProducts).length) {
        _push(`<button class="bg-primary rounded-lg font-bold mt-8 text-center text-white text-sm w-full p-2 px-3 inline-block hover:bg-primary-dark" title="Clear all filters and search" aria-label="Clear all filters and search"> Clear all </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/NoProductsFound.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { productsPerPage } = useHelpers();
    const { products } = useProducts();
    const page = ref(parseInt(route.params.pageNumber) || 1);
    const productsToShow = computed(() => products.value.slice((page.value - 1) * productsPerPage, page.value * productsPerPage));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = _sfc_main$c;
      const _component_Pagination = __nuxt_component_1;
      const _component_NoProductsFound = _sfc_main$1;
      if (!!unref(products).length) {
        _push(`<section class="relative w-full" data-v-47d90b64><div${ssrRenderAttrs({
          name: "shrink",
          mode: "in-out",
          class: "product-grid"
        })} data-v-47d90b64>`);
        ssrRenderList(unref(productsToShow), (node, i) => {
          _push(ssrRenderComponent(_component_ProductCard, {
            key: node.id || i,
            node,
            index: i
          }, null, _parent));
        });
        _push(`</div>`);
        _push(ssrRenderComponent(_component_Pagination, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(ssrRenderComponent(_component_NoProductsFound, null, null, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/ProductGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47d90b64"]]);
export {
  _sfc_main$5 as _,
  _sfc_main$4 as a,
  _sfc_main$b as b,
  _sfc_main$3 as c,
  __nuxt_component_4 as d,
  _sfc_main$1 as e
};
//# sourceMappingURL=ProductGrid-deYymTZt.js.map
