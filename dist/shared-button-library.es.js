import { createElementBlock, defineComponent, normalizeClass, openBlock, renderSlot } from "vue";
var BaseButton_default = /* @__PURE__ */ ((e, n) => {
	let r = e.__vccOpts || e;
	for (let [e, i] of n) r[e] = i;
	return r;
})(/* @__PURE__ */ defineComponent({
	__name: "BaseButton",
	props: { type: {
		type: String,
		default: "primary"
	} },
	emits: ["click"],
	setup(n, { emit: a }) {
		let o = a;
		function s(e) {
			o("click", e);
		}
		return (a, o) => (openBlock(), createElementBlock("button", {
			class: normalizeClass(["base-button", n.type]),
			onClick: s
		}, [renderSlot(a.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d3bc932b"]]);
export { BaseButton_default as BaseButton };
