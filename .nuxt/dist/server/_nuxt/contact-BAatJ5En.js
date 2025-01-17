import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { c as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container my-8" }, _attrs))}><h1 class="mb-8 text-3xl font-semibold text-primary">Contact Page</h1><div class="my-8 prose"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis, commodi illum repellat accusamus praesentium quaerat ut ducimus ipsam deserunt, a voluptate id similique ullam, provident tenetur molestiae ad. Ea aperiam esse eaque aut, beatae consectetur nam velit unde! Et excepturi quam eos labore, nulla impedit recusandae quaerat maxime expedita. </p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptate neque in odio officia assumenda nulla cumque. Veniam et tenetur accusantium, fuga pariatur repellendus impedit. Quod sint odio quisquam! Sequi repellendus eum dolorum eveniet, quidem dolor necessitatibus velit sunt esse maiores. Eum odit dolorum mollitia? Adipisci amet hic veniam debitis architecto nobis necessitatibus inventore iure ullam cum illo quae quam, excepturi beatae itaque exercitationem magnam quidem aspernatur iusto. Quos, reprehenderit? Dignissimos autem recusandae qui sit cum velit consequatur pariatur illum omnis excepturi, adipisci ab eius, optio, temporibus iure unde inventore. Maxime officiis tempore voluptatum ipsa, ab possimus atque corporis repellendus obcaecati, numquam fuga ullam doloremque ea reprehenderit earum quam culpa neque dolor sint voluptates qui rem? Ipsam reiciendis non illum? </p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  contact as default
};
//# sourceMappingURL=contact-BAatJ5En.js.map
