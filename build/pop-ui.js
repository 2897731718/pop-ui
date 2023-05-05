import { defineComponent as l, toRefs as u, createVNode as s } from "vue";
const d = {
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
  props: d,
  setup(t, {
    slots: e
  }) {
    const {
      type: i,
      size: f,
      disabled: o,
      block: c,
      attrType: y
    } = u(t);
    return () => {
      const a = e.default ? e.default() : "按钮";
      return s("button", {
        disabled: o.value
      }, [a]);
    };
  }
}), r = {
  install(t) {
    t.component(n.name, n);
  }
}, p = [r], m = {
  install(t) {
    p.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  m as default
};
