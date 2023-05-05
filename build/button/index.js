import { defineComponent as l, toRefs as d, createVNode as u } from "vue";
const p = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  tag: {
    type: String,
    default: "button"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  attrType: {
    type: String,
    default: "button"
  },
  // just for jsx
  onClick: {
    type: [Function, Array]
  }
}, n = /* @__PURE__ */ l({
  name: "SButton",
  props: p,
  setup(t, {
    slots: e
  }) {
    const {
      type: r,
      size: s,
      disabled: o,
      block: f,
      attrType: i
    } = d(t);
    return () => {
      const a = e.default ? e.default() : "按钮";
      return u("button", {
        disabled: o.value
      }, [a]);
    };
  }
}), c = {
  install(t) {
    t.component(n.name, n);
  }
};
export {
  n as Button,
  c as default
};
