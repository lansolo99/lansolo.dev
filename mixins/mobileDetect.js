export default {
  computed: {
    isMobileDevice() {
      if (navigator) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      } else {
        return null
      }
    },
  },
}
