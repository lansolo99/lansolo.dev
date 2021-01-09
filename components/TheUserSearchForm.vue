<template>
  <div class="relative">
    <FormulateForm @submit="performSearchQuery">
      <FormulateInput
        type="search"
        name="search"
        input-class="text-black bg-white"
        placeholder="Search for people"
      />
    </FormulateForm>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'TheUserSearchForm',
  methods: {
    ...mapActions({
      usersSetUsersList: 'users/setUsersList',
    }),
    ...mapMutations({
      usersSetUsersLoading: 'users/SET_USERS_LOADING',
    }),
    async performSearchQuery({ search }) {
      this.$router.push('/')
      try {
        this.usersSetUsersLoading(true)

        const searchPayload = {
          search,
          options: {
            hitsPerPage: 5,
          },
        }

        const setUsersList = await this.usersSetUsersList(searchPayload)

        this.usersSetUsersLoading(false)
        console.log(setUsersList)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
