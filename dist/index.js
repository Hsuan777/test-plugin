import { createElementBlock, createElementVNode, defineComponent, normalizeClass, openBlock, ref, renderSlot, toDisplayString, watch } from "vue";
var _hoisted_1$1 = ["type"], BaseButton_default = /* @__PURE__ */ ((e, s) => {
	let c = e.__vccOpts || e;
	for (let [e, l] of s) c[e] = l;
	return c;
})(/* @__PURE__ */ defineComponent({
	__name: "BaseButton",
	props: {
		type: {},
		variant: {}
	},
	setup(s) {
		return (c, u) => (openBlock(), createElementBlock("button", {
			type: s.type || "button",
			class: normalizeClass(`btn-${s.variant || "primary"}`)
		}, [renderSlot(c.$slots, "default", {}, void 0, !0)], 10, _hoisted_1$1));
	}
}), [["__scopeId", "data-v-79e8b961"]]), _hoisted_1 = ["value", "type"], BaseInput_default = /* @__PURE__ */ defineComponent({
	__name: "BaseInput",
	props: {
		value: { default: "" },
		type: { default: "text" }
	},
	setup(c) {
		let l = ref(""), d = c, f = (e) => {
			l.value = e.target.value;
		};
		return watch(() => d.value, (e) => {
			console.log(e), l.value = e || "";
		}, { immediate: !0 }), (c, u) => (openBlock(), createElementBlock("div", null, [createElementVNode("input", {
			class: "border",
			value: l.value,
			type: d.type,
			onInput: f
		}, null, 40, _hoisted_1), createElementVNode("p", null, toDisplayString(l.value), 1)]));
	}
});
export { BaseButton_default as BaseButton, BaseInput_default as BaseInput };
