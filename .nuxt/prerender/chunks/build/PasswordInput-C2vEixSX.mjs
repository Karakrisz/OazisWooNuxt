import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PasswordInput",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: String, required: true },
    className: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    required: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center w-full" }, _attrs))}><input${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")}${ssrRenderAttr("value", __props.modelValue)} class="${ssrRenderClass([__props.className, "flex items-center flex-1"])}"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}>`);
      if (unref(showPassword)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ion:eye-outline",
          size: "20",
          class: "absolute cursor-pointer right-4",
          onClick: ($event) => showPassword.value = !unref(showPassword)
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ion:eye-off-outline",
          size: "20",
          class: "absolute cursor-pointer right-4",
          onClick: ($event) => showPassword.value = !unref(showPassword)
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/forms/PasswordInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PasswordInput-C2vEixSX.mjs.map
