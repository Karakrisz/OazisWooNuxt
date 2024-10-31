import { _ as _sfc_main$2 } from "./Logo-BLqsAYqL.js";
import { _ as _sfc_main$3 } from "./PasswordInput-C2vEixSX.js";
import { p as useI18n, k as useRouter, q as useRoute, j as useAuth, d as useHead, g as __nuxt_component_10, b as _sfc_main$4, c as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResetPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useRouter();
    useRoute();
    useAuth();
    const password = ref("");
    const confirmPassword = ref("");
    const errorMessage = ref("");
    const isPending = ref(false);
    const isInvalidLink = ref(false);
    useHead({
      title: t("messages.account.resetPassword")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$2;
      const _component_PasswordInput = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_LoadingIcon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-lg mx-auto my-16 min-h-[600px] lg:my-24" }, _attrs))} data-v-538b7f47><div class="flex flex-col items-center" data-v-538b7f47>`);
      _push(ssrRenderComponent(_component_Logo, { class: "mb-6 scale-125" }, null, _parent));
      _push(`<h1 class="text-xl font-semibold lg:text-3xl" data-v-538b7f47>${ssrInterpolate(_ctx.$t("messages.account.resetPassword"))}</h1></div><form class="mt-6 flex flex-col" data-v-538b7f47><label for="password" class="mb-4" data-v-538b7f47>${ssrInterpolate(_ctx.$t("messages.account.newPassword"))} <span class="text-red-500" data-v-538b7f47>*</span><br data-v-538b7f47>`);
      _push(ssrRenderComponent(_component_PasswordInput, {
        id: "password",
        className: " border rounded-lg w-full p-3 px-4 bg-white",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        placeholder: "New Password",
        required: true
      }, null, _parent));
      _push(`</label><label for="confirmPassword" class="mb-4" data-v-538b7f47>${ssrInterpolate(_ctx.$t("messages.account.confirmNewPassword"))} <span class="text-red-500" data-v-538b7f47>*</span><br data-v-538b7f47>`);
      _push(ssrRenderComponent(_component_PasswordInput, {
        id: "confirmPassword",
        className: "border rounded-lg w-full p-3 px-4 bg-white",
        modelValue: unref(confirmPassword),
        "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
        placeholder: "Confirm Password",
        required: true
      }, null, _parent));
      _push(`</label>`);
      if (unref(errorMessage)) {
        _push(`<div class="text-sm mb-4" data-v-538b7f47><span class="text-red-500" data-v-538b7f47>${unref(errorMessage) ?? ""}</span>`);
        if (unref(isInvalidLink)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "underline cursor-pointer pl-1",
            to: "/my-account?action=forgotPassword"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("messages.account.requestNewLink"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("messages.account.requestNewLink")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="flex items-center justify-center gap-4 mt-4 text-lg" data-v-538b7f47>`);
      if (unref(isPending)) {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          stroke: "4",
          size: "16",
          color: "#fff"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-538b7f47>${ssrInterpolate(_ctx.$t("messages.account.resetPassword"))}</span></button></form><div class="my-8 text-center cursor-pointer" data-v-538b7f47>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/my-account" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("messages.account.backToLogin"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("messages.account.backToLogin")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/ResetPassword.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-538b7f47"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ResetPassword = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container min-h-[600px]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ResetPassword, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/my-account/lost-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lostPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  lostPassword as default
};
//# sourceMappingURL=lost-password-Dw2vrTXO.js.map
