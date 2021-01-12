export default {
  computed: {
    postFormattedDate() {
      return this.$dateFns.format(new Date(this.date), 'MM/dd/yyyy')
    },
  },
}
