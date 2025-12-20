import { createElementBlock, defineComponent, openBlock, renderSlot } from "vue";
var _hoisted_1 = ["type"], BaseButton_default = /* @__PURE__ */ ((e, n) => {
	let r = e.__vccOpts || e;
	for (let [e, i] of n) r[e] = i;
	return r;
})(/* @__PURE__ */ defineComponent({
	__name: "BaseButton",
	props: { type: {} },
	setup(n) {
		return (a, o) => (openBlock(), createElementBlock("button", { type: n.type || "button" }, [renderSlot(a.$slots, "default", {}, void 0, !0)], 8, _hoisted_1));
	}
}), [["__scopeId", "data-v-af9ba9b9"]]);
export { BaseButton_default as BaseButton };
