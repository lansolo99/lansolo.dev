export const state = () => ({
  navLinks: [
    {
      to: '/',
      label: 'Whats new',
    },
    {
      to: '/about',
      label: 'About',
    },
  ],
  selectedTags: [],
})

export const mutations = {
  SET_SELECTED_TAGS(state, payload) {
    state.selectedTags = payload
  },
}
