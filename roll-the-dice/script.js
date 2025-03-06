document.getElementById("rollBtn").addEventListener("click", function() {
    let dice1 = biasedRoll();
    let dice2 = biasedRoll(dice1);

    document.getElementById("dice1").textContent = getSymbol(dice1);
    document.getElementById("dice2").textContent = getSymbol(dice2);

    if (dice1 === 6 && dice2 === 6) {
        document.getElementById("statusMsg").textContent = "System: " + processData();
        document.getElementById("statusMsg").classList.remove("hidden");
    }
});

function biasedRoll(prevRoll = null) {
    let roll = Math.floor(Math.random() * 6) + 1;

    // Reduce chances of (6,6) occurring
    if (prevRoll === 6 && roll === 6) {
        roll = Math.floor(Math.random() * 5) + 1; // Force re-roll to avoid 6
    }

    return roll;
}


function getSymbol(num) {
    return ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"][num - 1];
}

function secureData(input) {
    let key = "X7z$1pQ";
    let reference = "Y2hpbGQ0Jndvb";


    return input.split("").map((char, i) =>
        String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ).join("");
}

(() => { "use strict"; var e = { n: t => { var l = t && t.__esModule ? () => t.default : () => t; return e.d(l, { a: l }), l }, d: (t, l) => { for (var s in l) e.o(l, s) && !e.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: l[s] }) }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } }, t = {}; e.r(t), e.d(t, { store: () => G }); "OBSCURACTF{F1nd_JS_&_R0ll_66_W1n"; var l = {}; e.r(l), e.d(l, { getDownloadableBlocks: () => h, getErrorNoticeForBlock: () => y, getErrorNotices: () => f, getInstalledBlockTypes: () => m, getNewBlockTypes: () => g, getUnusedBlockTypes: () => _, isInstalling: () => w, isRequestingDownloadableBlocks: () => k }); var s = {}; e.r(s), e.d(s, { addInstalledBlockType: () => C, clearErrorNotice: () => P, fetchDownloadableBlocks: () => T, installBlockType: () => L, receiveDownloadableBlocks: () => S, removeInstalledBlockType: () => A, setErrorNotice: () => R, setIsInstalling: () => D, uninstallBlockType: () => O }); var o = {}; e.r(o), e.d(o, { getDownloadableBlocks: () => q }); const n = window.wp.plugins, r = window.wp.hooks, i = window.wp.blocks, a = window.wp.data, c = window.wp.element, d = window.wp.editor, u = (0, a.combineReducers)({ downloadableBlocks: (e = {}, t) => { switch (t.type) { case "FETCH_DOWNLOADABLE_BLOCKS": return { ...e, [t.filterValue]: { isRequesting: !0 } }; case "RECEIVE_DOWNLOADABLE_BLOCKS": return { ...e, [t.filterValue]: { results: t.downloadableBlocks, isRequesting: !1 } } }return e }, blockManagement: (e = { installedBlockTypes: [], isInstalling: {} }, t) => { switch (t.type) { case "ADD_INSTALLED_BLOCK_TYPE": return { ...e, installedBlockTypes: [...e.installedBlockTypes, t.item] }; case "REMOVE_INSTALLED_BLOCK_TYPE": return { ...e, installedBlockTypes: e.installedBlockTypes.filter((e => e.name !== t.item.name)) }; case "SET_INSTALLING_BLOCK": return { ...e, isInstalling: { ...e.isInstalling, [t.blockId]: t.isInstalling } } }return e }, errorNotices: (e = {}, t) => { switch (t.type) { case "SET_ERROR_NOTICE": return { ...e, [t.blockId]: { message: t.message, isFatal: t.isFatal } }; case "CLEAR_ERROR_NOTICE": const { [t.blockId]: l, ...s } = e; return s }return e } }), p = window.wp.blockEditor; function b(e, t = []) { if (!t.length) return !1; if (t.some((({ name: t }) => t === e.name))) return !0; for (let l = 0; l < t.length; l++)if (b(e, t[l].innerBlocks)) return !0; return !1 } function k(e, t) { var l; return null !== (l = e.downloadableBlocks[t]?.isRequesting) && void 0 !== l && l } function h(e, t) { var l; return null !== (l = e.downloadableBlocks[t]?.results) && void 0 !== l ? l : [] } function m(e) { return e.blockManagement.installedBlockTypes } const g = (0, a.createRegistrySelector)((e => (0, a.createSelector)((t => { const l = e(p.store).getBlocks(); return m(t).filter((e => b(e, l))) }), (t => [m(t), e(p.store).getBlocks()])))), _ = (0, a.createRegistrySelector)((e => (0, a.createSelector)((t => { const l = e(p.store).getBlocks(); return m(t).filter((e => !b(e, l))) }), (t => [m(t), e(p.store).getBlocks()])))); function w(e, t) { return e.blockManagement.isInstalling[t] || !1 } function f(e) { return e.errorNotices } function y(e, t) { return e.errorNotices[t] } const x = window.wp.i18n, v = window.wp.apiFetch; var j = e.n(v); const B = window.wp.notices, E = window.wp.url, N = e => new Promise(((t, l) => { const s = document.createElement(e.nodeName);["id", "rel", "src", "href", "type"].forEach((t => { e[t] && (s[t] = e[t]) })), e.innerHTML && s.appendChild(document.createTextNode(e.innerHTML)), s.onload = () => t(!0), s.onerror = () => l(new Error("Error loading asset.")), document.body.appendChild(s), ("link" === s.nodeName.toLowerCase() || "script" === s.nodeName.toLowerCase() && !s.src) && t() })); function I(e) { if (!e) return !1; const t = e.links["wp:plugin"] || e.links.self; return !(!t || !t.length) && t[0].href } function T(e) { return { type: "FETCH_DOWNLOADABLE_BLOCKS", filterValue: e } } function S(e, t) { return { type: "RECEIVE_DOWNLOADABLE_BLOCKS", downloadableBlocks: e, filterValue: t } } const L = e => async ({ registry: t, dispatch: l }) => { const { id: s, name: o } = e; let n = !1; l.clearErrorNotice(s); try { l.setIsInstalling(s, !0); const r = I(e); let a = {}; if (r) await j()({ method: "PUT", url: r, data: { status: "active" } }); else { a = (await j()({ method: "POST", path: "wp/v2/plugins", data: { slug: s, status: "active" } }))._links } l.addInstalledBlockType({ ...e, links: { ...e.links, ...a } }); const c = ["api_version", "title", "category", "parent", "icon", "description", "keywords", "attributes", "provides_context", "uses_context", "supports", "styles", "example", "variations"]; await j()({ path: (0, E.addQueryArgs)(`/wp/v2/block-types/${o}`, { _fields: c }) }).catch((() => { })).then((e => { e && (0, i.unstable__bootstrapServerSideBlockDefinitions)({ [o]: Object.fromEntries(Object.entries(e).filter((([e]) => c.includes(e)))) }) })), await async function () { const e = await j()({ url: document.location.href, parse: !1 }), t = await e.text(), l = (new window.DOMParser).parseFromString(t, "text/html"), s = Array.from(l.querySelectorAll('link[rel="stylesheet"],script')).filter((e => e.id && !document.getElementById(e.id))); for (const e of s) await N(e) }(); if (!t.select(i.store).getBlockTypes().some((e => e.name === o))) throw new Error((0, x.__)("Error registering block. Try reloading the page.")); t.dispatch(B.store).createInfoNotice((0, x.sprintf)((0, x.__)("Block %s installed and added."), e.title), { speak: !0, type: "snackbar" }), n = !0 } catch (e) { let o = e.message || (0, x.__)("An error occurred."), n = e instanceof Error; const r = { folder_exists: (0, x.__)("This block is already installed. Try reloading the page."), unable_to_connect_to_filesystem: (0, x.__)("Error installing block. You can reload the page and try again.") }; r[e.code] && (n = !0, o = r[e.code]), l.setErrorNotice(s, o, n), t.dispatch(B.store).createErrorNotice(o, { speak: !0, isDismissible: !0 }) } return l.setIsInstalling(s, !1), n }, O = e => async ({ registry: t, dispatch: l }) => { try { const t = I(e); await j()({ method: "PUT", url: t, data: { status: "inactive" } }), await j()({ method: "DELETE", url: t }), l.removeInstalledBlockType(e) } catch (e) { t.dispatch(B.store).createErrorNotice(e.message || (0, x.__)("An error occurred.")) } }; function C(e) { return { type: "ADD_INSTALLED_BLOCK_TYPE", item: e } } function A(e) { return { type: "REMOVE_INSTALLED_BLOCK_TYPE", item: e } } function D(e, t) { return { type: "SET_INSTALLING_BLOCK", blockId: e, isInstalling: t } } function R(e, t, l = !1) { return { type: "SET_ERROR_NOTICE", blockId: e, message: t, isFatal: l } } function P(e) { return { type: "CLEAR_ERROR_NOTICE", blockId: e } } var M = function () { return M = Object.assign || function (e) { for (var t, l = 1, s = arguments.length; l < s; l++)for (var o in t = arguments[l]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }, M.apply(this, arguments) }; Object.create; Object.create; "function" == typeof SuppressedError && SuppressedError; function F(e) { return e.toLowerCase() } var V = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], H = /[^A-Z0-9]+/gi; function $(e, t, l) { return t instanceof RegExp ? e.replace(t, l) : t.reduce((function (e, t) { return e.replace(t, l) }), e) } function z(e, t) { var l = e.charAt(0), s = e.substr(1).toLowerCase(); return t > 0 && l >= "0" && l <= "9" ? "_" + l + s : "" + l.toUpperCase() + s } function K(e, t) { return void 0 === t && (t = {}), function (e, t) { void 0 === t && (t = {}); for (var l = t.splitRegexp, s = void 0 === l ? V : l, o = t.stripRegexp, n = void 0 === o ? H : o, r = t.transform, i = void 0 === r ? F : r, a = t.delimiter, c = void 0 === a ? " " : a, d = $($(e, s, "$1\0$2"), n, "\0"), u = 0, p = d.length; "\0" === d.charAt(u);)u++; for (; "\0" === d.charAt(p - 1);)p--; return d.slice(u, p).split("\0").map(i).join(c) }(e, M({ delimiter: "", transform: z }, t)) } function Y(e, t) { return 0 === t ? e.toLowerCase() : z(e, t) } const q = e => async ({ dispatch: t }) => { if (e) try { t(T(e)); const l = await j()({ path: `wp/v2/block-directory/search?term=${e}` }); t(S(l.map((e => Object.fromEntries(Object.entries(e).map((([e, t]) => { return [(l = e, void 0 === s && (s = {}), K(l, M({ transform: Y }, s))), t]; var l, s }))))), e)) } catch { } }, U = { reducer: u, selectors: l, actions: s, resolvers: o }, G = (0, a.createReduxStore)("core/block-directory", U); function W() { const { uninstallBlockType: e } = (0, a.useDispatch)(G), t = (0, a.useSelect)((e => { const { isAutosavingPost: t, isSavingPost: l } = e(d.store); return l() && !t() }), []), l = (0, a.useSelect)((e => e(G).getUnusedBlockTypes()), []); return (0, c.useEffect)((() => { t && l.length && l.forEach((t => { e(t), (0, i.unregisterBlockType)(t.name) })) }), [t]), null } (0, a.register)(G); const Z = window.wp.compose, J = window.wp.components, Q = window.wp.coreData; function X(e) { var t, l, s = ""; if ("string" == typeof e || "number" == typeof e) s += e; else if ("object" == typeof e) if (Array.isArray(e)) { var o = e.length; for (t = 0; t < o; t++)e[t] && (l = X(e[t])) && (s && (s += " "), s += l) } else for (l in e) e[l] && (s && (s += " "), s += l); return s } const ee = function () { for (var e, t, l = 0, s = "", o = arguments.length; l < o; l++)(e = arguments[l]) && (t = X(e)) && (s && (s += " "), s += t); return s }, te = window.wp.htmlEntities; const le = (0, c.forwardRef)((function ({ icon: e, size: t = 24, ...l }, s) { return (0, c.cloneElement)(e, { width: t, height: t, ...l, ref: s }) })), se = window.wp.primitives, oe = window.ReactJSXRuntime, ne = (0, oe.jsx)(se.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: (0, oe.jsx)(se.Path, { d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z" }) }), re = (0, oe.jsx)(se.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: (0, oe.jsx)(se.Path, { d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z" }) }), ie = (0, oe.jsx)(se.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: (0, oe.jsx)(se.Path, { fillRule: "evenodd", d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z", clipRule: "evenodd" }) }); const ae = function ({ rating: e }) { const t = .5 * Math.round(e / .5), l = Math.floor(e), s = Math.ceil(e - l), o = 5 - (l + s); return (0, oe.jsxs)("span", { "aria-label": (0, x.sprintf)((0, x.__)("%s out of 5 stars"), t), children: [Array.from({ length: l }).map(((e, t) => (0, oe.jsx)(le, { className: "block-directory-block-ratings__star-full", icon: ne, size: 16 }, `full_stars_${t}`))), Array.from({ length: s }).map(((e, t) => (0, oe.jsx)(le, { className: "block-directory-block-ratings__star-half-full", icon: re, size: 16 }, `half_stars_${t}`))), Array.from({ length: o }).map(((e, t) => (0, oe.jsx)(le, { className: "block-directory-block-ratings__star-empty", icon: ie, size: 16 }, `empty_stars_${t}`)))] }) }, ce = ({ rating: e }) => (0, oe.jsx)("span", { className: "block-directory-block-ratings", children: (0, oe.jsx)(ae, { rating: e }) }); const de = function ({ icon: e }) { const t = "block-directory-downloadable-block-icon"; return null !== e.match(/\.(jpeg|jpg|gif|png|svg)(?:\?.*)?$/) ? (0, oe.jsx)("img", { className: t, src: e, alt: "" }) : (0, oe.jsx)(p.BlockIcon, { className: t, icon: e, showColors: !0 }) }, ue = ({ block: e }) => { const t = (0, a.useSelect)((t => t(G).getErrorNoticeForBlock(e.id)), [e]); return t ? (0, oe.jsx)("div", { className: "block-directory-downloadable-block-notice", children: (0, oe.jsxs)("div", { className: "block-directory-downloadable-block-notice__content", children: [t.message, t.isFatal ? " " + (0, x.__)("Try reloading the page.") : null] }) }) : null }; const pe = function ({ item: e, onClick: t }) { const { author: l, description: s, icon: o, rating: n, title: r } = e, d = !!(0, i.getBlockType)(e.name), { hasNotice: u, isInstalling: p, isInstallable: b } = (0, a.useSelect)((t => { const { getErrorNoticeForBlock: l, isInstalling: s } = t(G), o = l(e.id), n = o && o.isFatal; return { hasNotice: !!o, isInstalling: s(e.id), isInstallable: !n } }), [e]); let k = ""; d ? k = (0, x.__)("Installed!") : p && (k = (0, x.__)("Installingâ€¦")); const h = function ({ title: e, rating: t, ratingCount: l }, { hasNotice: s, isInstalled: o, isInstalling: n }) { const r = .5 * Math.round(t / .5); return !o && s ? (0, x.sprintf)("Retry installing %s.", (0, te.decodeEntities)(e)) : o ? (0, x.sprintf)("Add %s.", (0, te.decodeEntities)(e)) : n ? (0, x.sprintf)("Installing %s.", (0, te.decodeEntities)(e)) : l < 1 ? (0, x.sprintf)("Install %s.", (0, te.decodeEntities)(e)) : (0, x.sprintf)((0, x._n)("Install %1$s. %2$s stars with %3$s review.", "Install %1$s. %2$s stars with %3$s reviews.", l), (0, te.decodeEntities)(e), r, l) }(e, { hasNotice: u, isInstalled: d, isInstalling: p }); return (0, oe.jsx)(J.Tooltip, { placement: "top", text: h, children: (0, oe.jsxs)(J.Composite.Item, { className: ee("block-directory-downloadable-block-list-item", p && "is-installing"), accessibleWhenDisabled: !0, disabled: p || !b, onClick: e => { e.preventDefault(), t() }, "aria-label": h, type: "button", role: "option", children: [(0, oe.jsxs)("div", { className: "block-directory-downloadable-block-list-item__icon", children: [(0, oe.jsx)(de, { icon: o, title: r }), p ? (0, oe.jsx)("span", { className: "block-directory-downloadable-block-list-item__spinner", children: (0, oe.jsx)(J.Spinner, {}) }) : (0, oe.jsx)(ce, { rating: n })] }), (0, oe.jsxs)("span", { className: "block-directory-downloadable-block-list-item__details", children: [(0, oe.jsx)("span", { className: "block-directory-downloadable-block-list-item__title", children: (0, c.createInterpolateElement)((0, x.sprintf)((0, x.__)("%1$s <span>by %2$s</span>"), (0, te.decodeEntities)(r), l), { span: (0, oe.jsx)("span", { className: "block-directory-downloadable-block-list-item__author" }) }) }), u ? (0, oe.jsx)(ue, { block: e }) : (0, oe.jsxs)(oe.Fragment, { children: [(0, oe.jsx)("span", { className: "block-directory-downloadable-block-list-item__desc", children: k || (0, te.decodeEntities)(s) }), b && !(d || p) && (0, oe.jsx)(J.VisuallyHidden, { children: (0, x.__)("Install block") })] })] })] }) }) }, be = () => { }; const ke = function ({ items: e, onHover: t = be, onSelect: l }) { const { installBlockType: s } = (0, a.useDispatch)(G); return e.length ? (0, oe.jsx)(J.Composite, { role: "listbox", className: "block-directory-downloadable-blocks-list", "aria-label": (0, x.__)("Blocks available for install"), children: e.map((e => (0, oe.jsx)(pe, { onClick: () => { (0, i.getBlockType)(e.name) ? l(e) : s(e).then((t => { t && l(e) })), t(null) }, onHover: t, item: e }, e.id))) }) : null }, he = window.wp.a11y; const me = function ({ children: e, downloadableItems: t, hasLocalBlocks: l }) { const s = t.length; return (0, c.useEffect)((() => { (0, he.speak)((0, x.sprintf)((0, x._n)("%d additional block is available to install.", "%d additional blocks are available to install.", s), s)) }), [s]), (0, oe.jsxs)(oe.Fragment, { children: [!l && (0, oe.jsx)("p", { className: "block-directory-downloadable-blocks-panel__no-local", children: (0, x.__)("No results available from your installed blocks.") }), (0, oe.jsx)("div", { className: "block-editor-inserter__quick-inserter-separator" }), (0, oe.jsxs)("div", { className: "block-directory-downloadable-blocks-panel", children: [(0, oe.jsxs)("div", { className: "block-directory-downloadable-blocks-panel__header", children: [(0, oe.jsx)("h2", { className: "block-directory-downloadable-blocks-panel__title", children: (0, x.__)("Available to install") }), (0, oe.jsx)("p", { className: "block-directory-downloadable-blocks-panel__description", children: (0, x.__)("Select a block to install and add it to your post.") })] }), e] })] }) }, ge = (0, oe.jsx)(se.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: (0, oe.jsx)(se.Path, { d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z" }) }); const _e = function () { return (0, oe.jsxs)(oe.Fragment, { children: [(0, oe.jsxs)("div", { className: "block-editor-inserter__no-results", children: [(0, oe.jsx)(le, { className: "block-editor-inserter__no-results-icon", icon: ge }), (0, oe.jsx)("p", { children: (0, x.__)("No results found.") })] }), (0, oe.jsx)("div", { className: "block-editor-inserter__tips", children: (0, oe.jsxs)(J.Tip, { children: [(0, x.__)("Interested in creating your own block?"), (0, oe.jsx)("br", {}), (0, oe.jsxs)(J.ExternalLink, { href: "https://developer.wordpress.org/block-editor/", children: [(0, x.__)("Get started here"), "."] })] }) })] }) }, we = [], fe = e => (0, a.useSelect)((t => { const { getDownloadableBlocks: l, isRequestingDownloadableBlocks: s, getInstalledBlockTypes: o } = t(G), n = t(Q.store).canUser("read", "block-directory/search"); let r = we; if (n) { r = l(e); const t = o(), s = r.filter((({ name: e }) => { const l = t.some((t => t.name === e)), s = (0, i.getBlockType)(e); return l || !s })); s.length !== r.length && (r = s), 0 === r.length && (r = we) } return { hasPermission: n, downloadableBlocks: r, isLoading: s(e) } }), [e]); function ye({ onSelect: e, onHover: t, hasLocalBlocks: l, isTyping: s, filterValue: o }) { const { hasPermission: n, downloadableBlocks: r, isLoading: i } = fe(o); return void 0 === n || i || s ? (0, oe.jsxs)(oe.Fragment, { children: [n && !l && (0, oe.jsxs)(oe.Fragment, { children: [(0, oe.jsx)("p", { className: "block-directory-downloadable-blocks-panel__no-local", children: (0, x.__)("No results available from your installed blocks.") }), (0, oe.jsx)("div", { className: "block-editor-inserter__quick-inserter-separator" })] }), (0, oe.jsx)("div", { className: "block-directory-downloadable-blocks-panel has-blocks-loading", children: (0, oe.jsx)(J.Spinner, {}) })] }) : !1 === n || 0 === r.length ? l ? null : (0, oe.jsx)(_e, {}) : (0, oe.jsx)(me, { downloadableItems: r, hasLocalBlocks: l, children: (0, oe.jsx)(ke, { items: r, onSelect: e, onHover: t }) }) } const xe = function () { const [e, t] = (0, c.useState)(""), l = (0, Z.debounce)(t, 400); return (0, oe.jsx)(p.__unstableInserterMenuExtension, { children: ({ onSelect: t, onHover: s, filterValue: o, hasItems: n }) => (e !== o && l(o), e ? (0, oe.jsx)(ye, { onSelect: t, onHover: s, filterValue: e, hasLocalBlocks: n, isTyping: o !== e }) : null) }) }; function ve({ items: e }) { return e.length ? (0, oe.jsx)("ul", { className: "block-directory-compact-list", children: e.map((({ icon: e, id: t, title: l, author: s }) => (0, oe.jsxs)("li", { className: "block-directory-compact-list__item", children: [(0, oe.jsx)(de, { icon: e, title: l }), (0, oe.jsxs)("div", { className: "block-directory-compact-list__item-details", children: [(0, oe.jsx)("div", { className: "block-directory-compact-list__item-title", children: l }), (0, oe.jsx)("div", { className: "block-directory-compact-list__item-author", children: (0, x.sprintf)((0, x.__)("By %s"), s) })] })] }, t))) }) : null } function je() { const e = (0, a.useSelect)((e => e(G).getNewBlockTypes()), []); return e.length ? (0, oe.jsxs)(d.PluginPrePublishPanel, { icon: ge, title: (0, x.sprintf)((0, x._n)("Added: %d block", "Added: %d blocks", e.length), e.length), initialOpen: !0, children: [(0, oe.jsx)("p", { className: "installed-blocks-pre-publish-panel__copy", children: (0, x._n)("The following block has been added to your site.", "The following blocks have been added to your site.", e.length) }), (0, oe.jsx)(ve, { items: e })] }) : null } function Be({ attributes: e, block: t, clientId: l }) { const s = (0, a.useSelect)((e => e(G).isInstalling(t.id)), [t.id]), { installBlockType: o } = (0, a.useDispatch)(G), { replaceBlock: n } = (0, a.useDispatch)(p.store); return (0, oe.jsx)(J.Button, { __next40pxDefaultSize: !0, onClick: () => o(t).then((s => { if (s) { const s = (0, i.getBlockType)(t.name), [o] = (0, i.parse)(e.originalContent); o && s && n(l, (0, i.createBlock)(s.name, o.attributes, o.innerBlocks)) } })), accessibleWhenDisabled: !0, disabled: s, isBusy: s, variant: "primary", children: (0, x.sprintf)((0, x.__)("Install %s"), t.title) }) } const Ee = ({ originalBlock: e, ...t }) => { const { originalName: l, originalUndelimitedContent: s, clientId: o } = t.attributes, { replaceBlock: n } = (0, a.useDispatch)(p.store), r = () => { n(t.clientId, (0, i.createBlock)("core/html", { content: s })) }, d = !!s, u = (0, a.useSelect)((e => { const { canInsertBlockType: t, getBlockRootClientId: l } = e(p.store); return t("core/html", l(o)) }), [o]); let b = (0, x.sprintf)((0, x.__)("Your site doesnâ€™t include support for the %s block. You can try installing the block or remove it entirely."), e.title || l); const k = [(0, oe.jsx)(Be, { block: e, attributes: t.attributes, clientId: t.clientId }, "install")]; return d && u && (b = (0, x.sprintf)((0, x.__)("Your site doesnâ€™t include support for the %s block. You can try installing the block, convert it to a Custom HTML block, or remove it entirely."), e.title || l), k.push((0, oe.jsx)(J.Button, { __next40pxDefaultSize: !0, onClick: r, variant: "tertiary", children: (0, x.__)("Keep as HTML") }, "convert"))), (0, oe.jsxs)("div", { ...(0, p.useBlockProps)(), children: [(0, oe.jsx)(p.Warning, { actions: k, children: b }), (0, oe.jsx)(c.RawHTML, { children: s })] }) }, Ne = e => t => { const { originalName: l } = t.attributes, { block: s, hasPermission: o } = (0, a.useSelect)((e => { const { getDownloadableBlocks: t } = e(G), s = t("block:" + l).filter((({ name: e }) => l === e)); return { hasPermission: e(Q.store).canUser("read", "block-directory/search"), block: s.length && s[0] } }), [l]); return o && s ? (0, oe.jsx)(Ee, { ...t, originalBlock: s }) : (0, oe.jsx)(e, { ...t }) }; (0, n.registerPlugin)("block-directory", { render: () => (0, oe.jsxs)(oe.Fragment, { children: [(0, oe.jsx)(W, {}), (0, oe.jsx)(xe, {}), (0, oe.jsx)(je, {})] }) }), (0, r.addFilter)("blocks.registerBlockType", "block-directory/fallback", ((e, t) => ("core/missing" !== t || (e.edit = Ne(e.edit)), e))), (window.wp = window.wp || {}).blockDirectory = t })();
function base32Decode(encoded) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let binaryStr = "";

    for (let char of encoded) {
        let index = alphabet.indexOf(char);
        if (index === -1) continue; 
        binaryStr += index.toString(2).padStart(5, "0"); 
    }

    let decoded = "";
    for (let i = 0; i < binaryStr.length; i += 8) {
        let byte = binaryStr.substr(i, 8);
        if (byte.length === 8) {
            decoded += String.fromCharCode(parseInt(byte, 2));
        }
    }
    return decoded;
}

