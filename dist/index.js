import { createElementBlock, createElementVNode, openBlock, renderSlot } from "vue";
var __plugin_vue_export_helper_default = (e, c) => {
	let l = e.__vccOpts || e;
	for (let [e, u] of c) l[e] = u;
	return l;
}, _sfc_main$1 = {}, _hoisted_1$1 = { type: "button" };
function _sfc_render$1(c, d) {
	return openBlock(), createElementBlock("button", _hoisted_1$1, [renderSlot(c.$slots, "default")]);
}
var BaseButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1]]), _sfc_main = {}, _hoisted_1 = { class: "form" };
function _sfc_render(d, f) {
	return openBlock(), createElementBlock("div", null, [createElementVNode("form", _hoisted_1, [renderSlot(d.$slots, "default", {}, void 0, !0)])]);
}
var BaseForm_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-27b1c853"]]);
export { BaseButton_default as BaseButton, BaseForm_default as BaseForm };
