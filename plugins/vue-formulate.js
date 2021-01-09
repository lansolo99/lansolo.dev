import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { fr } from '@braid/vue-formulate-i18n'

import TheFormCustomPassword from '@/components/TheFormCustomPassword.vue'
import TheFormCustomButton from '@/components/TheFormCustomButton.vue'
Vue.component('TheFormCustomPassword', TheFormCustomPassword)
Vue.component('TheFormCustomButton', TheFormCustomButton)

Vue.use(VueFormulate, {
  library: {
    customPassword: {
      classification: 'text',
      component: 'TheFormCustomPassword',
    },
    customButton: {
      classification: 'button',
      component: 'TheFormCustomButton',
    },
    customSubmit: {
      classification: 'button',
      component: 'TheFormCustomButton',
    },
  },
})
