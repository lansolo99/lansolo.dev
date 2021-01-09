<template>
  <div>test</div>
</template>

<script>
export default {
  name: 'Test',
  fetchOnServer: false,
  async fetch() {
    try {
      const usersRef = this.$fire.firestore.collection('users')
      console.log('usersRef: ', usersRef)
      const snapshot = await usersRef.get()
      console.log('snapshot: ', snapshot)

      const usersDoc = snapshot.docs.map((doc) => {
        return doc.data()
      })

      this.users = usersDoc
    } catch (error) {
      console.log('error')
      console.log(error)
    }
  },
  data() {
    return {
      users: [],
    }
  },
}
</script>

<style lang="scss" scoped></style>
