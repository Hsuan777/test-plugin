import { createElementBlock, defineComponent, normalizeClass, openBlock, renderSlot } from "vue";
var _hoisted_1 = ["type"], BaseButton_default = /* @__PURE__ */ ((e, r) => {
	let i = e.__vccOpts || e;
	for (let [e, a] of r) i[e] = a;
	return i;
})(/* @__PURE__ */ defineComponent({
	__name: "BaseButton",
	props: {
		type: {},
		variant: {}
	},
	setup(r) {
		return (o, s) => (openBlock(), createElementBlock("button", {
			type: r.type || "button",
			class: normalizeClass(`btn-${r.variant || "primary"}`)
		}, [renderSlot(o.$slots, "default", {}, void 0, !0)], 10, _hoisted_1));
	}
}), [["__scopeId", "data-v-79e8b961"]]);
export { BaseButton_default as BaseButton };
