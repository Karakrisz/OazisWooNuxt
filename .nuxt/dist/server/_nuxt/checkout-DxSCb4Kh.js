import { i as useState, j as useAuth, u as useCart, G as GqlUpdateCustomer, k as useRouter, f as useHelpers, l as GqlCheckout, m as GqlGetStates, c as _export_sfc, n as useRuntimeConfig, _ as __nuxt_component_0, o as useAppConfig, g as __nuxt_component_10, h as __nuxt_component_3, b as _sfc_main$d, p as useI18n, q as useRoute, r as useSeoMeta } from "../server.mjs";
import { _ as _sfc_main$e } from "./PasswordInput-C2vEixSX.js";
import { _ as _sfc_main$b, a as __nuxt_component_1 } from "./CountrySelect-oCBY2zra.js";
import { defineComponent, withAsyncContext, toRef, mergeProps, unref, useSSRContext, computed, ref, watch, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./TrashIcon-DgRm1Dn1.js";
import { useSwipe } from "@vueuse/core";
import { _ as _sfc_main$c } from "./ProductPrice-DSq3K8MZ.js";
import { u as useWishlist } from "./useWishlist-BIY00RKh.js";
import "destr";
import "klona";
import "defu";
import { loadStripe } from "@stripe/stripe-js";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "devalue";
import "cookie-es";
import "ohash";
import "@vue/devtools-api";
import "@iconify/vue";
import "graphql-request";
import "@iconify/utils/lib/css/icon";
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
function useCheckout() {
  const orderInput = useState("orderInput", () => {
    return {
      customerNote: "",
      paymentMethod: "",
      shipToDifferentAddress: false,
      metaData: [{ key: "order_via", value: "WooNuxt" }]
    };
  });
  const isProcessingOrder = useState("isProcessingOrder", () => false);
  async function updateShippingLocation() {
    var _a;
    const { customer, viewer } = useAuth();
    const { isUpdatingCart, refreshCart } = useCart();
    isUpdatingCart.value = true;
    try {
      const { updateCustomer } = await GqlUpdateCustomer({
        input: {
          id: (_a = viewer == null ? void 0 : viewer.value) == null ? void 0 : _a.id,
          shipping: orderInput.value.shipToDifferentAddress ? customer.value.shipping : customer.value.billing,
          billing: customer.value.billing
        }
      });
      if (updateCustomer) refreshCart();
    } catch (error) {
      console.error(error);
    }
  }
  function openPayPalWindow(redirectUrl) {
    return new Promise((resolve) => {
      const width = 750;
      const height = 750;
      const left = (void 0).innerWidth / 2 - width / 2;
      const top = (void 0).innerHeight / 2 - height / 2 + 80;
      (void 0).open(redirectUrl, "", `width=${width},height=${height},top=${top},left=${left}`);
      setInterval();
    });
  }
  const proccessCheckout = async (isPaid = false) => {
    var _a, _b, _c, _d, _e;
    const { customer, loginUser } = useAuth();
    const router = useRouter();
    const { replaceQueryParam } = useHelpers();
    const { emptyCart, refreshCart } = useCart();
    isProcessingOrder.value = true;
    const { username, password, shipToDifferentAddress } = orderInput.value;
    const billing = (_a = customer.value) == null ? void 0 : _a.billing;
    const shipping = shipToDifferentAddress ? (_b = customer.value) == null ? void 0 : _b.shipping : billing;
    try {
      let checkoutPayload = {
        billing,
        shipping,
        metaData: orderInput.value.metaData,
        paymentMethod: orderInput.value.paymentMethod.id,
        customerNote: orderInput.value.customerNote,
        shipToDifferentAddress,
        transactionId: orderInput.value.transactionId,
        isPaid
      };
      if (orderInput.value.createAccount) {
        checkoutPayload.account = { username, password };
      }
      const { checkout } = await GqlCheckout(checkoutPayload);
      if (orderInput.value.createAccount) {
        await loginUser({ username, password });
      }
      const orderId = (_c = checkout == null ? void 0 : checkout.order) == null ? void 0 : _c.databaseId;
      const orderKey = (_d = checkout == null ? void 0 : checkout.order) == null ? void 0 : _d.orderKey;
      const orderInputPaymentId = orderInput.value.paymentMethod.id;
      const isPayPal = orderInputPaymentId === "paypal" || orderInputPaymentId === "ppcp-gateway";
      if (await (checkout == null ? void 0 : checkout.redirect) && isPayPal) {
        const frontEndUrl = (void 0).location.origin;
        let redirectUrl = (checkout == null ? void 0 : checkout.redirect) ?? "";
        const payPalReturnUrl = `${frontEndUrl}/checkout/order-received/${orderId}/?key=${orderKey}&from_paypal=true`;
        const payPalCancelUrl = `${frontEndUrl}/checkout/?cancel_order=true&from_paypal=true`;
        redirectUrl = replaceQueryParam("return", payPalReturnUrl, redirectUrl);
        redirectUrl = replaceQueryParam("cancel_return", payPalCancelUrl, redirectUrl);
        redirectUrl = replaceQueryParam("bn", "WooNuxt_Cart", redirectUrl);
        const isPayPalWindowClosed = await openPayPalWindow(redirectUrl);
        if (isPayPalWindowClosed) {
          router.push(`/checkout/order-received/${orderId}/?key=${orderKey}&fetch_delay=true`);
        }
      } else {
        router.push(`/checkout/order-received/${orderId}/?key=${orderKey}`);
      }
      if (await (checkout == null ? void 0 : checkout.result) !== "success") {
        alert("There was an error processing your order. Please try again.");
        (void 0).location.reload();
        return checkout;
      } else {
        await emptyCart();
        await refreshCart();
      }
    } catch (error) {
      isProcessingOrder.value = false;
      const errorMessage = (_e = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _e[0].message;
      if (errorMessage == null ? void 0 : errorMessage.includes("An account is already registered with your email address")) {
        alert("An account is already registered with your email address");
        return null;
      }
      alert(errorMessage);
      return null;
    }
    isProcessingOrder.value = false;
  };
  return {
    orderInput,
    isProcessingOrder,
    proccessCheckout,
    updateShippingLocation
  };
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BillingDetails",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Object, required: true },
    sameAsShippingAddress: { type: Boolean, default: true }
  },
  async setup(__props) {
    let __temp, __restore;
    const { updateShippingLocation } = useCheckout();
    const { allowedCountries, countryStates } = ([__temp, __restore] = withAsyncContext(() => GqlGetStates()), __temp = await __temp, __restore(), __temp);
    const props = __props;
    const billing = toRef(props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StateSelect = _sfc_main$b;
      const _component_CountrySelect = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid w-full gap-4 lg:grid-cols-2" }, _attrs))}><div class="w-full"><label for="first-name">${ssrInterpolate(_ctx.$t("messages.billing.firstName"))}</label><input${ssrRenderAttr("value", unref(billing).firstName)} placeholder="John" type="text" required></div><div class="w-full"><label for="last-name">${ssrInterpolate(_ctx.$t("messages.billing.lastName"))}</label><input${ssrRenderAttr("value", unref(billing).lastName)} placeholder="Doe" type="text" required></div><div class="w-full col-span-full"><label for="address1">${ssrInterpolate(_ctx.$t("messages.billing.address1"))}</label><input${ssrRenderAttr("value", unref(billing).address1)} placeholder="O&#39;Connell Street" type="text" required></div><div class="w-full col-span-full"><label for="address2">${ssrInterpolate(_ctx.$t("messages.billing.address2"))}</label><input${ssrRenderAttr("value", unref(billing).address2)} placeholder="Dublin 1" type="text"></div><div class="w-full"><label for="city">${ssrInterpolate(_ctx.$t("messages.billing.city"))}</label><input${ssrRenderAttr("value", unref(billing).city)} placeholder="Dublin" type="text" required></div><div class="w-full"><label for="state">${ssrInterpolate(_ctx.$t("messages.billing.state"))}</label>`);
      _push(ssrRenderComponent(_component_StateSelect, {
        modelValue: unref(billing).state,
        "onUpdate:modelValue": ($event) => unref(billing).state = $event,
        "default-value": unref(billing).state,
        "country-code": unref(billing).country,
        onChange: unref(updateShippingLocation),
        countryStates: unref(countryStates)
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="country">${ssrInterpolate(_ctx.$t("messages.billing.country"))}</label>`);
      _push(ssrRenderComponent(_component_CountrySelect, {
        modelValue: unref(billing).country,
        "onUpdate:modelValue": ($event) => unref(billing).country = $event,
        "default-value": unref(billing).country,
        onChange: unref(updateShippingLocation),
        allowedCountries: unref(allowedCountries)
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="zip">ZIP (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input${ssrRenderAttr("value", unref(billing).postcode)} placeholder="D01 1234" type="text"></div><div class="w-full col-span-full"><label for="phone">${ssrInterpolate(_ctx.$t("messages.billing.phone"))} (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input${ssrRenderAttr("value", unref(billing).phone)} placeholder="+353871234567" type="tel"></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/BillingDetails.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ShippingDetails",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Object, required: true }
  },
  setup(__props) {
    const { updateShippingLocation } = useCheckout();
    const props = __props;
    const shipping = toRef(props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StateSelect = _sfc_main$b;
      const _component_CountrySelect = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid w-full gap-4 lg:grid-cols-2" }, _attrs))}><div class="w-full"><label for="first-name">${ssrInterpolate(_ctx.$t("messages.billing.firstName"))}</label><input${ssrRenderAttr("value", unref(shipping).firstName)} placeholder="John" type="text" required></div><div class="w-full"><label for="last-name">${ssrInterpolate(_ctx.$t("messages.billing.lastName"))}</label><input${ssrRenderAttr("value", unref(shipping).lastName)} placeholder="Doe" type="text" required></div><div class="w-full col-span-full"><label for="address1">${ssrInterpolate(_ctx.$t("messages.billing.address1"))}</label><input${ssrRenderAttr("value", unref(shipping).address1)} placeholder="O&#39;Connell Street" type="text" required></div><div class="w-full col-span-full"><label for="address2">${ssrInterpolate(_ctx.$t("messages.billing.address2"))}</label><input${ssrRenderAttr("value", unref(shipping).address2)} placeholder="Dublin 1" type="text"></div><div class="w-full"><label for="city">${ssrInterpolate(_ctx.$t("messages.billing.city"))}</label><input${ssrRenderAttr("value", unref(shipping).city)} placeholder="Dublin" type="text" required></div><div class="w-full"><label for="zip">ZIP (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input${ssrRenderAttr("value", unref(shipping).postcode)} placeholder="D01 1234" type="text"></div><div class="w-full"><label for="state">${ssrInterpolate(_ctx.$t("messages.billing.state"))}</label>`);
      _push(ssrRenderComponent(_component_StateSelect, {
        modelValue: unref(shipping).state,
        "onUpdate:modelValue": ($event) => unref(shipping).state = $event,
        "default-value": unref(shipping).state,
        "country-code": unref(shipping).country,
        onChange: unref(updateShippingLocation)
      }, null, _parent));
      _push(`</div><div class="w-full"><label for="country">${ssrInterpolate(_ctx.$t("messages.billing.country"))}</label>`);
      _push(ssrRenderComponent(_component_CountrySelect, {
        modelValue: unref(shipping).country,
        "onUpdate:modelValue": ($event) => unref(shipping).country = $event,
        "default-value": unref(shipping).country,
        onChange: unref(updateShippingLocation)
      }, null, _parent));
      _push(`</div><div class="w-full col-span-full"><label for="phone">${ssrInterpolate(_ctx.$t("messages.billing.phone"))} (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</label><input${ssrRenderAttr("value", unref(shipping).phone)} placeholder="+353871234567" type="tel"></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/ShippingDetails.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "ShippingOptions",
  __ssrInlineRender: true,
  props: {
    options: { type: Array, required: true },
    activeOption: { type: String, required: true }
  },
  setup(__props) {
    var _a;
    useCart();
    const runtimeConfig = useRuntimeConfig();
    const currencySymbol = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.CURRENCY_SYMBOL) || "$";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4 shipping-options" }, _attrs))} data-v-9043ed77><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<div class="${ssrRenderClass([{ "active-option": option.id === __props.activeOption }, "flex items-center justify-between option"])}" data-v-9043ed77><div data-v-9043ed77><div class="text-sm leading-tight text-gray-500" data-v-9043ed77>${option.label ?? ""}</div><div class="font-semibold text-gray-600" data-v-9043ed77>${ssrInterpolate(unref(currencySymbol))}${ssrInterpolate(option.cost)}</div></div>`);
        _push(ssrRenderComponent(_component_icon, {
          name: "ion:checkmark-circle",
          size: "20",
          class: "ml-auto text-primary checkmark opacity-0"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/ShippingOptions.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9043ed77"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PaymentOptions",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    paymentGateways: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const paymentMethod = toRef(props, "modelValue");
    const activePaymentMethod = computed(() => paymentMethod.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 leading-tight flex-wrap" }, _attrs))} data-v-e7723a37><!--[-->`);
      ssrRenderList((_a = _ctx.paymentGateways) == null ? void 0 : _a.nodes, (gateway) => {
        _push(`<div class="${ssrRenderClass([{ "active-option": gateway.id === unref(activePaymentMethod).id }, "option"])}"${ssrRenderAttr("title", (gateway == null ? void 0 : gateway.description) || (gateway == null ? void 0 : gateway.title) || "Payment Method")} data-v-e7723a37>`);
        if (gateway.id === "stripe") {
          _push(ssrRenderComponent(_component_icon, {
            name: "ion:card-outline",
            size: "20"
          }, null, _parent));
        } else if (gateway.id === "paypal") {
          _push(ssrRenderComponent(_component_icon, {
            name: "ion:logo-paypal",
            size: "20"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_icon, {
            name: "ion:cash-outline",
            size: "20"
          }, null, _parent));
        }
        _push(`<span class="whitespace-nowrap" data-v-e7723a37>${gateway.title ?? ""}</span>`);
        _push(ssrRenderComponent(_component_icon, {
          name: "ion:checkmark-circle",
          size: "20",
          class: "ml-auto text-primary checkmark opacity-0"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(activePaymentMethod).description) {
        _push(`<div class="prose block w-full" data-v-e7723a37><p class="text-sm text-gray-500" data-v-e7723a37>${unref(activePaymentMethod).description ?? ""}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/PaymentOptions.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e7723a37"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "StripeElement",
  __ssrInlineRender: true,
  props: ["stripe"],
  emits: ["updateElement"],
  setup(__props, { emit: __emit }) {
    const { cart } = useCart();
    const rawCartTotal = computed(() => cart.value && parseFloat(cart.value.rawTotal) * 100);
    ({
      mode: "payment",
      currency: "eur",
      amount: rawCartTotal.value
      // paymentMethodCreation: 'manual',
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "card-element" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/StripeElement.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "SwipeCard",
  __ssrInlineRender: true,
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const isAlive = ref(true);
    const el = ref(null);
    const { isSwiping, lengthX } = useSwipe(el, {
      passive: true,
      onSwipeEnd() {
        if (lengthX.value > 80) {
          isAlive.value = false;
          emit("remove");
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TrashIcon = __nuxt_component_0$1;
      if (unref(isAlive)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg flex h-16 w-full overflow-hidden relative items-center" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_TrashIcon, {
          class: ["transform transition-all right-0 w-6 scale-0 absolute", { "scale-100": unref(lengthX) > 40, "delete-ready": unref(lengthX) > 80 }]
        }, null, _parent));
        _push(`<div class="${ssrRenderClass([{ "transition-all": !unref(isSwiping) }, "rounded-lg inset-0 absolute"])}" style="${ssrRenderStyle({ transform: unref(isSwiping) ? `translateX(-${unref(lengthX)}px)` : `none` })}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/cartElements/SwipeCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "QuantityInput",
  __ssrInlineRender: true,
  props: { item: { type: Object, required: true } },
  setup(__props) {
    const { updateItemQuantity, isUpdatingCart } = useCart();
    const { debounce } = useHelpers();
    const { item } = __props;
    const productType = computed(() => {
      var _a, _b;
      return item.variation ? (_a = item.variation) == null ? void 0 : _a.node : (_b = item.product) == null ? void 0 : _b.node;
    });
    const quantity = ref(item.quantity);
    const hasNoMoreStock = computed(() => productType.value.stockQuantity ? productType.value.stockQuantity <= quantity.value : false);
    watch(
      quantity,
      debounce(() => {
        updateItemQuantity(item.key, quantity.value >= 0 ? quantity.value : 0);
      }, 250)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex rounded bg-white text-sm leading-none shadow-sm shadow-gray-200 isolate" }, _attrs))} data-v-3da1c4d1><button title="Decrease Quantity" aria-label="Decrease Quantity" type="button" class="focus:outline-none border-r w-6 h-6 border rounded-l border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(unref(isUpdatingCart) || unref(quantity) <= 0) ? " disabled" : ""} data-v-3da1c4d1>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:remove",
        size: "14"
      }, null, _parent));
      _push(`</button><input${ssrRenderAttr("value", unref(quantity))} type="number" min="0"${ssrRenderAttr("max", unref(productType).stockQuantity)} aria-label="Quantity" class="flex items-center justify-center w-8 px-2 text-right text-xs focus:outline-none border-y border-gray-300" data-v-3da1c4d1><button title="Increase Quantity" aria-label="Increase Quantity" type="button" class="focus:outline-none border-l w-6 h-6 border rounded-r hover:bg-gray-50 border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-100"${ssrIncludeBooleanAttr(unref(isUpdatingCart) || unref(hasNoMoreStock)) ? " disabled" : ""} data-v-3da1c4d1>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:add",
        size: "14"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/cartElements/QuantityInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3da1c4d1"]]);
const _sfc_main$3 = {
  __name: "CartCard",
  __ssrInlineRender: true,
  props: {
    item: { type: Object, required: true }
  },
  setup(__props) {
    const { updateItemQuantity } = useCart();
    const { addToWishlist } = useWishlist();
    const { fallbackImage } = useHelpers();
    const { storeSettings } = useAppConfig();
    const { item } = __props;
    const productType = computed(() => {
      var _a, _b;
      return item.variation ? (_a = item.variation) == null ? void 0 : _a.node : (_b = item.product) == null ? void 0 : _b.node;
    });
    const productSlug = computed(() => `/product/${decodeURIComponent(item.product.node.slug)}`);
    const isLowStock = computed(() => productType.value.stockQuantity ? productType.value.lowStockAmount >= productType.value.stockQuantity : false);
    const removeItem = () => {
      updateItemQuantity(item.key, 0);
    };
    const moveToWishList = () => {
      addToWishlist(item.product.node);
      removeItem();
    };
    const salePercentage = computed(() => {
      const regularPrice = parseFloat(productType.value.regularPrice.replace(/\D/g, ""));
      const salePrice = parseFloat(productType.value.salePrice.replace(/\D/g, ""));
      return Math.round((regularPrice - salePrice) / regularPrice * 100) + "%";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SwipeCard = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_NuxtImg = __nuxt_component_3;
      const _component_ProductPrice = _sfc_main$c;
      const _component_QuantityInput = __nuxt_component_4;
      const _component_Icon = __nuxt_component_0;
      _push(ssrRenderComponent(_component_SwipeCard, mergeProps({ onRemove: removeItem }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(productType)) {
              _push2(`<div class="flex items-center gap-3 group"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, { to: unref(productSlug) }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b, _c, _d;
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      width: "64",
                      height: "64",
                      class: "w-16 h-16 rounded-md skeleton",
                      src: unref(productType).image.cartSourceUrl || unref(productType).image.sourceUrl || __props.item.product.image.sourceUrl || unref(fallbackImage),
                      alt: ((_a = unref(productType).image) == null ? void 0 : _a.altText) || unref(productType).name,
                      title: ((_b = unref(productType).image) == null ? void 0 : _b.title) || unref(productType).name,
                      loading: "lazy"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtImg, {
                        width: "64",
                        height: "64",
                        class: "w-16 h-16 rounded-md skeleton",
                        src: unref(productType).image.cartSourceUrl || unref(productType).image.sourceUrl || __props.item.product.image.sourceUrl || unref(fallbackImage),
                        alt: ((_c = unref(productType).image) == null ? void 0 : _c.altText) || unref(productType).name,
                        title: ((_d = unref(productType).image) == null ? void 0 : _d.title) || unref(productType).name,
                        loading: "lazy"
                      }, null, 8, ["src", "alt", "title"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="flex-1"${_scopeId}><div class="flex gap-x-2 gap-y-1 flex-wrap items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                class: "leading-tight",
                to: unref(productSlug)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(productType).name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(productType).name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(productType).salePrice) {
                _push2(`<span class="text-[10px] border-green-200 leading-none bg-green-100 inline-block p-0.5 rounded text-green-600 border"${_scopeId}>Save ${ssrInterpolate(unref(salePercentage))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(isLowStock)) {
                _push2(`<span class="text-[10px] border-yellow-200 leading-none bg-yellow-100 inline-block p-0.5 rounded text-orange-500 border"${_scopeId}>Low Stock</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_ProductPrice, {
                class: "mt-1 text-xs",
                "sale-price": unref(productType).salePrice,
                "regular-price": unref(productType).regularPrice
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="inline-flex gap-2 flex-col items-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_QuantityInput, { item: __props.item }, null, _parent2, _scopeId));
              _push2(`<div class="text-xs text-gray-400 group-hover:text-gray-700 flex leading-none items-center"${_scopeId}>`);
              if (unref(storeSettings).showMoveToWishlist) {
                _push2(`<button class="mr-2 pr-2 border-r" type="button"${_scopeId}>Move to Wishlist</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button title="Remove Item" aria-label="Remove Item" type="button" class="flex items-center gap-1 hover:text-red-500 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ion:trash",
                class: "hidden md:inline-block",
                size: "12"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(productType) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center gap-3 group"
              }, [
                createVNode(_component_NuxtLink, { to: unref(productSlug) }, {
                  default: withCtx(() => {
                    var _a, _b;
                    return [
                      createVNode(_component_NuxtImg, {
                        width: "64",
                        height: "64",
                        class: "w-16 h-16 rounded-md skeleton",
                        src: unref(productType).image.cartSourceUrl || unref(productType).image.sourceUrl || __props.item.product.image.sourceUrl || unref(fallbackImage),
                        alt: ((_a = unref(productType).image) == null ? void 0 : _a.altText) || unref(productType).name,
                        title: ((_b = unref(productType).image) == null ? void 0 : _b.title) || unref(productType).name,
                        loading: "lazy"
                      }, null, 8, ["src", "alt", "title"])
                    ];
                  }),
                  _: 1
                }, 8, ["to"]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex gap-x-2 gap-y-1 flex-wrap items-center" }, [
                    createVNode(_component_NuxtLink, {
                      class: "leading-tight",
                      to: unref(productSlug)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(productType).name), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    unref(productType).salePrice ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-[10px] border-green-200 leading-none bg-green-100 inline-block p-0.5 rounded text-green-600 border"
                    }, "Save " + toDisplayString(unref(salePercentage)), 1)) : createCommentVNode("", true),
                    unref(isLowStock) ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-[10px] border-yellow-200 leading-none bg-yellow-100 inline-block p-0.5 rounded text-orange-500 border"
                    }, "Low Stock")) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_ProductPrice, {
                    class: "mt-1 text-xs",
                    "sale-price": unref(productType).salePrice,
                    "regular-price": unref(productType).regularPrice
                  }, null, 8, ["sale-price", "regular-price"])
                ]),
                createVNode("div", { class: "inline-flex gap-2 flex-col items-end" }, [
                  createVNode(_component_QuantityInput, { item: __props.item }, null, 8, ["item"]),
                  createVNode("div", { class: "text-xs text-gray-400 group-hover:text-gray-700 flex leading-none items-center" }, [
                    unref(storeSettings).showMoveToWishlist ? (openBlock(), createBlock("button", {
                      key: 0,
                      class: "mr-2 pr-2 border-r",
                      onClick: moveToWishList,
                      type: "button"
                    }, "Move to Wishlist")) : createCommentVNode("", true),
                    createVNode("button", {
                      title: "Remove Item",
                      "aria-label": "Remove Item",
                      onClick: removeItem,
                      type: "button",
                      class: "flex items-center gap-1 hover:text-red-500 cursor-pointer"
                    }, [
                      createVNode(_component_Icon, {
                        name: "ion:trash",
                        class: "hidden md:inline-block",
                        size: "12"
                      })
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/cartElements/CartCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddCoupon",
  __ssrInlineRender: true,
  setup(__props) {
    const { cart, isUpdatingCoupon, applyCoupon, removeCoupon } = useCart();
    const couponCode = ref("");
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingIcon = _sfc_main$d;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><form class="flex gap-1"><input id="couponCode"${ssrRenderAttr("value", unref(couponCode))} type="text"${ssrRenderAttr("placeholder", _ctx.$t("messages.shop.couponCode"))} class="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm outline-none" required><button class="flex items-center justify-center px-4 py-2 text-white bg-gray-800 border rounded-md shadow-sm outline-none min-w-20"${ssrIncludeBooleanAttr(unref(isUpdatingCoupon)) ? " disabled" : ""}>`);
      if (unref(isUpdatingCoupon)) {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          color: "#fff",
          size: "16"
        }, null, _parent));
      } else {
        _push(`<span>${ssrInterpolate(_ctx.$t("messages.general.apply"))}</span>`);
      }
      _push(`</button></form>`);
      if (unref(errorMessage)) {
        _push(`<div class="mt-2 text-xs text-red-600">${unref(errorMessage) ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(cart) && unref(cart).appliedCoupons) {
        _push(`<div class="text-xs font-semibold uppercase flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(unref(cart).appliedCoupons, (coupon, index) => {
          _push(`<div class="flex flex-wrap mt-2 flex-2">`);
          if (coupon == null ? void 0 : coupon.code) {
            _push(`<div class="bg-primary border-primary border rounded-md flex bg-opacity-5 border-opacity-10 text-primary leading-none p-1.5 gap-1 items-center"><span>${coupon.code ?? ""}</span>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "ion:close",
              class: "rounded-full cursor-pointer hover:bg-primary hover:text-white",
              onClick: ($event) => unref(removeCoupon)(coupon.code)
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/AddCoupon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "OrderSummary",
  __ssrInlineRender: true,
  setup(__props) {
    const { cart, isUpdatingCart } = useCart();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartCard = _sfc_main$3;
      const _component_AddCoupon = _sfc_main$2;
      const _component_LoadingIcon = _sfc_main$d;
      if (unref(cart)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-lg mb-8 w-full min-h-[280px] p-4 sm:p-8 relative md:max-w-md md:top-32 md:sticky" }, _attrs))}><h2 class="mb-6 text-xl font-semibold leading-none">${ssrInterpolate(_ctx.$t("messages.shop.orderSummary"))}</h2><ul class="flex flex-col gap-4 overflow-y-auto"><!--[-->`);
        ssrRenderList(unref(cart).contents.nodes, (item) => {
          _push(ssrRenderComponent(_component_CartCard, {
            key: item.key,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_AddCoupon, { class: "my-8" }, null, _parent));
        _push(`<div class="grid gap-1 text-sm font-semibold text-gray-500"><div class="flex justify-between"><span>${ssrInterpolate(_ctx.$t("messages.shop.subtotal"))}</span><span class="text-gray-700 tabular-nums">${unref(cart).subtotal ?? ""}</span></div><div class="flex justify-between"><span>${ssrInterpolate(_ctx.$t("messages.general.shipping"))}</span><span class="text-gray-700 tabular-nums">${ssrInterpolate(parseFloat(unref(cart).shippingTotal) > 0 ? "+" : "")} ${ssrInterpolate(unref(cart).shippingTotal)}</span></div>`);
        if (unref(cart) && unref(cart).appliedCoupons) {
          _push(`<div class="flex justify-between"><span>${ssrInterpolate(_ctx.$t("messages.shop.discount"))}</span><span class="text-primary tabular-nums">- <span>${unref(cart).discountTotal ?? ""}</span></span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-between mt-4"><span>${ssrInterpolate(_ctx.$t("messages.shop.total"))}</span><span class="text-lg font-bold text-gray-700 tabular-nums">${unref(cart).total ?? ""}</span></div></div>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (unref(isUpdatingCart)) {
          _push(`<div class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">`);
          _push(ssrRenderComponent(_component_LoadingIcon, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/OrderSummary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkout",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { t } = useI18n();
    useRoute();
    const { cart, isUpdatingCart, paymentGateways } = useCart();
    const { customer, viewer } = useAuth();
    const { orderInput, isProcessingOrder, proccessCheckout } = useCheckout();
    const runtimeConfig = useRuntimeConfig();
    const stripeKey = ((_a = runtimeConfig.public) == null ? void 0 : _a.STRIPE_PUBLISHABLE_KEY) || null;
    const buttonText = ref(isProcessingOrder.value ? t("messages.general.processing") : t("messages.shop.checkoutButton"));
    const isCheckoutDisabled = computed(() => isProcessingOrder.value || isUpdatingCart.value || !orderInput.value.paymentMethod);
    const isInvalidEmail = ref(false);
    const stripe = stripeKey ? ([__temp, __restore] = withAsyncContext(() => loadStripe(stripeKey)), __temp = await __temp, __restore(), __temp) : null;
    let elements = ref(null);
    ref(false);
    const handleStripeElement = (stripeElements) => {
      elements.value = stripeElements;
    };
    useSeoMeta({
      title: t("messages.shop.checkout")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingIcon = _sfc_main$d;
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_PasswordInput = _sfc_main$e;
      const _component_BillingDetails = _sfc_main$a;
      const _component_ShippingDetails = _sfc_main$9;
      const _component_ShippingOptions = __nuxt_component_6;
      const _component_PaymentOptions = __nuxt_component_7;
      const _component_StripeElement = _sfc_main$6;
      const _component_OrderSummary = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-[600px]" }, _attrs))}>`);
      if (!unref(cart)) {
        _push(ssrRenderComponent(_component_LoadingIcon, { class: "m-auto" }, null, _parent));
      } else {
        _push(`<!--[-->`);
        if (unref(cart).isEmpty) {
          _push(`<div class="flex flex-col items-center justify-center flex-1 mb-12">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ion:cart-outline",
            size: "156",
            class: "opacity-25 mb-5"
          }, null, _parent));
          _push(`<h2 class="text-2xl font-bold mb-2">${ssrInterpolate(_ctx.$t("messages.shop.cartEmpty"))}</h2><span class="text-gray-400 mb-4">${ssrInterpolate(_ctx.$t("messages.shop.addProductsInYourCart"))}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/products",
            class: "flex items-center justify-center gap-3 p-2 px-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("messages.shop.browseOurProducts"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("messages.shop.browseOurProducts")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<form class="container flex flex-wrap items-start gap-8 my-16 justify-evenly lg:gap-20"><div class="grid w-full max-w-2xl gap-8 checkout-form md:flex-1">`);
          if (!unref(viewer)) {
            _push(`<div><h2 class="w-full mb-2 text-2xl font-semibold leading-none">Contact Information</h2><p class="mt-1 text-sm text-gray-500">Already have an account? <a href="/my-account" class="text-primary text-semibold">Log in</a>.</p><div class="w-full mt-4"><label for="email">${ssrInterpolate(_ctx.$t("messages.billing.email"))}</label><input${ssrRenderAttr("value", unref(customer).billing.email)} placeholder="johndoe@email.com" type="email" name="email" class="${ssrRenderClass({ "has-error": unref(isInvalidEmail) })}" required>`);
            if (unref(isInvalidEmail)) {
              _push(`<div class="mt-1 text-sm text-red-500">Invalid email address</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (unref(orderInput).createAccount) {
              _push(`<!--[--><div class="w-full mt-4"><label for="username">${ssrInterpolate(_ctx.$t("messages.account.username"))}</label><input${ssrRenderAttr("value", unref(orderInput).username)} placeholder="Username" type="text" name="username" required></div>`);
              if (unref(orderInput).createAccount) {
                _push(`<div class="w-full my-2"><label for="email">${ssrInterpolate(_ctx.$t("messages.account.password"))}</label>`);
                _push(ssrRenderComponent(_component_PasswordInput, {
                  id: "password",
                  class: "my-2",
                  modelValue: unref(orderInput).password,
                  "onUpdate:modelValue": ($event) => unref(orderInput).password = $event,
                  placeholder: "Password",
                  required: true
                }, null, _parent));
                _push(`</div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            } else {
              _push(`<!---->`);
            }
            if (!unref(viewer)) {
              _push(`<div class="flex items-center gap-2 my-2"><label for="creat-account">Create an account?</label><input id="creat-account"${ssrIncludeBooleanAttr(Array.isArray(unref(orderInput).createAccount) ? ssrLooseContain(unref(orderInput).createAccount, null) : unref(orderInput).createAccount) ? " checked" : ""} type="checkbox" name="creat-account"></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div><h2 class="w-full mb-3 text-2xl font-semibold">${ssrInterpolate(_ctx.$t("messages.billing.billingDetails"))}</h2>`);
          _push(ssrRenderComponent(_component_BillingDetails, {
            modelValue: unref(customer).billing,
            "onUpdate:modelValue": ($event) => unref(customer).billing = $event,
            sameAsShippingAddress: unref(orderInput).shipToDifferentAddress
          }, null, _parent));
          _push(`</div><label for="shipToDifferentAddress" class="flex items-center gap-2"><span>${ssrInterpolate(_ctx.$t("messages.billing.differentAddress"))}</span><input id="shipToDifferentAddress"${ssrIncludeBooleanAttr(Array.isArray(unref(orderInput).shipToDifferentAddress) ? ssrLooseContain(unref(orderInput).shipToDifferentAddress, null) : unref(orderInput).shipToDifferentAddress) ? " checked" : ""} type="checkbox" name="shipToDifferentAddress"></label>`);
          if (unref(orderInput).shipToDifferentAddress) {
            _push(`<div><h2 class="mb-4 text-xl font-semibold">${ssrInterpolate(_ctx.$t("messages.general.shippingDetails"))}</h2>`);
            _push(ssrRenderComponent(_component_ShippingDetails, {
              modelValue: unref(customer).shipping,
              "onUpdate:modelValue": ($event) => unref(customer).shipping = $event
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(cart).availableShippingMethods.length) {
            _push(`<div><h3 class="mb-4 text-xl font-semibold">${ssrInterpolate(_ctx.$t("messages.general.shippingSelect"))}</h3>`);
            _push(ssrRenderComponent(_component_ShippingOptions, {
              options: unref(cart).availableShippingMethods[0].rates,
              "active-option": unref(cart).chosenShippingMethods[0]
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(paymentGateways).nodes.length) {
            _push(`<div class="mt-2 col-span-full"><h2 class="mb-4 text-xl font-semibold">${ssrInterpolate(_ctx.$t("messages.billing.paymentOptions"))}</h2>`);
            _push(ssrRenderComponent(_component_PaymentOptions, {
              modelValue: unref(orderInput).paymentMethod,
              "onUpdate:modelValue": ($event) => unref(orderInput).paymentMethod = $event,
              class: "mb-4",
              paymentGateways: unref(paymentGateways)
            }, null, _parent));
            if (unref(stripe)) {
              _push(ssrRenderComponent(_component_StripeElement, {
                style: unref(orderInput).paymentMethod.id == "stripe" ? null : { display: "none" },
                stripe: unref(stripe),
                onUpdateElement: handleStripeElement
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div><h2 class="mb-4 text-xl font-semibold">${ssrInterpolate(_ctx.$t("messages.shop.orderNote"))} (${ssrInterpolate(_ctx.$t("messages.general.optional"))})</h2><textarea id="order-note" name="order-note" class="w-full" rows="4"${ssrRenderAttr("placeholder", _ctx.$t("messages.shop.orderNotePlaceholder"))}>${ssrInterpolate(unref(orderInput).customerNote)}</textarea></div></div>`);
          _push(ssrRenderComponent(_component_OrderSummary, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="flex items-center justify-center w-full gap-3 p-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-gray-400"${ssrIncludeBooleanAttr(unref(isCheckoutDisabled)) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(buttonText))}`);
                if (unref(isProcessingOrder)) {
                  _push2(ssrRenderComponent(_component_LoadingIcon, {
                    color: "#fff",
                    size: "18"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</button>`);
              } else {
                return [
                  createVNode("button", {
                    class: "flex items-center justify-center w-full gap-3 p-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-gray-400",
                    disabled: unref(isCheckoutDisabled)
                  }, [
                    createTextVNode(toDisplayString(unref(buttonText)), 1),
                    unref(isProcessingOrder) ? (openBlock(), createBlock(_component_LoadingIcon, {
                      key: 0,
                      color: "#fff",
                      size: "18"
                    })) : createCommentVNode("", true)
                  ], 8, ["disabled"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</form>`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=checkout-DxSCb4Kh.js.map
