import { hasInjectionContext, inject, version as version$1, ref, watchEffect, watch, getCurrentInstance, defineAsyncComponent, defineComponent, h, toRef, isRef, provide, createElementBlock, computed, mergeProps, useSSRContext, shallowReactive, Suspense, nextTick, Fragment, Transition, unref, shallowRef, onServerPrefetch, resolveComponent, reactive, withCtx, createVNode, openBlock, createBlock, withModifiers, createApp, effectScope, getCurrentScope, onErrorCaptured, resolveDynamicComponent, createTextVNode, toDisplayString as toDisplayString$1, isReadonly, Text, isShallow, isReactive, toRaw } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/index.mjs';
import { $fetch as $fetch$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unctx/dist/index.mjs';
import { appendHeader, createError as createError$1, getRequestHeader, setCookie, getCookie, deleteCookie, sanitizeStatusCode, getRequestHeaders } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/h3/dist/index.mjs';
import { CapoPlugin, getActiveHead } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin, composableNames, unpackMeta } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@unhead/shared/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/radix3/dist/index.mjs';
import { defu, defuFn } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/defu/dist/defu.mjs';
import destr from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/destr/dist/index.mjs';
import { klona } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/klona/dist/index.mjs';
import { parse as parse$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/cookie-es/dist/index.mjs';
import { hash, isEqual as isEqual$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ohash/dist/index.mjs';
import { setupDevtoolsPlugin } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-devtools-stub/dist/index.mjs';
import { Icon, loadIcons, getIcon, _api, disableCache, addAPIProvider } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/vue/dist/iconify.mjs';
import { gql, GraphQLClient } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/graphql-request/build/esm/index.js';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode, ssrRenderList } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue/server-renderer/index.mjs';
import { getIconCSS } from 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/utils/lib/css/icon.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unstorage/drivers/lru-cache.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/@unhead/ssr/dist/index.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "deep": false };
const appId = "nuxt-app";
function getNuxtAppCtx(appName = appId) {
  return getContext(appName, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _name: appId,
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.12.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name2, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name2, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name2, value) => {
    const $name = "$" + name2;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name2) => plugins2.some((p) => p._name === name2) && !resolvedPlugins.includes(name2))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._name);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(appName) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(appName).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(appName) {
  const nuxtAppInstance = tryUseNuxtApp(appName);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function isEqual(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}
const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash: hash2 } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash: hash2,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash2 = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash: hash2
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash2 = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash2;
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name2, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global2 = options.global || typeof name2 !== "string";
  const mw = middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name2);
    return;
  }
  if (global2) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name2] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version$1.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const _routes = [
  {
    name: "akciok",
    path: "/akciok",
    component: () => import('./akciok-M--sRA9A.mjs').then((m) => m.default || m)
  },
  {
    name: "categories",
    path: "/categories",
    component: () => import('./categories-C4FN96vF.mjs').then((m) => m.default || m)
  },
  {
    name: "checkout",
    path: "/checkout",
    component: () => import('./checkout-DxSCb4Kh.mjs').then((m) => m.default || m)
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import('./contact-BAatJ5En.mjs').then((m) => m.default || m)
  },
  {
    name: "dekoracio",
    path: "/dekoracio",
    component: () => import('./dekoracio-Dm5AS7LT.mjs').then((m) => m.default || m)
  },
  {
    name: "fuggony",
    path: "/fuggony",
    component: () => import('./fuggony-SnEoWVhb.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-D3xVqhaE.mjs').then((m) => m.default || m)
  },
  {
    name: "kapcsolat",
    path: "/kapcsolat",
    component: () => import('./kapcsolat-BO0Ru-zE.mjs').then((m) => m.default || m)
  },
  {
    name: "lakastextil",
    path: "/lakastextil",
    component: () => import('./lakastextil-DZs0U8v6.mjs').then((m) => m.default || m)
  },
  {
    name: "my-account",
    path: "/my-account",
    component: () => import('./index-DAAvChCs.mjs').then((m) => m.default || m)
  },
  {
    name: "my-account-lost-password",
    path: "/my-account/lost-password",
    component: () => import('./lost-password-Dw2vrTXO.mjs').then((m) => m.default || m)
  },
  {
    name: "order-summary",
    path: "/order-summary",
    component: () => import('./order-summary-D4a-dPwR.mjs').then((m) => m.default || m)
  },
  {
    name: "posts-id",
    path: "/posts/:id()",
    component: () => import('./_id_-cjovR7mK.mjs').then((m) => m.default || m)
  },
  {
    name: "product-category-slug",
    path: "/product-category/:slug()",
    component: () => import('./_slug_-h4I4eWr6.mjs').then((m) => m.default || m)
  },
  {
    name: "product-slug",
    path: "/product/:slug()",
    component: () => import('./_slug_-Bidid_Fp.mjs').then((m) => m.default || m)
  },
  {
    name: "products",
    path: "/products",
    component: () => import('./products-DID38f0m.mjs').then((m) => m.default || m)
  },
  {
    name: "rovidaru",
    path: "/rovidaru",
    component: () => import('./rovidaru-CHd9apZr.mjs').then((m) => m.default || m)
  },
  {
    name: "sotetito",
    path: "/sotetito",
    component: () => import('./sotetito-CAI0g03L.mjs').then((m) => m.default || m)
  },
  {
    name: "wishlist",
    path: "/wishlist",
    component: () => import('./wishlist-DqAA8pyL.mjs').then((m) => m.default || m)
  },
  {
    name: "product-page-pager",
    path: "/products/page/:pageNumber",
    component: () => import('./products-DID38f0m.mjs').then((m) => m.default || m)
  },
  {
    name: "product-category-page",
    path: "/product-category/:categorySlug",
    component: () => import('./_slug_-h4I4eWr6.mjs').then((m) => m.default || m)
  },
  {
    name: "product-category-page-pager",
    path: "/product-category/:categorySlug/page/:pageNumber",
    component: () => import('./_slug_-h4I4eWr6.mjs').then((m) => m.default || m)
  },
  {
    name: "order-received",
    path: "/checkout/order-received/:orderId",
    component: () => import('./order-summary-D4a-dPwR.mjs').then((m) => m.default || m)
  },
  {
    name: "order-summary",
    path: "/order-summary/:orderId",
    component: () => import('./order-summary-D4a-dPwR.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index2) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index2]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve22) => setTimeout(resolve22, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve2(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return Number.parseFloat(getComputedStyle(elem).scrollMarginTop) + Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d2;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.matched.length === 0) {
          await nuxtApp.runWithContext(() => showError(createError$1({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`,
            data: {
              path: to.fullPath
            }
          })));
        } else if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_d = nuxtApp.ssrContext) == null ? void 0 : _d.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name2, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name2] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return index;
}).then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["Icon", LazyIcon]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name2, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name2, component);
      nuxtApp.vueApp.component("Lazy" + name2, component);
    }
  }
});
/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const inBrowser = false;
const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
function format$1(message, ...args) {
  if (args.length === 1 && isObject(args[0])) {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return message.replace(RE_ARGS, (match, identifier) => {
    return args.hasOwnProperty(identifier) ? args[identifier] : "";
  });
}
const makeSymbol = (name2, shareable = false) => !shareable ? Symbol(name2) : Symbol.for(name2);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => {
  if (!isObject(val))
    return false;
  const proto = Object.getPrototypeOf(val);
  return proto === null || proto.constructor === Object;
};
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index2) => index2 === 0 ? str + item : str + separator + item, "");
}
const RANGE = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  const lines = source.split(/\r?\n/);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        if (j === i) {
          const pad = start - (count - lineLength) + 1;
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + 1;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function incrementer(code2) {
  let current = code2;
  return () => ++current;
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const hasWarned = {};
function warnOnce(msg) {
  if (!hasWarned[msg]) {
    hasWarned[msg] = true;
    warn(msg);
  }
}
function createEmitter() {
  const events = /* @__PURE__ */ new Map();
  const emitter = {
    events,
    on(event, handler) {
      const handlers = events.get(event);
      const added = handlers && handlers.push(handler);
      if (!added) {
        events.set(event, [handler]);
      }
    },
    off(event, handler) {
      const handlers = events.get(event);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit(event, payload) {
      (events.get(event) || []).slice().map((handler) => handler(payload));
      (events.get("*") || []).slice().map((handler) => handler(event, payload));
    }
  };
  return emitter;
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error("Invalid value");
  }
  const stack = [{ src, des }];
  while (stack.length) {
    const { src: src2, des: des2 } = stack.pop();
    Object.keys(src2).forEach((key) => {
      if (isNotObjectOrIsArray(src2[key]) || isNotObjectOrIsArray(des2[key])) {
        des2[key] = src2[key];
      } else {
        stack.push({ src: src2[key], des: des2[key] });
      }
    });
  }
}
/*!
  * message-compiler v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  return loc;
}
const CompileWarnCodes = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
};
const warnMessages$2 = {
  [CompileWarnCodes.USE_MODULO_SYNTAX]: `Use modulo before '{{0}}'.`
};
function createCompileWarn(code2, loc, ...args) {
  const msg = format$1(warnMessages$2[code2], ...args || []) ;
  const message = { message: String(msg), code: code2 };
  if (loc) {
    message.location = loc;
  }
  return message;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
};
const errorMessages$2 = {
  // tokenizer error messages
  [CompileErrorCodes.EXPECTED_TOKEN]: `Expected token: '{0}'`,
  [CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER]: `Invalid token in placeholder: '{0}'`,
  [CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: `Unterminated single quote in placeholder`,
  [CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE]: `Unknown escape sequence: \\{0}`,
  [CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE]: `Invalid unicode escape sequence: {0}`,
  [CompileErrorCodes.UNBALANCED_CLOSING_BRACE]: `Unbalanced closing brace`,
  [CompileErrorCodes.UNTERMINATED_CLOSING_BRACE]: `Unterminated closing brace`,
  [CompileErrorCodes.EMPTY_PLACEHOLDER]: `Empty placeholder`,
  [CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER]: `Not allowed nest placeholder`,
  [CompileErrorCodes.INVALID_LINKED_FORMAT]: `Invalid linked format`,
  // parser error messages
  [CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL]: `Plural must have messages`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER]: `Unexpected empty linked modifier`,
  [CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY]: `Unexpected empty linked key`,
  [CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS]: `Unexpected lexical analysis in token: '{0}'`,
  // generator error messages
  [CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE]: `unhandled codegen node type: '{0}'`,
  // minimizer error messages
  [CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE]: `unhandled mimifier node type: '{0}'`
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = format$1((messages || errorMessages$2)[code2] || "", ...args || []) ;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const RE_HTML_TAG = /<\/?[\w\s="/.':;#-\/]+>/;
const detectHtmlTag = (source) => RE_HTML_TAG.test(source);
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index22) => _buf[index22] === CHAR_CR && _buf[index22 + 1] === CHAR_LF;
  const isLF = (index22) => _buf[index22] === CHAR_LF;
  const isPS = (index22) => _buf[index22] === CHAR_PS;
  const isLS = (index22) => _buf[index22] === CHAR_LS;
  const isLineEnd = (index22) => isCRLF(index22) || isLF(index22) || isPS(index22) || isLS(index22);
  const index2 = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index: index2,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const DOT = ".";
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 14,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 14,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code2, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type2, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type2;
    const token = { type: type2 };
    if (location) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(
    context2,
    14
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 8 || currentType === 12)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 10) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "%" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function detectModuloStart(scnr) {
    const spaces = peekSpaces(scnr);
    const ret = scnr.currentPeek() === "%" && scnr.peek() === "{";
    scnr.resetPeek();
    return {
      isModulo: ret,
      hasSpace: spaces.length > 0
    };
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = "", detectModulo = false) => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return prev === "%" ? false : hasSpace;
      } else if (ch === "@" || !ch) {
        return prev === "%" ? true : hasSpace;
      } else if (ch === "%") {
        scnr.peek();
        return fn(hasSpace, "%", true);
      } else if (ch === "|") {
        return prev === "%" || detectModulo ? true : !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP, detectModulo);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF, detectModulo);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36 || // $
    cc === 45;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 || // 0-9
    cc >= 65 && cc <= 70 || // A-F
    cc >= 97 && cc <= 102;
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readModulo(scnr) {
    skipSpaces(scnr);
    const ch = scnr.currentChar();
    if (ch !== "%") {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
    }
    scnr.next();
    return "%";
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === "%") {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else {
          break;
        }
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name2 = "";
    while (ch = takeNamedIdentifierChar(scnr)) {
      name2 += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name2;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral2(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    while (ch = takeChar(scnr, isLiteral2)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name2 = "";
    while (ch = takeIdentifierChar(scnr)) {
      name2 += ch;
    }
    return name2;
  }
  function readLinkedRefer(scnr) {
    const fn = (buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "%" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn("");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      "|"
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          2,
          "{"
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default: {
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 5 || context2.currentType === 6 || context2.currentType === 7)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 6, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 7, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 13, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
      }
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 8 || currentType === 9 || currentType === 12 || currentType === 10) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(
          context2,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 12, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 11, readLinkedRefer(scnr));
          }
        }
        if (currentType === 8) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default: {
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        const { isModulo, hasSpace } = detectModuloStart(scnr);
        if (isModulo) {
          return hasSpace ? getToken(context2, 0, readText(scnr)) : getToken(context2, 4, readModulo(scnr));
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        break;
      }
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        14
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "�";
    }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const { onError, onWarn } = options;
  function emitError(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code2, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function emitWarn(tokenzer, code2, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onWarn) {
      const loc = location ? createLocation(start, end) : null;
      onWarn(createCompileWarn(code2, loc, args));
    }
  }
  function startNode(type2, offset, loc) {
    const node = { type: type2 };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type2) {
    if (location) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index2) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = parseInt(index2, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key, modulo) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key;
    if (modulo === true) {
      node.modulo = true;
    }
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 12) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 9) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 10) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 11:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 7:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default: {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
      }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    let modulo = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 4:
          modulo = true;
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || "", !!modulo));
          if (modulo) {
            emitWarn(tokenizer, CompileWarnCodes.USE_MODULO_SYNTAX, context.lastStartLoc, 0, getTokenCaption(token));
            modulo = null;
          }
          break;
        case 7:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 8: {
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
        }
      }
    } while (context.currentType !== 14 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 14);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 14) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    if (context.currentType !== 14) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 14) {
    return "EOF";
  }
  const name2 = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name2.length > 10 ? name2.slice(0, 9) + "…" : name2;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name2) => {
    _context.helpers.add(name2);
    return name2;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6: {
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        "linked"
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach((c) => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 || item.type === 9)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 || item.type === 9) {
          delete item.value;
        }
      }
    }
  }
}
const ERROR_DOMAIN$1 = "minifier";
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0: {
      const resource2 = node;
      minify(resource2.body);
      resource2.b = resource2.body;
      delete resource2.body;
      break;
    }
    case 1: {
      const plural = node;
      const cases = plural.cases;
      for (let i = 0; i < cases.length; i++) {
        minify(cases[i]);
      }
      plural.c = cases;
      delete plural.cases;
      break;
    }
    case 2: {
      const message = node;
      const items = message.items;
      for (let i = 0; i < items.length; i++) {
        minify(items[i]);
      }
      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    }
    case 6: {
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    }
    case 5: {
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    }
    case 4: {
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    }
    default:
      {
        throw createCompileError(CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ERROR_DOMAIN$1,
          args: [node.type]
        });
      }
  }
  delete node.type;
}
const ERROR_DOMAIN = "parser";
function createCodeGenerator(ast, options) {
  const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code2, node) {
    _context.code += code2;
  }
  function _newline(n, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key) => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "list"
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
    default:
      {
        throw createCompileError(CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: ERROR_DOMAIN,
          args: [node.type]
        });
      }
  }
}
const generate = (ast, options = {}) => {
  const mode = isString(options.mode) ? options.mode : "normal";
  const filename = isString(options.filename) ? options.filename : "message.intl";
  const sourceMap = !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    mode,
    filename,
    sourceMap,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const { code: code2, map } = generator.context();
  return {
    ast,
    code: code2,
    map: map ? map.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  } else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: "" };
  }
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index2 = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type2;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index2 + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index2++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index2++;
    c = path[index2];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type2 = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type2] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    if (isFunction(last)) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index2 = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index2 : index2;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index2) => _list[index2];
  const _named = options.named || {};
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction(options.messages) ? options.messages(key) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name2) => options.modifiers ? options.modifiers[name2] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type2 = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type22 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type22 = arg1.type || type22;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type22 = arg2 || type22;
      }
    }
    const ret = message(key)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type22 === "vnode" && isArray(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type22) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type2,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign({}, _list, _named)
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n, version2, meta) {
  devtools && devtools.emit("i18n:init", {
    timestamp: Date.now(),
    i18n,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const code$1$1 = CompileWarnCodes.__EXTEND_POINT__;
const inc$1$1 = incrementer(code$1$1);
const CoreWarnCodes = {
  NOT_FOUND_KEY: code$1$1,
  // 2
  FALLBACK_TO_TRANSLATE: inc$1$1(),
  // 3
  CANNOT_FORMAT_NUMBER: inc$1$1(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: inc$1$1(),
  // 5
  CANNOT_FORMAT_DATE: inc$1$1(),
  // 6
  FALLBACK_TO_DATE_FORMAT: inc$1$1(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: inc$1$1(),
  // 8
  __EXTEND_POINT__: inc$1$1()
  // 9
};
const warnMessages$1 = {
  [CoreWarnCodes.NOT_FOUND_KEY]: `Not found '{key}' key in '{locale}' locale messages.`,
  [CoreWarnCodes.FALLBACK_TO_TRANSLATE]: `Fall back to translate '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_NUMBER]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
  [CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT]: `Fall back to number format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.CANNOT_FORMAT_DATE]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
  [CoreWarnCodes.FALLBACK_TO_DATE_FORMAT]: `Fall back to datetime format '{key}' key with '{target}' locale.`,
  [CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: `This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future.`
};
function getWarnMessage$1(code2, ...args) {
  return format$1(warnMessages$1[code2], ...args);
}
const code$2 = CompileErrorCodes.__EXTEND_POINT__;
const inc$2 = incrementer(code$2);
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$2,
  // 17
  INVALID_DATE_ARGUMENT: inc$2(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: inc$2(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: inc$2(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: inc$2(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: inc$2(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: inc$2(),
  // 23
  __EXTEND_POINT__: inc$2()
  // 24
};
function createCoreError(code2) {
  return createCompileError(code2, null, { messages: errorMessages$1 } );
}
const errorMessages$1 = {
  [CoreErrorCodes.INVALID_ARGUMENT]: "Invalid arguments",
  [CoreErrorCodes.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function getLocale$1(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale) {
  if (isString(locale)) {
    return locale;
  } else {
    if (isFunction(locale)) {
      if (locale.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale.constructor.name === "Function") {
        const resolve2 = locale();
        if (isPromise(resolve2)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve2;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults) ? [defaults] : defaults;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$1 = "9.13.1";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type2) => {
      return type2 === "text" && isString(val) ? val.toUpperCase() : type2 === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type2) => {
      return type2 === "text" && isString(val) ? val.toLowerCase() : type2 === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type2) => {
      return type2 === "text" && isString(val) ? capitalize(val) : type2 === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const version2 = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = isPlainObject(options.messages) ? options.messages : { [_locale]: {} };
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale]: {} };
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  if (isFunction(options.messageCompiler)) {
    warnOnce(getWarnMessage$1(CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  }
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  {
    context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
  }
  {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function isTranslateFallbackWarn(fallback, key) {
  return fallback instanceof RegExp ? fallback.test(key) : fallback;
}
function isTranslateMissingWarn(missing, key) {
  return missing instanceof RegExp ? missing.test(key) : missing;
}
function handleMissing(context, key, locale, missingWarn, type2) {
  const { missing, onWarn } = context;
  {
    const emitter = context.__v_emitter;
    if (emitter) {
      emitter.emit("missing", {
        locale,
        key,
        type: type2,
        groupId: `${type2}:${key}`
      });
    }
  }
  if (missing !== null) {
    const ret = missing(context, locale, key, type2);
    return isString(ret) ? ret : key;
  } else {
    if (isTranslateMissingWarn(missingWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.NOT_FOUND_KEY, { key, locale }));
    }
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
  if (locale === compareLocale)
    return false;
  return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
  const index2 = locales.indexOf(targetLocale);
  if (index2 === -1) {
    return false;
  }
  for (let i = index2 + 1; i < locales.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales[i])) {
      return true;
    }
  }
  return false;
}
function format(ast) {
  const msg = (ctx) => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = ast.b || ast.body;
  if ((body.t || body.type) === 1) {
    const plural = body;
    const cases = plural.c || plural.cases;
    return ctx.plural(cases.reduce((messages, c) => [
      ...messages,
      formatMessageParts(ctx, c)
    ], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
function formatMessageParts(ctx, node) {
  const _static = node.s || node.static;
  if (_static) {
    return ctx.type === "text" ? _static : ctx.normalize([_static]);
  } else {
    const messages = (node.i || node.items).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages);
  }
}
function formatMessagePart(ctx, node) {
  const type2 = node.t || node.type;
  switch (type2) {
    case 3: {
      const text = node;
      return text.v || text.value;
    }
    case 9: {
      const literal = node;
      return literal.v || literal.value;
    }
    case 4: {
      const named = node;
      return ctx.interpolate(ctx.named(named.k || named.key));
    }
    case 5: {
      const list = node;
      return ctx.interpolate(ctx.list(list.i != null ? list.i : list.index));
    }
    case 6: {
      const linked = node;
      const modifier = linked.m || linked.modifier;
      return ctx.linked(formatMessagePart(ctx, linked.k || linked.key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    }
    case 7: {
      const linkedKey = node;
      return linkedKey.v || linkedKey.value;
    }
    case 8: {
      const linkedModifier = node;
      return linkedModifier.v || linkedModifier.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${type2}`);
  }
}
const WARN_MESSAGE = `Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.`;
function checkHtmlMessage(source, warnHtmlMessage) {
  if (warnHtmlMessage && detectHtmlTag(source)) {
    warn(format$1(WARN_MESSAGE, { source }));
  }
}
const defaultOnCacheKey = (message) => message;
let compileCache = /* @__PURE__ */ Object.create(null);
function onCompileWarn(_warn) {
  if (_warn.code === CompileWarnCodes.USE_MODULO_SYNTAX) {
    warn(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${_warn.message})`);
  }
}
const isMessageAST = (val) => isObject(val) && (val.t === 0 || val.type === 0) && ("b" in val || "body" in val);
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
function compile(message, context) {
  {
    context.onWarn = onCompileWarn;
  }
  if (isString(message)) {
    const warnHtmlMessage = isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    checkHtmlMessage(message, warnHtmlMessage);
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: "prerender" !== "production",
      jit: true
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    if (!isMessageAST(message)) {
      warn(`the message that is resolve with key '${context.key}' is not supported for jit compilation`);
      return () => message;
    }
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = getLocale$1(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  if (isString(format2) && context.messageCompiler == null) {
    warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
    return key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  {
    const payloads = {
      timestamp: Date.now(),
      key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type2 = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (locale !== targetLocale && !isAlmostSameLocale(locale, targetLocale) && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_TRANSLATE, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type: type2,
          key,
          from,
          to,
          groupId: `${type2}:${key}`
        });
      }
    }
    message = messages[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        targetLocale,
        missingWarn,
        type2
      );
      if (missingRet !== key) {
        format2 = missingRet;
      }
    }
    from = to;
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      {
        const _source = getSourceForCodeFrame(source);
        const message = `Message compilation error: ${err.message}`;
        const codeFrame = err.location && _source && generateCodeFrame(_source, err.location.start.offset, err.location.end.offset);
        const emitter = context.__v_emitter;
        if (emitter && _source) {
          emitter.emit("compile-error", {
            message: _source,
            error: err.message,
            start: err.location && err.location.start.offset,
            end: err.location && err.location.end.offset,
            groupId: `${"translate"}:${key}`
          });
        }
        console.error(codeFrame ? `${message}
${codeFrame}` : message);
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getSourceForCodeFrame(source) {
  if (isString(source)) {
    return source;
  } else {
    if (source.loc && source.loc.source) {
      return source.loc.source;
    }
  }
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key) => {
    let val = resolveValue2(message, key);
    if (val == null && fallbackContext) {
      const [, , message2] = resolveMessageFormat(fallbackContext, key, locale, fallbackLocale, fallbackWarn, missingWarn);
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
const intlDefined = typeof Intl !== "undefined";
const Availabilities = {
  dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
  numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
};
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  if (!Availabilities.dateTimeFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_DATE));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale$1(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type2 = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type: type2,
          key,
          from,
          to,
          groupId: `${type2}:${key}`
        });
      }
    }
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type2);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  if (!Availabilities.numberFormat) {
    onWarn(getWarnMessage$1(CoreWarnCodes.CANNOT_FORMAT_NUMBER));
    return MISSING_RESOLVE_VALUE;
  }
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale$1(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  let from = locale;
  let to = null;
  const type2 = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = to = locales[i];
    if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
      onWarn(getWarnMessage$1(CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, {
        key,
        target: targetLocale
      }));
    }
    if (locale !== targetLocale) {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("fallback", {
          type: type2,
          key,
          from,
          to,
          groupId: `${type2}:${key}`
        });
      }
    }
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type2);
    from = to;
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = {};
  let overrides = {};
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "9.13.1";
const code$1 = CoreWarnCodes.__EXTEND_POINT__;
const inc$1 = incrementer(code$1);
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: code$1,
  // 9
  NOT_SUPPORTED_PRESERVE: inc$1(),
  // 10
  NOT_SUPPORTED_FORMATTER: inc$1(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  // 14
  NOT_FOUND_PARENT_SCOPE: inc$1(),
  // 15
  IGNORE_OBJ_FLATTEN: inc$1(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: inc$1(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: inc$1()
  // 18
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: `Not supported 'preserve'.`,
  [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: `Not supported 'formatter'.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: `Not supported 'preserveDirectiveContent'.`,
  [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: `Not supported 'getChoiceIndex'.`,
  [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: `Component name legacy compatible: '{name}' -> 'i18n'`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN]: `Ignore object flatten: '{key}' key has an string value`,
  [I18nWarnCodes.NOTICE_DROP_ALLOW_COMPOSITION]: `'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze`,
  [I18nWarnCodes.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: `'translateExistCompatible' option will be dropped in the next major version.`
};
function getWarnMessage(code2, ...args) {
  return format$1(warnMessages[code2], ...args);
}
const code = CoreErrorCodes.__EXTEND_POINT__;
const inc = incrementer(code);
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  // 26
  NOT_INSTALLED: inc(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // 28
  // directive module errors
  REQUIRED_VALUE: inc(),
  // 29
  INVALID_VALUE: inc(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: inc(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // 37
  // for enhancement
  __EXTEND_POINT__: inc()
  // 38
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, { messages: errorMessages, args } );
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [I18nErrorCodes.INVALID_ARGUMENT]: "Invalid argument",
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [I18nErrorCodes.NOT_INSTALLED]: "Need to install with `app.use` function",
  [I18nErrorCodes.UNEXPECTED_ERROR]: "Unexpected error",
  [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
};
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const EnableEmitter = /* @__PURE__ */ makeSymbol("__enableEmitter");
const DisableEmitter = /* @__PURE__ */ makeSymbol("__disableEmitter");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        if (!isObject(currentObj[subKeys[i]])) {
          warn(getWarnMessage(I18nWarnCodes.IGNORE_OBJ_FLATTEN, {
            key: subKeys[i]
          }));
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? {} : { [locale]: {} };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource: resource2 } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource2, ret[locale2]);
        } else {
          deepCopy(resource2, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages = isObject(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      gl.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type2) => {
    return missing(locale, key, getCurrentInstance() || void 0, type2);
  };
}
const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref = shallowRef;
  const translateExistCompatible = !!options.translateExistCompatible;
  {
    if (translateExistCompatible && true) {
      warnOnce(getWarnMessage(I18nWarnCodes.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
    }
  }
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    {
      ctxOptions.__v_emitter = isPlainObject(_context) ? _context.__v_emitter : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type2, arg) {
    return type2 !== "translate" || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if ("prerender" !== "production" || false) {
        /* @__PURE__ */ setAdditionalMeta(/* @__PURE__ */ getMetaInfo());
      }
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn(_context);
    } finally {
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (warnType !== "translate exists" && // for not `te` (e.g `t`)
    isNumber(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
      const [key, arg2] = argumentParser();
      if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
        if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
          warn(getWarnMessage(I18nWarnCodes.FALLBACK_TO_ROOT, {
            key,
            type: warnType
          }));
        }
        {
          const { __v_emitter: emitter } = _context;
          if (emitter && _fallbackRoot) {
            emitter.emit("fallback", {
              type: warnType,
              key,
              to: "global",
              groupId: `${warnType}:${key}`
            });
          }
        }
      }
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps(
      (context) => {
        let ret;
        const _context2 = context;
        try {
          _context2.processor = processor;
          ret = Reflect.apply(translate, null, [_context2, ...args]);
        } finally {
          _context2.processor = null;
        }
        return ret;
      },
      () => parseTranslateArgs(...args),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[TranslateVNodeSymbol](...args),
      (key) => [createTextNode(key)],
      (val) => isArray(val)
    );
  }
  function numberParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(number, null, [context, ...args]),
      () => parseNumberArgs(...args),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[NumberPartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      (val) => isString(val) || isArray(val)
    );
  }
  function datetimeParts(...args) {
    return wrapWithDeps(
      (context) => Reflect.apply(datetime, null, [context, ...args]),
      () => parseDateTimeArgs(...args),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (root) => root[DatetimePartsSymbol](...args),
      NOOP_RETURN_ARRAY,
      (val) => isString(val) || isArray(val)
    );
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return !translateExistCompatible ? isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved) : resolved != null;
    }, () => [key], "translate exists", (root) => {
      return Reflect.apply(root.te, root, [key, locale2]);
    }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    if (flatJson) {
      const _message = { [locale2]: message };
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale2];
    }
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage2(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    const _message = { [locale2]: message };
    if (flatJson) {
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
    }
    message = _message[locale2];
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root && inBrowser) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage: mergeLocaleMessage2,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  {
    composer[EnableEmitter] = (emitter) => {
      _context.__v_emitter = emitter;
    };
    composer[DisableEmitter] = () => {
      _context.__v_emitter = void 0;
    };
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function getFragmentableTag(tag) {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign({}, attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index2) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index: index2, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index2}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign({}, attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, modifiers, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    if (modifiers.preserve) {
      warn(getWarnMessage(I18nWarnCodes.NOT_SUPPORTED_PRESERVE));
    }
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall && useI18nComponentName) {
    warn(getWarnMessage(I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE, {
      name: Translation.name
    }));
  }
  if (globalInstall) {
    [!useI18nComponentName ? Translation.name : "i18n", "I18nT"].forEach((name2) => app.component(name2, Translation));
    [NumberFormat.name, "I18nN"].forEach((name2) => app.component(name2, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name2) => app.component(name2, DatetimeFormat));
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const VueDevToolsLabels = {
  [
    "vue-devtools-plugin-vue-i18n"
    /* VueDevToolsIDs.PLUGIN */
  ]: "Vue I18n devtools",
  [
    "vue-i18n-resource-inspector"
    /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: "I18n Resources",
  [
    "vue-i18n-timeline"
    /* VueDevToolsIDs.TIMELINE */
  ]: "Vue I18n"
};
const VueDevToolsPlaceholders = {
  [
    "vue-i18n-resource-inspector"
    /* VueDevToolsIDs.CUSTOM_INSPECTOR */
  ]: "Search for scopes ..."
};
const VueDevToolsTimelineColors = {
  [
    "vue-i18n-timeline"
    /* VueDevToolsIDs.TIMELINE */
  ]: 16764185
};
const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve2, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n",
        label: VueDevToolsLabels[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (api) => {
        devtoolsApi = api;
        api.on.visitComponentTree(({ componentInstance, treeNode }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({ componentInstance, instanceData }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === "legacy") {
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: "vue-i18n-resource-inspector",
          label: VueDevToolsLabels[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: VueDevToolsPlaceholders[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        });
        api.on.getInspectorTree((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            registerScope(payload, i18n);
          }
        });
        const roots = /* @__PURE__ */ new Map();
        api.on.getInspectorState(async (payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === "global") {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState((payload) => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
            editScope(payload, i18n);
          }
        });
        api.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: VueDevToolsLabels[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: VueDevToolsTimelineColors[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        });
        resolve2(true);
      });
    } catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || "Anonymous";
}
function updateComponentTreeTags(instance, treeNode, i18n) {
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    if (instance.vnode.el.__VUE_I18N__ !== global2) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0,
        backgroundColor: 16764185
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type2 = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type: type2,
    key: "locale",
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type: type2,
    key: "availableLocales",
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type: type2,
    key: "fallbackLocale",
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type: type2,
    key: "inheritLocale",
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type: type2,
    key: "messages",
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type: type2,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type: type2,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach((key) => {
    const v = messages[key];
    if (isFunction(v) && "source" in v) {
      value[key] = getMessageFunctionDetails(v);
    } else if (isMessageAST(v) && v.loc && v.loc.source) {
      value[key] = v.loc.source;
    } else if (isObject(v)) {
      value[key] = getLocaleMessageValue(v);
    } else {
      value[key] = v;
    }
  });
  return value;
}
const ESC = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const global2 = i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    const composer = i18n.mode === "composition" ? instance : instance.__composer;
    if (global2 === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== "global") {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === "global") {
    return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find((item) => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === "composition" ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = "Locale related info";
  const localeStates = [
    {
      type: localeType,
      key: "locale",
      editable: true,
      value: composer.locale.value
    },
    {
      type: localeType,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    },
    {
      type: localeType,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    },
    {
      type: localeType,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    }
  ];
  state[localeType] = localeStates;
  const localeMessagesType = "Locale messages info";
  const localeMessagesStates = [
    {
      type: localeMessagesType,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    }
  ];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && "groupId" in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === "locale" && isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __allowComposition = true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol("vue-i18n" );
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      // mode
      get mode() {
        return "composition";
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        if (isPlainObject(options2[0])) {
          const opts = options2[0];
          i18n.__composerExtend = opts.__composerExtend;
          i18n.__vueI18nExtend = opts.__vueI18nExtend;
        }
        let globalReleaseHandler = null;
        if (__globalInjection) {
          globalReleaseHandler = injectGlobalFields(app, i18n.global);
        }
        {
          apply(app, i18n, ...options2);
        }
        const unmountApp = app.unmount;
        app.unmount = () => {
          globalReleaseHandler && globalReleaseHandler();
          i18n.dispose();
          unmountApp();
        };
        {
          const ret = await enableDevTools(app, i18n);
          if (!ret) {
            throw createI18nError(I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          }
          const emitter = createEmitter();
          {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer$3(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      {
        warn(getWarnMessage(I18nWarnCodes.NOT_FOUND_PARENT_SCOPE));
      }
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  {
    const obj = scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer$3(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  {
    return !useComponent ? target.parent : target.vnode.ctx || target.parent;
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
{
  registerMessageCompiler(compile);
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  const target = getGlobalThis();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const resource$5 = {
  "messages": {
    "general": {
      "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "View All" } },
      "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Share" } },
      "date": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date" } },
      "langCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "en-US" } },
      "status": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Status" } },
      "paymentMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Payment Method" } },
      "clearFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear Filters" } },
      "up": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Up" } },
      "please": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please" } },
      "shipping": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Shipping" } },
      "shippingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Shipping Details" } },
      "shippingSelect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Select Shipping Method" } },
      "tax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tax" } },
      "myDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "My Details" } },
      "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Home" } },
      "allProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Products" } },
      "product": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Product" } },
      "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contact" } },
      "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
      "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
      "choose": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Choose" }, { "t": 2, "i": [{ "t": 3 }], "s": "Choose" }] } },
      "basedOn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Based on" } },
      "apply": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apply" } },
      "latest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Latest" } },
      "alphabetically": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alphabetically" } },
      "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Clear" } },
      "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optional" } },
      "downloads": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloads" } },
      "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Download" } },
      "goHome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Go Home" } },
      "newsletter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Newsletter" } },
      "customerService": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Customer Service" } },
      "processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Processing" } }
    },
    "account": {
      "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Change Password" } },
      "currentPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Current Password" } },
      "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password" } },
      "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "New Password" } },
      "confirmNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirm New Password" } },
      "updatePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Update Password" } },
      "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Forgot password?" } },
      "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Username" } },
      "emailOrUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email or Username" } },
      "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Log In" } },
      "logout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logout" } },
      "backToLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Back to Login" } },
      "enterEmailOrUsernameForReset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please enter your email address or username and we will send you a link to reset your password." } },
      "ifRegistered": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "If your email address is registered with us, you will receive an email with a link to reset your password." } },
      "requestNewLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please request a new link" } },
      "resetPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reset password" } },
      "sendPasswordResetEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Send Password Reset Email" } },
      "register": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Register" } },
      "accountRegister": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sign up" } },
      "accountLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "log in" } },
      "noAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Don't have an account?" } },
      "hasAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Already have an account?" } },
      "accountCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your account has been created." } },
      "myAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "My Account" } },
      "loginToAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Log in to your account" } },
      "loggingIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logging you in..." } },
      "personalInfo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Personal Information" } },
      "updating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Updating" } },
      "updateDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Update Details" } },
      "updateSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Updated successfully" } },
      "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Failed to update" } }
    },
    "shop": {
      "shopByCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Shop by Category" } },
      "availability": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Availability" } },
      "inStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In Stock" } },
      "outOfStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Out of Stock" } },
      "onBackorder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "On Backorder" } },
      "sku": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SKU" } },
      "price": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Price" } },
      "category": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Category" }, { "t": 2, "i": [{ "t": 3 }], "s": "Categories" }] } },
      "youMayLike": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You May Also Like" } },
      "wishlist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wishlist" } },
      "wishlistRemove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remove from Wishlist" } },
      "wishlistAdd": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add to Wishlist" } },
      "wishlistNoItems": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "You have no items in your wishlist" } },
      "addToCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Add to Cart" } },
      "adding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adding..." } },
      "productDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
      "productImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Product Image" } },
      "productBestSellers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Best Sellers" } },
      "newArrivals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "New Arrivals" } },
      "onSale": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "On Sale" } },
      "reviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reviews" } },
      "customerReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Customer Reviews" } },
      "noReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No reviews yet." } },
      "writeReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Write a Review" } },
      "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Close" } },
      "rateReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "How would you rate your experience with this product? We strive for a 5 star experience" } },
      "rateContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "How was your experience?" } },
      "rateEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your email" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Submit" } },
      "order": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Order" }, { "t": 2, "i": [{ "t": 3 }], "s": "Orders" }] } },
      "orderSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Order Summary" } },
      "orderReceived": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Order Received" } },
      "orderNote": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Order Note" }, { "t": 2, "i": [{ "t": 3 }], "s": "Order Notes" }] } },
      "orderNotePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notes about your order, e.g. special notes for delivery." } },
      "orderThanks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Thank you for your order. We will send you an email with the order details." } },
      "orderHistory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Order History" } },
      "placeOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Place Order" } },
      "total": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Total" } },
      "subtotal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subtotal" } },
      "rating": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Rating" }, { "t": 2, "i": [{ "t": 3 }], "s": "Ratings" }] } },
      "cart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cart" } },
      "cartEmpty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Your cart is empty." } },
      "addProductsInYourCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please, add some products to your cart." } },
      "browseOurProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Browse our products" } },
      "checkout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checkout" } },
      "checkoutButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Checkout" } },
      "discount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Discount" } },
      "giftCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gift Cards" } },
      "searchProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Search Products..." } },
      "couponCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Coupon Code" } },
      "downloadsRemaining": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloads remaining" } },
      "expires": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expires" } }
    },
    "billing": {
      "billing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Billing" } },
      "billingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Billing Details" } },
      "firstName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "First Name" } },
      "lastName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Last Name" } },
      "address1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Address 1" } },
      "address2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Address 2" } },
      "city": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "City" } },
      "state": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "State" } },
      "zip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zip" } },
      "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Country" } },
      "countryCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Country Code" } },
      "phone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Phone" } },
      "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
      "paymentOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Payment Options" } },
      "creditCard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Credit Card" } },
      "cashOnDelivery": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cash on Delivery" } },
      "differentAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ship to a different address?" } }
    },
    "error": {
      "invalidUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No account found with that username. Sign up for a new account." } },
      "incorrectPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Incorrect password. Please try again." } },
      "passwordMismatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwords do not match. Please try again." } },
      "invalidPasswordResetLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password reset link is invalid." } },
      "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Something went wrong" } },
      "noOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "We could not find your order. Please try again later." } }
    }
  }
};
const resource$4 = {
  "messages": {
    "general": {
      "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle anzeigen" } },
      "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teilen" } },
      "date": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Datum" } },
      "langCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "de-DE" } },
      "status": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Status" } },
      "paymentMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zahlungsmethode" } },
      "clearFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Filter löschen" } },
      "up": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "aufwärts" } },
      "please": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte" } },
      "shipping": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Versand" } },
      "shippingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Versanddetails" } },
      "shippingSelect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Versandart auswählen" } },
      "tax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "MwSt." } },
      "myDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meine Details" } },
      "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Startseite" } },
      "allProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alle Produkte" } },
      "product": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produkt" } },
      "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kontakt" } },
      "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menü" } },
      "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Farbe" } },
      "choose": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Wähle" }, { "t": 2, "i": [{ "t": 3 }], "s": "Wählen" }] } },
      "basedOn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basierend auf" } },
      "apply": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anwenden" } },
      "latest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neueste" } },
      "alphabetically": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alphabetisch" } },
      "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Löschen" } },
      "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optional" } },
      "downloads": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloads" } },
      "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Download" } },
      "goHome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur Startseite" } },
      "newsletter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Newsletter" } },
      "customerService": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kundenservice" } },
      "processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird verarbeitet..." } }
    },
    "account": {
      "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort ändern" } },
      "currentPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktuelles Passwort" } },
      "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort" } },
      "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Passwort" } },
      "confirmNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neues Passwort bestätigen" } },
      "updatePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort aktualisieren" } },
      "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort vergessen?" } },
      "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Benutzername" } },
      "emailOrUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail oder Benutzername" } },
      "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anmelden" } },
      "logout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Logout" } },
      "backToLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zurück zum Login" } },
      "enterEmailOrUsernameForReset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte geben Sie Ihre E-Mail-Adresse oder Ihren Benutzernamen ein, und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts." } },
      "ifRegistered": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wenn Ihre E-Mail-Adresse bei uns registriert ist, erhalten Sie eine E-Mail mit einem Link zum Zurücksetzen Ihres Passworts." } },
      "requestNewLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte fordern Sie einen neuen Link an" } },
      "resetPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort zurücksetzen" } },
      "sendPasswordResetEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passwort-zurücksetzen-E-Mail senden" } },
      "register": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registrieren" } },
      "accountRegister": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "registrieren" } },
      "accountLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "einloggen" } },
      "noAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noch kein Konto?" } },
      "hasAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Haben Sie bereits ein Konto?" } },
      "accountCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Konto wurde erstellt." } },
      "myAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mein Konto" } },
      "loginToAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Melden Sie sich mit Ihrem Konto an" } },
      "loggingIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Anmeldung..." } },
      "personalInfo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Persönliche Informationen" } },
      "updating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualisierung" } },
      "updateDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Details aktualisieren" } },
      "updateSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Erfolgreich aktualisiert" } },
      "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aktualisierung fehlgeschlagen" } }
    },
    "shop": {
      "shopByCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kategorien" } },
      "availability": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verfügbarkeit" } },
      "inStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "auf Lager" } },
      "outOfStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "ausverkauft" } },
      "onBackorder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nachbestellung" } },
      "sku": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SKU" } },
      "price": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preis" } },
      "category": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Kategorie" }, { "t": 2, "i": [{ "t": 3 }], "s": "Kategorien" }] } },
      "youMayLike": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Könnte Ihnen auch gefallen" } },
      "wishlist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wunschliste" } },
      "wishlistRemove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Von Wunschliste entfernen" } },
      "wishlistAdd": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zur Wunschliste hinzufügen" } },
      "wishlistNoItems": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre Wunschliste ist leer." } },
      "addToCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In den Warenkorb" } },
      "adding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wird hinzugefügt..." } },
      "productDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Beschreibung" } },
      "productImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produktbild" } },
      "productBestSellers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestseller" } },
      "newArrivals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Neuheiten" } },
      "onSale": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Im Angebot" } },
      "reviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertungen" } },
      "customerReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kundenbewertungen" } },
      "noReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Noch keine Bewertungen" } },
      "writeReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bewertung schreiben" } },
      "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Schließen" } },
      "rateReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wie würden Sie dieses Produkt bewerten?" } },
      "rateContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre Bewertung" } },
      "rateEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihre E-Mail-Adresse" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senden" } },
      "order": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Bestellung" }, { "t": 2, "i": [{ "t": 3 }], "s": "Bestellungen" }] } },
      "orderSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestellübersicht" } },
      "orderReceived": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vielen Dank für Ihre Bestellung. Wir senden Ihnen eine E-Mail mit den Bestelldetails zu." } },
      "orderNote": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Bestellnotiz" }, { "t": 2, "i": [{ "t": 3 }], "s": "Bestellnotizen" }] } },
      "orderNotePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nachricht zu Ihrer Bestellung, zum Beispiel zur Lieferung." } },
      "orderThanks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vielen Dank für Ihre Bestellung. Wir senden Ihnen eine E-Mail mit den Bestelldetails zu." } },
      "orderHistory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestellverlauf" } },
      "placeOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bestellung aufgeben" } },
      "total": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gesamt" } },
      "subtotal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zwischensumme" } },
      "rating": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Bewertung" }, { "t": 2, "i": [{ "t": 3 }], "s": "Bewertungen" }] } },
      "cart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Warenkorb" } },
      "cartEmpty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ihr Warenkorb ist leer" } },
      "addProductsInYourCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Bitte fügen Sie einige Produkte in Ihren Warenkorb hinzu." } },
      "browseOurProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stöbern Sie in unseren Produkten" } },
      "checkout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kasse" } },
      "checkoutButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "jetzt bezahlen" } },
      "discount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rabatt" } },
      "giftCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Geschenkkarten" } },
      "searchProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produkte suchen..." } },
      "couponCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gutscheincode" } },
      "downloadsRemaining": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Verbleibende Downloads" } },
      "expires": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Läuft ab" } }
    },
    "billing": {
      "billing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechnung" } },
      "billingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechnungsadresse" } },
      "firstName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vorname" } },
      "lastName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nachname" } },
      "address1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Addresse" } },
      "address2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Addresszeile 2" } },
      "city": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ort" } },
      "state": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "State" } },
      "zip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "PLZ" } },
      "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Land" } },
      "countryCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ländercode" } },
      "phone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Telefon" } },
      "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-Mail" } },
      "paymentOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Zahlungsoptionen" } },
      "creditCard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Kreditkarte" } },
      "cashOnDelivery": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nachname" } },
      "differentAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Abweichende Lieferadresse?" } }
    },
    "error": {
      "invalidUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ungültiger Benutzername. Bitte registrieren Sie sich." } },
      "invalidPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ungültiges Passwort. Bitte versuchen Sie es erneut." } },
      "passwordMismatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Die Passwörter stimmen nicht überein. Bitte versuche es erneut." } },
      "invalidPasswordResetLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Der Passwort-Reset-Link ist ungültig." } },
      "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Etwas ist schief gelaufen" } },
      "noOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Wir konnten Ihre Bestellung nicht finden. Bitte versuchen Sie es später noch einmal." } }
    }
  }
};
const resource$3 = {
  "messages": {
    "general": {
      "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver todo" } },
      "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compartir" } },
      "date": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fecha" } },
      "langCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "es-ES" } },
      "status": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado" } },
      "paymentMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Método de pago" } },
      "clearFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limpiar filtros" } },
      "up": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Arriba" } },
      "please": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor" } },
      "shipping": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envío" } },
      "shippingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detalles de envío" } },
      "shippingSelect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleccionar método de envío" } },
      "tax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impuesto" } },
      "myDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mis detalles" } },
      "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inicio" } },
      "allProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Todos los productos" } },
      "product": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Producto" } },
      "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contacto" } },
      "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menú" } },
      "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Color" } },
      "choose": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Elegir" }, { "t": 2, "i": [{ "t": 3 }], "s": "Elegir" }] } },
      "basedOn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basado en" } },
      "apply": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicar" } },
      "latest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Últimos" } },
      "alphabetically": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alfabéticamente" } },
      "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limpiar" } },
      "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcional" } },
      "downloads": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargas" } },
      "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargar" } },
      "goHome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ir a inicio" } },
      "newsletter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Boletín" } },
      "customerService": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Servicio al cliente" } },
      "processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Procesando" } }
    },
    "account": {
      "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambiar contraseña" } },
      "currentPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contraseña actual" } },
      "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contraseña" } },
      "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nueva contraseña" } },
      "confirmNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmar nueva contraseña" } },
      "updatePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar contraseña" } },
      "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "¿Olvidaste tu contraseña?" } },
      "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de usuario" } },
      "emailOrUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electrónico o nombre de usuario" } },
      "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iniciar sesión" } },
      "logout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerrar sesión" } },
      "backToLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Volver a Iniciar sesión" } },
      "enterEmailOrUsernameForReset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ingrese su dirección de correo electrónico o nombre de usuario y le enviaremos un enlace para restablecer su contraseña." } },
      "ifRegistered": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si tu dirección de correo electrónico está registrada con nosotros, recibirás un correo electrónico con un enlace para restablecer tu contraseña." } },
      "requestNewLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solicita un nuevo enlace" } },
      "resetPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Restablecer la contraseña" } },
      "sendPasswordResetEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar correo electrónico de restablecimiento de contraseña" } },
      "register": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registrarse" } },
      "accountRegister": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "registrarse" } },
      "accountLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "iniciar sesión" } },
      "noAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "¿No tienes una cuenta?" } },
      "hasAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "¿Ya tienes una cuenta?" } },
      "accountCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu cuenta ha sido creada." } },
      "myAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mi cuenta" } },
      "loginToAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inicia sesión en tu cuenta" } },
      "loggingIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iniciando sesión..." } },
      "personalInfo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Información personal" } },
      "updating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizando" } },
      "updateDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizar detalles" } },
      "updateSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Actualizado con éxito" } },
      "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Error al actualizar" } }
    },
    "shop": {
      "shopByCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comprar por categoría" } },
      "availability": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disponibilidad" } },
      "inStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En stock" } },
      "outOfStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agotado" } },
      "onBackorder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En espera" } },
      "sku": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SKU" } },
      "price": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Precio" } },
      "category": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Categoría" }, { "t": 2, "i": [{ "t": 3 }], "s": "Categorías" }] } },
      "youMayLike": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "También te puede interesar" } },
      "wishlist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista de deseos" } },
      "wishlistRemove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Eliminar de la lista de deseos" } },
      "wishlistAdd": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar a la lista de deseos" } },
      "wishlistNoItems": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No tienes ningún producto en tu lista de deseos" } },
      "addToCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregar al carrito" } },
      "adding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Agregando..." } },
      "productDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descripción del producto" } },
      "productImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagen del producto" } },
      "productBestSellers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mejores ventas" } },
      "newArrivals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuevos productos" } },
      "onSale": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En oferta" } },
      "reviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opiniones" } },
      "customerReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opiniones de clientes" } },
      "noReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aún no hay opiniones" } },
      "writeReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escribir opinión" } },
      "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerrar" } },
      "rateReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "¿Cómo calificarías este producto?" } },
      "rateContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu calificación" } },
      "rateEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu correo electrónico" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar" } },
      "order": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Pedido" }, { "t": 2, "i": [{ "t": 3 }], "s": "Pedidos" }] } },
      "orderSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resumen del pedido" } },
      "orderReceived": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hemos recibido tu pedido" } },
      "orderNote": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Nota del pedido" }, { "t": 2, "i": [{ "t": 3 }], "s": "Notas del pedido" }] } },
      "orderNotePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mensaje para tu pedido, como instrucciones de entrega" } },
      "orderThanks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Gracias por tu pedido. Te enviaremos un correo electrónico con los detalles del pedido." } },
      "orderHistory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historial de pedidos" } },
      "placeOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Realizar pedido" } },
      "total": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Total" } },
      "subtotal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subtotal" } },
      "rating": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Calificación" }, { "t": 2, "i": [{ "t": 3 }], "s": "Calificaciones" }] } },
      "cart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carrito" } },
      "cartEmpty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tu carrito está vacío" } },
      "addProductsInYourCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, añade algunos productos a tu carrito." } },
      "browseOurProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Explora nuestros productos" } },
      "checkout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagar" } },
      "checkoutButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagar ahora" } },
      "discount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descuento" } },
      "giftCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tarjetas de regalo" } },
      "searchProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Buscar productos..." } },
      "couponCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Código de cupón" } },
      "downloadsRemaining": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descargas restantes" } },
      "expires": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expira" } }
    },
    "billing": {
      "billing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Facturación" } },
      "billingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detalles de facturación" } },
      "firstName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre" } },
      "lastName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Apellido" } },
      "address1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dirección" } },
      "address2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dirección 2" } },
      "city": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ciudad" } },
      "state": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado" } },
      "zip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Código postal" } },
      "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "País" } },
      "countryCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Código de país" } },
      "phone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Teléfono" } },
      "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Correo electrónico" } },
      "paymentOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opciones de pago" } },
      "creditCard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tarjeta de crédito" } },
      "cashOnDelivery": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contra reembolso" } },
      "differentAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "¿Dirección de envío diferente?" } }
    },
    "error": {
      "invalidUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nombre de usuario inválido. Por favor, regístrate." } },
      "invalidPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contraseña inválida. Por favor, inténtalo de nuevo." } },
      "passwordMismatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Las contraseñas no coinciden. Por favor, inténtalo de nuevo." } },
      "invalidPasswordResetLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "El enlace de restablecimiento de contraseña no es válido." } },
      "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ha ocurrido un error" } },
      "noOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "No hemos podido encontrar tu pedido. Por favor, inténtalo de nuevo más tarde." } }
    }
  }
};
const resource$2 = {
  "messages": {
    "general": {
      "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voir tout" } },
      "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Partager" } },
      "date": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Date" } },
      "langCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "fr-FR" } },
      "status": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Statut" } },
      "paymentMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Méthode de paiement" } },
      "clearFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Effacer les filtres" } },
      "up": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Plus" } },
      "please": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Please" } },
      "shipping": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Livraison" } },
      "shippingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Détails de livraison" } },
      "shippingSelect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sélectionner la méthode de livraison" } },
      "tax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Taxe" } },
      "myDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mes informations" } },
      "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accueil" } },
      "allProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Tous les produits" } },
      "product": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produit" } },
      "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contact" } },
      "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
      "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Couleur" } },
      "choose": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Choisir" }, { "t": 2, "i": [{ "t": 3 }], "s": "Choisir" }] } },
      "basedOn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basé sur" } },
      "apply": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Appliquer" } },
      "latest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveautés" } },
      "alphabetically": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Par ordre alphabétique" } },
      "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Effacer" } },
      "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Optionnel" } },
      "downloads": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Téléchargements" } },
      "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Télécharger" } },
      "goHome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour à l'accueil" } },
      "newsletter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Newsletter" } },
      "customerService": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Service Client" } },
      "processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En cours de traitement" } }
    },
    "account": {
      "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Modifier le mot de passe" } },
      "currentPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe actuel" } },
      "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe" } },
      "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveau mot de passe" } },
      "confirmNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirmez le nouveau mot de passe" } },
      "updatePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre à jour le mot de passe" } },
      "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe oublié ?" } },
      "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom d'utilisateur" } },
      "emailOrUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail ou nom d'utilisateur" } },
      "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se connecter" } },
      "logout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se déconnecter" } },
      "backToLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Retour à la connexion" } },
      "enterEmailOrUsernameForReset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez entrer votre adresse e-mail ou votre nom d'utilisateur et nous vous enverrons un lien pour réinitialiser votre mot de passe." } },
      "ifRegistered": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Si votre adresse e-mail est enregistrée chez nous, vous recevrez un e-mail contenant un lien pour réinitialiser votre mot de passe." } },
      "requestNewLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez demander un nouveau lien" } },
      "resetPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Réinitialiser le mot de passe" } },
      "sendPasswordResetEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Envoyer un e-mail de réinitialisation du mot de passe" } },
      "register": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S'inscrire" } },
      "accountRegister": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "S'inscrire" } },
      "accountLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se connecter" } },
      "noAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pas encore de compte ?" } },
      "hasAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous avez déjà un compte ?" } },
      "accountCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre compte a bien été créé." } },
      "myAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mon compte" } },
      "loginToAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se connecter à votre compte" } },
      "loggingIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Connexion..." } },
      "personalInfo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Informations personnelles" } },
      "updating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise à jour" } },
      "updateDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mettre à jour les détails" } },
      "updateSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mise à jour réussie" } },
      "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Échec de la mise à jour" } }
    },
    "shop": {
      "shopByCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acheter par catégorie" } },
      "availability": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disponibilité" } },
      "inStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En stock" } },
      "outOfStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rupture de stock" } },
      "onBackorder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En réapprovisionnement" } },
      "sku": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SKU" } },
      "price": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prix" } },
      "category": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Catégorie" }, { "t": 2, "i": [{ "t": 3 }], "s": "Catégories" }] } },
      "youMayLike": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous pouvez également aimer" } },
      "wishlist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Favoris" } },
      "wishlistRemove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Supprimer des favoris" } },
      "wishlistAdd": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter aux favoris" } },
      "wishlistNoItems": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Vous n'avez aucun article dans vos favoris" } },
      "addToCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ajouter au panier" } },
      "adding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En cours d'ajout..." } },
      "productDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Description" } },
      "productImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Image du produit" } },
      "productBestSellers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meilleures ventes" } },
      "newArrivals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nouveautés" } },
      "onSale": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "En solde" } },
      "reviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avis" } },
      "customerReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avis clients" } },
      "noReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun avis pour le moment." } },
      "writeReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rédiger un avis" } },
      "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fermer" } },
      "rateReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comment évaluez-vous votre expérience avec ce produit ? Nous visons une expérience 5 étoiles" } },
      "rateContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comment s'est passée votre expérience ?" } },
      "rateEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre e-mail" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Valider" } },
      "order": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Commande" }, { "t": 2, "i": [{ "t": 3 }], "s": "Commandes" }] } },
      "orderSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Récapitulatif de la commance" } },
      "orderReceived": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nous avons bien reçu votre commande." } },
      "orderNote": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Note de commande" }, { "t": 2, "i": [{ "t": 3 }], "s": "Notes de commande" }] } },
      "orderNotePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notes sur votre commande, par exemple, des notes spéciales à propos de votre livraison." } },
      "orderThanks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Merci de votre commande. Nous vous enverrons un e-mail avec les détails de la commande." } },
      "orderHistory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Historique des commandes" } },
      "placeOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Passer la commande" } },
      "total": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Total" } },
      "subtotal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sous-total" } },
      "rating": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Note" }, { "t": 2, "i": [{ "t": 3 }], "s": "Notes" }] } },
      "cart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Panier" } },
      "cartEmpty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Votre panier est vide." } },
      "addProductsInYourCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Veuillez ajouter des produits à votre panier." } },
      "browseOurProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Parcourez nos produits" } },
      "checkout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Commander" } },
      "checkoutButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Commander" } },
      "discount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remise" } },
      "giftCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cartes cadeaux" } },
      "searchProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rechercher par produit..." } },
      "couponCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Code du coupon de réduction" } },
      "downloadsRemaining": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Téléchargements restants" } },
      "expires": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expire le" } }
    },
    "billing": {
      "billing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Facturation" } },
      "billingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Détails de facturation" } },
      "firstName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prénom" } },
      "lastName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nom" } },
      "address1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresse 1" } },
      "address2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adresse 2" } },
      "city": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ville" } },
      "state": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "État" } },
      "zip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Région" } },
      "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pays" } },
      "countryCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Code postal" } },
      "phone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Téléphone" } },
      "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail" } },
      "paymentOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Options de paiement" } },
      "creditCard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carte de crédit" } },
      "cashOnDelivery": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paiement à la livraison" } },
      "differentAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expédier à une autre adresse ?" } }
    },
    "error": {
      "invalidUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aucun compte n'a été trouvé avec ce nom d'utilisateur. Veuillez vous inscrire." } },
      "incorrectPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mot de passe invalide. Veuillez réessayer." } },
      "passwordMismatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Les mots de passe ne correspondent pas. Veuillez réessayer." } },
      "invalidPasswordResetLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le lien de réinitialisation du mot de passe est invalide." } },
      "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Une erreur est survenue" } },
      "noOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Impossible de trouver votre commande. Veuillez réessayer plus tard." } }
    }
  }
};
const resource$1 = {
  "messages": {
    "general": {
      "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Visualizza tutto" } },
      "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Condividi" } },
      "date": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data" } },
      "langCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "it-IT" } },
      "status": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stato" } },
      "paymentMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Metodo di pagamento" } },
      "clearFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancella filtri" } },
      "up": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Su" } },
      "please": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Per favore" } },
      "shipping": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spedizione" } },
      "shippingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dettagli della spedizione" } },
      "shippingSelect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seleziona il metodo di spedizione" } },
      "tax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imposta" } },
      "myDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I miei dettagli" } },
      "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Home" } },
      "allProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prodotti" } },
      "product": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prodotto" } },
      "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contatto" } },
      "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
      "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Colore" } },
      "choose": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Scegli" }, { "t": 2, "i": [{ "t": 3 }], "s": "Scegli" }] } },
      "basedOn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Basato su" } },
      "apply": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Applica" } },
      "latest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Più recenti" } },
      "alphabetically": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In ordine alfabetico" } },
      "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cancella" } },
      "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opzionale" } },
      "downloads": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Download" } },
      "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scarica" } },
      "goHome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Torna alla Home" } },
      "newsletter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Newsletter" } },
      "customerService": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Servizio clienti" } },
      "processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Elaborazione" } }
    },
    "account": {
      "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cambia password" } },
      "currentPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password attuale" } },
      "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password" } },
      "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuova password" } },
      "confirmNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Conferma nuova password" } },
      "updatePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiorna password" } },
      "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hai dimenticato la password?" } },
      "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome utente" } },
      "emailOrUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email o nome utente" } },
      "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accedi" } },
      "logout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esci" } },
      "backToLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Torna al Login" } },
      "enterEmailOrUsernameForReset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inserisci il tuo indirizzo e-mail o nome utente e ti invieremo un link per reimpostare la tua password." } },
      "ifRegistered": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se il tuo indirizzo e-mail è registrato presso di noi, riceverai un'e-mail con un link per reimpostare la tua password." } },
      "requestNewLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Richiedi un nuovo link" } },
      "resetPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Reimposta password" } },
      "sendPasswordResetEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invia email per il reset della password" } },
      "register": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registrati" } },
      "accountRegister": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Iscriviti" } },
      "accountLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accedi" } },
      "noAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai un account?" } },
      "hasAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Hai già un account?" } },
      "accountCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il tuo account è stato creato." } },
      "myAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il mio account" } },
      "loginToAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accedi al tuo account" } },
      "loggingIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Accesso in corso..." } },
      "personalInfo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Informazioni personali" } },
      "updating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiornamento" } },
      "updateDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiorna dettagli" } },
      "updateSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiornato con successo" } },
      "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiornamento fallito" } }
    },
    "shop": {
      "shopByCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Acquista per categoria" } },
      "availability": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disponibilità" } },
      "inStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disponibile" } },
      "outOfStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non disponibile" } },
      "onBackorder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In preordine" } },
      "sku": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SKU" } },
      "price": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Prezzo" } },
      "category": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Categoria" }, { "t": 2, "i": [{ "t": 3 }], "s": "Categorie" }] } },
      "youMayLike": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Potrebbe interessarti anche" } },
      "wishlist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista dei desideri" } },
      "wishlistRemove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Rimuovi dalla lista dei desideri" } },
      "wishlistAdd": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi alla lista dei desideri" } },
      "wishlistNoItems": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non hai articoli nella lista dei desideri" } },
      "addToCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiungi al carrello" } },
      "adding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aggiunta..." } },
      "productDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descrizione" } },
      "productImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Immagine del prodotto" } },
      "productBestSellers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "I più venduti" } },
      "newArrivals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nuovi arrivi" } },
      "onSale": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "In saldo" } },
      "reviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recensioni" } },
      "customerReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Recensioni dei clienti" } },
      "noReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ancora nessuna recensione." } },
      "writeReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scrivi una recensione" } },
      "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Chiudi" } },
      "rateReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Come valuteresti la tua esperienza con questo prodotto? Cerchiamo di garantire un'esperienza a 5 stelle" } },
      "rateContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Come è stata la tua esperienza?" } },
      "rateEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "La tua email" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Invia" } },
      "order": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Ordine" }, { "t": 2, "i": [{ "t": 3 }], "s": "Ordini" }] } },
      "orderSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Riepilogo dell'ordine" } },
      "orderReceived": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ordine ricevuto" } },
      "orderNote": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Nota dell'ordine" }, { "t": 2, "i": [{ "t": 3 }], "s": "Note dell'ordine" }] } },
      "orderNotePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Note sul tuo ordine, ad esempio istruzioni speciali per la consegna." } },
      "orderThanks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Grazie per il tuo ordine. Ti invieremo un'email con i dettagli dell'ordine." } },
      "orderHistory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Storico degli ordini" } },
      "placeOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Effettua l'ordine" } },
      "total": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Totale" } },
      "subtotal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subtotale" } },
      "rating": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Valutazione" }, { "t": 2, "i": [{ "t": 3 }], "s": "Valutazioni" }] } },
      "cart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carrello" } },
      "cartEmpty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il tuo carrello è vuoto." } },
      "addProductsInYourCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Per favore, aggiungi alcuni prodotti al tuo carrello." } },
      "browseOurProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sfoglia i nostri prodotti" } },
      "checkout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagamento" } },
      "checkoutButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Procedi al pagamento" } },
      "discount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sconto" } },
      "giftCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carte regalo" } },
      "searchProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cerca prodotti..." } },
      "couponCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codice coupon" } },
      "downloadsRemaining": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Download rimanenti" } },
      "expires": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Scade" } }
    },
    "billing": {
      "billing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fatturazione" } },
      "billingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Dettagli della fatturazione" } },
      "firstName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome" } },
      "lastName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cognome" } },
      "address1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indirizzo 1" } },
      "address2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Indirizzo 2" } },
      "city": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Città" } },
      "state": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Stato" } },
      "zip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CAP" } },
      "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Paese" } },
      "countryCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Codice paese" } },
      "phone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Telefono" } },
      "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
      "paymentOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opzioni di pagamento" } },
      "creditCard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carta di credito" } },
      "cashOnDelivery": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagamento alla consegna" } },
      "differentAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Spedisci a un altro indirizzo?" } }
    },
    "error": {
      "invalidUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nessun account trovato con questo nome utente. Registrati per un nuovo account." } },
      "incorrectPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Password errata. Riprova." } },
      "passwordMismatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Le password non coincidono. Per favore riprova." } },
      "invalidPasswordResetLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Il link per reimpostare la password non è valido." } },
      "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Qualcosa è andato storto" } },
      "noOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Non abbiamo trovato il tuo ordine. Riprova più tardi." } }
    }
  }
};
const resource = {
  "messages": {
    "general": {
      "viewAll": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ver Todos" } },
      "share": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Compartilhar" } },
      "date": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Data" } },
      "langCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "pt-BR" } },
      "status": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Status" } },
      "paymentMethod": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Método de Pagamento" } },
      "clearFilters": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limpar Filtros" } },
      "up": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cima" } },
      "please": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor" } },
      "shipping": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Frete" } },
      "shippingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detalhes do Envio" } },
      "shippingSelect": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Selecione Método de Envio" } },
      "tax": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imposto" } },
      "myDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Meus Detalhes" } },
      "home": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Início" } },
      "allProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produtos" } },
      "product": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Produto" } },
      "contact": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Contato" } },
      "menu": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Menu" } },
      "color": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cor" } },
      "choose": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Escolha" }, { "t": 2, "i": [{ "t": 3 }], "s": "Escolha" }] } },
      "basedOn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Baseado em" } },
      "apply": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Aplicar" } },
      "latest": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mais Recente" } },
      "alphabetically": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alfabeticamente" } },
      "clear": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Limpar" } },
      "optional": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opcional" } },
      "downloads": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloads" } },
      "download": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Download" } },
      "goHome": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Ir para Início" } },
      "newsletter": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Newsletter" } },
      "customerService": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atendimento ao Cliente" } },
      "processing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Processando" } }
    },
    "account": {
      "changePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Alterar Senha" } },
      "currentPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senha Atual" } },
      "password": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senha" } },
      "newPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nova Senha" } },
      "confirmNewPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Confirme a Nova Senha" } },
      "updatePassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atualizar Senha" } },
      "forgotPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Esqueceu a senha?" } },
      "username": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nome de Usuário" } },
      "emailOrUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "E-mail ou nome de usuário" } },
      "login": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrar" } },
      "logout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sair" } },
      "backToLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Voltar ao Login" } },
      "enterEmailOrUsernameForReset": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, insira seu endereço de e-mail ou nome de usuário e enviaremos um link para redefinir sua senha." } },
      "ifRegistered": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Se o seu endereço de e-mail estiver registrado conosco, você receberá um e-mail com um link para redefinir sua senha." } },
      "requestNewLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Solicite um novo link" } },
      "resetPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Redefinir senha" } },
      "sendPasswordResetEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar Email para Redefinição de Senha" } },
      "register": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Registrar" } },
      "accountRegister": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Inscrever-se" } },
      "accountLogin": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrar" } },
      "noAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Não tem uma conta?" } },
      "hasAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Já tem uma conta?" } },
      "accountCreated": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sua conta foi criada." } },
      "myAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Minha Conta" } },
      "loginToAccount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entre na sua conta" } },
      "loggingIn": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Entrando..." } },
      "personalInfo": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Informações Pessoais" } },
      "updating": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atualizando" } },
      "updateDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atualizar Detalhes" } },
      "updateSuccess": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Atualizado com sucesso" } },
      "failed": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Falha ao atualizar" } }
    },
    "shop": {
      "shopByCategory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Comprar por Categoria" } },
      "availability": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Disponibilidade" } },
      "inStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Em Estoque" } },
      "outOfStock": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fora de Estoque" } },
      "onBackorder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Em Backorder" } },
      "sku": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "SKU" } },
      "price": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Preço" } },
      "category": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Categoria" }, { "t": 2, "i": [{ "t": 3 }], "s": "Categorias" }] } },
      "youMayLike": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Você Também Pode Gostar" } },
      "wishlist": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Lista de Desejos" } },
      "wishlistRemove": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Remover da Lista de Desejos" } },
      "wishlistAdd": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adicionar à Lista de Desejos" } },
      "wishlistNoItems": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Você não tem itens na sua lista de desejos" } },
      "addToCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adicionar ao Carrinho" } },
      "adding": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Adicionando..." } },
      "productDescription": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Descrição" } },
      "productImage": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Imagem do Produto" } },
      "productBestSellers": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Mais Vendidos" } },
      "newArrivals": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Novidades" } },
      "onSale": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Em Promoção" } },
      "reviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avaliações" } },
      "customerReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Avaliações de Clientes" } },
      "noReviews": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sem avaliações ainda." } },
      "writeReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Escreva uma Avaliação" } },
      "close": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Fechar" } },
      "rateReview": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Como você avaliaria sua experiência com este produto? Buscamos uma experiência de 5 estrelas" } },
      "rateContent": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Como foi sua experiência?" } },
      "rateEmail": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seu email" } },
      "submit": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar" } },
      "order": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Pedido" }, { "t": 2, "i": [{ "t": 3 }], "s": "Pedidos" }] } },
      "orderSummary": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Resumo do Pedido" } },
      "orderReceived": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pedido Recebido" } },
      "orderNote": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Nota do Pedido" }, { "t": 2, "i": [{ "t": 3 }], "s": "Notas do Pedido" }] } },
      "orderNotePlaceholder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Notas sobre seu pedido, observações especiais para entrega." } },
      "orderThanks": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Obrigado pelo seu pedido. Enviaremos um email com os detalhes do pedido." } },
      "orderHistory": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Histórico de Pedidos" } },
      "placeOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finalizar Pedido" } },
      "total": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Total" } },
      "subtotal": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Subtotal" } },
      "rating": { "t": 0, "b": { "t": 1, "c": [{ "t": 2, "i": [{ "t": 3 }], "s": "Avaliação" }, { "t": 2, "i": [{ "t": 3 }], "s": "Avaliações" }] } },
      "cart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Carrinho" } },
      "cartEmpty": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Seu carrinho está vazio." } },
      "addProductsInYourCart": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Por favor, adicione alguns produtos ao seu carrinho." } },
      "browseOurProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Navegue pelos nossos produtos" } },
      "checkout": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finalizar Compra" } },
      "checkoutButton": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Finalizar" } },
      "discount": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Desconto" } },
      "giftCards": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cartões Presente" } },
      "searchProducts": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pesquisar Produtos..." } },
      "couponCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Código do Cupom" } },
      "downloadsRemaining": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Downloads restantes" } },
      "expires": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Expira" } }
    },
    "billing": {
      "billing": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cobrança" } },
      "billingDetails": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Detalhes da Cobrança" } },
      "firstName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Primeiro Nome" } },
      "lastName": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Sobrenome" } },
      "address1": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Endereço 1" } },
      "address2": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Endereço 2" } },
      "city": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cidade" } },
      "state": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Estado" } },
      "zip": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "CEP" } },
      "country": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "País" } },
      "countryCode": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Código do País" } },
      "phone": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Telefone" } },
      "email": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Email" } },
      "paymentOptions": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Opções de Pagamento" } },
      "creditCard": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Cartão de Crédito" } },
      "cashOnDelivery": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Pagamento na Entrega" } },
      "differentAddress": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Enviar para um endereço diferente?" } }
    },
    "error": {
      "invalidUsername": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Nenhuma conta encontrada com esse nome de usuário. Inscreva-se para uma nova conta." } },
      "incorrectPassword": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Senha incorreta. Por favor, tente novamente." } },
      "passwordMismatch": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "As senhas não coincidem. Por favor, tente novamente." } },
      "invalidPasswordResetLink": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "O link de redefinição de senha é inválido." } },
      "general": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Algo deu errado" } },
      "noOrder": { "t": 0, "b": { "t": 2, "i": [{ "t": 3 }], "s": "Não conseguimos encontrar seu pedido. Por favor, tente novamente mais tarde." } }
    }
  }
};
const localeCodes = [
  "en_US",
  "de_DE",
  "es_ES",
  "fr_FR",
  "it_IT",
  "pt_BR"
];
const localeLoaders = {
  "en_US": [{ key: "../woonuxt_base/app/locales/en-US.json", load: () => Promise.resolve(resource$5), cache: true }],
  "de_DE": [{ key: "../woonuxt_base/app/locales/de-DE.json", load: () => Promise.resolve(resource$4), cache: true }],
  "es_ES": [{ key: "../woonuxt_base/app/locales/es-ES.json", load: () => Promise.resolve(resource$3), cache: true }],
  "fr_FR": [{ key: "../woonuxt_base/app/locales/fr-FR.json", load: () => Promise.resolve(resource$2), cache: true }],
  "it_IT": [{ key: "../woonuxt_base/app/locales/it-IT.json", load: () => Promise.resolve(resource$1), cache: true }],
  "pt_BR": [{ key: "../woonuxt_base/app/locales/pt-BR.json", load: () => Promise.resolve(resource), cache: true }]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    "code": "en_US",
    "name": "English 🇺🇸",
    "files": [
      {
        "path": "woonuxt_base/app/locales/en-US.json"
      }
    ]
  },
  {
    "code": "de_DE",
    "name": "Deutsch 🇩🇪",
    "files": [
      {
        "path": "woonuxt_base/app/locales/de-DE.json"
      }
    ]
  },
  {
    "code": "es_ES",
    "name": "Español 🇪🇸",
    "files": [
      {
        "path": "woonuxt_base/app/locales/es-ES.json"
      }
    ]
  },
  {
    "code": "fr_FR",
    "name": "Français 🇫🇷",
    "files": [
      {
        "path": "woonuxt_base/app/locales/fr-FR.json"
      }
    ]
  },
  {
    "code": "it_IT",
    "name": "Italiano 🇮🇹",
    "files": [
      {
        "path": "woonuxt_base/app/locales/it-IT.json"
      }
    ]
  },
  {
    "code": "pt_BR",
    "name": "Português 🇧🇷",
    "files": [
      {
        "path": "woonuxt_base/app/locales/pt-BR.json"
      }
    ]
  }
];
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const parallelPlugin = false;
const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n";
const DEFAULT_COOKIE_KEY = "i18n_redirected";
const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp";
const cacheMessages = /* @__PURE__ */ new Map();
async function loadVueI18nOptions(vueI18nConfigs2, nuxt) {
  const vueI18nOptions = { messages: {} };
  for (const configFile of vueI18nConfigs2) {
    const { default: resolver } = await configFile();
    const resolved = typeof resolver === "function" ? await nuxt.runWithContext(async () => await resolver()) : resolver;
    deepCopy(resolved, vueI18nOptions);
  }
  return vueI18nOptions;
}
function makeFallbackLocaleCodes(fallback, locales) {
  let fallbackLocales = [];
  if (isArray(fallback)) {
    fallbackLocales = fallback;
  } else if (isObject(fallback)) {
    const targets = [...locales, "default"];
    for (const locale of targets) {
      if (fallback[locale]) {
        fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
      }
    }
  } else if (isString(fallback) && locales.every((locale) => locale !== fallback)) {
    fallbackLocales.push(fallback);
  }
  return fallbackLocales;
}
async function loadInitialMessages(messages, localeLoaders2, options) {
  const { defaultLocale, initialLocale, localeCodes: localeCodes2, fallbackLocale, lazy } = options;
  if (lazy && fallbackLocale) {
    const fallbackLocales = makeFallbackLocaleCodes(fallbackLocale, [defaultLocale, initialLocale]);
    await Promise.all(fallbackLocales.map((locale) => loadAndSetLocaleMessages(locale, localeLoaders2, messages)));
  }
  const locales = lazy ? [...(/* @__PURE__ */ new Set()).add(defaultLocale).add(initialLocale)] : localeCodes2;
  await Promise.all(locales.map((locale) => loadAndSetLocaleMessages(locale, localeLoaders2, messages)));
  return messages;
}
async function loadMessage(locale, { key, load }) {
  let message = null;
  try {
    const getter = await load().then((r) => r.default || r);
    if (isFunction(getter)) {
      message = await getter(locale);
    } else {
      message = getter;
      if (message != null && cacheMessages) {
        cacheMessages.set(key, message);
      }
    }
  } catch (e) {
    console.error("Failed locale loading: " + e.message);
  }
  return message;
}
async function loadLocale(locale, localeLoaders2, setter) {
  const loaders = localeLoaders2[locale];
  if (loaders == null) {
    console.warn("Could not find messages for locale code: " + locale);
    return;
  }
  const targetMessage = {};
  for (const loader of loaders) {
    let message = null;
    if (cacheMessages && cacheMessages.has(loader.key) && loader.cache) {
      message = cacheMessages.get(loader.key);
    } else {
      message = await loadMessage(locale, loader);
    }
    if (message != null) {
      deepCopy(message, targetMessage);
    }
  }
  setter(locale, targetMessage);
}
async function loadAndSetLocaleMessages(locale, localeLoaders2, messages) {
  const setter = (locale2, message) => {
    const base = messages[locale2] || {};
    deepCopy(message, base);
    messages[locale2] = base;
  };
  await loadLocale(locale, localeLoaders2, setter);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  if (!include || !event) {
    return _headers;
  }
  const headers = /* @__PURE__ */ Object.create(null);
  for (const _key of include) {
    const key = _key.toLowerCase();
    const header = _headers[key];
    if (header) {
      headers[key] = header;
    }
  }
  return headers;
}
function prerenderRoutes(path) {
  const paths = toArray(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name2, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name2] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual$1(cookie.value, cookies[name2])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name2 in nuxtApp._cookies) {
        if (isEqual$1(cookie.value, nuxtApp._cookies[name2])) {
          return;
        }
      }
      nuxtApp._cookies[name2] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name2, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse$1(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name2, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name2, value, opts);
    }
    if (getCookie(event, name2) !== void 0) {
      return deleteCookie(event, name2, opts);
    }
  }
}
function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
function getNormalizedLocales(locales) {
  locales = locales || [];
  const normalized = [];
  for (const locale of locales) {
    if (isString(locale)) {
      normalized.push({ code: locale });
    } else {
      normalized.push(locale);
    }
  }
  return normalized;
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && "locale" in target && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
function getComposer(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target))
    return target;
  if (isVueI18n(target))
    return target.__composer;
  return target;
}
function getLocale(i18n) {
  return unref(getI18nTarget(i18n).locale);
}
function getLocales(i18n) {
  return unref(getI18nTarget(i18n).locales);
}
function getLocaleCodes(i18n) {
  return unref(getI18nTarget(i18n).localeCodes);
}
function setLocale(i18n, locale) {
  const target = getI18nTarget(i18n);
  if (isRef(target.locale)) {
    target.locale.value = locale;
  } else {
    target.locale = locale;
  }
}
function getRouteName(routeName) {
  if (isString(routeName))
    return routeName;
  if (isSymbol(routeName))
    return routeName.toString();
  return "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  let name2 = getRouteName(routeName) + (strategy === "no_prefix" ? "" : routesNameSeparator + locale);
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name2 += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name2;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index2, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index2 / browserLocales.length });
      break;
    }
  }
  for (const [index2, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.iso.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index2 / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
const DefaultBrowserLocaleMatcher = matchBrowserLocale;
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
const DefaultBrowerLocaleComparer = compareBrowserLocale;
function findBrowserLocale(locales, browserLocales, { matcher = DefaultBrowserLocaleMatcher, comparer = DefaultBrowerLocaleComparer } = {}) {
  const normalizedLocales2 = [];
  for (const l of locales) {
    const { code: code2 } = l;
    const iso = l.iso || code2;
    normalizedLocales2.push({ code: code2, iso });
  }
  const matchedLocales = matcher(normalizedLocales2, browserLocales);
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales.length ? matchedLocales[0].code : "";
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function split(str, index2) {
  const result = [str.slice(0, index2), str.slice(index2)];
  return result;
}
function routeToObject(route) {
  const { fullPath, query, hash: hash2, name: name2, path, params, meta, redirectedFrom, matched } = route;
  return {
    fullPath,
    params,
    query,
    hash: hash2,
    name: name2,
    path,
    meta,
    matched,
    redirectedFrom
  };
}
function resolve({ router }, route, strategy, locale) {
  var _a, _b;
  if (strategy !== "prefix") {
    return router.resolve(route);
  }
  const [rootSlash, restPath] = split(route.path, 1);
  const targetPath = `${rootSlash}${locale}${restPath === "" ? restPath : `/${restPath}`}`;
  const _route = (_b = (_a = router.options) == null ? void 0 : _a.routes) == null ? void 0 : _b.find((r) => r.path === targetPath);
  if (_route == null) {
    return route;
  }
  const _resolvableRoute = assign({}, route, _route);
  _resolvableRoute.path = targetPath;
  return router.resolve(_resolvableRoute);
}
const RESOLVED_PREFIXED = /* @__PURE__ */ new Set(["prefix_and_default", "prefix_except_default"]);
function prefixable(options) {
  const { currentLocale, defaultLocale, strategy } = options;
  const isDefaultLocale = currentLocale === defaultLocale;
  return !(isDefaultLocale && RESOLVED_PREFIXED.has(strategy)) && // no prefix for any language
  !(strategy === "no_prefix");
}
const DefaultPrefixable = prefixable;
function getRouteBaseName(common, givenRoute) {
  const { routesNameSeparator } = common.runtimeConfig.public.i18n;
  const route = unref(givenRoute);
  if (route == null || !route.name) {
    return;
  }
  const name2 = getRouteName(route.name);
  return name2.split(routesNameSeparator)[0];
}
function localePath(common, route, locale) {
  var _a;
  if (typeof route === "string" && hasProtocol(route, { acceptRelative: true })) {
    return route;
  }
  const localizedRoute = resolveRoute(common, route, locale);
  return localizedRoute == null ? "" : ((_a = localizedRoute.redirectedFrom) == null ? void 0 : _a.fullPath) || localizedRoute.fullPath;
}
function localeRoute(common, route, locale) {
  const resolved = resolveRoute(common, route, locale);
  return resolved ?? void 0;
}
function localeLocation(common, route, locale) {
  const resolved = resolveRoute(common, route, locale);
  return resolved ?? void 0;
}
function resolveRoute(common, route, locale) {
  const { router, i18n } = common;
  const _locale = locale || getLocale(i18n);
  const { routesNameSeparator, defaultLocale, defaultLocaleRouteNameSuffix, strategy, trailingSlash } = common.runtimeConfig.public.i18n;
  const prefixable2 = extendPrefixable(common.runtimeConfig);
  let _route;
  if (isString(route)) {
    if (route[0] === "/") {
      const { pathname: path, search, hash: hash2 } = parsePath(route);
      const query = parseQuery(search);
      _route = { path, query, hash: hash2 };
    } else {
      _route = { name: route };
    }
  } else {
    _route = route;
  }
  let localizedRoute = assign({}, _route);
  const isRouteLocationPathRaw = (val) => "path" in val && !!val.path && !("name" in val);
  if (isRouteLocationPathRaw(localizedRoute)) {
    const resolvedRoute = resolve(common, localizedRoute, strategy, _locale);
    const resolvedRouteName = getRouteBaseName(common, resolvedRoute);
    if (isString(resolvedRouteName)) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, _locale, {
          defaultLocale,
          strategy,
          routesNameSeparator,
          defaultLocaleRouteNameSuffix
        }),
        // @ts-ignore
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
      localizedRoute.state = resolvedRoute.state;
    } else {
      if (prefixable2({ currentLocale: _locale, defaultLocale, strategy })) {
        localizedRoute.path = `/${_locale}${localizedRoute.path}`;
      }
      localizedRoute.path = trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !("path" in localizedRoute)) {
      localizedRoute.name = getRouteBaseName(common, router.currentRoute.value);
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, _locale, {
      defaultLocale,
      strategy,
      routesNameSeparator,
      defaultLocaleRouteNameSuffix
    });
  }
  try {
    const resolvedRoute = router.resolve(localizedRoute);
    if (resolvedRoute.name) {
      return resolvedRoute;
    }
    return router.resolve(route);
  } catch (e) {
    if (typeof e === "object" && "type" in e && e.type === 1) {
      return null;
    }
  }
}
const DefaultSwitchLocalePathIntercepter = (path) => path;
function getLocalizableMetaFromDynamicParams(common, route) {
  var _a;
  if (common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR) {
    return unref(common.metaState.value);
  }
  const meta = route.meta || {};
  return ((_a = unref(meta)) == null ? void 0 : _a[DEFAULT_DYNAMIC_PARAMS_KEY]) || {};
}
function switchLocalePath(common, locale, _route) {
  const route = _route ?? common.router.currentRoute.value;
  const name2 = getRouteBaseName(common, route);
  if (!name2) {
    return "";
  }
  const switchLocalePathIntercepter = extendSwitchLocalePathIntercepter(common.runtimeConfig);
  const routeCopy = routeToObject(route);
  const resolvedParams = getLocalizableMetaFromDynamicParams(common, route)[locale];
  const baseRoute = { ...routeCopy, name: name2, params: { ...routeCopy.params, ...resolvedParams } };
  const path = localePath(common, baseRoute, locale);
  return switchLocalePathIntercepter(path, locale);
}
function localeHead(common, {
  addDirAttribute = false,
  addSeoAttributes: seoAttributes = true,
  identifierAttribute: idAttribute = "hid"
}) {
  const { defaultDirection } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const i18n = getComposer(common.i18n);
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  if (unref(i18n.locales) == null || unref(i18n.baseUrl) == null) {
    return metaObject;
  }
  const locale = getLocale(common.i18n);
  const locales = getLocales(common.i18n);
  const currentLocale = getNormalizedLocales(locales).find((l) => l.code === locale) || {
    code: locale
  };
  const currentIso = currentLocale.iso;
  const currentDir = currentLocale.dir || defaultDirection;
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentDir;
  }
  if (seoAttributes && locale && unref(i18n.locales)) {
    if (currentIso) {
      metaObject.htmlAttrs.lang = currentIso;
    }
    metaObject.link.push(
      ...getHreflangLinks(common, unref(locales), idAttribute),
      ...getCanonicalLink(common, idAttribute, seoAttributes)
    );
    metaObject.meta.push(
      ...getOgUrl(common, idAttribute, seoAttributes),
      ...getCurrentOgLocale(currentLocale, currentIso, idAttribute),
      ...getAlternateOgLocales(unref(locales), currentIso, idAttribute)
    );
  }
  return metaObject;
}
function getBaseUrl() {
  const nuxtApp = useNuxtApp();
  const i18n = getComposer(nuxtApp.$i18n);
  return joinURL(unref(i18n.baseUrl), nuxtApp.$config.app.baseURL);
}
function getHreflangLinks(common, locales, idAttribute) {
  const baseUrl = getBaseUrl();
  const { defaultLocale, strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const links = [];
  if (strategy === "no_prefix")
    return links;
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of locales) {
    const localeIso = locale.iso;
    if (!localeIso) {
      console.warn("Locale ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = localeIso.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(localeIso, locale);
  }
  for (const [iso, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath(common, mapLocale.code);
    if (localePath2) {
      links.push({
        [idAttribute]: `i18n-alt-${iso}`,
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: iso
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath(common, defaultLocale);
    if (localePath2) {
      links.push({
        [idAttribute]: "i18n-xd",
        rel: "alternate",
        href: toAbsoluteUrl(localePath2, baseUrl),
        hreflang: "x-default"
      });
    }
  }
  return links;
}
function getCanonicalUrl(common, baseUrl, seoAttributes) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(common, {
    ...route,
    path: void 0,
    name: getRouteBaseName(common, route)
  });
  if (!currentRoute)
    return "";
  let href = toAbsoluteUrl(currentRoute.path, baseUrl);
  const canonicalQueries = isObject(seoAttributes) && seoAttributes.canonicalQueries || [];
  const currentRouteQueryParams = currentRoute.query;
  const params = new URLSearchParams();
  for (const queryParamName of canonicalQueries) {
    if (queryParamName in currentRouteQueryParams) {
      const queryParamValue = currentRouteQueryParams[queryParamName];
      if (isArray(queryParamValue)) {
        queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
      } else {
        params.append(queryParamName, queryParamValue || "");
      }
    }
  }
  const queryString = params.toString();
  if (queryString) {
    href = `${href}?${queryString}`;
  }
  return href;
}
function getCanonicalLink(common, idAttribute, seoAttributes) {
  const baseUrl = getBaseUrl();
  const href = getCanonicalUrl(common, baseUrl, seoAttributes);
  if (!href)
    return [];
  return [{ [idAttribute]: "i18n-can", rel: "canonical", href }];
}
function getOgUrl(common, idAttribute, seoAttributes) {
  const baseUrl = getBaseUrl();
  const href = getCanonicalUrl(common, baseUrl, seoAttributes);
  if (!href)
    return [];
  return [{ [idAttribute]: "i18n-og-url", property: "og:url", content: href }];
}
function getCurrentOgLocale(currentLocale, currentIso, idAttribute) {
  if (!currentLocale || !currentIso)
    return [];
  return [{ [idAttribute]: "i18n-og", property: "og:locale", content: hypenToUnderscore(currentIso) }];
}
function getAlternateOgLocales(locales, currentIso, idAttribute) {
  const alternateLocales = locales.filter((locale) => locale.iso && locale.iso !== currentIso);
  return alternateLocales.map((locale) => ({
    [idAttribute]: `i18n-og-alt-${locale.iso}`,
    property: "og:locale:alternate",
    content: hypenToUnderscore(locale.iso)
  }));
}
function hypenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//))
    return urlOrPath;
  return joinURL(baseUrl, urlOrPath);
}
function _setLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocale", locale);
}
function setCookieLocale(i18n, locale) {
  return callVueI18nInterfaces(i18n, "setLocaleCookie", locale);
}
function mergeLocaleMessage(i18n, locale, messages) {
  return callVueI18nInterfaces(i18n, "mergeLocaleMessage", locale, messages);
}
function onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, context) {
  return callVueI18nInterfaces(i18n, "onBeforeLanguageSwitch", oldLocale, newLocale, initial, context);
}
function onLanguageSwitched(i18n, oldLocale, newLocale) {
  return callVueI18nInterfaces(i18n, "onLanguageSwitched", oldLocale, newLocale);
}
function initCommonComposableOptions(i18n) {
  return {
    i18n: i18n ?? useNuxtApp().$i18n,
    router: useRouter(),
    runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
    metaState: useState("nuxt-i18n-meta", () => ({}))
  };
}
async function loadAndSetLocale(newLocale, i18n, runtimeI18n, initial = false) {
  const { differentDomains, skipSettingLocaleOnNavigate, lazy } = runtimeI18n;
  const opts = runtimeDetectBrowserLanguage(runtimeI18n);
  const nuxtApp = useNuxtApp();
  const oldLocale = getLocale(i18n);
  const localeCodes2 = getLocaleCodes(i18n);
  function syncCookie(locale = oldLocale) {
    if (opts === false || !opts.useCookie)
      return;
    if (skipSettingLocaleOnNavigate)
      return;
    setCookieLocale(i18n, locale);
  }
  if (!newLocale) {
    syncCookie();
    return false;
  }
  if (!initial && differentDomains) {
    syncCookie();
    return false;
  }
  if (oldLocale === newLocale) {
    syncCookie();
    return false;
  }
  const localeOverride = await onBeforeLanguageSwitch(i18n, oldLocale, newLocale, initial, nuxtApp);
  if (localeOverride && localeCodes2.includes(localeOverride)) {
    if (oldLocale === localeOverride) {
      syncCookie();
      return false;
    }
    newLocale = localeOverride;
  }
  if (lazy) {
    const i18nFallbackLocales = getVueI18nPropertyValue(i18n, "fallbackLocale");
    const setter = (locale, message) => mergeLocaleMessage(i18n, locale, message);
    if (i18nFallbackLocales) {
      const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
      await Promise.all(fallbackLocales.map((locale) => loadLocale(locale, localeLoaders, setter)));
    }
    await loadLocale(newLocale, localeLoaders, setter);
  }
  if (skipSettingLocaleOnNavigate) {
    return false;
  }
  syncCookie(newLocale);
  setLocale(i18n, newLocale);
  await onLanguageSwitched(i18n, oldLocale, newLocale);
  return true;
}
function detectLocale(route, routeLocaleGetter, vueI18nOptionsLocale, initialLocaleLoader, detectLocaleContext, runtimeI18n) {
  const { strategy, defaultLocale, differentDomains } = runtimeI18n;
  const _detectBrowserLanguage = runtimeDetectBrowserLanguage(runtimeI18n);
  const initialLocale = isFunction(initialLocaleLoader) ? initialLocaleLoader() : initialLocaleLoader;
  const { ssg, callType, firstAccess, localeCookie } = detectLocaleContext;
  const {
    locale: browserLocale,
    stat,
    reason,
    from
  } = _detectBrowserLanguage ? detectBrowserLanguage(route, vueI18nOptionsLocale, detectLocaleContext, initialLocale) : DefaultDetectBrowserLanguageFromResult;
  if (reason === "detect_ignore_on_ssg") {
    return initialLocale;
  }
  if ((from === "navigator_or_header" || from === "cookie" || from === "fallback") && browserLocale) {
    return browserLocale;
  }
  let finalLocale = browserLocale;
  if (!finalLocale) {
    if (differentDomains) {
      finalLocale = getLocaleDomain(normalizedLocales, strategy, route);
    } else if (strategy !== "no_prefix") {
      finalLocale = routeLocaleGetter(route);
    } else {
      if (!_detectBrowserLanguage) {
        finalLocale = initialLocale;
      }
    }
  }
  if (!finalLocale && _detectBrowserLanguage && _detectBrowserLanguage.useCookie) {
    finalLocale = localeCookie || "";
  }
  if (!finalLocale) {
    finalLocale = defaultLocale || "";
  }
  return finalLocale;
}
function detectRedirect({
  route,
  targetLocale,
  routeLocaleGetter,
  calledWithRouting = false
}) {
  useNuxtApp();
  const common = initCommonComposableOptions();
  const { strategy, differentDomains } = common.runtimeConfig.public.i18n;
  let redirectPath = "";
  const { fullPath: toFullPath } = route.to;
  if ((differentDomains || false) && routeLocaleGetter(route.to) !== targetLocale) {
    const routePath = switchLocalePath(common, targetLocale, route.to);
    if (isString(routePath) && routePath && !isEqual(routePath, toFullPath) && !routePath.startsWith("//")) {
      redirectPath = routePath;
    }
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
function _navigate(redirectPath, status) {
  return navigateTo(redirectPath, { redirectCode: status });
}
async function navigate(args, { status = 302, enableNavigate = false } = {}) {
  const { nuxtApp, i18n, locale, route } = args;
  const { rootRedirect, differentDomains, skipSettingLocaleOnNavigate } = nuxtApp.$config.public.i18n;
  let { redirectPath } = args;
  if (route.path === "/" && rootRedirect) {
    if (isString(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    redirectPath = nuxtApp.$localePath(redirectPath, locale);
    return _navigate(redirectPath, status);
  }
  if (!differentDomains) {
    if (redirectPath) {
      return _navigate(redirectPath, status);
    }
  } else {
    const state = useRedirectState();
    if (state.value && state.value !== redirectPath) {
      {
        state.value = redirectPath;
      }
    }
  }
}
function injectNuxtHelpers(nuxt, i18n) {
  defineGetter(nuxt, "$i18n", getI18nTarget(i18n));
  defineGetter(nuxt, "$getRouteBaseName", wrapComposable(getRouteBaseName));
  defineGetter(nuxt, "$localePath", wrapComposable(localePath));
  defineGetter(nuxt, "$localeRoute", wrapComposable(localeRoute));
  defineGetter(nuxt, "$switchLocalePath", wrapComposable(switchLocalePath));
  defineGetter(nuxt, "$localeHead", wrapComposable(localeHead));
}
function extendPrefixable(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (opts) => {
    return DefaultPrefixable(opts) && !runtimeConfig.public.i18n.differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (path, locale) => {
    if (runtimeConfig.public.i18n.differentDomains) {
      const domain = getDomainFromLocale(locale);
      if (domain) {
        return joinURL(domain, path);
      } else {
        return path;
      }
    } else {
      return DefaultSwitchLocalePathIntercepter(path);
    }
  };
}
function extendBaseUrl() {
  return () => {
    const ctx = useNuxtApp();
    const { baseUrl, defaultLocale, differentDomains } = ctx.$config.public.i18n;
    if (isFunction(baseUrl)) {
      const baseUrlResult = baseUrl(ctx);
      return baseUrlResult;
    }
    const localeCode = isFunction(defaultLocale) ? defaultLocale() : defaultLocale;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode);
      if (domain) {
        return domain;
      }
    }
    if (baseUrl) {
      return baseUrl;
    }
    return baseUrl;
  };
}
function formatMessage(message) {
  return NUXT_I18N_MODULE_ID + " " + message;
}
function callVueI18nInterfaces(i18n, name2, ...args) {
  const target = getI18nTarget(i18n);
  const [obj, method] = [target, target[name2]];
  return Reflect.apply(method, obj, [...args]);
}
function getVueI18nPropertyValue(i18n, name2) {
  const target = getI18nTarget(i18n);
  return unref(target[name2]);
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function wrapComposable(fn, common = initCommonComposableOptions()) {
  return (...args) => fn(common, ...args);
}
function parseAcceptLanguage(input) {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function getBrowserLocale() {
  let ret;
  {
    const header = useRequestHeaders(["accept-language"]);
    const accept = header["accept-language"];
    if (accept) {
      ret = findBrowserLocale(normalizedLocales, parseAcceptLanguage(accept));
    }
  }
  return ret;
}
function getI18nCookie() {
  const detect = runtimeDetectBrowserLanguage();
  const cookieKey = detect && detect.cookieKey || DEFAULT_COOKIE_KEY;
  const date = /* @__PURE__ */ new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: detect && detect.cookieCrossOrigin ? "none" : "lax",
    secure: detect && detect.cookieCrossOrigin || detect && detect.cookieSecure
  };
  if (detect && detect.cookieDomain) {
    cookieOptions.domain = detect.cookieDomain;
  }
  return useCookie(cookieKey, cookieOptions);
}
function getLocaleCookie(cookieRef, detect, defaultLocale) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  const localeCode = cookieRef.value ?? void 0;
  if (localeCode == null) {
    return;
  }
  if (localeCodes.includes(localeCode)) {
    return localeCode;
  }
  if (defaultLocale) {
    cookieRef.value = defaultLocale;
    return defaultLocale;
  }
  cookieRef.value = void 0;
  return;
}
function setLocaleCookie(cookieRef, locale, detect) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  cookieRef.value = locale;
}
const DefaultDetectBrowserLanguageFromResult = {
  locale: "",
  stat: false,
  reason: "unknown",
  from: "unknown"
};
function detectBrowserLanguage(route, vueI18nOptionsLocale, detectLocaleContext, locale = "") {
  const { strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const { ssg, callType, firstAccess, localeCookie } = detectLocaleContext;
  if (strategy === "no_prefix" && true) {
    return { locale: "", stat: true, reason: "detect_ignore_on_ssg" };
  }
  if (!firstAccess) {
    return { locale: strategy === "no_prefix" ? locale : "", stat: false, reason: "first_access_only" };
  }
  const { redirectOn, alwaysRedirect, useCookie: useCookie2, fallbackLocale } = runtimeDetectBrowserLanguage();
  const path = isString(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root") {
      if (path !== "/") {
        return { locale: "", stat: false, reason: "not_redirect_on_root" };
      }
    } else if (redirectOn === "no prefix") {
      if (!alwaysRedirect && path.match(getLocalesRegex(localeCodes))) {
        return { locale: "", stat: false, reason: "not_redirect_on_no_prefix" };
      }
    }
  }
  let localeFrom = "unknown";
  let cookieLocale;
  let matchedLocale;
  if (useCookie2) {
    matchedLocale = cookieLocale = localeCookie;
    localeFrom = "cookie";
  }
  if (!matchedLocale) {
    matchedLocale = getBrowserLocale();
    localeFrom = "navigator_or_header";
  }
  const finalLocale = matchedLocale || fallbackLocale;
  if (!matchedLocale && fallbackLocale) {
    localeFrom = "fallback";
  }
  const vueI18nLocale = locale || vueI18nOptionsLocale;
  if (finalLocale && (!useCookie2 || alwaysRedirect || !cookieLocale)) {
    if (strategy === "no_prefix") {
      return { locale: finalLocale, stat: true, from: localeFrom };
    } else {
      if (callType === "setup") {
        if (finalLocale !== vueI18nLocale) {
          return { locale: finalLocale, stat: true, from: localeFrom };
        }
      }
      if (alwaysRedirect) {
        const redirectOnRoot = path === "/";
        const redirectOnAll = redirectOn === "all";
        const redirectOnNoPrefix = redirectOn === "no prefix" && !path.match(getLocalesRegex(localeCodes));
        if (redirectOnRoot || redirectOnAll || redirectOnNoPrefix) {
          return { locale: finalLocale, stat: true, from: localeFrom };
        }
      }
    }
  }
  if (ssg === "ssg_setup" && finalLocale) {
    return { locale: finalLocale, stat: true, from: localeFrom };
  }
  if ((localeFrom === "navigator_or_header" || localeFrom === "cookie") && finalLocale) {
    return { locale: finalLocale, stat: true, from: localeFrom };
  }
  return { locale: "", stat: false, reason: "not_found_match" };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(["x-forwarded-host", "host"]);
    let detectedHost;
    if ("x-forwarded-host" in header) {
      detectedHost = header["x-forwarded-host"];
    } else if ("host" in header) {
      detectedHost = header["host"];
    }
    host = isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales, strategy, route) {
  let host = getHost() || "";
  if (host) {
    let matchingLocale;
    const matchingLocales = locales.filter((locale) => {
      if (locale && locale.domain) {
        let domain = locale.domain;
        if (hasProtocol(locale.domain)) {
          domain = locale.domain.replace(/(http|https):\/\//, "");
        }
        return domain === host;
      }
      return false;
    });
    if (matchingLocales.length === 1) {
      matchingLocale = matchingLocales[0];
    } else if (matchingLocales.length > 1) {
      if (strategy === "no_prefix") {
        console.warn(
          formatMessage(
            "Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!"
          )
        );
        matchingLocale = matchingLocales[0];
      } else {
        if (route) {
          const routePath = isObject(route) ? route.path : isString(route) ? route : "";
          if (routePath && routePath !== "") {
            const matches = routePath.match(getLocalesRegex(matchingLocales.map((l) => l.code)));
            if (matches && matches.length > 1) {
              matchingLocale = matchingLocales.find((l) => l.code === matches[1]);
            }
          }
        }
        if (!matchingLocale) {
          matchingLocale = matchingLocales.find((l) => l.domainDefault);
        }
      }
    }
    if (matchingLocale) {
      return matchingLocale.code;
    } else {
      host = "";
    }
  }
  return host;
}
function getDomainFromLocale(localeCode) {
  var _a, _b;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const config = runtimeConfig.public.i18n;
  const lang = normalizedLocales.find((locale) => locale.code === localeCode);
  const domain = ((_b = (_a = config == null ? void 0 : config.locales) == null ? void 0 : _a[localeCode]) == null ? void 0 : _b.domain) ?? (lang == null ? void 0 : lang.domain);
  if (domain) {
    if (hasProtocol(domain, { strict: true })) {
      return domain;
    }
    let protocol;
    {
      const {
        node: { req }
      } = useRequestEvent(nuxtApp);
      protocol = req && isHTTPS(req) ? "https:" : "http:";
    }
    return protocol + "//" + domain;
  }
  console.warn(formatMessage("Could not find domain name for locale " + localeCode));
}
const runtimeDetectBrowserLanguage = (opts = (/* @__PURE__ */ useRuntimeConfig()).public.i18n) => {
  if ((opts == null ? void 0 : opts.detectBrowserLanguage) === false)
    return false;
  return opts == null ? void 0 : opts.detectBrowserLanguage;
};
function useSwitchLocalePath() {
  return wrapComposable(switchLocalePath);
}
function extendI18n(i18n, {
  locales = [],
  localeCodes: localeCodes2 = [],
  baseUrl = "",
  hooks = {},
  context = {}
} = {}) {
  const scope = effectScope();
  const orgInstall = i18n.install;
  i18n.install = (vue, ...options) => {
    const pluginOptions = isPluginOptions(options[0]) ? assign({}, options[0]) : { inject: true };
    if (pluginOptions.inject == null) {
      pluginOptions.inject = true;
    }
    const orgComposerExtend = pluginOptions.__composerExtend;
    pluginOptions.__composerExtend = (localComposer) => {
      const globalComposer2 = getComposer(i18n);
      localComposer.locales = computed(() => globalComposer2.locales.value);
      localComposer.localeCodes = computed(() => globalComposer2.localeCodes.value);
      localComposer.baseUrl = computed(() => globalComposer2.baseUrl.value);
      let orgComposerDispose;
      if (isFunction(orgComposerExtend)) {
        orgComposerDispose = Reflect.apply(orgComposerExtend, pluginOptions, [localComposer]);
      }
      return () => {
        orgComposerDispose && orgComposerDispose();
      };
    };
    if (i18n.mode === "legacy") {
      const orgVueI18nExtend = pluginOptions.__vueI18nExtend;
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendVueI18n(vueI18n, hooks.onExtendVueI18n);
        let orgVueI18nDispose;
        if (isFunction(orgVueI18nExtend)) {
          orgVueI18nDispose = Reflect.apply(orgVueI18nExtend, pluginOptions, [vueI18n]);
        }
        return () => {
          orgVueI18nDispose && orgVueI18nDispose();
        };
      };
    }
    options[0] = pluginOptions;
    Reflect.apply(orgInstall, i18n, [vue, ...options]);
    const globalComposer = getComposer(i18n);
    scope.run(() => {
      extendComposer(globalComposer, { locales, localeCodes: localeCodes2, baseUrl, hooks, context });
      if (i18n.mode === "legacy" && isVueI18n(i18n.global)) {
        extendVueI18n(i18n.global, hooks.onExtendVueI18n);
      }
    });
    const app = vue;
    const exported = i18n.mode === "composition" ? app.config.globalProperties.$i18n : null;
    if (exported) {
      extendExportedGlobal(exported, globalComposer, hooks.onExtendExportedGlobal);
    }
    if (pluginOptions.inject) {
      const common = initCommonComposableOptions(i18n);
      vue.mixin({
        methods: {
          getRouteBaseName: wrapComposable(getRouteBaseName, common),
          resolveRoute: wrapComposable(resolveRoute, common),
          localePath: wrapComposable(localePath, common),
          localeRoute: wrapComposable(localeRoute, common),
          localeLocation: wrapComposable(localeLocation, common),
          switchLocalePath: wrapComposable(switchLocalePath, common),
          localeHead: wrapComposable(localeHead, common)
        }
      });
    }
    if (app.unmount) {
      const unmountApp = app.unmount;
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
function extendComposer(composer, options) {
  const { locales, localeCodes: localeCodes2, baseUrl, context } = options;
  const _locales = ref(locales);
  const _localeCodes = ref(localeCodes2);
  const _baseUrl = ref("");
  composer.locales = computed(() => _locales.value);
  composer.localeCodes = computed(() => _localeCodes.value);
  composer.baseUrl = computed(() => _baseUrl.value);
  {
    _baseUrl.value = resolveBaseUrl(baseUrl, context);
  }
  if (options.hooks && options.hooks.onExtendComposer) {
    options.hooks.onExtendComposer(composer);
  }
}
function extendPropertyDescriptors(composer, exported, hook) {
  const properties = [
    {
      locales: {
        get() {
          return composer.locales.value;
        }
      },
      localeCodes: {
        get() {
          return composer.localeCodes.value;
        }
      },
      baseUrl: {
        get() {
          return composer.baseUrl.value;
        }
      }
    }
  ];
  hook && properties.push(hook(composer));
  for (const property of properties) {
    for (const [key, descriptor] of Object.entries(property)) {
      Object.defineProperty(exported, key, descriptor);
    }
  }
}
function extendExportedGlobal(exported, g, hook) {
  extendPropertyDescriptors(g, exported, hook);
}
function extendVueI18n(vueI18n, hook) {
  const c = getComposer(vueI18n);
  extendPropertyDescriptors(c, vueI18n, hook);
}
function isPluginOptions(options) {
  return isObject(options) && ("inject" in options || "__composerExtend" in options || "__vueI18nExtend" in options);
}
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(options.getCachedData(key, nuxtApp) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve2, reject) => {
        try {
          resolve2(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = nuxtApp._asyncData[key]._default();
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve2) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve2(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a;
      if (!to.value || isAbsoluteUrl.value) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (link == null ? void 0 : link.isActive) ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (link == null ? void 0 : link.isExactActive) ?? computed(() => to.value === router.currentRoute.value.path),
      route: (link == null ? void 0 : link.route) ?? computed(() => router.resolve(to.value)),
      async navigate() {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      useRouter();
      const { to, href, navigate: navigate2, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate: navigate2,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const __nuxt_component_10 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const cfg0 = defineAppConfig({
  siteName: "Függöny Oázis",
  shortDescription: "This is an example of a WooNuxt store. It provides a modern, fast, and SEO friendly ecommerce store built with Nuxt and WooCommerce.",
  description: `WooNuxt is unmatched when it comes to performance and scalability. Reap the benefits of having a online store that out performs all of your competitors. You can edit components to display your own information just like the one you're reading now.`,
  baseUrl: "https://v3.woonuxt.com",
  siteImage: "https://user-images.githubusercontent.com/5116925/218879668-f4c1f9fd-bef4-44b0-bc7f-e87d994aa3a1.png",
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    saleBadge: "percent"
    // 'percent', 'onSale' or 'hidden'
  }
});
const inlineConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ]
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
function createLocaleFromRouteGetter() {
  const { routesNameSeparator, defaultLocaleRouteNameSuffix } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const localesPattern = `(${localeCodes.join("|")})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const regexpPath = getLocalesRegex(localeCodes);
  const getLocaleFromRoute = (route) => {
    if (isObject(route)) {
      if (route.name) {
        const name2 = isString(route.name) ? route.name : route.name.toString();
        const matches = name2.match(regexpName);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      } else if (route.path) {
        const matches = route.path.match(regexpPath);
        if (matches && matches.length > 1) {
          return matches[1];
        }
      }
    } else if (isString(route)) {
      const matches = route.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return "";
  };
  return getLocaleFromRoute;
}
const i18n_yfWm7jX06p = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin",
  parallel: parallelPlugin,
  async setup(nuxt) {
    let __temp, __restore;
    const route = useRoute();
    const { vueApp: app } = nuxt;
    const nuxtContext = nuxt;
    const runtimeI18n = { ...nuxtContext.$config.public.i18n };
    runtimeI18n.baseUrl = extendBaseUrl();
    const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
    const vueI18nOptions = ([__temp, __restore] = executeAsync(() => loadVueI18nOptions(vueI18nConfigs, useNuxtApp())), __temp = await __temp, __restore(), __temp);
    vueI18nOptions.messages = vueI18nOptions.messages || {};
    vueI18nOptions.fallbackLocale = vueI18nOptions.fallbackLocale ?? false;
    const getLocaleFromRoute = createLocaleFromRouteGetter();
    const getDefaultLocale = (defaultLocale) => defaultLocale || vueI18nOptions.locale || "en-US";
    const localeCookie = getI18nCookie();
    let initialLocale = detectLocale(
      route,
      getLocaleFromRoute,
      vueI18nOptions.locale,
      getDefaultLocale(runtimeI18n.defaultLocale),
      {
        ssg: runtimeI18n.strategy === "no_prefix" ? "ssg_ignore" : "normal",
        callType: "setup",
        firstAccess: true,
        localeCookie: getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale)
      },
      runtimeI18n
    );
    vueI18nOptions.messages = ([__temp, __restore] = executeAsync(() => loadInitialMessages(vueI18nOptions.messages, localeLoaders, {
      localeCodes,
      initialLocale,
      lazy: runtimeI18n.lazy,
      defaultLocale: runtimeI18n.defaultLocale,
      fallbackLocale: vueI18nOptions.fallbackLocale
    })), __temp = await __temp, __restore(), __temp);
    initialLocale = getDefaultLocale(initialLocale);
    const i18n = createI18n({ ...vueI18nOptions, locale: initialLocale });
    let notInitialSetup = true;
    const isInitialLocaleSetup = (locale) => initialLocale !== locale && notInitialSetup;
    let ssgModeInitialSetup = true;
    const isSSGModeInitialSetup = () => ssgModeInitialSetup;
    if (isSSGModeInitialSetup() && runtimeI18n.strategy === "no_prefix" && false) {
      nuxt.hook("app:mounted", async () => {
        const {
          locale: browserLocale,
          stat,
          reason,
          from
        } = _detectBrowserLanguage ? detectBrowserLanguage(
          route,
          vueI18nOptions.locale,
          {
            ssg: "ssg_setup",
            callType: "setup",
            firstAccess: true,
            localeCookie: getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale)
          },
          initialLocale
        ) : DefaultDetectBrowserLanguageFromResult;
        _setLocale(i18n, browserLocale);
        ssgModeInitialSetup = false;
      });
    }
    extendI18n(i18n, {
      locales: runtimeI18n.configLocales,
      localeCodes,
      baseUrl: runtimeI18n.baseUrl,
      context: nuxtContext,
      hooks: {
        onExtendComposer(composer) {
          composer.strategy = runtimeI18n.strategy;
          composer.localeProperties = computed(
            () => normalizedLocales.find((l) => l.code === composer.locale.value) || { code: composer.locale.value }
          );
          composer.setLocale = async (locale) => {
            const localeSetup = isInitialLocaleSetup(locale);
            const modified = await loadAndSetLocale(locale, i18n, runtimeI18n, localeSetup);
            if (modified && localeSetup) {
              notInitialSetup = false;
            }
            const redirectPath = await nuxtContext.runWithContext(
              () => detectRedirect({
                route: { to: route },
                targetLocale: locale,
                routeLocaleGetter: getLocaleFromRoute
              })
            );
            await nuxtContext.runWithContext(
              async () => await navigate(
                {
                  nuxtApp: nuxtContext,
                  i18n,
                  redirectPath,
                  locale,
                  route
                },
                { enableNavigate: true }
              )
            );
          };
          composer.loadLocaleMessages = async (locale) => {
            const setter = (locale2, message) => mergeLocaleMessage(i18n, locale2, message);
            await loadLocale(locale, localeLoaders, setter);
          };
          composer.differentDomains = runtimeI18n.differentDomains;
          composer.defaultLocale = runtimeI18n.defaultLocale;
          composer.getBrowserLocale = () => getBrowserLocale();
          composer.getLocaleCookie = () => getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale);
          composer.setLocaleCookie = (locale) => setLocaleCookie(localeCookie, locale, _detectBrowserLanguage);
          composer.onBeforeLanguageSwitch = (oldLocale, newLocale, initialSetup, context) => nuxt.callHook("i18n:beforeLocaleSwitch", { oldLocale, newLocale, initialSetup, context });
          composer.onLanguageSwitched = (oldLocale, newLocale) => nuxt.callHook("i18n:localeSwitched", { oldLocale, newLocale });
          composer.finalizePendingLocaleChange = async () => {
            if (!i18n.__pendingLocale) {
              return;
            }
            setLocale(i18n, i18n.__pendingLocale);
            if (i18n.__resolvePendingLocalePromise) {
              await i18n.__resolvePendingLocalePromise();
            }
            i18n.__pendingLocale = void 0;
          };
          composer.waitForPendingLocaleChange = async () => {
            if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
              await i18n.__pendingLocalePromise;
            }
          };
        },
        onExtendExportedGlobal(g) {
          return {
            strategy: {
              get() {
                return g.strategy;
              }
            },
            localeProperties: {
              get() {
                return g.localeProperties.value;
              }
            },
            setLocale: {
              get() {
                return async (locale) => Reflect.apply(g.setLocale, g, [locale]);
              }
            },
            differentDomains: {
              get() {
                return g.differentDomains;
              }
            },
            defaultLocale: {
              get() {
                return g.defaultLocale;
              }
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(g.getBrowserLocale, g, []);
              }
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(g.getLocaleCookie, g, []);
              }
            },
            setLocaleCookie: {
              get() {
                return (locale) => Reflect.apply(g.setLocaleCookie, g, [locale]);
              }
            },
            onBeforeLanguageSwitch: {
              get() {
                return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(g.onBeforeLanguageSwitch, g, [oldLocale, newLocale, initialSetup, context]);
              }
            },
            onLanguageSwitched: {
              get() {
                return (oldLocale, newLocale) => Reflect.apply(g.onLanguageSwitched, g, [oldLocale, newLocale]);
              }
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(g.finalizePendingLocaleChange, g, []);
              }
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(g.waitForPendingLocaleChange, g, []);
              }
            }
          };
        },
        onExtendVueI18n(composer) {
          return {
            strategy: {
              get() {
                return composer.strategy;
              }
            },
            localeProperties: {
              get() {
                return composer.localeProperties.value;
              }
            },
            setLocale: {
              get() {
                return async (locale) => Reflect.apply(composer.setLocale, composer, [locale]);
              }
            },
            loadLocaleMessages: {
              get() {
                return async (locale) => Reflect.apply(composer.loadLocaleMessages, composer, [locale]);
              }
            },
            differentDomains: {
              get() {
                return composer.differentDomains;
              }
            },
            defaultLocale: {
              get() {
                return composer.defaultLocale;
              }
            },
            getBrowserLocale: {
              get() {
                return () => Reflect.apply(composer.getBrowserLocale, composer, []);
              }
            },
            getLocaleCookie: {
              get() {
                return () => Reflect.apply(composer.getLocaleCookie, composer, []);
              }
            },
            setLocaleCookie: {
              get() {
                return (locale) => Reflect.apply(composer.setLocaleCookie, composer, [locale]);
              }
            },
            onBeforeLanguageSwitch: {
              get() {
                return (oldLocale, newLocale, initialSetup, context) => Reflect.apply(composer.onBeforeLanguageSwitch, composer, [
                  oldLocale,
                  newLocale,
                  initialSetup,
                  context
                ]);
              }
            },
            onLanguageSwitched: {
              get() {
                return (oldLocale, newLocale) => Reflect.apply(composer.onLanguageSwitched, composer, [oldLocale, newLocale]);
              }
            },
            finalizePendingLocaleChange: {
              get() {
                return () => Reflect.apply(composer.finalizePendingLocaleChange, composer, []);
              }
            },
            waitForPendingLocaleChange: {
              get() {
                return () => Reflect.apply(composer.waitForPendingLocaleChange, composer, []);
              }
            }
          };
        }
      }
    });
    const pluginOptions = {
      __composerExtend: (c) => {
        const g = getComposer(i18n);
        c.strategy = g.strategy;
        c.localeProperties = computed(() => g.localeProperties.value);
        c.setLocale = g.setLocale;
        c.differentDomains = g.differentDomains;
        c.getBrowserLocale = g.getBrowserLocale;
        c.getLocaleCookie = g.getLocaleCookie;
        c.setLocaleCookie = g.setLocaleCookie;
        c.onBeforeLanguageSwitch = g.onBeforeLanguageSwitch;
        c.onLanguageSwitched = g.onLanguageSwitched;
        c.finalizePendingLocaleChange = g.finalizePendingLocaleChange;
        c.waitForPendingLocaleChange = g.waitForPendingLocaleChange;
        return () => {
        };
      }
    };
    app.use(i18n, pluginOptions);
    injectNuxtHelpers(nuxtContext, i18n);
    if (runtimeI18n.experimental.switchLocalePathLinkSSR === true) {
      const switchLocalePath2 = useSwitchLocalePath();
      const switchLocalePathLinkWrapperExpr = new RegExp(
        [
          `<!--${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-\\[(\\w+)\\]-->`,
          `.+?`,
          `<!--/${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-->`
        ].join(""),
        "g"
      );
      nuxt.hook("app:rendered", (ctx) => {
        var _a;
        if (((_a = ctx.renderResult) == null ? void 0 : _a.html) == null)
          return;
        ctx.renderResult.html = ctx.renderResult.html.replaceAll(
          switchLocalePathLinkWrapperExpr,
          (match, p1) => match.replace(/href="([^"]+)"/, `href="${switchLocalePath2(p1 ?? "")}"`)
        );
      });
    }
    let routeChangeCount = 0;
    addRouteMiddleware(
      "locale-changing",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
        let __temp2, __restore2;
        const locale = detectLocale(
          to,
          getLocaleFromRoute,
          vueI18nOptions.locale,
          () => {
            return getLocale(i18n) || getDefaultLocale(runtimeI18n.defaultLocale);
          },
          {
            ssg: isSSGModeInitialSetup() && runtimeI18n.strategy === "no_prefix" ? "ssg_ignore" : "normal",
            callType: "routing",
            firstAccess: routeChangeCount === 0,
            localeCookie: getLocaleCookie(localeCookie, _detectBrowserLanguage, runtimeI18n.defaultLocale)
          },
          runtimeI18n
        );
        const localeSetup = isInitialLocaleSetup(locale);
        const modified = ([__temp2, __restore2] = executeAsync(() => loadAndSetLocale(locale, i18n, runtimeI18n, localeSetup)), __temp2 = await __temp2, __restore2(), __temp2);
        if (modified && localeSetup) {
          notInitialSetup = false;
        }
        const redirectPath = ([__temp2, __restore2] = executeAsync(() => nuxtContext.runWithContext(
          () => detectRedirect({
            route: { to, from },
            targetLocale: locale,
            routeLocaleGetter: runtimeI18n.strategy === "no_prefix" ? () => locale : getLocaleFromRoute,
            calledWithRouting: true
          })
        )), __temp2 = await __temp2, __restore2(), __temp2);
        routeChangeCount++;
        return [__temp2, __restore2] = executeAsync(() => nuxtContext.runWithContext(
          async () => navigate({ nuxtApp: nuxtContext, i18n, redirectPath, locale, route: to })
        )), __temp2 = await __temp2, __restore2(), __temp2;
      }),
      { global: true }
    );
  }
});
const plugin_WLsn00x1qh = /* @__PURE__ */ defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    var _a, _b;
    const config = /* @__PURE__ */ useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    disableCache("all");
    const resources = [];
    if (options.provider === "server") {
      const baseURL2 = ((_b = (_a = config.app) == null ? void 0 : _a.baseURL) == null ? void 0 : _b.replace(/\/$/, "")) ?? "";
      resources.push(baseURL2 + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi) {
        resources.push(options.iconifyApiEndpoint);
      }
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    addAPIProvider("", { resources });
  }
});
const plugin_jBToDIZpFa = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a;
  if (!(nuxtApp == null ? void 0 : nuxtApp._gqlState)) {
    nuxtApp._gqlState = ref({});
    const config = /* @__PURE__ */ useRuntimeConfig();
    const { clients } = defu(config == null ? void 0 : config["graphql-client"], (_a = config == null ? void 0 : config.public) == null ? void 0 : _a["graphql-client"]);
    const proxyHeaders = Object.values(clients || {}).flatMap((v) => v == null ? void 0 : v.proxyHeaders).filter((v, i, a) => Boolean(v) && a.indexOf(v) === i);
    if (!proxyHeaders.includes("cookie")) {
      proxyHeaders.push("cookie");
    }
    const requestHeaders = useRequestHeaders(proxyHeaders) || void 0;
    for (const [name2, v] of Object.entries(clients || {})) {
      const host = v.host;
      const proxyCookie = (v == null ? void 0 : v.proxyCookies) && !!(requestHeaders == null ? void 0 : requestHeaders.cookie);
      let headers = v == null ? void 0 : v.headers;
      const serverHeaders = typeof (headers == null ? void 0 : headers.serverOnly) === "object" && (headers == null ? void 0 : headers.serverOnly) || {};
      if (headers == null ? void 0 : headers.serverOnly) {
        headers = { ...headers };
        delete headers.serverOnly;
      }
      for (const header of (v == null ? void 0 : v.proxyHeaders) || []) {
        if (!(requestHeaders == null ? void 0 : requestHeaders[header])) {
          continue;
        }
        headers = { ...headers, [header]: requestHeaders == null ? void 0 : requestHeaders[header] };
      }
      const opts = {
        headers: {
          ...headers,
          ...serverHeaders,
          ...proxyCookie && { cookie: requestHeaders == null ? void 0 : requestHeaders.cookie }
        },
        ...v == null ? void 0 : v.corsOptions
      };
      nuxtApp._gqlState.value[name2] = {
        options: opts,
        instance: new GraphQLClient(host, {
          ...(v == null ? void 0 : v.preferGETQueries) && {
            method: "GET",
            jsonSerializer: { parse: JSON.parse, stringify: JSON.stringify }
          },
          requestMiddleware: async (req) => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
            const token = ref();
            await nuxtApp.callHook("gql:auth:init", { token, client: name2 });
            const reqOpts = defu(((_b = (_a2 = nuxtApp._gqlState.value) == null ? void 0 : _a2[name2]) == null ? void 0 : _b.options) || {}, { headers: {} });
            if (!token.value) {
              token.value = (_c = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _c.value;
            }
            if (token.value === void 0 && typeof v.tokenStorage === "object") {
              if (((_d = v.tokenStorage) == null ? void 0 : _d.mode) === "cookie") {
                if (requestHeaders == null ? void 0 : requestHeaders.cookie) {
                  const cookieName = `${v.tokenStorage.name}=`;
                  token.value = (_f = (_e = requestHeaders == null ? void 0 : requestHeaders.cookie.split(";").find((c) => c.trim().startsWith(cookieName))) == null ? void 0 : _e.split("=")) == null ? void 0 : _f[1];
                }
              }
            }
            if (token.value === void 0) {
              token.value = (_g = v == null ? void 0 : v.token) == null ? void 0 : _g.value;
            }
            if (token.value) {
              token.value = token.value.trim();
              const tokenName = token.value === ((_h = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _h.value) ? ((_i = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _i.name) || ((_j = v == null ? void 0 : v.token) == null ? void 0 : _j.name) : (_k = v == null ? void 0 : v.token) == null ? void 0 : _k.name;
              const tokenType = token.value === ((_l = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _l.value) ? ((_m = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _m.type) === null ? null : ((_n = reqOpts == null ? void 0 : reqOpts.token) == null ? void 0 : _n.type) || ((_o = v == null ? void 0 : v.token) == null ? void 0 : _o.type) : (_p = v == null ? void 0 : v.token) == null ? void 0 : _p.type;
              const authScheme = !!((_r = (_q = token.value) == null ? void 0 : _q.match(/^[a-zA-Z]+\s/)) == null ? void 0 : _r[0]);
              if (authScheme) {
                reqOpts.headers[tokenName] = token.value;
              } else {
                reqOpts.headers[tokenName] = !tokenType ? token.value : `${tokenType} ${token.value}`;
              }
            }
            if (reqOpts == null ? void 0 : reqOpts.token) {
              delete reqOpts.token;
            }
            return defu(req, reqOpts);
          }
        })
      };
    }
  }
});
const name = "woonuxt";
const version = "4.0.15";
const main = "./nuxt.config.ts";
const type = "module";
const pkg = {
  name,
  version,
  main,
  type
};
function useHelpers() {
  var _a, _b, _c, _d;
  const route = useRoute();
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const isShowingMobileMenu = useState("isShowingMobileMenu", () => false);
  const wooNuxtVersionInfo = pkg.version;
  const productsPerPage = ((_a = runtimeConfig.public) == null ? void 0 : _a.PRODUCTS_PER_PAGE) || 24;
  const wooNuxtSEO = (_b = runtimeConfig.public) == null ? void 0 : _b.WOO_NUXT_SEO;
  const frontEndUrl = ((_d = (_c = runtimeConfig.public) == null ? void 0 : _c.FRONT_END_URL) == null ? void 0 : _d.replace(/\/$/, "")) || null;
  const isDev = "prerender" === "development";
  const fallbackImage = "/images/placeholder.jpg";
  function toggleMobileMenu(state = void 0) {
    isShowingMobileMenu.value = state ?? !isShowingMobileMenu.value;
  }
  const formatVariationArrays = (arr) => arr.map((a) => ({ name: a.name.replace(/[-\s]/g, ""), value: a.value.replace(/[-\s]/g, "") }));
  const arraysEqual = (a1, a2) => JSON.stringify(formatVariationArrays(a1)) === JSON.stringify(formatVariationArrays(a2));
  const formatArray = (arr) => {
    return arr.map((v) => {
      let name2 = v.name.toLowerCase();
      name2 = name2.startsWith("pa_") ? name2.replace("pa_", "") : name2;
      const value = v.value.toLowerCase();
      return { name: name2, value };
    });
  };
  function clearAllCookies() {
    const cookies = (void 0).cookie.split(";");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name2 = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      (void 0).cookie = name2 + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  function clearAllLocalStorage() {
    localStorage.clear();
  }
  function replaceQueryParam(param, newval, search) {
    const regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
    const query = search.replace(regex, "$1").replace(/&$/, "");
    return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : "");
  }
  function removeBodyClass(className) {
    const body = (void 0).querySelector("body");
    body == null ? void 0 : body.classList.remove(className);
  }
  function addBodyClass(className) {
    const body = (void 0).querySelector("body");
    body == null ? void 0 : body.classList.add(className);
  }
  function toggleBodyClass(className) {
    const body = (void 0).querySelector("body");
    (body == null ? void 0 : body.classList.contains(className)) ? body.classList.remove(className) : body == null ? void 0 : body.classList.add(className);
  }
  const checkForVariationTypeOfAny = (product) => {
    var _a2, _b2, _c2;
    const numberOfVariation = ((_b2 = (_a2 = product == null ? void 0 : product.attributes) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2.length) ?? 0;
    let indexOfTypeAny = [];
    for (let index2 = 0; index2 < numberOfVariation; index2++) {
      const tempArray = [];
      (_c2 = product.variations) == null ? void 0 : _c2.nodes.forEach((element) => {
        var _a3, _b3;
        if ((_b3 = (_a3 = element.attributes) == null ? void 0 : _a3.nodes[index2]) == null ? void 0 : _b3.value) tempArray.push(element.attributes.nodes[index2].value);
      });
      if (!tempArray.some(Boolean)) indexOfTypeAny.push(index2);
    }
    return indexOfTypeAny;
  };
  const isQueryEmpty = computed(() => Object.keys(route.query).length === 0);
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };
  const formatPrice = (price) => parseFloat(price).toLocaleString("en-US", { style: "currency", currency: "EUR" });
  const scrollToTop = () => {
    (void 0).scrollTo({ top: 0, behavior: "smooth" });
  };
  const stripHtml = (str = "") => {
    return str === null ? "" : str.replace(/(<([^>]+)>)/gi, "");
  };
  const debounce = (func, delay = 100) => {
    let inDebounce;
    return function(...args) {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(this, args), delay);
    };
  };
  const logGQLError = (error) => {
    var _a2, _b2;
    if (!route.query.debug) return;
    const errorMessage = (_b2 = (_a2 = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.message;
    if (errorMessage) {
      console.error(errorMessage);
    }
  };
  return {
    isShowingMobileMenu,
    wooNuxtVersionInfo,
    productsPerPage,
    isQueryEmpty,
    wooNuxtSEO,
    frontEndUrl,
    isDev,
    fallbackImage,
    formatArray,
    arraysEqual,
    clearAllCookies,
    clearAllLocalStorage,
    replaceQueryParam,
    addBodyClass,
    removeBodyClass,
    toggleBodyClass,
    toggleMobileMenu,
    checkForVariationTypeOfAny,
    formatDate,
    formatPrice,
    scrollToTop,
    stripHtml,
    debounce,
    logGQLError
  };
}
var OrderStatusEnum = /* @__PURE__ */ ((OrderStatusEnum2) => {
  OrderStatusEnum2["CANCELLED"] = "CANCELLED";
  OrderStatusEnum2["CHECKOUT_DRAFT"] = "CHECKOUT_DRAFT";
  OrderStatusEnum2["COMPLETED"] = "COMPLETED";
  OrderStatusEnum2["FAILED"] = "FAILED";
  OrderStatusEnum2["ON_HOLD"] = "ON_HOLD";
  OrderStatusEnum2["PENDING"] = "PENDING";
  OrderStatusEnum2["PROCESSING"] = "PROCESSING";
  OrderStatusEnum2["REFUNDED"] = "REFUNDED";
  return OrderStatusEnum2;
})(OrderStatusEnum || {});
var ProductTypesEnum = /* @__PURE__ */ ((ProductTypesEnum2) => {
  ProductTypesEnum2["EXTERNAL"] = "EXTERNAL";
  ProductTypesEnum2["GROUPED"] = "GROUPED";
  ProductTypesEnum2["SIMPLE"] = "SIMPLE";
  ProductTypesEnum2["VARIABLE"] = "VARIABLE";
  ProductTypesEnum2["VARIATION"] = "VARIATION";
  return ProductTypesEnum2;
})(ProductTypesEnum || {});
var StockStatusEnum = /* @__PURE__ */ ((StockStatusEnum2) => {
  StockStatusEnum2["IN_STOCK"] = "IN_STOCK";
  StockStatusEnum2["ON_BACKORDER"] = "ON_BACKORDER";
  StockStatusEnum2["OUT_OF_STOCK"] = "OUT_OF_STOCK";
  return StockStatusEnum2;
})(StockStatusEnum || {});
const SimpleProductFragmentDoc = gql`
    fragment SimpleProduct on SimpleProduct {
  price
  rawPrice: price(format: RAW)
  slug
  date
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  stockQuantity
  lowStockAmount
  averageRating
  weight
  length
  width
  height
  reviewCount
  onSale
  image {
    sourceUrl
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
    databaseId
    altText
    title
  }
  galleryImages(first: 20) {
    nodes {
      sourceUrl
      altText
      title
    }
  }
}
    `;
const VariableProductFragmentDoc = gql`
    fragment VariableProduct on VariableProduct {
  price
  rawPrice: price(format: RAW)
  slug
  date
  weight
  length
  width
  height
  image {
    sourceUrl
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
    altText
    title
    databaseId
  }
  averageRating
  reviewCount
  onSale
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  totalSales
  stockQuantity
  lowStockAmount
  defaultAttributes {
    nodes {
      name
      attributeId
      value
      label
    }
  }
  variations(first: 100) {
    nodes {
      name
      databaseId
      price
      regularPrice
      salePrice
      slug
      stockQuantity
      stockStatus
      hasAttributes
      image {
        sourceUrl
        cartSourceUrl: sourceUrl(size: THUMBNAIL)
        producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
        databaseId
        altText
        title
        id
      }
      attributes {
        nodes {
          value
          name
        }
      }
    }
  }
  galleryImages(first: 20) {
    nodes {
      sourceUrl
      databaseId
      altText
      title
    }
  }
}
    `;
const CartFragmentFragmentDoc = gql`
    fragment CartFragment on Cart {
  total
  rawTotal: total(format: RAW)
  subtotal
  totalTax
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  shippingTotal
  chosenShippingMethods
  availableShippingMethods {
    rates {
      cost
      id
      label
    }
  }
  appliedCoupons {
    description
    discountTax
    discountAmount
    code
  }
  isEmpty
  contents(first: 100) {
    itemCount
    productCount
    nodes {
      quantity
      key
      product {
        node {
          name
          slug
          sku
          databaseId
          type
          ...SimpleProduct
          ...VariableProduct
        }
      }
      variation {
        node {
          name
          slug
          price
          stockStatus
          regularPrice
          rawRegularPrice: regularPrice(format: RAW)
          salePrice
          rawSalePrice: salePrice(format: RAW)
          image {
            sourceUrl(size: THUMBNAIL)
            cartSourceUrl: sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
}
    `;
const DownloadableItemFragmentDoc = gql`
    fragment DownloadableItem on DownloadableItem {
  id
  name
  product {
    name
    slug
  }
  url
  accessExpires
  downloadsRemaining
}
    `;
const AddressFragmentDoc = gql`
    fragment Address on CustomerAddress {
  address1
  address2
  city
  country
  email
  firstName
  lastName
  phone
  postcode
  company
  state
}
    `;
const CustomerFragmentFragmentDoc = gql`
    fragment CustomerFragment on Customer {
  lastName
  email
  firstName
  username
  databaseId
  sessionToken
  isPayingCustomer
  billing {
    ...Address
  }
  shipping {
    ...Address
  }
}
    `;
const OrderFragmentFragmentDoc = gql`
    fragment OrderFragment on Order {
  orderNumber
  date
  status
  needsPayment
  needsProcessing
  databaseId
  orderKey
  total
  subtotal
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  totalTax
  shippingTotal
  paymentMethodTitle
  paymentMethod
  customer {
    email
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
  downloadableItems(first: 100) {
    nodes {
      ...DownloadableItem
    }
  }
  lineItems {
    nodes {
      quantity
      total
      id
      product {
        node {
          name
          slug
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
      variation {
        node {
          name
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
  customer {
    ...CustomerFragment
  }
}
    `;
const ProductCategoriesFragmentDoc = gql`
    fragment ProductCategories on Product {
  productCategories {
    nodes {
      databaseId
      slug
      name
      count
    }
  }
}
    `;
const TermsFragmentDoc = gql`
    fragment Terms on Product {
  terms(first: 100) {
    nodes {
      taxonomyName
      slug
    }
  }
}
    `;
const ProductCategoryFragmentDoc = gql`
    fragment ProductCategory on ProductCategory {
  count
  databaseId
  id
  name
  slug
  image {
    sourceUrl(size: MEDIUM_LARGE)
    altText
    title
  }
}
    `;
const AddToCartDocument = gql`
    mutation addToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    cart {
      ...CartFragment
    }
  }
}
    ${CartFragmentFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const ApplyCouponDocument = gql`
    mutation applyCoupon($code: String!) {
  applyCoupon(input: {code: $code}) {
    applied {
      code
      description
      discountTax
      discountAmount
    }
    cart {
      ...CartFragment
    }
  }
}
    ${CartFragmentFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const ChangeShippingCountyDocument = gql`
    mutation ChangeShippingCounty($shippingState: String!, $shippingCountry: CountriesEnum!, $billingState: String!, $billingCountry: CountriesEnum!) {
  updateCustomer(
    input: {shipping: {state: $shippingState, country: $shippingCountry}, billing: {state: $billingState, country: $billingCountry}}
  ) {
    customer {
      calculatedShipping
      hasCalculatedShipping
    }
  }
}
    `;
const ChangeShippingMethodDocument = gql`
    mutation ChangeShippingMethod($shippingMethods: [String] = "") {
  updateShippingMethod(input: {shippingMethods: $shippingMethods}) {
    cart {
      ...CartFragment
    }
  }
}
    ${CartFragmentFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const CheckoutDocument = gql`
    mutation Checkout($billing: CustomerAddressInput = {}, $metaData: [MetaDataInput] = {key: "", value: ""}, $paymentMethod: String = "stripe", $shipping: CustomerAddressInput = {}, $customerNote: String = "", $shipToDifferentAddress: Boolean = false, $account: CreateAccountInput = {username: "", password: ""}, $transactionId: String = "", $isPaid: Boolean = false) {
  checkout(
    input: {paymentMethod: $paymentMethod, billing: $billing, metaData: $metaData, shipping: $shipping, customerNote: $customerNote, shipToDifferentAddress: $shipToDifferentAddress, account: $account, transactionId: $transactionId, isPaid: $isPaid}
  ) {
    result
    redirect
    order {
      needsPayment
      needsProcessing
      status
      databaseId
      orderKey
      subtotal
      total
      subtotal
      totalTax
      shippingTotal
      paymentMethodTitle
      paymentMethod
      date
      subtotal
      customer {
        email
      }
      lineItems {
        nodes {
          quantity
          total
          product {
            node {
              name
              image {
                sourceUrl
                altText
                title
              }
            }
          }
          variation {
            node {
              name
              image {
                sourceUrl
                altText
                title
              }
            }
          }
        }
      }
    }
  }
}
    `;
const EmptyCartDocument = gql`
    mutation EmptyCart {
  emptyCart(input: {clearPersistentCart: true}) {
    cart {
      ...CartFragment
    }
  }
}
    ${CartFragmentFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const GetAllTermsDocument = gql`
    query getAllTerms($hideEmpty: Boolean = false, $taxonomies: [TaxonomyEnum]!, $first: Int = 100) {
  terms(where: {taxonomies: $taxonomies, hideEmpty: $hideEmpty}, first: $first) {
    nodes {
      name
      slug
      count
    }
  }
}
    `;
const GetCartDocument = gql`
    query getCart {
  cart {
    ...CartFragment
  }
  customer {
    ...CustomerFragment
  }
  viewer {
    lastName
    email
    databaseId
    id
    firstName
    username
    nicename
    wooSessionToken
    avatar {
      url
    }
  }
  paymentGateways {
    nodes {
      title
      id
      description
    }
  }
}
    ${CartFragmentFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}
${CustomerFragmentFragmentDoc}
${AddressFragmentDoc}`;
const GetDownloadsDocument = gql`
    query getDownloads {
  customer {
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
}
    ${DownloadableItemFragmentDoc}`;
const GetOrderDocument = gql`
    query getOrder($id: ID!) {
  order(id: $id, idType: DATABASE_ID) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}
${DownloadableItemFragmentDoc}
${CustomerFragmentFragmentDoc}
${AddressFragmentDoc}`;
const GetOrdersDocument = gql`
    query getOrders {
  customer {
    orders(first: 100) {
      nodes {
        ...OrderFragment
      }
    }
  }
}
    ${OrderFragmentFragmentDoc}
${DownloadableItemFragmentDoc}
${CustomerFragmentFragmentDoc}
${AddressFragmentDoc}`;
const GetProductDocument = gql`
    query getProduct($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    name
    type
    databaseId
    id
    metaData {
      id
      key
      value
    }
    slug
    sku
    description
    rawDescription: description(format: RAW)
    shortDescription
    attributes {
      nodes {
        variation
        name
        id
        options
        label
        scope
        ... on GlobalProductAttribute {
          slug
          terms(where: {orderby: TERM_ORDER, order: ASC}) {
            nodes {
              name
              slug
              taxonomyName
              databaseId
            }
          }
        }
      }
    }
    productCategories {
      nodes {
        databaseId
        slug
        name
        count
      }
    }
    ...Terms
    ...SimpleProduct
    ...VariableProduct
    related(first: 5) {
      nodes {
        name
        slug
        ...SimpleProduct
        ...VariableProduct
      }
    }
    reviews {
      averageRating
      edges {
        rating
        node {
          content
          id
          date
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
}
    ${TermsFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const GetProductCategoriesDocument = gql`
    query getProductCategories($first: Int = 20) {
  productCategories(
    first: $first
    where: {orderby: COUNT, order: DESC, hideEmpty: true}
  ) {
    nodes {
      ...ProductCategory
    }
  }
}
    ${ProductCategoryFragmentDoc}`;
const GetProductsDocument = gql`
    query getProducts($after: String, $slug: [String], $first: Int = 9999, $orderby: ProductsOrderByEnum = DATE) {
  products(
    first: $first
    after: $after
    where: {categoryIn: $slug, typeNotIn: EXTERNAL, visibility: VISIBLE, minPrice: 0, orderby: {field: $orderby, order: DESC}, status: "publish"}
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      name
      slug
      type
      databaseId
      id
      averageRating
      reviewCount
      ...Terms
      ...ProductCategories
      ...SimpleProduct
      ...VariableProduct
    }
  }
}
    ${TermsFragmentDoc}
${ProductCategoriesFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const GetStatesDocument = gql`
    query getStates($country: CountriesEnum = IE) {
  countryStates(country: $country) {
    code
    name
  }
  allowedCountries
}
    `;
const GetStockStatusDocument = gql`
    query getStockStatus($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    ... on SimpleProduct {
      stockStatus
    }
    ... on VariableProduct {
      stockStatus
      variations {
        nodes {
          stockStatus
        }
      }
    }
  }
}
    `;
const GetStripePaymentIntentDocument = gql`
    query getStripePaymentIntent {
  stripePaymentIntent {
    amount
    clientSecret
    error
    id
    currency
  }
}
    `;
const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  loginWithCookies(
    input: {login: $username, password: $password, rememberMe: true}
  ) {
    status
  }
}
    `;
const LogoutDocument = gql`
    mutation Logout {
  logout(input: {clientMutationId: ""}) {
    status
  }
}
    `;
const RegisterCustomerDocument = gql`
    mutation registerCustomer($input: RegisterCustomerInput!) {
  registerCustomer(input: $input) {
    customer {
      ...CustomerFragment
    }
  }
}
    ${CustomerFragmentFragmentDoc}
${AddressFragmentDoc}`;
const RemoveCouponsDocument = gql`
    mutation removeCoupons($codes: [String]!) {
  removeCoupons(input: {codes: $codes}) {
    cart {
      ...CartFragment
    }
  }
}
    ${CartFragmentFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const ResetPasswordEmailDocument = gql`
    mutation ResetPasswordEmail($username: String!) {
  sendPasswordResetEmail(input: {username: $username}) {
    success
  }
}
    `;
const ResetPasswordKeyDocument = gql`
    mutation ResetPasswordKey($key: String!, $login: String!, $password: String!) {
  resetUserPassword(input: {key: $key, login: $login, password: $password}) {
    user {
      id
    }
  }
}
    `;
const UpDateCartQuantityDocument = gql`
    mutation UpDateCartQuantity($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    cart {
      ...CartFragment
    }
  }
}
    ${CartFragmentFragmentDoc}
${SimpleProductFragmentDoc}
${VariableProductFragmentDoc}`;
const UpdateCustomerDocument = gql`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    customer {
      downloadableItems(first: 100) {
        nodes {
          ...DownloadableItem
        }
      }
    }
  }
}
    ${DownloadableItemFragmentDoc}`;
const UpdatePasswordDocument = gql`
    mutation updatePassword($id: ID!, $password: String!) {
  updateUser(input: {id: $id, password: $password}) {
    user {
      id
    }
  }
}
    `;
const WriteReviewDocument = gql`
    mutation WriteReview($author: String!, $commentOn: Int!, $content: String!, $rating: Int!, $authorEmail: String!) {
  writeReview(
    input: {rating: $rating, author: $author, content: $content, commentOn: $commentOn, authorEmail: $authorEmail}
  ) {
    rating
  }
}
    `;
const defaultWrapper = (action, _operationName, _operationType, _variables) => action();
function getSdk(client, withWrapper = defaultWrapper) {
  return {
    addToCart(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(AddToCartDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "addToCart", "mutation", variables);
    },
    applyCoupon(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ApplyCouponDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "applyCoupon", "mutation", variables);
    },
    ChangeShippingCounty(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ChangeShippingCountyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "ChangeShippingCounty", "mutation", variables);
    },
    ChangeShippingMethod(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ChangeShippingMethodDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "ChangeShippingMethod", "mutation", variables);
    },
    Checkout(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(CheckoutDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "Checkout", "mutation", variables);
    },
    EmptyCart(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(EmptyCartDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "EmptyCart", "mutation", variables);
    },
    getAllTerms(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetAllTermsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getAllTerms", "query", variables);
    },
    getCart(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetCartDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getCart", "query", variables);
    },
    getDownloads(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetDownloadsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getDownloads", "query", variables);
    },
    getOrder(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetOrderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getOrder", "query", variables);
    },
    getOrders(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetOrdersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getOrders", "query", variables);
    },
    getProduct(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetProductDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getProduct", "query", variables);
    },
    getProductCategories(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetProductCategoriesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getProductCategories", "query", variables);
    },
    getProducts(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetProductsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getProducts", "query", variables);
    },
    getStates(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetStatesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getStates", "query", variables);
    },
    getStockStatus(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetStockStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getStockStatus", "query", variables);
    },
    getStripePaymentIntent(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetStripePaymentIntentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getStripePaymentIntent", "query", variables);
    },
    login(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(LoginDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "login", "mutation", variables);
    },
    Logout(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(LogoutDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "Logout", "mutation", variables);
    },
    registerCustomer(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(RegisterCustomerDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "registerCustomer", "mutation", variables);
    },
    removeCoupons(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(RemoveCouponsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "removeCoupons", "mutation", variables);
    },
    ResetPasswordEmail(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ResetPasswordEmailDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "ResetPasswordEmail", "mutation", variables);
    },
    ResetPasswordKey(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ResetPasswordKeyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "ResetPasswordKey", "mutation", variables);
    },
    UpDateCartQuantity(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(UpDateCartQuantityDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "UpDateCartQuantity", "mutation", variables);
    },
    UpdateCustomer(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(UpdateCustomerDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "UpdateCustomer", "mutation", variables);
    },
    updatePassword(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(UpdatePasswordDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "updatePassword", "mutation", variables);
    },
    WriteReview(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(WriteReviewDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "WriteReview", "mutation", variables);
    }
  };
}
const GqlSdks = {
  default: getSdk
};
const GqClientOps = { "default": ["addToCart", "applyCoupon", "ChangeShippingCounty", "ChangeShippingMethod", "Checkout", "EmptyCart", "CartFragment", "CustomerFragment", "Address", "DownloadableItem", "OrderFragment", "ProductCategories", "SimpleProduct", "Terms", "VariableProduct", "getAllTerms", "getCart", "getDownloads", "getOrder", "getOrders", "getProduct", "getProductCategories", "ProductCategory", "getProducts", "getStates", "getStockStatus", "getStripePaymentIntent", "login", "Logout", "registerCustomer", "removeCoupons", "ResetPasswordEmail", "ResetPasswordKey", "UpDateCartQuantity", "UpdateCustomer", "updatePassword", "WriteReview"] };
const GqlChangeShippingMethod = (...params) => useGql()("ChangeShippingMethod", ...params);
const GqlCheckout = (...params) => useGql()("Checkout", ...params);
const GqlEmptyCart = (...params) => useGql()("EmptyCart", ...params);
const GqlLogout = (...params) => useGql()("Logout", ...params);
const GqlResetPasswordEmail = (...params) => useGql()("ResetPasswordEmail", ...params);
const GqlResetPasswordKey = (...params) => useGql()("ResetPasswordKey", ...params);
const GqlUpDateCartQuantity = (...params) => useGql()("UpDateCartQuantity", ...params);
const GqlUpdateCustomer = (...params) => useGql()("UpdateCustomer", ...params);
const GqlAddToCart = (...params) => useGql()("addToCart", ...params);
const GqlApplyCoupon = (...params) => useGql()("applyCoupon", ...params);
const GqlGetCart = (...params) => useGql()("getCart", ...params);
const GqlGetDownloads = (...params) => useGql()("getDownloads", ...params);
const GqlGetOrders = (...params) => useGql()("getOrders", ...params);
const GqlGetStates = (...params) => useGql()("getStates", ...params);
const GqlLogin = (...params) => useGql()("login", ...params);
const GqlRegisterCustomer = (...params) => useGql()("registerCustomer", ...params);
const GqlRemoveCoupons = (...params) => useGql()("removeCoupons", ...params);
const getGqlClient = (client, state) => {
  var _a;
  if (!state) {
    state = useGqlState();
  }
  return client || (((_a = state.value) == null ? void 0 : _a.default) ? "default" : Object.keys(state.value)[0]);
};
const useGqlState = () => {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._gqlState) {
    throw new Error("GQL State is not available.");
  }
  return nuxtApp == null ? void 0 : nuxtApp._gqlState;
};
const setGqlState = ({ client, patch }) => {
  var _a;
  const state = useGqlState();
  client = getGqlClient(client, state);
  const resetToken = (patch == null ? void 0 : patch.token) && !patch.token.value;
  const resetHeaders = (patch == null ? void 0 : patch.headers) && !Object.keys(patch.headers).length;
  state.value[client].options = defu(patch, {
    ...(_a = state.value[client]) == null ? void 0 : _a.options,
    ...resetToken && { token: void 0 },
    ...resetHeaders && { headers: void 0 }
  });
};
function useGqlHeaders(...args) {
  var _a, _b, _c, _d, _e, _f, _g;
  const client = args[1] || ((_a = args == null ? void 0 : args[0]) == null ? void 0 : _a.client);
  let headers = args[0] && typeof args[0] !== "undefined" && "headers" in args[0] ? args[0].headers : args[0];
  const respectDefaults = (_b = args == null ? void 0 : args[0]) == null ? void 0 : _b.respectDefaults;
  headers = headers || {};
  setGqlState({ client, patch: { headers } });
  if (respectDefaults && !Object.keys(headers).length) {
    const defaultHeaders = (_g = (_f = (_e = (_d = (_c = /* @__PURE__ */ useRuntimeConfig()) == null ? void 0 : _c.public) == null ? void 0 : _d["graphql-client"]) == null ? void 0 : _e.clients) == null ? void 0 : _f[client || "default"]) == null ? void 0 : _g.headers;
    const serverHeaders = typeof (defaultHeaders == null ? void 0 : defaultHeaders.serverOnly) === "object" && (defaultHeaders == null ? void 0 : defaultHeaders.serverOnly) || void 0;
    if (defaultHeaders == null ? void 0 : defaultHeaders.serverOnly) {
      delete defaultHeaders.serverOnly;
    }
    headers = { ...defaultHeaders, ...serverHeaders };
    setGqlState({ client, patch: { headers } });
  }
}
function useGql() {
  const state = useGqlState();
  const errState = useGqlErrorState();
  return (...args) => {
    var _a;
    const operation = (typeof (args == null ? void 0 : args[0]) !== "string" && "operation" in (args == null ? void 0 : args[0]) ? args[0].operation : args[0]) ?? void 0;
    const variables = (typeof (args == null ? void 0 : args[0]) !== "string" && "variables" in (args == null ? void 0 : args[0]) ? args[0].variables : args[1]) ?? void 0;
    const client = Object.keys(GqClientOps).find((k) => GqClientOps[k].includes(operation)) ?? "default";
    const { instance } = (_a = state.value) == null ? void 0 : _a[client];
    if (!instance) {
      throw new Error("Invalid GraphQL Operation");
    }
    return GqlSdks[client](instance, async (action, operationName, operationType) => {
      var _a2, _b, _c, _d;
      try {
        return await action();
      } catch (err) {
        errState.value = {
          client,
          operationType,
          operationName,
          statusCode: (_a2 = err == null ? void 0 : err.response) == null ? void 0 : _a2.status,
          gqlErrors: ((_b = err == null ? void 0 : err.response) == null ? void 0 : _b.errors) || ((_c = err == null ? void 0 : err.response) == null ? void 0 : _c.message) && [{ message: (_d = err == null ? void 0 : err.response) == null ? void 0 : _d.message }] || []
        };
        if (state.value.onError) {
          state.value.onError(errState.value);
        }
        throw errState.value;
      }
    })[operation](variables);
  };
}
const useGqlErrorState = () => useState("_gqlErrors", () => null);
function useAsyncGql(...args) {
  const toReactive = (v) => v && isRef(v) ? v : reactive(v);
  const options = (typeof (args == null ? void 0 : args[0]) !== "string" && "options" in (args == null ? void 0 : args[0]) ? args[0].options : args[2]) ?? {};
  const operation = (typeof (args == null ? void 0 : args[0]) !== "string" && "operation" in (args == null ? void 0 : args[0]) ? args[0].operation : args[0]) ?? void 0;
  const variables = (typeof (args == null ? void 0 : args[0]) !== "string" && "variables" in (args == null ? void 0 : args[0]) ? toReactive(args[0].variables) : args[1] && toReactive(args[1])) ?? void 0;
  if (variables) {
    options.watch = options.watch || [];
    options.watch.push(variables);
  }
  const key = `gql:data:${hash({ operation, variables })}`;
  return useAsyncData(key, () => useGql()(operation, unref(variables)), options);
}
const useAuth = () => {
  const { refreshCart } = useCart();
  const { logGQLError } = useHelpers();
  const customer = useState("customer", () => ({ billing: {}, shipping: {} }));
  const viewer = useState("viewer", () => null);
  const isPending = useState("isPending", () => false);
  const orders = useState("orders", () => null);
  const downloads = useState("downloads", () => null);
  const loginUser = async (credentials) => {
    var _a, _b;
    isPending.value = true;
    try {
      const { loginWithCookies } = await GqlLogin(credentials);
      if ((loginWithCookies == null ? void 0 : loginWithCookies.status) === "SUCCESS") {
        const { viewer: viewer2 } = await refreshCart();
        if (viewer2 === null) {
          return {
            success: false,
            error: "Your credentials are correct, but there was an error logging in. This is most likely due to an SSL error. Please try again later. If the problem persists, please contact support."
          };
        }
      }
      isPending.value = false;
      return {
        success: true,
        error: null
      };
    } catch (error) {
      logGQLError(error);
      isPending.value = false;
      return {
        success: false,
        error: (_b = (_a = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _a[0]) == null ? void 0 : _b.message
      };
    }
  };
  const logoutUser = async () => {
    const { clearAllCookies } = useHelpers();
    isPending.value = true;
    try {
      const { logout } = await GqlLogout();
      if (logout) {
        isPending.value = false;
        await refreshCart();
        clearAllCookies();
        viewer.value = null;
        customer.value = { billing: {}, shipping: {} };
      }
      return { success: true, error: null };
    } catch (error) {
      logGQLError(error);
      isPending.value = false;
      return { success: false, error };
    }
  };
  const registerUser = async (userInfo) => {
    var _a;
    isPending.value = true;
    try {
      await GqlRegisterCustomer({ input: userInfo });
      return { success: true, error: null };
    } catch (error) {
      const gqlError = (_a = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _a[0];
      isPending.value = false;
      return { success: false, error: gqlError == null ? void 0 : gqlError.message };
    }
  };
  const updateCustomer = (payload) => {
    const sessionToken = payload == null ? void 0 : payload.sessionToken;
    if (sessionToken) {
      useGqlHeaders({ "woocommerce-session": `Session ${sessionToken}` });
      const newToken = useCookie("woocommerce-session");
      newToken.value = sessionToken;
    }
    customer.value = payload;
    isPending.value = false;
  };
  const updateViewer = (payload) => {
    viewer.value = payload;
    isPending.value = false;
  };
  const sendResetPasswordEmail = async (email) => {
    var _a;
    try {
      isPending.value = true;
      const { sendPasswordResetEmail } = await GqlResetPasswordEmail({ username: email });
      if (sendPasswordResetEmail == null ? void 0 : sendPasswordResetEmail.success) {
        isPending.value = false;
        return { success: true, error: null };
      }
      return { success: false, error: "There was an error sending the reset password email. Please try again later." };
    } catch (error) {
      isPending.value = false;
      const gqlError = (_a = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _a[0];
      return { success: false, error: gqlError == null ? void 0 : gqlError.message };
    }
  };
  const resetPasswordWithKey = async ({ key, login, password }) => {
    var _a, _b;
    try {
      isPending.value = true;
      const { resetUserPassword } = await GqlResetPasswordKey({ key, login, password });
      const wasPasswordReset = Boolean((_a = resetUserPassword == null ? void 0 : resetUserPassword.user) == null ? void 0 : _a.id);
      if (wasPasswordReset) {
        isPending.value = false;
        return { success: true, error: null };
      }
      return { success: false, error: "There was an error resetting the password. Please try again later." };
    } catch (error) {
      isPending.value = false;
      const gqlError = (_b = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _b[0];
      return { success: false, error: gqlError == null ? void 0 : gqlError.message };
    }
  };
  const getOrders = async () => {
    var _a, _b;
    try {
      const { customer: customer2 } = await GqlGetOrders();
      if (customer2) {
        orders.value = ((_a = customer2.orders) == null ? void 0 : _a.nodes) ?? [];
        return { success: true, error: null };
      }
      return { success: false, error: "There was an error getting your orders. Please try again later." };
    } catch (error) {
      logGQLError(error);
      const gqlError = (_b = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _b[0];
      return { success: false, error: gqlError == null ? void 0 : gqlError.message };
    }
  };
  const getDownloads = async () => {
    var _a, _b;
    try {
      const { customer: customer2 } = await GqlGetDownloads();
      if (customer2) {
        downloads.value = ((_a = customer2.downloadableItems) == null ? void 0 : _a.nodes) ?? [];
        return { success: true, error: null };
      }
      return { success: false, error: "There was an error getting your downloads. Please try again later." };
    } catch (error) {
      logGQLError(error);
      const gqlError = (_b = error == null ? void 0 : error.gqlErrors) == null ? void 0 : _b[0];
      return { success: false, error: gqlError == null ? void 0 : gqlError.message };
    }
  };
  const avatar = computed(() => {
    var _a, _b;
    return ((_b = (_a = viewer.value) == null ? void 0 : _a.avatar) == null ? void 0 : _b.url) ?? null;
  });
  return {
    viewer,
    customer,
    isPending,
    orders,
    downloads,
    avatar,
    loginUser,
    updateCustomer,
    updateViewer,
    logoutUser,
    registerUser,
    sendResetPasswordEmail,
    resetPasswordWithKey,
    getOrders,
    getDownloads
  };
};
function useCart() {
  const cart = useState("cart");
  const isShowingCart = useState("isShowingCart", () => false);
  const isUpdatingCart = useState("isUpdatingCart", () => false);
  const isUpdatingCoupon = useState("isUpdatingCoupon", () => false);
  const paymentGateways = useState("paymentGateways", () => null);
  const { logGQLError } = useHelpers();
  async function refreshCart() {
    try {
      const { cart: cart2, customer, viewer, paymentGateways: paymentGateways2 } = await GqlGetCart();
      const { updateCustomer, updateViewer } = useAuth();
      if (cart2) updateCart(cart2);
      if (customer) updateCustomer(customer);
      if (viewer) updateViewer(viewer);
      if (paymentGateways2) updatePaymentGateways(paymentGateways2);
      return { cart: cart2, customer, viewer, paymentGateways: paymentGateways2 };
    } catch (error) {
      logGQLError(error);
      return { cart: null, customer: null, viewer: null, paymentGateways: null };
    }
  }
  function updateCart(payload) {
    cart.value = payload;
  }
  function updatePaymentGateways(payload) {
    paymentGateways.value = payload;
  }
  function toggleCart(state = void 0) {
    isShowingCart.value = state ?? !isShowingCart.value;
  }
  async function addToCart(input) {
    isUpdatingCart.value = true;
    try {
      const { addToCart: addToCart2 } = await GqlAddToCart({ input });
      cart.value = (addToCart2 == null ? void 0 : addToCart2.cart) ?? null;
      const { storeSettings } = useAppConfig();
      if (storeSettings.autoOpenCart && !isShowingCart.value) toggleCart(true);
    } catch (error) {
      logGQLError(error);
    }
  }
  async function removeItem(key) {
    isUpdatingCart.value = true;
    const { updateItemQuantities } = await GqlUpDateCartQuantity({ key, quantity: 0 });
    cart.value = (updateItemQuantities == null ? void 0 : updateItemQuantities.cart) ?? null;
  }
  async function updateItemQuantity(key, quantity) {
    isUpdatingCart.value = true;
    try {
      const { updateItemQuantities } = await GqlUpDateCartQuantity({ key, quantity });
      cart.value = (updateItemQuantities == null ? void 0 : updateItemQuantities.cart) ?? null;
      return quantity;
    } catch (error) {
      logGQLError(error);
      return void 0;
    }
  }
  async function emptyCart() {
    try {
      const { emptyCart: emptyCart2 } = await GqlEmptyCart();
      updateCart((emptyCart2 == null ? void 0 : emptyCart2.cart) ?? null);
    } catch (error) {
      logGQLError(error);
    }
  }
  async function updateShippingMethod(shippingMethods) {
    isUpdatingCart.value = true;
    const { updateShippingMethod: updateShippingMethod2 } = await GqlChangeShippingMethod({ shippingMethods });
    cart.value = (updateShippingMethod2 == null ? void 0 : updateShippingMethod2.cart) ?? null;
  }
  async function applyCoupon(code2) {
    try {
      isUpdatingCoupon.value = true;
      const { applyCoupon: applyCoupon2 } = await GqlApplyCoupon({ code: code2 });
      cart.value = (applyCoupon2 == null ? void 0 : applyCoupon2.cart) ?? null;
      isUpdatingCoupon.value = false;
    } catch (error) {
      isUpdatingCoupon.value = false;
      logGQLError(error);
    }
    return { message: null };
  }
  async function removeCoupon(code2) {
    try {
      isUpdatingCart.value = true;
      const { removeCoupons } = await GqlRemoveCoupons({ codes: [code2] });
      cart.value = (removeCoupons == null ? void 0 : removeCoupons.cart) ?? null;
      isUpdatingCart.value = false;
    } catch (error) {
      logGQLError(error);
      isUpdatingCart.value = false;
    }
  }
  watch(cart, (val) => {
    isUpdatingCart.value = false;
  });
  return {
    cart,
    isShowingCart,
    isUpdatingCart,
    isUpdatingCoupon,
    paymentGateways,
    updateCart,
    refreshCart,
    toggleCart,
    addToCart,
    removeItem,
    updateItemQuantity,
    emptyCart,
    updateShippingMethod,
    applyCoupon,
    removeCoupon
  };
}
const init_wIGCIxHxFb = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
});
let routes;
const prerender_server_LXx1wM9sKF = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routerOptions.hashMode) {
    return;
  }
  if (routes && !routes.length) {
    return;
  }
  routes || (routes = Array.from(processRoutes(([__temp, __restore] = executeAsync(() => {
    var _a;
    return (_a = routerOptions.routes) == null ? void 0 : _a.call(routerOptions, _routes);
  }), __temp = await __temp, __restore(), __temp) ?? _routes)));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  var _a;
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !((_a = route.children) == null ? void 0 : _a.length)) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    routesToPrerender.add(fullPath);
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  i18n_yfWm7jX06p,
  plugin_WLsn00x1qh,
  plugin_jBToDIZpFa,
  init_wIGCIxHxFb,
  prerender_server_LXx1wM9sKF
];
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file:///Applications/XAMPP/xamppfiles/htdocs/woonuxt-oazis/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry2 of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry2.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "") {
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name2) {
  const provider = ctx.options.providers[name2];
  if (!provider) {
    throw new Error("Unknown provider: " + name2);
  }
  return provider;
}
function getPreset(ctx, name2) {
  if (!name2) {
    return {};
  }
  if (!ctx.options.presets[name2]) {
    throw new Error("Unknown preset: " + name2);
  }
  return ctx.options.presets[name2];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL: baseURL2 } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL2) {
    baseURL2 = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL2, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxStaticRuntime$ofvE2B8inn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipxStatic",
  "domains": [
    "example.com",
    "example.org"
  ],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipxStatic"]: { provider: ipxStaticRuntime$ofvE2B8inn, defaults: {} }
};
const useImage = () => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, default: void 0 },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: {
    type: [Boolean, Object],
    default: void 0
  },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 },
  placeholderClass: { type: String, default: void 0 }
};
const __nuxt_component_3$2 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs,
      class: props.placeholder && !placeholderLoaded.value ? [props.placeholderClass] : void 0,
      src: src.value
    });
  }
});
async function loadIcon(name2) {
  await new Promise((resolve2) => loadIcons([name2], () => resolve2(true))).catch(() => null);
  return getIcon(name2);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a, b) => b.length - a.length);
  return computed(() => {
    var _a;
    const name2 = getName();
    const bare = name2.startsWith(options.cssSelectorPrefix) ? name2.slice(options.cssSelectorPrefix.length) : name2;
    const resolved = ((_a = options.aliases) == null ? void 0 : _a[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c) => resolved.startsWith(c + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}
const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    var _a;
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => options.cssSelectorPrefix + props.name);
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed"
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    {
      const configs = (/* @__PURE__ */ useRuntimeConfig()).icon || {};
      if (!((_a = configs == null ? void 0 : configs.serverKnownCssClasses) == null ? void 0 : _a.includes(cssClass.value))) {
        const icon = await loadIcon(props.name);
        if (icon) {
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (!ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
        }
      }
    }
    return () => h("span", { class: ["iconify", cssClass.value, options.class] });
  }
});
const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  async setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name2 = useResolvedName(() => props.name);
    const storeKey = "i-" + name2.value;
    {
      useAsyncData(
        storeKey,
        () => loadIcon(name2.value),
        { deep: false }
      );
    }
    return () => h(Icon, {
      icon: name2.value,
      ssr: true,
      class: options.class
    }, slots);
  }
});
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    }
  },
  async setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const options = useAppConfig().icon;
    const name2 = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a;
        return ((_a = nuxtApp.vueApp) == null ? void 0 : _a.component(name2.value)) || ((props.mode || options.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || options.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    return () => h(
      component.value,
      {
        ...options.attrs,
        name: name2.value,
        class: options.class,
        style: style.value
      },
      slots
    );
  }
});
const index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$1
});
function useSorting() {
  const route = useRoute();
  const router = useRouter();
  const { updateProductList } = useProducts();
  const orderQuery = useState("order", () => "");
  orderQuery.value = route.query.orderby;
  function getOrderQuery() {
    return { orderBy: route.query.orderby, order: route.query.order };
  }
  function setOrderQuery(orderby, order) {
    router.push({ query: { ...route.query, orderby: orderby ?? void 0, order: order ?? void 0 } });
    setTimeout(() => {
      updateProductList();
    }, 100);
  }
  const isSortingActive = computed(() => !!orderQuery.value);
  function sortProducts(products) {
    if (!isSortingActive) return products;
    const orderQuery2 = getOrderQuery();
    if (!orderQuery2.orderBy && !orderQuery2.order) return products;
    const orderby = orderQuery2.orderBy || "date";
    const order = orderQuery2.order || "DESC";
    return products.sort((a, b) => {
      const aDate = a.date ? new Date(a.date).getTime() : 0;
      const bDate = b.date ? new Date(b.date).getTime() : 0;
      const aPrice = a.rawPrice ? parseFloat([...a.rawPrice.split(",")].reduce((a2, b2) => String(Math.max(Number(a2), Number(b2))))) : 0;
      const bPrice = b.rawPrice ? parseFloat([...b.rawPrice.split(",")].reduce((a2, b2) => String(Math.max(Number(a2), Number(b2))))) : 0;
      const aSalePrice = a.rawSalePrice ? parseFloat([...a.rawSalePrice.split(",")].reduce((a2, b2) => String(Math.max(Number(a2), Number(b2))))) : 0;
      const aRegularPrice = a.rawRegularPrice ? parseFloat([...a.rawRegularPrice.split(",")].reduce((a2, b2) => String(Math.max(Number(a2), Number(b2))))) : 0;
      const bSalePrice = b.rawSalePrice ? parseFloat([...b.rawSalePrice.split(",")].reduce((a2, b2) => String(Math.max(Number(a2), Number(b2))))) : 0;
      const bRegularPrice = b.rawRegularPrice ? parseFloat([...b.rawRegularPrice.split(",")].reduce((a2, b2) => String(Math.max(Number(a2), Number(b2))))) : 0;
      const aDiscount = a.onSale ? Math.round((aSalePrice - aRegularPrice) / aRegularPrice * 100) : 0;
      const bDiscount = b.onSale ? Math.round((bSalePrice - bRegularPrice) / bRegularPrice * 100) : 0;
      const aName = a.name || "";
      const bName = b.name || "";
      const aRating = a.averageRating || 0;
      const bRating = b.averageRating || 0;
      switch (orderby) {
        case "price":
          return order !== "DESC" ? aPrice - bPrice : bPrice - aPrice;
        case "rating":
          return order !== "DESC" ? bRating - aRating : aRating - bRating;
        case "discount":
          return order !== "DESC" ? bDiscount - aDiscount : aDiscount - bDiscount;
        case "alphabetically":
          return order !== "DESC" ? aName.localeCompare(bName) : bName.localeCompare(aName);
        default:
          return order !== "DESC" ? aDate - bDate : bDate - aDate;
      }
    });
  }
  return { getOrderQuery, setOrderQuery, isSortingActive, orderQuery, sortProducts };
}
function useFiltering() {
  const route = useRoute();
  const router = useRouter();
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const { updateProductList } = useProducts();
  const filterQuery = useState("filter", () => "");
  filterQuery.value = route.query.filter;
  function getFilter(filterName) {
    var _a, _b, _c;
    return ((_c = (_b = (_a = filterQuery.value) == null ? void 0 : _a.split(`${filterName}[`)[1]) == null ? void 0 : _b.split("]")[0]) == null ? void 0 : _c.split(",")) || [];
  }
  function setFilter(filterName, filterValue) {
    var _a;
    let newFilterQuery = filterQuery.value || "";
    if (!((_a = filterQuery.value) == null ? void 0 : _a.includes(filterName))) {
      newFilterQuery = filterQuery.value ? `${filterQuery.value},${filterName}[${filterValue}]` : `${filterName}[${filterValue}]`;
    } else {
      newFilterQuery = !filterValue.length ? filterQuery.value.replace(`${filterName}[${getFilter(filterName)}]`, "") : filterQuery.value.replace(`${filterName}[${getFilter(filterName)}]`, `${filterName}[${filterValue}]`);
    }
    newFilterQuery = newFilterQuery.replace(/^,/, "").replace(/,$/, "");
    newFilterQuery = newFilterQuery.replace(/,{2,}/g, ",");
    filterQuery.value = newFilterQuery;
    router.push({ query: { ...route.query, filter: newFilterQuery } });
    const path = route.path.includes("/page/") ? route.path.split("/page/")[0] : route.path;
    if (!newFilterQuery) {
      router.push({
        path,
        query: { ...route.query, filter: void 0 }
      });
    } else {
      router.push({
        path,
        query: { ...route.query, filter: newFilterQuery }
      });
    }
    setTimeout(() => {
      updateProductList();
    }, 50);
  }
  function resetFilter() {
    const { scrollToTop } = useHelpers();
    filterQuery.value = "";
    router.push({ query: { ...route.query, filter: void 0 } });
    setTimeout(() => {
      updateProductList();
      scrollToTop();
    }, 50);
  }
  const isFiltersActive = computed(() => !!filterQuery.value);
  function filterProducts(products) {
    return products.filter((product) => {
      var _a, _b, _c, _d;
      const category = getFilter("category") || [];
      const categoryCondition = category.length ? (_b = (_a = product.productCategories) == null ? void 0 : _a.nodes) == null ? void 0 : _b.find((node) => category.includes(node.slug)) : true;
      const priceRange = getFilter("price") || [];
      const productPrice = product.rawPrice ? parseFloat([...product.rawPrice.split(",")].reduce((a, b) => String(Math.max(Number(a), Number(b))))) : 0;
      const priceCondition = priceRange.length ? productPrice >= parseFloat(priceRange[0]) && productPrice <= parseFloat(priceRange[1]) : true;
      const starRating = getFilter("rating") || [];
      const ratingCondition = starRating.length ? ((product == null ? void 0 : product.averageRating) || 0) >= parseFloat(starRating[0]) : true;
      const globalProductAttributes = ((_d = (_c = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _c.GLOBAL_PRODUCT_ATTRIBUTES) == null ? void 0 : _d.map((attribute) => attribute.slug)) || [];
      const attributeCondition = globalProductAttributes.map((attribute) => {
        var _a2, _b2;
        const attributeValues = getFilter(attribute) || [];
        if (!attributeValues.length) return true;
        return (_b2 = (_a2 = product.terms) == null ? void 0 : _a2.nodes) == null ? void 0 : _b2.find((node) => node.taxonomyName === attribute && attributeValues.includes(node.slug));
      }).every((condition) => condition);
      const onSale = getFilter("sale");
      const saleItemsOnlyCondition = onSale.length ? product.onSale : true;
      return ratingCondition && priceCondition && attributeCondition && categoryCondition && saleItemsOnlyCondition;
    });
  }
  return { getFilter, setFilter, resetFilter, isFiltersActive, filterProducts };
}
let allProducts = [];
function useProducts() {
  const products = useState("products");
  function setProducts(newProducts) {
    if (!Array.isArray(newProducts)) throw new Error("Products must be an array.");
    products.value = newProducts ?? [];
    allProducts = JSON.parse(JSON.stringify(newProducts));
  }
  const updateProductList = async () => {
    const { scrollToTop } = useHelpers();
    const { isSortingActive, sortProducts } = useSorting();
    const { isFiltersActive, filterProducts } = useFiltering();
    const { isSearchActive, searchProducts } = useSearching();
    scrollToTop();
    if (!isFiltersActive.value && !isSearchActive.value && !isSortingActive.value) {
      products.value = allProducts;
      return;
    }
    try {
      let newProducts = [...allProducts];
      if (isFiltersActive.value) newProducts = filterProducts(newProducts);
      if (isSearchActive.value) newProducts = searchProducts(newProducts);
      if (isSortingActive.value) newProducts = sortProducts(newProducts);
      products.value = newProducts;
    } catch (error) {
      console.error(error);
    }
  };
  return { products, allProducts, setProducts, updateProductList };
}
function useSearching() {
  const isShowingSearch = useState("isShowingSearch", () => false);
  const route = useRoute();
  const router = useRouter();
  const { updateProductList } = useProducts();
  const searchQuery = useState("searchQuery", () => "");
  searchQuery.value = route.query.search;
  function getSearchQuery() {
    return route.query.search;
  }
  function setSearchQuery(search) {
    searchQuery.value = search;
    router.push({ query: { ...route.query, search: search || void 0 } });
    setTimeout(() => {
      updateProductList();
    }, 50);
  }
  function clearSearchQuery() {
    setSearchQuery("");
  }
  const isSearchActive = computed(() => !!searchQuery.value);
  const toggleSearch = () => {
    isShowingSearch.value = !isShowingSearch.value;
  };
  function searchProducts(products) {
    const name2 = route.name ?? "products";
    const search = getSearchQuery();
    if (route.name === "product-category-slug") {
      const categorySlug = route.params.categorySlug;
      router.push({ name: name2, params: { categorySlug }, query: { ...route.query, search } });
    } else {
      router.push({ name: "products", query: { ...route.query, search } });
    }
    return search ? products.filter((product) => {
      var _a;
      const name22 = (_a = product.name) == null ? void 0 : _a.toLowerCase();
      const description = product.description ? product.description.toLowerCase() : null;
      const shortDescription = product.shortDescription ? product.shortDescription.toLowerCase() : null;
      const query = search.toLowerCase();
      return (name22 == null ? void 0 : name22.includes(query)) ?? (description == null ? void 0 : description.includes(query)) ?? (shortDescription == null ? void 0 : shortDescription.includes(query));
    }) : products;
  }
  return { getSearchQuery, setSearchQuery, clearSearchQuery, searchProducts, isSearchActive, isShowingSearch, toggleSearch };
}
const _sfc_main$d = {
  __name: "ProductSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const { getSearchQuery, setSearchQuery, clearSearchQuery } = useSearching();
    const searchQuery = ref(getSearchQuery());
    const reset = () => {
      clearSearchQuery();
      searchQuery.value = "";
    };
    watch(getSearchQuery, (value) => {
      if (!value) reset();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3$2;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "relative items-center flex-1 -space-x-px rounded-md shadow-sm" }, _attrs))}><input${ssrRenderAttr("value", unref(searchQuery))} class="header-logo-user-box__search-box__input" placeholder="Keresés a termékek között">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "header-logo-user-box__search-box__img position-absolute",
        src: "/img/header/search.svg",
        alt: "Függöny Oázis"
      }, null, _parent));
      if (unref(searchQuery)) {
        _push(`<span class="absolute z-10 flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer bg-primary bg-opacity-10 hover:bg-opacity-20 text-primary right-2"><span>${ssrInterpolate(_ctx.$t("messages.general.clear"))}</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ion:close-outline",
          size: "18"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/shopElements/ProductSearch.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "LoadingIcon",
  __ssrInlineRender: true,
  props: {
    size: { default: "20", type: String || Number },
    color: { default: "#4B5563", type: String },
    speed: { default: "250ms", type: String },
    stroke: { default: "2.5", type: String || Number }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: __props.size,
        height: __props.size,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><defs><linearGradient id="a" x1="8.042%" y1="0%" x2="65.682%" y2="23.865%"><stop${ssrRenderAttr("stop-color", __props.color)} stop-opacity="0" offset="0%"></stop><stop${ssrRenderAttr("stop-color", __props.color)} stop-opacity=".631" offset="63.146%"></stop><stop${ssrRenderAttr("stop-color", __props.color)} offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><path id="Oval-2" d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)"${ssrRenderAttr("stroke-width", __props.stroke)}><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18"${ssrRenderAttr("dur", __props.speed)} repeatCount="indefinite"></animateTransform></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18"${ssrRenderAttr("dur", __props.speed)} repeatCount="indefinite"></animateTransform></circle></g></g></svg>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/LoadingIcon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SignInLink",
  __ssrInlineRender: true,
  setup(__props) {
    const { viewer, avatar, logoutUser, isPending } = useAuth();
    const linkTitle = computed(() => {
      var _a;
      return ((_a = viewer.value) == null ? void 0 : _a.username) || "Sign In";
    });
    const wishlistLink = computed(() => viewer.value ? "/my-account?tab=wishlist" : "/wishlist");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      const _component_NuxtImg = __nuxt_component_3$2;
      const _component_Icon = __nuxt_component_0$1;
      const _component_LoadingIcon = _sfc_main$c;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/my-account",
        title: unref(linkTitle),
        class: "hidden sm:inline-flex aspect-square items-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            if (unref(avatar)) {
              _push2(`<span class="relative avatar" data-v-9aa521e7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                class: "header-logo-user-box__login-box__link__img position-relative",
                src: "/img/header/user.svg",
                alt: "Függöny Oázis"
              }, null, _parent2, _scopeId));
              _push2(`<div class="account-dropdown" data-v-9aa521e7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(wishlistLink),
                class: "hover:bg-gray-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ion:heart-outline",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-9aa521e7${_scopeId2}>Wishlist</span>`);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ion:heart-outline",
                        size: "16"
                      }),
                      createVNode("span", null, "Wishlist")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/my-account",
                class: "hover:bg-gray-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ion:person-outline",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-9aa521e7${_scopeId2}>My Account</span>`);
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ion:person-outline",
                        size: "16"
                      }),
                      createVNode("span", null, "My Account")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<button class="text-red-600 hover:bg-red-50" data-v-9aa521e7${_scopeId}>`);
              if (unref(isPending)) {
                _push2(ssrRenderComponent(_component_LoadingIcon, { size: "16" }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ion:log-out-outline",
                  size: "16"
                }, null, _parent2, _scopeId));
              }
              _push2(`<span data-v-9aa521e7${_scopeId}>Logout</span></button></div></span>`);
            } else {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ion:person-outline",
                size: "22",
                class: "border border-transparent"
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(Transition, {
                name: "pop-in",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  unref(avatar) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "relative avatar"
                  }, [
                    createVNode(_component_NuxtImg, {
                      class: "header-logo-user-box__login-box__link__img position-relative",
                      src: "/img/header/user.svg",
                      alt: "Függöny Oázis"
                    }),
                    createVNode("div", { class: "account-dropdown" }, [
                      createVNode(_component_NuxtLink, {
                        to: unref(wishlistLink),
                        class: "hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ion:heart-outline",
                            size: "16"
                          }),
                          createVNode("span", null, "Wishlist")
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createVNode(_component_NuxtLink, {
                        to: "/my-account",
                        class: "hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ion:person-outline",
                            size: "16"
                          }),
                          createVNode("span", null, "My Account")
                        ]),
                        _: 1
                      }),
                      createVNode("button", {
                        class: "text-red-600 hover:bg-red-50",
                        onClick: withModifiers(unref(logoutUser), ["prevent"])
                      }, [
                        unref(isPending) ? (openBlock(), createBlock(_component_LoadingIcon, {
                          key: 0,
                          size: "16"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "ion:log-out-outline",
                          size: "16"
                        })),
                        createVNode("span", null, "Logout")
                      ], 8, ["onClick"])
                    ])
                  ])) : (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    name: "ion:person-outline",
                    size: "22",
                    class: "border border-transparent"
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/SignInLink.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-9aa521e7"]]);
const _sfc_main$a = {
  __name: "CartTrigger",
  __ssrInlineRender: true,
  setup(__props) {
    useCart();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_NuxtImg = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "cartTrigger relative cursor-pointer d-flex",
        title: "Cart"
      }, _attrs))}><div class="cartTrigger__tBox">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="cartTrigger__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "header-logo-user-box__login-box__link__img header-logo-user-box__login-box__link__img--format position-relative",
        src: "/img/header/basket.svg",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/cartElements/CartTrigger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "MainMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { name: "FÜGGÖNY", path: "/" },
      { name: "LAKÁSTEXTIL", path: "/lakastextil" },
      { name: "SÖTÉTÍTŐ", path: "/sotetito" },
      { name: "RÖVIDÁRÚ", path: "/rovidaru" },
      { name: "KARNIS", path: "/dekoracio" },
      { name: "AKCIÓK", path: "/akciok" },
      { name: "KAPCSOLAT", path: "/kapcsolat" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_10;
      _push(`<nav${ssrRenderAttrs(_attrs)}><ul class="menu__list d-flex"><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "menu__item text-color text-transform-uppercase f-500",
          key: link.path,
          to: link.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString$1(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/MainMenu.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MenuTrigger",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleMobileMenu } = useHelpers();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:menu-outline",
        size: "30",
        class: "hamburgerBtn cursor-pointer",
        onClick: unref(toggleMobileMenu)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/MenuTrigger.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SearchTrigger",
  __ssrInlineRender: true,
  setup(__props) {
    useSearching();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative cursor-pointer inline-flex sm:hidden",
        title: "Cart"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "header-logo-user-box__search-box__img",
        src: "/img/header/search.svg",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/SearchTrigger.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { isShowingSearch } = useSearching();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3$2;
      const _component_ProductSearch = _sfc_main$d;
      const _component_SignInLink = __nuxt_component_2;
      const _component_CartTrigger = _sfc_main$a;
      const _component_MainMenu = _sfc_main$9;
      const _component_MenuTrigger = _sfc_main$8;
      const _component_SearchTrigger = _sfc_main$7;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header__up-box"><a class="header__up-box__link header__up-box__link--margin f-400" href="tel:+36704266794">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "header__up-box__link__img",
        src: "/img/header/mobile.svg",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(` +36 70 426 67 94 </a><a class="header__up-box__link f-400" href="mailto:fuggonyoazis@gmail.com">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "header__up-box__link__img",
        src: "/img/header/mail.svg",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(` fuggonyoazis@gmail.com </a></div><div class="header-logo-user-box grid-3"><div class="header-logo-user-box__img-box">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "header-logo-user-box__img-box__img",
        src: "/img/header/logo.svg",
        alt: "Függöny Oázis"
      }, null, _parent));
      _push(`</div><div class="header-logo-user-box__search-box header-logo-user-box__search-box--d-none position-relative">`);
      _push(ssrRenderComponent(_component_ProductSearch, null, null, _parent));
      _push(`</div><div class="header-logo-user-box__login-box d-flex"><div class="header-logo-user-box__login-box__link"> Bejelentkezés `);
      _push(ssrRenderComponent(_component_SignInLink, null, null, _parent));
      _push(`</div><div class="header-logo-user-box__login-box__link header-logo-user-box__login-box__link--margin">`);
      _push(ssrRenderComponent(_component_CartTrigger, null, null, _parent));
      _push(`</div></div></div><div class="header-content"><div class="nav-box header-content__nav-box">`);
      _push(ssrRenderComponent(_component_MainMenu, null, null, _parent));
      _push(`</div></div><div class="header__mobilBox flex items-center justify-between py-4"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_MenuTrigger, { class: "lg:hidden" }, null, _parent));
      _push(`</div><div class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6">`);
      _push(ssrRenderComponent(_component_SearchTrigger, null, null, _parent));
      _push(`</div></div>`);
      if (unref(isShowingSearch)) {
        _push(`<div class="container mb-3 -mt-1 sm:hidden">`);
        _push(ssrRenderComponent(_component_ProductSearch, { class: "flex w-full" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/AppHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "cursor-pointer top-6 left-8 absolute",
    xmlns: "http://www.w3.org/2000/svg",
    width: "34",
    height: "34",
    viewBox: "0 0 512 512"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/cartElements/CloseIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleMobileMenu, wooNuxtVersionInfo } = useHelpers();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CloseIcon = __nuxt_component_0;
      const _component_MainMenu = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white flex flex-col max-w-lg shadow-lg top-0 bottom-0 left-0 w-11/12 z-50 fixed overflow-x-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CloseIcon, {
        class: "bg-white rounded-xl shadow-xl p-1.5",
        onClick: ($event) => unref(toggleMobileMenu)(false)
      }, null, _parent));
      _push(`<div class="mt-8 text-center">${ssrInterpolate(_ctx.$t("messages.general.menu"))}</div>`);
      _push(ssrRenderComponent(_component_MainMenu, { class: "m-4 grid p-4 text-gray-500 gap-6" }, null, _parent));
      _push(`<div class="mt-auto text-center p-8 text-[10px] text-gray-400"><a href="/"${ssrRenderAttr("title", unref(wooNuxtVersionInfo))}>WooNuxt v${ssrInterpolate(unref(wooNuxtVersionInfo))}</a></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/MobileMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_3$1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index2 = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index2 < newRoute.matched.length - 1;
}
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_10;
  const _component_NuxtImg = __nuxt_component_3$2;
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-content grid-4"><div class="footer-content__link-box"><h6 class="footer-content__link-box__h6 text-color">MENÜ</h6><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TERMÉKEK`);
      } else {
        return [
          createTextVNode("TERMÉKEK")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`BELÉPÉS`);
      } else {
        return [
          createTextVNode("BELÉPÉS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`REGISZTRÁCIÓ`);
      } else {
        return [
          createTextVNode("REGISZTRÁCIÓ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`PROFILOM`);
      } else {
        return [
          createTextVNode("PROFILOM")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`KOSÁR`);
      } else {
        return [
          createTextVNode("KOSÁR")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`PROFILOM`);
      } else {
        return [
          createTextVNode("PROFILOM")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div class="footer-content__link-box footer-content__link-box--one-formating"><h6 class="footer-content__link-box__h6 text-color">INFORMÁCIÓK</h6><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK`);
      } else {
        return [
          createTextVNode("ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ADATKEZELÉSI TÁJÉKOZTATÓ`);
      } else {
        return [
          createTextVNode("ADATKEZELÉSI TÁJÉKOZTATÓ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FIZETÉS`);
      } else {
        return [
          createTextVNode("FIZETÉS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`SZÁLLÍTÁS`);
      } else {
        return [
          createTextVNode("SZÁLLÍTÁS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`GYAKRAN ISMÉTELT KÉRDÉSEK`);
      } else {
        return [
          createTextVNode("GYAKRAN ISMÉTELT KÉRDÉSEK")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="footer-content__link-box__p">`);
  _push(ssrRenderComponent(_component_NuxtLink, { class: "footer-content__link-box__NuxtLink text-color" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ELÉRHETŐSÉGEK`);
      } else {
        return [
          createTextVNode("ELÉRHETŐSÉGEK")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div class="footer-content__link-box footer-content__link-box--two-formating"><h6 class="footer-content__link-box__h6 footer-content__link-box__h6--margin text-color">ELÉRHETŐSÉG</h6><p class="footer-content__link-box__p"><a href="tel:+36704266794" class="footer-content__link-box__link text-color">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "footer-content__link-box__link__img",
    src: "/img/footer/mobile.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(` +36 70 426 67 94</a></p><p class="footer-content__link-box__p text-color">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "footer-content__link-box__link__img",
    src: "/img/footer/time.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(` Telefonos ügyfélszolgálat: Munkanapokon 8:00 - 17:00 </p><p class="footer-content__link-box__p"><a href="mailto:fuggonyoazis@gmail.com" class="footer-content__link-box__link text-color">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "footer-content__link-box__link__img",
    src: "/img/footer/mail.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(` fuggonyoazis@gmail.com</a></p></div><div class="footer-content__img-content d-flex">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "footer-content__img-content__img",
    src: "img/header/logo.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`</div></div><div class="copyright-content">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "copyright-content__img",
    src: "img/footer/digitalSeed.svg",
    alt: "Függöny Oázis"
  }, null, _parent));
  _push(`</div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/components/generalElements/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const __nuxt_component_1_lazy$1 = defineAsyncComponent(() => import('./Cart-BI0BRIDi.mjs').then((c) => c.default || c));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { isShowingCart, toggleCart } = useCart();
    const { isShowingMobileMenu, toggleMobileMenu, addBodyClass, removeBodyClass } = useHelpers();
    const { siteName } = useAppConfig();
    const closeCartAndMenu = () => {
      toggleCart(false);
      toggleMobileMenu(false);
    };
    watch([isShowingCart, isShowingMobileMenu], () => {
      isShowingCart.value || isShowingMobileMenu.value ? addBodyClass("overflow-hidden") : removeBodyClass("overflow-hidden");
    });
    watch(
      () => route.path,
      () => closeCartAndMenu()
    );
    useHead({
      titleTemplate: `%s - ${siteName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$6;
      const _component_LazyCart = __nuxt_component_1_lazy$1;
      const _component_MobileMenu = _sfc_main$4;
      const _component_NuxtPage = __nuxt_component_3$1;
      const _component_AppFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      if (unref(isShowingCart)) {
        _push(ssrRenderComponent(_component_LazyCart, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowingMobileMenu)) {
        _push(ssrRenderComponent(_component_MobileMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      if (unref(isShowingCart) || unref(isShowingMobileMenu)) {
        _push(`<div class="bg-black opacity-25 inset-0 z-40 fixed"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./Cart-BI0BRIDi.mjs').then((c) => c.default || c));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const route = useRoute();
    const { isShowingCart, toggleCart } = useCart();
    const { isShowingMobileMenu, toggleMobileMenu, addBodyClass, removeBodyClass } = useHelpers();
    const closeCartAndMenu = () => {
      toggleCart(false);
      toggleMobileMenu(false);
    };
    watch([isShowingCart, isShowingMobileMenu], () => {
      isShowingCart.value || isShowingMobileMenu.value ? addBodyClass("overflow-hidden") : removeBodyClass("overflow-hidden");
    });
    watch(
      () => route.path,
      () => closeCartAndMenu()
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_AppHeader = _sfc_main$6;
      const _component_LazyCart = __nuxt_component_1_lazy;
      const _component_MobileMenu = _sfc_main$4;
      const _component_AppFooter = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      if (unref(isShowingCart)) {
        _push(ssrRenderComponent(_component_LazyCart, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowingMobileMenu)) {
        _push(ssrRenderComponent(_component_MobileMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center justify-center flex-1 gap-4 min-h-[500px]"><h1 class="text-6xl font-bold">Error ${ssrInterpolate(((_a = _ctx.error) == null ? void 0 : _a.statusCode) || "404")}</h1>`);
      if ((_b = _ctx.error) == null ? void 0 : _b.message) {
        _push(`<p class="text-lg">${ssrInterpolate(_ctx.error.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(isShowingCart) || unref(isShowingMobileMenu)) {
        _push(`<div class="bg-black opacity-25 inset-0 z-40 fixed"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("woonuxt_base/app/error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { GqlUpdateCustomer as G, OrderStatusEnum as O, ProductTypesEnum as P, StockStatusEnum as S, __nuxt_component_0$1 as _, __nuxt_component_2$1 as a, _sfc_main$c as b, _export_sfc as c, useHead as d, entry$1 as default, useAsyncGql as e, useHelpers as f, __nuxt_component_10 as g, __nuxt_component_3$2 as h, useState as i, useAuth as j, useRouter as k, GqlCheckout as l, GqlGetStates as m, useRuntimeConfig as n, useAppConfig as o, useI18n as p, useRoute as q, useSeoMeta as r, useImage as s, useProducts as t, useCart as u, useSorting as v, useFiltering as w, useSearching as x };
//# sourceMappingURL=server.mjs.map