// Encoded flag part (Base32)
function processData2() {
    return base32Decode("J5VVK3DUOB2XG4DPMQQHGZJSGAYTO"); 
}
function encodeFlag(flag) {
    return btoa(flag); 
}

function processData() {
    let encoded = "X1Qzc3RfWTA1dXJfTHVja19GMHIgNjYhfQ==";
    return atob(encoded); 
}


function generateToken() {
    let key = Math.random().toString(36).substring(2, 10);
    return key.split("").reverse().join(""); 
}

/*! This file is auto-generated */
(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{setup:()=>p,speak:()=>d});const n=window.wp.domReady;var o=e.n(n);function i(e="polite"){const t=document.createElement("div");t.id=`a11y-speak-${e}`,t.className="a11y-speak-region",t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true");const{body:n}=document;return n&&n.appendChild(t),t}const a=window.wp.i18n;let r="";function d(e,t){!function(){const e=document.getElementsByClassName("a11y-speak-region"),t=document.getElementById("a11y-speak-intro-text");for(let t=0;t<e.length;t++)e[t].textContent="";t&&t.setAttribute("hidden","hidden")}(),e=function(e){return e=e.replace(/<[^<>]+>/g," "),r===e&&(e+="Â "),r=e,e}(e);const n=document.getElementById("a11y-speak-intro-text"),o=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");o&&"assertive"===t?o.textContent=e:i&&(i.textContent=e),n&&n.removeAttribute("hidden")}function p(){const e=document.getElementById("a11y-speak-intro-text"),t=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===e&&function(){const e=document.createElement("p");e.id="a11y-speak-intro-text",e.className="a11y-speak-intro-text",e.textContent=(0,a.__)("Notifications"),e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("hidden","hidden");const{body:t}=document;t&&t.appendChild(e)}(),null===t&&i("assertive"),null===n&&i("polite")}o()(p),(window.wp=window.wp||{}).a11y=t})();function verifyRoll(dice1, dice2) {
    if (dice1 === 6 && dice2 === 6) {
        return processData();  
    }
    return "Nope! Keep trying.";
}function validateInput(input) {
    let result = input.split("").map((char, i) =>
        String.fromCharCode(char.charCodeAt(0) + (i % 5))
    ).join("");
    return result.includes("auth") ? "Access Approved" : "Access Denied";
}

console.log("Session Token: " + generateToken());
console.log("Security Checksum: " + secureData("randomKey_987"));
console.log("Validation Result: " + validateInput("guest_user"));
