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
  isCustomCursorVisible: false,
  currentPostsCounter: null,
})

export const mutations = {
  SET_SELECTED_TAGS(state, payload) {
    state.selectedTags = payload
  },
  SET_CUSTOM_CURSOR_STATE(state, payload) {
    state.isCustomCursorVisible = payload
  },
  SET_CURRENT_POSTS_COUNTER(state, payload) {
    state.currentPostsCounter = payload
  },
}
