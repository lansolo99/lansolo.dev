export const state = () => ({
  navLinks: [
    {
      to: '/',
      label: 'Blog',
      type: 'internal',
    },
    {
      to: 'https://lansolo99.netlify.app',
      label: 'Projects',
      type: 'external',
    },
    {
      to: '/about',
      label: 'About',
      type: 'internal',
    },
  ],
  selectedTags: [],
})

export const mutations = {
  SET_SELECTED_TAGS(state, payload) {
    state.selectedTags = payload
  },
}
