import { createElementBlock, createElementVNode, defineComponent, openBlock, ref, toDisplayString, watch } from "vue";
var _hoisted_1 = ["value", "type"], BaseInput_default = /* @__PURE__ */ defineComponent({
	__name: "BaseInput",
	props: {
		value: { default: "" },
		type: { default: "text" }
	},
	setup(o) {
		let c = ref(""), l = o, u = (e) => {
			c.value = e.target.value;
		};
		return watch(() => l.value, (e) => {
			console.log(e), c.value = e || "";
		}, { immediate: !0 }), (o, s) => (openBlock(), createElementBlock("div", null, [createElementVNode("input", {
			value: c.value,
			type: l.type,
			onInput: u
		}, null, 40, _hoisted_1), createElementVNode("p", null, toDisplayString(c.value), 1)]));
	}
});
export { BaseInput_default as BaseInput };
