<template>
  <div
    v-if="state && state.searchMetadata.isSearchStalled"
    class="absolute flex items-center justify-center my-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  >
    <div class="relative mt-1 transform scale-50 loader-inner ball-pulse">
      <div
        v-for="(div, i) in 3"
        :key="i"
        :style="{
          backgroundColor: `${theme.colors.red['700']}`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { createWidgetMixin } from 'vue-instantsearch'
import { theme } from '~tailwind.config'

const connectSearchMetaData = (renderFn, unmountFn) => (widgetParams = {}) => ({
  init() {
    renderFn({ searchMetadata: {} }, true)
  },

  render({ searchMetadata }) {
    renderFn({ searchMetadata }, false)
  },

  dispose() {
    unmountFn()
  },
})

export default {
  name: 'LoadingIndicator',
  mixins: [createWidgetMixin({ connector: connectSearchMetaData })],
  data() {
    return {
      theme,
      isLoading: true,
    }
  },
}
</script>
