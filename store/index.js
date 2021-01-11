export const state = () => ({
  navLinks: [
    {
      to: '/',
      label: 'Blog',
    },
    {
      to: 'https://lansolo99.netlify.app',
      label: 'Projects',
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
