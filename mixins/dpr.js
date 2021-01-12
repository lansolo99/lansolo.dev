/* eslint-disable camelcase */
import { device_pixel_ratio } from 'javascript-retina-detect'
export default {
  data() {
    return {
      exactDPR: device_pixel_ratio(),
    }
  },
  computed: {
    dpr() {
      return Math.floor(this.exactDPR)
    },
  },
}
