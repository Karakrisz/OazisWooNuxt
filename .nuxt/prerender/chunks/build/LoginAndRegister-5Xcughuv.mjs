import { _ as _sfc_main$1 } from './Logo-BLqsAYqL.mjs';
import { _ as _sfc_main$2 } from './PasswordInput-C2vEixSX.mjs';
import { c as _export_sfc, p as useI18n, q as useRoute, k as useRouter, j as useAuth, b as _sfc_main$c } from './server.mjs';
import { useSSRContext, defineComponent, ref, watch, computed, mergeProps, unref } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/graphql-request/build/esm/index.js';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/cookie-es/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/utils/lib/css/icon.mjs';

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
      var _a, _b;
      const _component_Logo = _sfc_main$1;
      const _component_PasswordInput = _sfc_main$2;
      const _component_LoadingIcon = _sfc_main$c;
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
        _push(`<div class="my-4 text-sm text-green-500" data-v-ae4dae65>${(_a = unref(message)) != null ? _a : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMessage)) {
        _push(`<div class="my-4 text-sm text-red-500" data-v-ae4dae65>${(_b = unref(errorMessage)) != null ? _b : ""}</div>`);
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

export { LoginAndRegister as default };
//# sourceMappingURL=LoginAndRegister-5Xcughuv.mjs.map
