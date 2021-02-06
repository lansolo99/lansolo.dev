export default {
  data() {
    return {
      isModalOpen: false,
    }
  },
  methods: {
    openModal() {
      console.log('openModal')
      this.isModalOpen = true
    },
  },
}
