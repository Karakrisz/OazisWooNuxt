import { h as __nuxt_component_3, g as __nuxt_component_10, c as _export_sfc, o as useAppConfig, r as useSeoMeta } from "../server.mjs";
import { defineComponent, ref, withCtx, createTextVNode, toDisplayString, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import he from "he";
import { _ as __nuxt_component_6 } from "./CategoryCard-D733WO5x.js";
import { _ as _sfc_main$6 } from "./ProductRow-CIKX0R-V.js";
import "hookable";
import "destr";
import "klona";
import "defu";
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
import "./ProductCard-CyaaayoS.js";
import "./ProductPrice-DSq3K8MZ.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeroBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderElem = ref([
      {
        title: "KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK",
        description: "Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.",
        button: "TOVÁBB",
        number: "1 / 3"
      },
      {
        title: "KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK",
        description: "Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.",
        button: "TOVÁBB",
        number: "2 / 3"
      },
      {
        title: "KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK",
        description: "Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.",
        button: "TOVÁBB",
        number: "3 / 3"
      }
    ]);
    const highlightPremium = (text) => {
      if (!text) {
        return "";
      }
      return text.replace("PRÉMIUM", '<strong class="f-600">PRÉMIUM</strong>');
    };
    const currentSlide = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="slider-content position-relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "slider-content__img",
        src: "/img/slider/slider.webp",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(`<div class="slider-content__carousel-content position-absolute"><div class="carousel position-relative"><div class="carousel-slide d-flex" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 100}%)` })}"><!--[-->`);
      ssrRenderList(sliderElem.value, (item, index2) => {
        _push(`<div class="carousel-item"><h1 class="carousel-item__h1 text-color f-300">${highlightPremium(item.title) ?? ""}</h1><p class="carousel-item__p text-color f-300">${ssrInterpolate(item.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { class: "carousel-item__NuxtLink f-300" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.button)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.button), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="test-v"><div class="carousel__btn-content d-flex"><button class="carousel__btn-content__btn">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "carousel__btn-content__btn__img",
          src: "/img/slider/a-left.svg",
          alt: "Függöny Oázis"
        }, null, _parent));
        _push(`</button><p class="carousel__btn-content__p text-color f-300">${ssrInterpolate(item.number)}</p><button class="carousel__btn-content__btn">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "carousel__btn-content__btn__img",
          src: "/img/slider/a-right.svg",
          alt: "Függöny Oázis"
        }, null, _parent));
        _push(`</button></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/HeroBanner.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_3;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="navigation-content"><h3 class="navigation-content__h3 text-transform-uppercase f-300 text-center">KERESSEN SZOBA SZERINT</h3><div class="navigation-content__link-content grid-6"><div class="navigation-content__link-content__div text-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "navigation-content__link-content__div__img",
    src: "/img/navigation/furdo.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w">FÜRDŐSZOBA</h4></div><div class="navigation-content__link-content__div text-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "navigation-content__link-content__div__img",
    src: "/img/navigation/halo.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w">HÁLÓSZOBA</h4></div><div class="navigation-content__link-content__div text-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "navigation-content__link-content__div__img",
    src: "/img/navigation/nappali.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w">NAPPALI</h4></div><div class="navigation-content__link-content__div text-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "navigation-content__link-content__div__img",
    src: "/img/navigation/konyha.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w">KONYHA</h4></div><div class="navigation-content__link-content__div text-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "navigation-content__link-content__div__img",
    src: "/img/navigation/iroda.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w">IRODA</h4></div><div class="navigation-content__link-content__div text-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "navigation-content__link-content__div__img",
    src: "/img/navigation/gyerek.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`<h4 class="navigation-content__link-content__div__h4 text-transform-uppercase text-color-w">GYEREKSZOBA</h4></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/CategoryNavi.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormContent",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      phonenumber: "",
      subject: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="form-content"><div class="form-content__form-img-content position-relative grid-2"><div class="contact-form__content form-content__form-img-content__div bg-color-w"><div class="contact-form bg-color-w"><h5 class="contact-form__h5 f-300">KÉRDÉSE VAN?</h5><h6 class="contact-form__h6 f-500">KERESSEN MINKET BIZALOMMAL</h6><form><div class="form-group"><input class="form-group__input" placeholder="Név*" type="text" id="name"${ssrRenderAttr("value", unref(form).name)} required></div><div class="form-group"><input class="form-group__input" placeholder="E-mail cím *" type="email" id="email"${ssrRenderAttr("value", unref(form).email)} required></div><div class="form-group"><input class="form-group__input" placeholder="Telefonszám" type="text" id="phonenumber"${ssrRenderAttr("value", unref(form).phonenumber)} required></div><div class="form-group"><input class="form-group__input" placeholder="Tárgy*" type="text" id="subject"${ssrRenderAttr("value", unref(form).subject)} required></div><div class="form-group"><textarea rows="9" cols="300" class="form-group__textarea" placeholder="Üzenet..." id="message" required>${ssrInterpolate(unref(form).message)}</textarea></div><div class="contact-form__btn-box"><button class="contact-form__btn-box__btn text-transform-uppercase text-color-w f-500" type="submit"> Küldés `);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "contact-form__btn-box__btn__img position-relative",
        src: "/img/navigation/mail-arrow.svg",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(`</button></div></form></div></div><div class="form-content__div form-content__img-content form-content__form-img-content__div">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "form-content__img-content__img",
        src: "/img/navigation/navigation.webp",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/FormContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FaqContent",
  __ssrInlineRender: true,
  setup(__props) {
    const AccordionItems = [
      { title: "Kell-e regisztrálnom a vásárláshoz?", content: "Tartalom 1" },
      {
        title: "Okostelefonon és tableten is tudok vásárolni?",
        content: "Tartalom 2"
      },
      { title: "Hogy adhatom le a rendelésem?", content: "Tartalom 3" },
      {
        title: "Lehetséges e-mailben, vagy telefonon is rendelni?",
        content: "Tartalom 4"
      },
      {
        title: "Lehetséges e-mailben, vagy telefonon is rendelni?",
        content: "Tartalom 5"
      }
    ];
    const currentIndex = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="FAQ-content"><h3 class="FAQ-content__h3 text-transform-uppercase f-300 text-center">GYAKRAN ISMÉTELT KÉRDÉSEK</h3><div class="accordion-content d-flex"><!--[-->`);
      ssrRenderList(AccordionItems, (item, index2) => {
        _push(`<div class="accordion-content__accordion"><div class="accordion-content__header d-flex"><h3 class="accordion-content__header__h3 f-600">${ssrInterpolate(item.title)}</h3><span class="${ssrRenderClass([{ "accordion-is-open": currentIndex.value === index2 }, "accordion-content__header__arrow"])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "accordion-content__header__arrow__img",
          src: "/img/accordion/accordion-arrow.svg",
          alt: "Függöny Oázis"
        }, null, _parent));
        _push(`</span></div><div class="${ssrRenderClass([{ AccordionOpen: currentIndex.value === index2 }, "accordion-content__content"])}"><p class="accordion-content__content__p text-color-w">${ssrInterpolate(item.content)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="FAQ-content__link-content text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "FAQ-content__link-content__NuxtLink text-transform-uppercase text-color-w f-600" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ÖSSZES KÉRDÉS MEGTEKINTÉSE `);
          } else {
            return [
              createTextVNode(" ÖSSZES KÉRDÉS MEGTEKINTÉSE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/FaqContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BlogContent",
  __ssrInlineRender: true,
  setup(__props) {
    const itemsPost = ref(null);
    ref(null);
    ref(false);
    function getShortBody(body) {
      const decodedBody = he.decode(body);
      if (decodedBody.length > 100) {
        return decodedBody.substring(0, 100) + "...";
      }
      return decodedBody;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="blog-content"><h4 class="blog-content__h4 text-transform-uppercase f-300 text-center">BLOG</h4><div class="blog-content__img-text-box grid-3"><!--[-->`);
      ssrRenderList(itemsPost.value, (post) => {
        _push(`<div class="blog-content__img-text-box__div">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "blog-content__img-text-box__div__img",
          src: `https://fuggonyoazis.hu/api/public/storage/${post.image}`,
          alt: "{{ post.title }}"
        }, null, _parent));
        _push(`<div class="blog-content__img-text-box__div__tBox"><h3 class="blog-content__img-text-box__div__h3 f-600">${ssrInterpolate(post.title)}</h3><p class="blog-content__img-text-box__div__p">${getShortBody(post.body) ?? ""}</p><div class="blog-content__img-text-box__div__link-box d-flex">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/posts/${post.id}`,
          class: "blog-content__img-text-box__div__link-box__NuxtLink f-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Tovább olvasok `);
            } else {
              return [
                createTextVNode(" Tovább olvasok ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/BlogContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { siteName, description, shortDescription, siteImage } = useAppConfig();
    const productCategories = ref([]);
    const popularProducts = ref([]);
    useSeoMeta({
      title: `Kezdőlap`,
      ogTitle: siteName,
      description,
      ogDescription: shortDescription,
      ogImage: siteImage,
      twitterCard: `summary_large_image`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroBanner = _sfc_main$5;
      const _component_CategoryNavi = __nuxt_component_1;
      const _component_FormContent = _sfc_main$3;
      const _component_FaqContent = _sfc_main$2;
      const _component_BlogContent = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_10;
      const _component_CategoryCard = __nuxt_component_6;
      const _component_ProductRow = _sfc_main$6;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-09cd26ae>`);
      _push(ssrRenderComponent(_component_HeroBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_CategoryNavi, null, null, _parent));
      _push(ssrRenderComponent(_component_FormContent, null, null, _parent));
      _push(ssrRenderComponent(_component_FaqContent, null, null, _parent));
      _push(ssrRenderComponent(_component_BlogContent, null, null, _parent));
      _push(`<section class="container my-16" data-v-09cd26ae><div class="flex items-end justify-between" data-v-09cd26ae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-primary",
        to: "/categories"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("messages.general.viewAll"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("messages.general.viewAll")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6" data-v-09cd26ae><!--[-->`);
      ssrRenderList(productCategories.value, (category, i) => {
        _push(ssrRenderComponent(_component_CategoryCard, {
          key: i,
          class: "w-full",
          node: category
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
      if (popularProducts.value) {
        _push(`<section class="container my-16" data-v-09cd26ae><div class="flex items-end justify-between" data-v-09cd26ae><h2 class="text-lg font-semibold md:text-2xl" data-v-09cd26ae>Popular Products</h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-primary",
          to: "/products"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("messages.general.viewAll"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("messages.general.viewAll")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ProductRow, {
          products: popularProducts.value,
          class: "grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-8"
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09cd26ae"]]);
export {
  index as default
};
//# sourceMappingURL=index-D3xVqhaE.js.map
