<template>
  <div class="">
    <TheHeader />

    <Nuxt class="pt-12" />

    <VCursor
      v-if="isCustomCursorVisible && !isMobileDevice"
      class="hidden lg:block"
    />
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
