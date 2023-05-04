import { computed, defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block, attrType } = toRefs(props)

    return () => {
      const { tag: Component, loading } = props
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button
          disabled={disabled.value}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})