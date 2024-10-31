import { _ as _sfc_main$1 } from "./Logo-BLqsAYqL.js";
import { _ as _sfc_main$2 } from "./PasswordInput-C2vEixSX.js";
import { p as useI18n, q as useRoute, k as useRouter, j as useAuth, b as _sfc_main$3, c as _export_sfc } from "../server.mjs";
import { defineComponent, ref, watch, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LoginAndRegister",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    useRouter();
    const { loginUser, isPending, registerUser, sendResetPasswordEmail } = useAuth();
    const userInfo = ref({ email: "", password: "", username: "" });
    const formView = ref("login");
    const message = ref("");
    const errorMessage = ref("");
    const updateFormView = () => {
      if (route.query.action === "forgotPassword") {
        formView.value = "forgotPassword";
      } else if (route.query.action === "register") {
        formView.value = "register";
      } else {
        formView.value = "login";
      }
    };
    watch(route, updateFormView, { immediate: true });
    const formTitle = computed(() => {
      if (formView.value === "login") {
        return t("messages.account.loginToAccount");
      } else if (formView.value === "register") {
        return t("messages.account.accountRegister");
      } else if (formView.value === "forgotPassword") {
        return t("messages.account.forgotPassword");
      }
    });
    const buttonText = computed(() => {
      if (formView.value === "login") {
        return t("messages.account.login");
      } else if (formView.value === "register") {
        return t("messages.account.register");
      } else if (formView.value === "forgotPassword") {
        return t("messages.account.sendPasswordResetEmail");
      }
    });
    const emailLabel = computed(() => {
      return formView.value === "register" ? t("messages.billing.email") : t("messages.account.emailOrUsername");
    });
    const usernameLabel = computed(() => {
      return formView.value === "login" ? t("messages.account.emailOrUsername") : t("messages.account.username");
    });
    const passwordLabel = computed(() => {
      return t("messages.account.password");
    });
    const inputPlaceholder = computed(() => {
      return {
        email: emailLabel.value,
        username: usernameLabel.value,
        password: passwordLabel.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = _sfc_main$1;
      const _component_PasswordInput = _sfc_main$2;
      const _component_LoadingIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-lg mx-auto my-16 min-h-[600px] lg:my-24" }, _attrs))} data-v-ae4dae65><div class="flex flex-col items-center" data-v-ae4dae65>`);
      _push(ssrRenderComponent(_component_Logo, { class: "mb-6 scale-125" }, null, _parent));
      _push(`<h1 class="text-xl font-semibold lg:text-3xl" data-v-ae4dae65>${ssrInterpolate(unref(formTitle))}</h1>`);
      if (unref(formView) === "login") {
        _push(`<div class="my-2 text-center" data-v-ae4dae65>${ssrInterpolate(_ctx.$t("messages.account.noAccount"))} <a class="font-semibold cursor-pointer text-primary" data-v-ae4dae65>${ssrInterpolate(_ctx.$t("messages.account.accountRegister"))}</a>. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formView) === "register") {
        _push(`<div class="my-2 text-center" data-v-ae4dae65>${ssrInterpolate(_ctx.$t("messages.account.hasAccount"))} <a class="font-semibold cursor-pointer text-primary" data-v-ae4dae65>${ssrInterpolate(_ctx.$t("messages.general.please"))} ${ssrInterpolate(_ctx.$t("messages.account.accountLogin"))}</a>. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><form class="mt-6" data-v-ae4dae65>`);
      if (unref(formView) === "register" || unref(formView) === "forgotPassword") {
        _push(`<label for="email" data-v-ae4dae65>${ssrInterpolate(unref(emailLabel))} <span class="text-red-500" data-v-ae4dae65>*</span> <br data-v-ae4dae65><input id="email"${ssrRenderAttr("value", unref(userInfo).email)}${ssrRenderAttr("placeholder", unref(inputPlaceholder).email)} type="text" required data-v-ae4dae65></label>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formView) === "forgotPassword") {
        _push(`<p class="text-sm text-gray-500" data-v-ae4dae65>${ssrInterpolate(_ctx.$t("messages.account.enterEmailOrUsernameForReset"))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formView) !== "forgotPassword") {
        _push(`<div data-v-ae4dae65><label for="username" data-v-ae4dae65>${ssrInterpolate(unref(usernameLabel))} <span class="text-red-500" data-v-ae4dae65>*</span> <br data-v-ae4dae65><input id="username"${ssrRenderAttr("value", unref(userInfo).username)}${ssrRenderAttr("placeholder", unref(inputPlaceholder).username)} type="text" required data-v-ae4dae65></label><label for="password" data-v-ae4dae65>${ssrInterpolate(unref(passwordLabel))} <span class="text-red-500" data-v-ae4dae65>*</span> <br data-v-ae4dae65>`);
        _push(ssrRenderComponent(_component_PasswordInput, {
          id: "password",
          className: "border rounded-lg w-full p-3 px-4 bg-white",
          modelValue: unref(userInfo).password,
          "onUpdate:modelValue": ($event) => unref(userInfo).password = $event,
          placeholder: unref(inputPlaceholder).password,
          required: true
        }, null, _parent));
        _push(`</label></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(message)) {
        _push(`<div class="my-4 text-sm text-green-500" data-v-ae4dae65>${unref(message) ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMessage)) {
        _push(`<div class="my-4 text-sm text-red-500" data-v-ae4dae65>${unref(errorMessage) ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="flex items-center justify-center gap-4 mt-4 text-lg" data-v-ae4dae65>`);
      if (unref(isPending)) {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          stroke: "4",
          size: "16",
          color: "#fff"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span data-v-ae4dae65>${ssrInterpolate(unref(buttonText))}</span></button></form>`);
      if (unref(formView) === "login") {
        _push(`<div class="my-8 text-center cursor-pointer" data-v-ae4dae65>${ssrInterpolate(_ctx.$t("messages.account.forgotPassword"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formView) === "forgotPassword") {
        _push(`<div class="my-8 text-center cursor-pointer" data-v-ae4dae65>${ssrInterpolate(_ctx.$t("messages.account.backToLogin"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/LoginAndRegister.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginAndRegister = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ae4dae65"]]);
export {
  LoginAndRegister as default
};
//# sourceMappingURL=LoginAndRegister-5Xcughuv.js.map
