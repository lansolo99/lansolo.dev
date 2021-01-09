export const state = () => ({
  algoliaClient: null,
})

export const actions = {
  async nuxtServerInit({ dispatch }, { res }) {
    await dispatch('setAlgoliaClient', {
      appId: process.env.ALGOLIA_APPLICATION_ID,
      searchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    })

    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user
      await dispatch('auth/setCurrentUser', {
        authUser,
        claims,
      })
    }
  },
  async setAlgoliaClient({ commit }, payload) {
    await commit('SET_ALGOLIA_ENV', payload)
  },
}

export const mutations = {
  SET_ALGOLIA_ENV(state, algoliaClient) {
    state.algoliaClient = algoliaClient
  },
}
