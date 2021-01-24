<template>
  <div class="">
    <TheHeader />

    <Nuxt class="pt-12" />

    <VCursor
      v-if="isCustomCursorVisible && !isMobileDevice"
      class="hidden lg:block"
    />

    <!-- Cursor Preload -->
    <img class="hidden" src="/img/global/cursor-clock.svg" />
    <img class="hidden" src="/img/global/hand.svg" />
  </div>
</template>

<script>
import mobileDetect from '@/mixins/mobileDetect.js'
import { mapState } from 'vuex'

export default {
  name: 'Default',
  mixins: [mobileDetect],
  computed: {
    ...mapState(['isCustomCursorVisible']),
  },
}
</script>
