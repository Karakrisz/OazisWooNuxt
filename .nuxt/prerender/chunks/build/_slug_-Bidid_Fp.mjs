import { defineComponent, useSSRContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, computed, mergeProps, ref, watch, withAsyncContext, useModel } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { c as _export_sfc, d as useHead, f as useHelpers, q as useRoute, s as useImage, S as StockStatusEnum, o as useAppConfig, u as useCart, e as useAsyncGql, P as ProductTypesEnum, n as useRuntimeConfig, g as __nuxt_component_10, h as __nuxt_component_3$2, p as useI18n, _ as __nuxt_component_0$1$1, b as _sfc_main$c$1 } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrLooseEqual } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0$1, a as _sfc_main$1$1 } from './ProductCard-CyaaayoS.mjs';
import { _ as _sfc_main$e } from './ProductPrice-DSq3K8MZ.mjs';
import { u as useWishlist } from './useWishlist-BIY00RKh.mjs';
import { _ as _sfc_main$f } from './ProductRow-CIKX0R-V.mjs';
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

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
    const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SEOHead",
  __ssrInlineRender: true,
  props: { info: { type: Object, required: true } },
  setup(__props) {
    var _a2, _b, _c, _d;
    var _a;
    const { frontEndUrl, wooNuxtSEO, isDev, stripHtml } = useHelpers();
    const { path } = useRoute();
    const { info } = __props;
    const title = info.name;
    const canonical = `${frontEndUrl}${path}`;
    const siteName = (_a2 = process.env.SITE_TITLE) != null ? _a2 : "WooNuxt";
    const img = useImage();
    const imagePrefix = isDev ? "" : frontEndUrl;
    const imageURL = (_b = (_a = info.image) == null ? void 0 : _a.sourceUrl) != null ? _b : "/images/placeholder.jpg";
    const defaultImage = imagePrefix + img.getSizes(imageURL, { width: 1200, height: 630 }).src;
    const twitterImageSrc = imagePrefix + img.getSizes(imageURL, { width: 1600, height: 900 }).src;
    const description = info.shortDescription || info.description ? stripHtml(info.shortDescription) : stripHtml(info.description);
    const facebook = (_c = wooNuxtSEO == null ? void 0 : wooNuxtSEO.find((item) => item.provider === "facebook")) != null ? _c : null;
    const twitter = (_d = wooNuxtSEO == null ? void 0 : wooNuxtSEO.find((item) => item.provider === "twitter")) != null ? _d : null;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Link = Link;
      _push(ssrRenderComponent(_component_Head, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b2, _c2, _d2;
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(title))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(title)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(description)) {
              _push2(ssrRenderComponent(_component_Meta, {
                name: "description",
                hid: "description",
                content: unref(description)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Meta, {
              name: "image",
              hid: "image",
              content: defaultImage
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:site_name",
              hid: "og:site_name",
              content: unref(siteName)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:url",
              hid: "og:url",
              content: canonical
            }, null, _parent2, _scopeId));
            if (__props.info.name) {
              _push2(ssrRenderComponent(_component_Meta, {
                property: "og:title",
                hid: "og:title",
                content: __props.info.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(description)) {
              _push2(ssrRenderComponent(_component_Meta, {
                property: "og:description",
                hid: "og:description",
                content: unref(description)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image",
              hid: "og:image",
              content: defaultImage
            }, null, _parent2, _scopeId));
            if ((_a22 = unref(facebook)) == null ? void 0 : _a22.url) {
              _push2(ssrRenderComponent(_component_Meta, {
                property: "article:publisher",
                hid: "article:publisher",
                content: unref(facebook).url
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Meta, {
              name: "twitter:card",
              hid: "twitter:card",
              content: "summary_large_image"
            }, null, _parent2, _scopeId));
            if ((_b2 = unref(twitter)) == null ? void 0 : _b2.handle) {
              _push2(ssrRenderComponent(_component_Meta, {
                name: "twitter:site",
                hid: "twitter:site",
                content: unref(twitter).handle
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.info.name) {
              _push2(ssrRenderComponent(_component_Meta, {
                name: "twitter:title",
                hid: "twitter:title",
                content: __props.info.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(description)) {
              _push2(ssrRenderComponent(_component_Meta, {
                name: "twitter:description",
                hid: "twitter:description",
                content: unref(description)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Meta, {
              name: "twitter:image",
              hid: "twitter:image",
              content: twitterImageSrc
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "twitter:url",
              hid: "twitter:url",
              content: canonical
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Link, {
              rel: "canonical",
              hid: "canonical",
              href: canonical
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(title)), 1)
                ]),
                _: 1
              }),
              unref(description) ? (openBlock(), createBlock(_component_Meta, {
                key: 0,
                name: "description",
                hid: "description",
                content: unref(description)
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode(_component_Meta, {
                name: "image",
                hid: "image",
                content: defaultImage
              }),
              createVNode(_component_Meta, {
                property: "og:site_name",
                hid: "og:site_name",
                content: unref(siteName)
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:url",
                hid: "og:url",
                content: canonical
              }),
              __props.info.name ? (openBlock(), createBlock(_component_Meta, {
                key: 1,
                property: "og:title",
                hid: "og:title",
                content: __props.info.name
              }, null, 8, ["content"])) : createCommentVNode("", true),
              unref(description) ? (openBlock(), createBlock(_component_Meta, {
                key: 2,
                property: "og:description",
                hid: "og:description",
                content: unref(description)
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode(_component_Meta, {
                property: "og:image",
                hid: "og:image",
                content: defaultImage
              }),
              ((_c2 = unref(facebook)) == null ? void 0 : _c2.url) ? (openBlock(), createBlock(_component_Meta, {
                key: 3,
                property: "article:publisher",
                hid: "article:publisher",
                content: unref(facebook).url
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode(_component_Meta, {
                name: "twitter:card",
                hid: "twitter:card",
                content: "summary_large_image"
              }),
              ((_d2 = unref(twitter)) == null ? void 0 : _d2.handle) ? (openBlock(), createBlock(_component_Meta, {
                key: 4,
                name: "twitter:site",
                hid: "twitter:site",
                content: unref(twitter).handle
              }, null, 8, ["content"])) : createCommentVNode("", true),
              __props.info.name ? (openBlock(), createBlock(_component_Meta, {
                key: 5,
                name: "twitter:title",
                hid: "twitter:title",
                content: __props.info.name
              }, null, 8, ["content"])) : createCommentVNode("", true),
              unref(description) ? (openBlock(), createBlock(_component_Meta, {
                key: 6,
                name: "twitter:description",
                hid: "twitter:description",
                content: unref(description)
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode(_component_Meta, {
                name: "twitter:image",
                hid: "twitter:image",
                content: twitterImageSrc
              }),
              createVNode(_component_Meta, {
                name: "twitter:url",
                hid: "twitter:url",
                content: canonical
              }),
              createVNode(_component_Link, {
                rel: "canonical",
                hid: "canonical",
                href: canonical
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/SEOHead.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    var _a;
    const runtimeConfig = useRuntimeConfig();
    const { product } = __props;
    const productCategoryPermallink = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.PRODUCT_CATEGORY_PERMALINK) || "/product-category/";
    const primaryCategory = computed(() => {
      var _a2;
      return (_a2 = product.productCategories) == null ? void 0 : _a2.nodes[0];
    });
    const format = computed(() => {
      var _a2, _b;
      return [
        { name: "Products", slug: "/products" },
        {
          name: (_a2 = primaryCategory.value) == null ? void 0 : _a2.name,
          slug: `${String(productCategoryPermallink)}${(_b = primaryCategory.value) == null ? void 0 : _b.slug}`
        },
        { name: product.name }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex text-sm leading-none text-gray-400 gap-1 items-center" }, _attrs))}><span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("messages.general.home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("messages.general.home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span> /</span></span><!--[-->`);
      ssrRenderList(unref(format), (link, i) => {
        _push(`<span>`);
        if (link.slug) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: decodeURIComponent(link.slug),
            class: "hover:text-primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span class="text-gray-800">${ssrInterpolate(link.name)}</span>`);
        }
        if (i + 1 < unref(format).length) {
          _push(`<span> /</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/Breadcrumb.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ProductImageGallery",
  __ssrInlineRender: true,
  props: {
    mainImage: { type: Object, required: true },
    gallery: { type: Object, required: true },
    node: { type: Object, required: true },
    activeVariation: { type: Object, required: false }
  },
  setup(__props) {
    const { fallbackImage } = useHelpers();
    const props = __props;
    const primaryImage = computed(() => ({
      sourceUrl: props.mainImage.sourceUrl || fallbackImage,
      title: props.mainImage.title,
      altText: props.mainImage.altText,
      databaseId: props.mainImage.databaseId
    }));
    const imageToShow = ref(primaryImage.value);
    const galleryImages = computed(() => {
      return [primaryImage.value, ...props.gallery.nodes].filter((img, index, self) => index === self.findIndex((t) => (t == null ? void 0 : t.databaseId) === (img == null ? void 0 : img.databaseId)));
    });
    const changeImage = (image) => {
      if (image)
        imageToShow.value = image;
    };
    watch(
      () => props.activeVariation,
      (newVal) => {
        if (newVal == null ? void 0 : newVal.image) {
          const foundImage = galleryImages.value.find((img) => {
            var _a;
            return img.databaseId === ((_a = newVal.image) == null ? void 0 : _a.databaseId);
          });
          if (foundImage)
            imageToShow.value = foundImage;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SaleBadge = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fa2e6964>`);
      _push(ssrRenderComponent(_component_SaleBadge, {
        node: __props.node,
        class: "absolute text-base top-4 right-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "rounded-xl object-contain w-full min-w-[350px]",
        width: "640",
        height: "640",
        alt: unref(imageToShow).altText || __props.node.name,
        title: unref(imageToShow).title || __props.node.name,
        src: unref(imageToShow).sourceUrl || unref(fallbackImage),
        sizes: `100vw lg:640px`,
        fetchpriority: "high",
        placeholder: "",
        "placeholder-class": "blur-xl"
      }, null, _parent));
      if (__props.gallery.nodes.length) {
        _push(`<div class="my-4 gallery-images" data-v-fa2e6964><!--[-->`);
        ssrRenderList(unref(galleryImages), (galleryImg) => {
          _push(ssrRenderComponent(_component_NuxtImg, {
            key: galleryImg.databaseId,
            class: "cursor-pointer rounded-xl",
            width: "640",
            height: "640",
            src: galleryImg.sourceUrl,
            alt: galleryImg.altText || __props.node.name,
            title: galleryImg.title || __props.node.name,
            sizes: `100vw lg:640px`,
            placeholder: "",
            "placeholder-class": "blur-xl",
            loading: "lazy",
            onClick: ($event) => changeImage(galleryImg)
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/ProductImageGallery.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-fa2e6964"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "WPAdminLink",
  __ssrInlineRender: true,
  props: {
    link: {}
  },
  setup(__props) {
    var _a2, _b2;
    var _a, _b, _c;
    const runtimeConfig = useRuntimeConfig();
    const defaultClient = (_c = (_b = (_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a["graphql-client"]) == null ? void 0 : _b.clients) == null ? void 0 : _c.default;
    const { link } = __props;
    const gqlEndpoint = (_a2 = defaultClient == null ? void 0 : defaultClient.host) != null ? _a2 : null;
    (_b2 = gqlEndpoint == null ? void 0 : gqlEndpoint.replace("/graphql", "")) != null ? _b2 : null;
    (link == null ? void 0 : link.startsWith("/wp-admin")) || false;
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/WPAdminLink.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-79cc94cd"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "StockStatus",
  __ssrInlineRender: true,
  props: {
    stockStatus: { type: String, required: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.stockStatus === unref(StockStatusEnum).IN_STOCK) {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-green-600" }, _attrs))}>${ssrInterpolate(_ctx.$t("messages.shop.inStock"))}</span>`);
      } else if (__props.stockStatus === unref(StockStatusEnum).OUT_OF_STOCK) {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-red-600" }, _attrs))}>${ssrInterpolate(_ctx.$t("messages.shop.outOfStock"))}</span>`);
      } else if (__props.stockStatus === unref(StockStatusEnum).ON_BACKORDER) {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-yellow-600" }, _attrs))}>${ssrInterpolate(_ctx.$t("messages.shop.onBackorder"))}</span>`);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-gray-600" }, _attrs))}>Loading</span>`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/StockStatus.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: { text: { type: String, required: true } },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-block group" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 text-white text-sm rounded px-2 py-2 transition-opacity duration-300 whitespace-nowrap">${ssrInterpolate(__props.text)} <div class="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-8 border-transparent border-t-black border-t-opacity-80"></div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/Tooltip.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AttributeSelections",
  __ssrInlineRender: true,
  props: {
    attributes: {},
    defaultAttributes: {}
  },
  emits: ["attrs-changed"],
  setup(__props, { emit: __emit }) {
    const { attributes, defaultAttributes } = __props;
    const emit = __emit;
    const activeVariations = ref([]);
    const getSelectedName = computed(() => (attr, activeVariation) => {
      return attr.terms.nodes.find((node) => node.slug === activeVariation.value).name;
    });
    const updateAttrs = () => {
      const selectedVariations = attributes.map((row) => {
        var _a, _b;
        const radioValue = (void 0).querySelector(`.name-${row.name}:checked`);
        const dropdownValue = (void 0).querySelector(`#${row.name}`);
        const name = row.name.charAt(0).toLowerCase() + row.name.slice(1);
        const value = (_b = (_a = radioValue == null ? void 0 : radioValue.value) != null ? _a : dropdownValue == null ? void 0 : dropdownValue.value) != null ? _b : "";
        return { name, value };
      });
      activeVariations.value = selectedVariations;
      emit("attrs-changed", selectedVariations);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tooltip = _sfc_main$8;
      if (_ctx.attributes) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-1 justify-between" }, _attrs))}><!--[-->`);
        ssrRenderList(_ctx.attributes, (attr, i) => {
          var _a;
          _push(`<div class="flex flex-wrap py-2 relative justify-between">`);
          if (attr.name == "pa_color" || attr.name == "color") {
            _push(`<div class="grid gap-2"><div class="text-sm">${ssrInterpolate(_ctx.$t("messages.general.color"))} `);
            if (unref(activeVariations).length) {
              _push(`<span class="text-gray-400">${ssrInterpolate(unref(getSelectedName)(attr, unref(activeVariations)[i]))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="flex gap-2"><!--[-->`);
            ssrRenderList(attr.terms.nodes, (term, termIndex) => {
              _push(`<span>`);
              _push(ssrRenderComponent(_component_Tooltip, {
                text: term.name
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<label${ssrRenderAttr("for", `${term.slug}_${termIndex}`)}${_scopeId}><input${ssrRenderAttr("id", `${term.slug}_${termIndex}`)}${ssrIncludeBooleanAttr(termIndex == 0) ? " checked" : ""} type="radio" class="${ssrRenderClass([`name-${attr.name}`, "hidden"])}"${ssrRenderAttr("name", attr.name)}${ssrRenderAttr("value", term.slug)}${_scopeId}><span class="${ssrRenderClass([`color-${term.slug}`, "color-button"])}"${ssrRenderAttr("title", `${attr.name}: ${term}`)}${_scopeId}></span></label>`);
                  } else {
                    return [
                      createVNode("label", {
                        for: `${term.slug}_${termIndex}`
                      }, [
                        createVNode("input", {
                          id: `${term.slug}_${termIndex}`,
                          ref_for: true,
                          ref: attr.name,
                          class: ["hidden", `name-${attr.name}`],
                          checked: termIndex == 0,
                          type: "radio",
                          name: attr.name,
                          value: term.slug,
                          onChange: updateAttrs
                        }, null, 42, ["id", "checked", "name", "value"]),
                        createVNode("span", {
                          class: ["color-button", `color-${term.slug}`],
                          title: `${attr.name}: ${term}`
                        }, null, 10, ["title"])
                      ], 8, ["for"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</span>`);
            });
            _push(`<!--]--></div></div>`);
          } else if (attr.terms.nodes && ((_a = attr.terms.nodes) == null ? void 0 : _a.length) > 8) {
            _push(`<div class="grid gap-2"><div class="text-sm">${ssrInterpolate(attr.label)} `);
            if (unref(activeVariations).length) {
              _push(`<span class="text-gray-400">${ssrInterpolate(unref(getSelectedName)(attr, unref(activeVariations)[i]))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><select${ssrRenderAttr("id", attr.name)}${ssrRenderAttr("name", attr.name)} required class="border-white shadow"><option disabled hidden>${ssrInterpolate(_ctx.$t("messages.general.choose"))} ${ssrInterpolate(decodeURIComponent(attr.label))}</option><!--[-->`);
            ssrRenderList(attr.terms.nodes, (term, dropdownIndex) => {
              var _a2;
              _push(`<option${ssrRenderAttr("value", term.slug)}${ssrIncludeBooleanAttr(dropdownIndex == 0) ? " selected" : ""}>${(_a2 = term.name) != null ? _a2 : ""}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<div class="grid gap-2"><div class="text-sm">${ssrInterpolate(attr.label)} `);
            if (unref(activeVariations).length) {
              _push(`<span class="text-gray-400">: ${ssrInterpolate(unref(getSelectedName)(attr, unref(activeVariations)[i]))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="flex gap-2"><!--[-->`);
            ssrRenderList(attr.terms.nodes, (term, index) => {
              _push(`<span><label${ssrRenderAttr("for", `${term.slug}_${index}`)}><input${ssrRenderAttr("id", `${term.slug}_${index}`)}${ssrIncludeBooleanAttr(index == 0) ? " checked" : ""} type="radio" class="${ssrRenderClass([`name-${attr.name}`, "hidden"])}"${ssrRenderAttr("name", attr.name)}${ssrRenderAttr("value", term.slug)}><span class="${ssrRenderClass([`picker-${term.slug}`, "radio-button"])}"${ssrRenderAttr("title", `${attr.name}: ${term.slug}`)}>${ssrInterpolate(term.name)}</span></label></span>`);
            });
            _push(`<!--]--></div></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/AttributeSelections.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "AddToCartButton",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const { cart } = useCart();
    const isLoading = ref(false);
    const { t } = useI18n();
    const addToCartButtonText = computed(() => isLoading.value ? t("messages.shop.adding") : t("messages.shop.addToCart"));
    watch(cart, (val) => {
      isLoading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingIcon = _sfc_main$c$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "submit",
        class: ["rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none", { disabled: __props.disabled }],
        disabled: __props.disabled
      }, _attrs))} data-v-7b2c0bbf><span data-v-7b2c0bbf>${ssrInterpolate(unref(addToCartButtonText))}</span>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_LoadingIcon, {
          stroke: "4",
          size: "12",
          color: "#fff"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/AddToCartButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-7b2c0bbf"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "WishlistButton",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    const { addToWishlist, removeFromWishlist, isInList } = useWishlist();
    const { product } = __props;
    const isWishlisted = computed(() => product.databaseId ? isInList(product.databaseId) : false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center"
      }, _attrs))}>`);
      if (unref(isWishlisted)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ion:heart",
          size: "18",
          class: "text-red-400"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ion:heart-outline",
          size: "18"
        }, null, _parent));
      }
      _push(`<span>${ssrInterpolate(unref(isWishlisted) ? _ctx.$t("messages.shop.wishlistRemove") : _ctx.$t("messages.shop.wishlistAdd"))}</span></button>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/WishlistButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ShareButton",
  __ssrInlineRender: true,
  props: {
    product: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const twitterUrl = computed(() => `https://twitter.com/intent/tweet?text=${props.product.name}&url=${(void 0).location.href}`);
    const facebookUrl = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${(void 0).location.href}`);
    const pinterestUrl = computed(
      () => `https://pinterest.com/pin/create/button/?url=${(void 0).location.href}&media=${props.product.image.sourceUrl}&description=${props.product.name}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(isOpen)) {
        _push(`<button type="button" class="flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18"><circle cx="128" cy="256" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="384" cy="112" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="384" cy="400" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"></path></svg><span>${ssrInterpolate(_ctx.$t("messages.general.share"))}</span></button>`);
      } else {
        _push(`<div class="flex items-center gap-2 mt-4 text-sm text-gray-400 cursor-pointer"><a${ssrRenderAttr("href", unref(twitterUrl))} target="_blank" title="Share on Twitter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="currentColor"><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path></svg></a><a${ssrRenderAttr("href", unref(facebookUrl))} target="_blank" title="Share on Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="currentColor"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"></path></svg></a><a${ssrRenderAttr("href", unref(pinterestUrl))} target="_blank" title="Share on Pinterest"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="currentColor"><path d="M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0063.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32z"></path></svg></a></div>`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/ShareButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "ReviewsScore",
  __ssrInlineRender: true,
  props: {
    reviews: { type: Object, default: null },
    productId: { type: Number, default: null },
    size: { type: Number, default: 21 }
  },
  setup(__props) {
    const props = __props;
    const numberAndPercentageOfEachRating = computed(() => {
      const ratings = [0, 0, 0, 0, 0];
      props.reviews.edges.forEach((review) => {
        ratings[review.rating - 1] += 1;
      });
      const total = ratings.reduce((a, b) => a + b, 0);
      return ratings.map((count, index) => {
        const percentage = count / total * 100;
        return { count, percentage, rating: index + 1 };
      }).reverse();
    });
    const show = ref(false);
    const hovered = ref(0);
    const rating = ref(null);
    const content = ref(null);
    const authorEmail = ref(null);
    const errorMessage = ref("");
    const successMessage = ref("");
    const isPending = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_StarRating = _sfc_main$1$1;
      const _component_Icon = __nuxt_component_0$1$1;
      const _component_LoadingIcon = _sfc_main$c$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ba6de38c>`);
      if (__props.reviews.edges.length) {
        _push(`<h4 class="font-semibold text-sm text-2xl text-gray-900" data-v-ba6de38c>${ssrInterpolate(_ctx.$t("messages.shop.customerReviews"))}</h4>`);
      } else {
        _push(`<h4 class="font-semibold text-sm text-2xl text-gray-900" data-v-ba6de38c>${ssrInterpolate(_ctx.$t("messages.shop.noReviews"))}</h4>`);
      }
      if (__props.reviews.edges.length) {
        _push(`<div class="my-2" data-v-ba6de38c>`);
        _push(ssrRenderComponent(_component_StarRating, {
          rating: __props.reviews.averageRating,
          "hide-count": true,
          class: "text-sm mr-2"
        }, null, _parent));
        _push(`<span class="text-sm" data-v-ba6de38c>${ssrInterpolate(_ctx.$t("messages.general.basedOn"))} ${ssrInterpolate(__props.reviews.edges.length)} ${ssrInterpolate(_ctx.$t("messages.shop.reviews"))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="my-4 bars" data-v-ba6de38c><!--[-->`);
      ssrRenderList(unref(numberAndPercentageOfEachRating), (rating2) => {
        _push(`<div class="flex gap-4 items-center" data-v-ba6de38c><div class="flex text-sm gap-1 items-center" data-v-ba6de38c>${ssrInterpolate(rating2.rating)} `);
        _push(ssrRenderComponent(_component_Icon, {
          class: "text-yellow-400",
          name: "ion:star"
        }, null, _parent));
        _push(`</div><div class="flex-1 relative" data-v-ba6de38c><div class="rounded-full bg-gray-200 h-2.5 w-full" data-v-ba6de38c></div><div class="rounded-full bg-yellow-400 h-2.5 top-0 left-0 absolute" style="${ssrRenderStyle({ width: rating2.percentage + "%" })}" data-v-ba6de38c></div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-xl mb-2 text-gray-900" data-v-ba6de38c>Share your thoughts</div><div class="text-sm mb-4" data-v-ba6de38c>If you have used this product, we would love to hear about your experience.</div><button class="border rounded-lg text-center w-full p-2" data-v-ba6de38c>${ssrInterpolate(unref(show) ? _ctx.$t("messages.shop.close") : _ctx.$t("messages.shop.writeReview"))}</button>`);
      if (unref(show)) {
        _push(`<form class="writeReview" data-v-ba6de38c><div class="w-full text-gray-500" data-v-ba6de38c><div class="p-5 mt-3 grid gap-2 border rounded-lg" data-v-ba6de38c><div class="block text-center mb-1.5" data-v-ba6de38c><label class="text-center text-sm block relative m-auto" data-v-ba6de38c>${ssrInterpolate(_ctx.$t("messages.shop.rateReview"))} <span class="text-red-500" data-v-ba6de38c>*</span></label><div class="gap-1 flex justify-center mt-2 relative" data-v-ba6de38c><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<label class="${ssrRenderClass([unref(rating) < i && i > unref(hovered) ? "disable-star" : "checked-star", "grid p-1 rounded"])}" data-v-ba6de38c><input type="radio" class="overflow-hidden appearance-none opacity-0 absolute" name="rating"${ssrRenderAttr("value", i)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(rating), i)) ? " checked" : ""} required data-v-ba6de38c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ion:star",
            size: __props.size + ""
          }, null, _parent));
          _push(`</label>`);
        });
        _push(`<!--]--></div></div><div class="w-full col-span-full" data-v-ba6de38c><label for="content" class="text-sm mb-0.5" data-v-ba6de38c>${ssrInterpolate(_ctx.$t("messages.shop.rateContent"))} <span class="text-red-500" data-v-ba6de38c>*</span></label><textarea class="w-full" id="content" placeholder="Great Quality" required data-v-ba6de38c>${ssrInterpolate(unref(content))}</textarea></div><div class="w-full col-span-full" data-v-ba6de38c><label for="author" class="text-sm mb-0.5" data-v-ba6de38c>${ssrInterpolate(_ctx.$t("messages.shop.rateEmail"))} <span class="text-red-500" data-v-ba6de38c>*</span></label><input class="w-full" id="author" placeholder="example@example.com" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"${ssrRenderAttr("value", unref(authorEmail))} required data-v-ba6de38c></div>`);
        if (unref(errorMessage)) {
          _push(`<div class="my-4 text-sm text-red-500" data-v-ba6de38c>${(_a = unref(errorMessage)) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(successMessage)) {
          _push(`<div class="my-4 text-sm text-green-500" data-v-ba6de38c>${(_b = unref(successMessage)) != null ? _b : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="w-full col-span-full text-center mt-3" data-v-ba6de38c><button class="flex gap-4 justify-center items-center transition font-semibold rounded-md w-full p-2 bg-amber-300 text-amber-900 hover:bg-amber-400" type="submit" data-v-ba6de38c>`);
        if (unref(isPending)) {
          _push(ssrRenderComponent(_component_LoadingIcon, {
            stroke: "4",
            size: "16",
            color: "#78350F"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-ba6de38c>${ssrInterpolate(_ctx.$t("messages.shop.submit"))}</span></button></div></div></div></form>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/ReviewsScore.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ba6de38c"]]);
const _sfc_main$2 = {
  __name: "ProductReviews",
  __ssrInlineRender: true,
  props: {
    product: { type: Object, default: null }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ReviewsScore = __nuxt_component_0;
      const _component_StarRating = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-32 items-start" }, _attrs))}><div class="flex max-w-sm gap-4 prose">`);
      if (__props.product.reviews) {
        _push(ssrRenderComponent(_component_ReviewsScore, {
          reviews: __props.product.reviews,
          productId: __props.product.databaseId
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (((_a = __props.product.reviews) == null ? void 0 : _a.edges) && __props.product.reviews.edges.length) {
        _push(`<div class="divide-y flex-1"><!--[-->`);
        ssrRenderList(__props.product.reviews.edges, (review) => {
          var _a2;
          _push(`<div class="my-2 py-8"><div class="flex gap-4 items-center">`);
          if (review.node.author.node.avatar) {
            _push(`<img${ssrRenderAttr("src", review.node.author.node.avatar.url)} class="rounded-full h-12 w-12">`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="grid gap-1"><div class="text-sm"><span class="font-semibold">${ssrInterpolate(review.node.author.node.name)}</span><span class="italic text-gray-400"> \u2013 ${ssrInterpolate(new Date(review.node.date).toLocaleString(_ctx.$t("messages.general.langCode"), { month: "long", day: "numeric", year: "numeric" }))}</span></div>`);
          _push(ssrRenderComponent(_component_StarRating, {
            rating: review.rating,
            "hide-count": true,
            class: "text-sm"
          }, null, _parent));
          _push(`</div></div><div class="mt-4 text-gray-700 italic prose-sm">${(_a2 = review.node.content) != null ? _a2 : ""}</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/ProductReviews.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductTabs",
  __ssrInlineRender: true,
  props: {
    product: { type: Object, required: true }
  },
  setup(__props) {
    const { product } = __props;
    const { storeSettings } = useAppConfig();
    const initialTab = product.description ? 0 : 1;
    const show = ref(initialTab);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ProductReviews = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b27dac84><nav class="border-b flex gap-8 tabs" data-v-b27dac84>`);
      if (__props.product.description) {
        _push(`<button type="button" class="${ssrRenderClass(unref(show) === 0 ? "active" : "")}" data-v-b27dac84>${ssrInterpolate(_ctx.$t("messages.shop.productDescription"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(storeSettings).showReviews) {
        _push(`<button type="button" class="${ssrRenderClass(unref(show) === 1 ? "active" : "")}" data-v-b27dac84>${ssrInterpolate(_ctx.$t("messages.shop.reviews"))} (${ssrInterpolate(__props.product.reviewCount)})</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><div class="tab-contents" data-v-b27dac84>`);
      if (unref(show) === 0 && __props.product.description) {
        _push(`<div class="font-light mt-8 prose" data-v-b27dac84>${(_a = __props.product.description) != null ? _a : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(show) === 1) {
        _push(ssrRenderComponent(_component_ProductReviews, { product: __props.product }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/productElements/ProductTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b27dac84"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: 1 },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    let __temp, __restore;
    const route = useRoute();
    const { storeSettings } = useAppConfig();
    const { arraysEqual, formatArray, checkForVariationTypeOfAny } = useHelpers();
    const { addToCart, isUpdatingCart } = useCart();
    const slug = route.params.slug;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncGql("getProduct", { slug })), __temp = await __temp, __restore(), __temp);
    const product = ref((_a = data == null ? void 0 : data.value) == null ? void 0 : _a.product);
    const width = (_c = (_b = product.value.metaData) == null ? void 0 : _b.filter((p) => (p == null ? void 0 : p.key) == "szelesseg")[0]) == null ? void 0 : _c.value;
    const height = (_e = (_d = product.value.metaData) == null ? void 0 : _d.filter((p) => (p == null ? void 0 : p.key) == "magassag")[0]) == null ? void 0 : _e.value;
    const fuggony = (_g = (_f = product.value.metaData) == null ? void 0 : _f.filter((p) => (p == null ? void 0 : p.key) == "fuggony")[0]) == null ? void 0 : _g.value;
    const varras = ref(parseInt((_i = (_h = product.value.metaData) == null ? void 0 : _h.filter((p) => (p == null ? void 0 : p.key) == "varras")[0]) == null ? void 0 : _i.value));
    const quantity = ref(1);
    const extra_product_field = useModel(__props, "modelValue");
    const activeVariation = ref(null);
    const variation = ref([]);
    const indexOfTypeAny = ref([]);
    const attrValues = ref();
    const isSimpleProduct = computed(() => {
      var _a2;
      return ((_a2 = product.value) == null ? void 0 : _a2.type) === ProductTypesEnum.SIMPLE;
    });
    const isVariableProduct = computed(() => {
      var _a2;
      return ((_a2 = product.value) == null ? void 0 : _a2.type) === ProductTypesEnum.VARIABLE;
    });
    const type = computed(() => activeVariation.value || product.value);
    const widthInput = ref(parseInt(width) || 0);
    const heightInput = ref(parseInt(height) || 0);
    if (fuggony == 1 && extra_product_field == 1) {
      if ((type == null ? void 0 : type.value.rawSalePrice) > 0)
        type.value.salePrice = parseInt(type == null ? void 0 : type.value.rawSalePrice) + parseInt((_k = (_j = product.value.metaData) == null ? void 0 : _j.filter((p) => (p == null ? void 0 : p.key) == "varras")[0]) == null ? void 0 : _k.value) + "";
      type.value.regularPrice = parseInt(type == null ? void 0 : type.value.rawRegularPrice) + parseInt((_m = (_l = product.value.metaData) == null ? void 0 : _l.filter((p) => (p == null ? void 0 : p.key) == "varras")[0]) == null ? void 0 : _m.value) + "";
    }
    const selectProductInput = computed(() => {
      var _a3;
      var _a2, _b2;
      return {
        productId: (_a2 = type.value) == null ? void 0 : _a2.databaseId,
        quantity: quantity.value,
        variationId: (_a3 = (_b2 = activeVariation.value) == null ? void 0 : _b2.databaseId) != null ? _a3 : null,
        variation: activeVariation.value ? attrValues.value : null,
        extraData: JSON.stringify({
          width: widthInput.value,
          // Szélesség
          height: heightInput.value
          // Magasság
        })
      };
    });
    const mergeLiveStockStatus = (payload) => {
      var _a3;
      var _a2, _b2, _c2;
      product.value.stockStatus = (_a3 = payload.stockStatus) != null ? _a3 : (_a2 = product.value) == null ? void 0 : _a2.stockStatus;
      (_c2 = (_b2 = payload.variations) == null ? void 0 : _b2.nodes) == null ? void 0 : _c2.forEach((variation2, index) => {
        var _a32, _b3;
        if ((_b3 = (_a32 = product.value) == null ? void 0 : _a32.variations) == null ? void 0 : _b3.nodes[index]) {
          product.value.variations.nodes[index].stockStatus = variation2.stockStatus;
        }
      });
    };
    const updateSelectedVariations = (variations) => {
      var _a3;
      var _a2, _b2;
      if (!product.value.variations)
        return;
      attrValues.value = variations.map((el) => ({ attributeName: el.name, attributeValue: el.value }));
      const cloneArray = JSON.parse(JSON.stringify(variations));
      const getActiveVariation = (_a2 = product.value.variations) == null ? void 0 : _a2.nodes.filter((variation2) => {
        if (variation2.attributes) {
          indexOfTypeAny.value.forEach((index) => cloneArray[index].value = "");
          return arraysEqual(formatArray(variation2.attributes.nodes), formatArray(cloneArray));
        }
      });
      activeVariation.value = getActiveVariation[0];
      selectProductInput.value.variationId = (_a3 = (_b2 = activeVariation.value) == null ? void 0 : _b2.databaseId) != null ? _a3 : null;
      selectProductInput.value.variation = activeVariation.value ? attrValues.value : null;
      variation.value = variations;
    };
    const stockStatus = computed(() => {
      var _a2, _b2;
      if (isVariableProduct.value)
        return ((_a2 = activeVariation.value) == null ? void 0 : _a2.stockStatus) || StockStatusEnum.OUT_OF_STOCK;
      return ((_b2 = type.value) == null ? void 0 : _b2.stockStatus) || StockStatusEnum.OUT_OF_STOCK;
    });
    const disabledAddToCart = computed(() => {
      if (isSimpleProduct.value)
        return !type.value || stockStatus.value === StockStatusEnum.OUT_OF_STOCK || isUpdatingCart.value;
      return !type.value || stockStatus.value === StockStatusEnum.OUT_OF_STOCK || !activeVariation.value || isUpdatingCart.value;
    });
    const total = computed(() => {
      if (varras.value && extra_product_field.value === 1) {
        return Number(type.value.rawSalePrice || type.value.rawRegularPrice) * Number(quantity.value) * Number(widthInput.value / 100) + Number(varras.value) * Number(widthInput.value) / 100 * Number(quantity.value);
      }
      return Number(type.value.rawSalePrice || type.value.rawRegularPrice) * Number(quantity.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2;
      const _component_SEOHead = _sfc_main$d;
      const _component_Breadcrumb = _sfc_main$c;
      const _component_ProductImageGallery = __nuxt_component_2;
      const _component_NuxtImg = __nuxt_component_3$2;
      const _component_WPAdminLink = __nuxt_component_4;
      const _component_StarRating = _sfc_main$1$1;
      const _component_ProductPrice = _sfc_main$e;
      const _component_StockStatus = _sfc_main$9;
      const _component_AttributeSelections = _sfc_main$7;
      const _component_AddToCartButton = __nuxt_component_9;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_WishlistButton = _sfc_main$5;
      const _component_ShareButton = _sfc_main$4;
      const _component_ProductTabs = __nuxt_component_13;
      const _component_ProductRow = _sfc_main$f;
      if (unref(product)) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "container relative py-6 xl:max-w-7xl" }, _attrs))} data-v-f2a11f0b>`);
        _push(ssrRenderComponent(_component_SEOHead, { info: unref(product) }, null, _parent));
        if (unref(storeSettings).showBreadcrumbOnSingleProduct) {
          _push(ssrRenderComponent(_component_Breadcrumb, {
            product: unref(product),
            class: "mb-6"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24" data-v-f2a11f0b>`);
        if (unref(product).image) {
          _push(ssrRenderComponent(_component_ProductImageGallery, {
            class: "relative flex-1",
            "main-image": unref(product).image,
            gallery: unref(product).galleryImages,
            node: unref(type),
            activeVariation: unref(activeVariation) || {}
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_NuxtImg, {
            class: "relative flex-1 skeleton",
            src: "/images/placeholder.jpg",
            alt: ((_a2 = unref(product)) == null ? void 0 : _a2.name) || "Product"
          }, null, _parent));
        }
        _push(`<div class="lg:max-w-md xl:max-w-lg md:py-2 w-full" data-v-f2a11f0b><div class="flex justify-between mb-4" data-v-f2a11f0b><div class="flex-1" data-v-f2a11f0b><h1 class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold" data-v-f2a11f0b>${ssrInterpolate(unref(type).name)}`);
        if (unref(fuggony)) {
          _push(`<span data-v-f2a11f0b> sz\xE9less\xE9g: ${ssrInterpolate(unref(widthInput))}cm,</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(fuggony)) {
          _push(`<span data-v-f2a11f0b> magass\xE1g: ${ssrInterpolate(unref(heightInput))}cm</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_WPAdminLink, {
          link: `/wp-admin/post.php?post=${unref(product).databaseId}&action=edit`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Edit`);
            } else {
              return [
                createTextVNode("Edit")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</h1>`);
        if (unref(storeSettings).showReviews) {
          _push(ssrRenderComponent(_component_StarRating, {
            rating: unref(product).averageRating || 0,
            count: unref(product).reviewCount || 0
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ProductPrice, {
          class: "text-xl",
          "sale-price": unref(type).salePrice,
          "regular-price": `${unref(type).regularPrice} / 100cm`
        }, null, _parent));
        _push(`<h3 style="${ssrRenderStyle({ "background-color": "limegreen", "height": "fit-content", "padding": ".5em" })}" data-v-f2a11f0b> Fizetend\u0151: ${ssrInterpolate(Intl.NumberFormat("hu-HU", {
          style: "currency",
          currency: "HUF",
          maximumFractionDigits: 0,
          useGrouping: true
        }).format(unref(total)))}</h3></div>`);
        if (unref(fuggony)) {
          _push(`<div class="grid gap-2 my-8 text-sm" data-v-f2a11f0b>`);
          if (unref(fuggony)) {
            _push(`<div class="flex items-center gap-2" data-v-f2a11f0b><input type="radio" id="ftype1" name="ftype"${ssrIncludeBooleanAttr(ssrLooseEqual(extra_product_field.value, 1)) ? " checked" : ""}${ssrRenderAttr("value", 1)} data-v-f2a11f0b><label for="ftype1" data-v-f2a11f0b> K\xE9szre varr\xE1s</label><input type="radio" id="ftype2" name="ftype"${ssrIncludeBooleanAttr(ssrLooseEqual(extra_product_field.value, 0)) ? " checked" : ""}${ssrRenderAttr("value", 0)} data-v-f2a11f0b><label for="ftype2" data-v-f2a11f0b> M\xE9ter\xE1ru</label></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(fuggony)) {
            _push(`<div class="flex items-center gap-2" data-v-f2a11f0b>`);
            if (extra_product_field.value === 1) {
              _push(`<h3 data-v-f2a11f0b>Varr\xE1s: ${ssrInterpolate(unref(varras) / 100)} Ft/cm</h3>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(fuggony)) {
            _push(`<div class="flex items-center gap-2" data-v-f2a11f0b><h3 data-v-f2a11f0b>Sz\xE9less\xE9g (cm): <input type="number" name="fwidth"${ssrRenderAttr("value", unref(widthInput))} data-v-f2a11f0b></h3><h3 data-v-f2a11f0b>Magass\xE1g (cm): <input type="number" name="fheight"${ssrRenderAttr("value", unref(heightInput))} data-v-f2a11f0b></h3></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid gap-2 my-8 text-sm" data-v-f2a11f0b><div class="flex items-center gap-2" data-v-f2a11f0b><span class="text-gray-400" data-v-f2a11f0b>${ssrInterpolate(_ctx.$t("messages.shop.availability"))}: </span>`);
        _push(ssrRenderComponent(_component_StockStatus, {
          stockStatus: unref(stockStatus),
          onUpdated: mergeLiveStockStatus
        }, null, _parent));
        _push(`</div>`);
        if (unref(storeSettings).showSKU) {
          _push(`<div class="flex items-center gap-2" data-v-f2a11f0b><span class="text-gray-400" data-v-f2a11f0b>${ssrInterpolate(_ctx.$t("messages.shop.sku"))}: </span><span data-v-f2a11f0b>${ssrInterpolate(unref(product).sku || "N/A")}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mb-8 font-light prose" data-v-f2a11f0b>${(_a3 = unref(product).shortDescription || unref(product).description) != null ? _a3 : ""}</div><hr data-v-f2a11f0b><form data-v-f2a11f0b><input type="hidden" id="extra_product_field"${ssrRenderAttr("value", extra_product_field.value)} data-v-f2a11f0b>`);
        if (unref(product).type == "VARIABLE" && unref(product).attributes && unref(product).variations) {
          _push(ssrRenderComponent(_component_AttributeSelections, {
            class: "mt-4 mb-8",
            attributes: unref(product).attributes.nodes,
            defaultAttributes: unref(product).defaultAttributes,
            variations: unref(product).variations.nodes,
            onAttrsChanged: updateSelectedVariations
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0" data-v-f2a11f0b><input${ssrRenderAttr("value", unref(quantity))} type="number" min="1" aria-label="Quantity" class="bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none" data-v-f2a11f0b>`);
        _push(ssrRenderComponent(_component_AddToCartButton, {
          class: ["flex-1 w-full md:max-w-xs", { loading: unref(isUpdatingCart) }],
          disabled: unref(disabledAddToCart)
        }, null, _parent));
        _push(`</div></form>`);
        if (unref(storeSettings).showProductCategoriesOnSingleProduct) {
          _push(`<div data-v-f2a11f0b><div class="grid gap-2 my-8 text-sm" data-v-f2a11f0b><div class="flex items-center gap-2" data-v-f2a11f0b><span class="text-gray-400" data-v-f2a11f0b>${ssrInterpolate(_ctx.$t("messages.shop.category", 2))}:</span>`);
          if (unref(product).productCategories) {
            _push(`<div class="product-categories" data-v-f2a11f0b><!--[-->`);
            ssrRenderList(unref(product).productCategories.nodes, (category) => {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: category.slug,
                to: `/product-category/${decodeURIComponent(category.slug)}`,
                class: "hover:text-primary",
                title: category.name
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(category.name)}<span class="comma" data-v-f2a11f0b${_scopeId}>, </span>`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(category.name), 1),
                      createVNode("span", { class: "comma" }, ", ")
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><hr data-v-f2a11f0b></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-wrap gap-4" data-v-f2a11f0b>`);
        _push(ssrRenderComponent(_component_WishlistButton, { product: unref(product) }, null, _parent));
        _push(ssrRenderComponent(_component_ShareButton, { product: unref(product) }, null, _parent));
        _push(`</div></div></div>`);
        if (unref(product).description || unref(product).reviews) {
          _push(`<div class="my-32" data-v-f2a11f0b>`);
          _push(ssrRenderComponent(_component_ProductTabs, { product: unref(product) }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(product).related && unref(storeSettings).showRelatedProducts) {
          _push(`<div class="my-32" data-v-f2a11f0b><div class="mb-4 text-xl font-semibold" data-v-f2a11f0b>${ssrInterpolate(_ctx.$t("messages.shop.youMayLike"))}</div>`);
          _push(ssrRenderComponent(_component_ProductRow, {
            products: unref(product).related.nodes,
            class: "grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</main>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/product/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2a11f0b"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Bidid_Fp.mjs.map
