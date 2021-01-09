<template>
  <nav
    class="fixed z-50 flex items-center justify-between w-full h-16 p-4 mt-0 text-white bg-red-700 shadow"
  >
    <!-- Links -->
    <div class="space-x-4">
      <nuxt-link to="/">home</nuxt-link>
      <button class="cursor-pointer" @click="$emit('show-side-panel')">
        side drawer
      </button>
    </div>

    <!-- Search -->
    <TheUserSearchForm />

    <!-- Actions -->
    <client-only>
      <div v-if="user && user.url" class="relative hidden md:block">
        <!-- Dropdown wrapper -->
        <div
          id="dropdownWrapper"
          class="relative cursor-pointer"
          @click="isProfileMenuOpen = !isProfileMenuOpen"
        >
          <!-- Avatar -->
          <div
            id="avatar"
            class="relative flex flex-col items-center justify-center w-8 h-8 mx-auto overflow-hidden bg-red-800 rounded-full"
          >
            <defaultAvatar
              v-if="!user.avatar"
              class="absolute w-4 h-4 mx-auto text-white transform -translate-x-1/2 -translate-y-1/2 fill-current top-1/2 left-1/2"
            />
            <cdy v-else :image-src="user.avatar" />
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div
              v-if="isProfileMenuOpen"
              id="dropdownMenu"
              v-click-outside="hideDropdown"
              class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <nuxt-link
                  :to="`/profile/${user.url}`"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Profile
                </nuxt-link>

                <button
                  class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  @click="signOutUser"
                >
                  Log out
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div v-else class="flex items-center space-x-4">
        <nuxt-link to="/login/signin">Sign In</nuxt-link>
        <nuxt-link to="/login/signup">Sign Up</nuxt-link>
      </div>
    </client-only>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import defaultAvatar from '@/assets/img/user.svg?inline'
import vClickOutside from 'v-click-outside'

export default {
  name: 'TheNavigationBar',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    defaultAvatar,
  },
  fetchOnServer: false,
  data() {
    return {
      isProfileMenuOpen: false,
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
  methods: {
    ...mapActions({
      authSignOutUser: 'auth/signOutUser',
    }),
    async signOutUser() {
      try {
        const auth = await this.authSignOutUser()
        this.$router.push('/')
        console.log('auth: ', auth)
      } catch (error) {
        console.log(error)
      }
    },
    hideDropdown() {
      console.log('hideDropdown')
      this.isProfileMenuOpen = false
    },
  },
}
</script>
