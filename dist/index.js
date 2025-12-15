import { computed, createElementBlock, defineComponent, normalizeClass, openBlock, renderSlot } from "vue";
var BaseButton_default = /* @__PURE__ */ ((e, r) => {
	let i = e.__vccOpts || e;
	for (let [e, a] of r) i[e] = a;
	return i;
})(/* @__PURE__ */ defineComponent({
	__name: "BaseButton",
	props: {
		type: { default: "primary" },
		click: {
			type: Function,
			default: () => {}
		}
	},
	setup(i) {
		let o = i, s = computed(() => ({
			btn: !0,
			primary: o.type === "primary",
			secondary: o.type === "secondary"
		}));
		return (e, i) => (openBlock(), createElementBlock("button", {
			class: normalizeClass(["base-button", s.value]),
			onClick: i[0] ||= (...e) => o.click && o.click(...e)
		}, [renderSlot(e.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-66b5dcab"]]);
export { BaseButton_default as BaseButton };
