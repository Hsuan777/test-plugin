import { createElementBlock, defineComponent, openBlock, renderSlot } from "vue";
var _hoisted_1 = ["type"], BaseButton_default = /* @__PURE__ */ defineComponent({
	__name: "BaseButton",
	props: { type: {} },
	setup(i) {
		return (a, o) => (openBlock(), createElementBlock("button", { type: i.type || "button" }, [renderSlot(a.$slots, "default")], 8, _hoisted_1));
	}
});
export { BaseButton_default as BaseButton };
