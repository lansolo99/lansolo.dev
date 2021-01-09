import Vue from 'vue'
import algoliasearch from 'algoliasearch/lite'

export const state = () => ({
  query: {},
  usersLoading: false,
  algoliaClient: null,
})

export const getters = {
  usersQuery(state) {
    return state.query
  },
  usersList(state) {
    return state.query.hits || []
  },
  usersNbHits(state) {
    return state.query.nbHits || null
  },
  usersLoading(state) {
    return state.usersLoading
  },
}

export const actions = {
  async setUsersList({ commit, rootState }, payload) {
    const searchClient = algoliasearch(
      rootState.algoliaClient.appId,
      rootState.algoliaClient.searchApiKey
    )

    const index = searchClient.initIndex('users')

    try {
      await console.log(payload)
      const query = await index.search(payload.search, payload.options)

      commit('SET_QUERY', query)
      return 'usersList updated'
    } catch (error) {
      throw error
    }
  },
}

export const mutations = {
  SET_ALGOLIA_ENV(state, algoliaClient) {
    console.log('SET_ALGOLIA_ENV mut')
    state.algoliaClient = algoliaClient
  },
  SET_USERS_LOADING(state, status) {
    state.usersLoading = status
  },
  SET_QUERY(state, query) {
    Vue.set(state, 'query', query)
  },
}
