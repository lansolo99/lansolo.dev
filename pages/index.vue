<template>
  <div class="container relative px-4 mx-auto overflow-hidden">
    <client-only>
      <ais-instant-search
        :search-client="searchClient"
        :index-name="indexName"
        :stalled-search-delay="10"
      >
        <ais-configure
          :query="usersQuery.query"
          :hits-per-page.camel="usersQuery.hitsPerPage"
        />

        <LoadingIndicator />

        <ais-state-results>
          <!-- eslint-disable vue/no-unused-vars -->
          <div
            v-if="hits.length"
            slot-scope="{ state: { query }, results: { hits } }"
            class="space-y-6"
          >
            <ais-stats>
              <p slot-scope="{ nbHits }">
                {{ nbHits }} result<template v-if="nbHits !== 1">s</template>
              </p>
            </ais-stats>

            <!-- Filters -->
            <div class="p-4 space-y-4 bg-gray-200">
              <h2 class="text-2xl font-bold">Filters</h2>

              <div class="text-lg">
                <h3>Skills</h3>
                <ais-menu attribute="skills">
                  <ul
                    slot-scope="{ items, refine, createURL }"
                    class="flex space-x-6"
                  >
                    <li v-for="item in items" :key="item.value">
                      <a
                        :href="createURL(item.value)"
                        :style="{ fontWeight: item.isRefined ? 'bold' : '' }"
                        @click.prevent="refine(item.value)"
                      >
                        {{ item.label }}: {{ item.count }}
                      </a>
                    </li>
                  </ul>
                </ais-menu>
              </div>

              <ais-clear-refinements />
            </div>

            <ais-hits>
              <ul
                slot-scope="{ items }"
                class="grid gap-4 grid-col-1 md:grid-cols-3"
              >
                <li
                  v-for="item in items"
                  :key="item.objectID"
                  class="overflow-hidden bg-white rounded-lg shadow-lg"
                >
                  <nuxt-link :to="`/profile/${item.url}`">
                    <div
                      class="relative flex flex-col items-center justify-center w-full h-56 overflow-hidden bg-red-500 img"
                    >
                      <defaultAvatar
                        v-if="!item.avatar"
                        class="absolute w-12 h-12 mx-auto text-white transform -translate-x-1/2 -translate-y-1/2 fill-current top-1/2 left-1/2"
                      />
                      <cdy v-else :image-src="item.avatar" />
                    </div>

                    <div class="p-4">
                      <h2 class="text-xl font-bold">
                        {{ item.surname }} {{ item.name }}
                      </h2>
                      <p class="text-sm italic">{{ item.email }}</p>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </ais-hits>

            <TheUserSearchPagination />
          </div>

          <div v-else>No results found</div>
        </ais-state-results>
      </ais-instant-search>
    </client-only>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components  */
import defaultAvatar from '@/assets/img/user.svg?inline'
import { mapGetters, mapActions } from 'vuex'

import algoliasearch from 'algoliasearch/lite'
import { AisInstantSearch } from 'vue-instantsearch'
import 'instantsearch.css/themes/algolia-min.css'

export default {
  name: 'Home',
  components: {
    defaultAvatar,
    AisInstantSearch,
  },

  data() {
    return {
      searchClient: algoliasearch(
        this.$config.algoliaAppId,
        this.$config.algoliaSearchApiKey
      ),
      indexName: 'users',
    }
  },
  computed: {
    ...mapGetters({
      usersQuery: 'users/usersQuery',
      usersList: 'users/usersList',
      usersNbHits: 'users/usersNbHits',
      usersLoading: 'users/usersLoading',
    }),
  },
  mounted() {
    this.usersSetUsersList({ search: '' })
  },
  methods: {
    ...mapActions({
      usersSetUsersList: 'users/setUsersList',
    }),
  },
}
</script>

<style lang="postcss">
.img {
  img {
    @apply w-full h-full object-cover;
  }
}
</style>
