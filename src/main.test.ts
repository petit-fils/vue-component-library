import { test, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MyButton from './MyButton.vue'

test("test", () => {
  expect(MyButton).toBeTruthy()

  const wrapper = mount(MyButton, {
    props: {
      seafood: 'button',
    },
  })

  expect(wrapper.text()).toContain('button')
});
