
import { shallowMount } from '@vue/test-utils'
import AddButton from './AddButton.vue'

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const wrapper = shallowMount(AddButton)
    expect(wrapper).not.toBeUndefined()
  })

  // it('matches snapshot', () => {
  //   const items = ['item 1', 'item 2']
  //   const wrapper = shallowMount(AddButton, {
  //     propsData: { items }
  //   })
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
