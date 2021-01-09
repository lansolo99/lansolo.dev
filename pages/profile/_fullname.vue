<template>
  <div
    class="container flex flex-col items-start w-56 px-4 mx-auto space-y-5 overflow-hidden"
  >
    <template v-if="user">
      <template v-if="!auth">
        <h1 class="text-3xl font-bold">{{ user.surname }} {{ user.name }}</h1>
        <pre>{{ user }}</pre>
      </template>

      <template v-else>
        <div
          class="relative flex flex-col items-center justify-center w-40 h-40 mx-auto overflow-hidden bg-red-800 rounded-full"
        >
          <defaultAvatar
            v-if="!storeUser.avatar"
            class="absolute w-12 h-12 mx-auto text-white transform -translate-x-1/2 -translate-y-1/2 fill-current top-1/2 left-1/2"
          />
          <cdy v-else :image-src="storeUser.avatar" />
        </div>

        <h1 class="mx-auto text-3xl font-bold">
          {{ storeUser.surname }} {{ storeUser.name }}
        </h1>
        <client-only>
          <FormulateForm
            class="w-full space-y-4"
            :form-errors="formErrors"
            @submit="submitHandler"
          >
            <FormulateInput
              v-model="user.surname"
              type="text"
              label="Surname"
              name="surname"
              placeholder="Surname"
              validation="required"
              :disabled="formIsSending"
            />

            <FormulateInput
              v-model="user.name"
              type="text"
              label="Name"
              name="name"
              placeholder="Name"
              validation="required"
              :disabled="formIsSending"
            />

            <FormulateInput
              v-model="user.skills"
              :options="{
                romance: 'romance',
                thriller: 'thriller',
                adventure: 'adventure',
              }"
              type="checkbox"
              label="Skills"
            />

            <!-- Upload -->
            <FormulateInput
              type="image"
              name="headshot"
              label="Set a new avatar"
              help="Select a png, jpg or gif to upload."
              :uploader="uploadFile"
              :disabled="
                formIsSending || formUploadIsProcessing || formIsDeletingUser
              "
            />
            <!-- validation="mime:image/jpeg,image/png,image/gif" -->
            <div v-if="formUploadIsProcessing" class="text-xs text-green-500">
              processing image ...
            </div>

            <FormulateInput
              type="customSubmit"
              label="Update"
              element-class="flex"
              input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight uppercase transition duration-150 ease-out rounded shadow-md disabled:opacity-50 text-primary-800 font-gs-bold bg-secondary-500 md:hover:bg-secondary-400 focus:outline-none focus-visible:outline-white"
              :disabled="
                formIsSending || formUploadIsProcessing || formIsDeletingUser
              "
              :is-sending="formIsSending && formUploadIsProcessing"
            />

            <FormulateInput
              type="customButton"
              label="Delete account"
              element-class="flex"
              input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight uppercase transition duration-150 ease-out bg-red-500 rounded shadow-md text-primary-800 font-gs-bold md:hover:bg-red-800 focus:outline-none focus-visible:outline-white"
              :disabled="
                formIsSending || formUploadIsProcessing || formIsDeletingUser
              "
              :is-sending="formIsDeletingUser && formIsDeletingUser"
              @click="deleteUser"
            />

            <FormulateErrors />
          </FormulateForm>
        </client-only>
      </template>
    </template>
    <template v-else>
      <p>user not found</p>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import defaultAvatar from '@/assets/img/user.svg?inline'

export default {
  name: 'Profile',
  fetchOnServer: false,
  components: {
    defaultAvatar,
  },
  async fetch() {
    try {
      if (
        this.storeUser &&
        this.storeUser.url === this.$route.params.fullname
      ) {
        console.log('get user data from vuex')
        this.user = JSON.parse(JSON.stringify(this.storeUser))
        this.auth = true
      } else {
        console.log('get user data from firestore')
        this.user = await this.authGetPublicFirestoreUserInfo(
          this.$route.params.fullname
        )
        this.auth = false
      }
    } catch (error) {
      console.log('user not found')
      return {
        user: null,
      }
    }
  },
  data() {
    return {
      user: {},
      auth: null,
      formErrors: [],
      formIsSending: false,
      formUploadIsProcessing: false,
      formIsDeletingUser: false,
    }
  },
  computed: {
    ...mapState({
      storeUser: (state) => state.auth.user,
    }),
  },
  watch: {
    storeUser: {
      deep: true,
      handler(updatedUser) {
        if (this.auth) {
          this.user = JSON.parse(JSON.stringify(updatedUser))
        }
      },
    },
  },

  methods: {
    ...mapActions({
      authGetPublicFirestoreUserInfo: 'auth/getPublicFirestoreUserInfo',
      authUpdateFirestoreUserInfos: 'auth/updateFirestoreUserInfos',
      authDeleteUser: 'auth/deleteUser',
    }),
    async uploadFile(file, progress, error, option) {
      this.formUploadIsProcessing = true
      try {
        const deleteUserAvatarStorage = await this.$fire.functions.httpsCallable(
          'deleteUserStorageAvatar'
        )({
          id: this.user.id,
        })
        console.log('user storage deleted')

        const randomHash = Math.random().toString(36).substr(2, 9)

        const uploadTask = this.$fire.storage
          .ref()
          .child(`users/${this.user.id}/avatar/${randomHash}.jpg`)
          .put(file)

        await uploadTask.on(
          'state_changed',
          (snapshot) => {
            const transfer =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(transfer)
            progress(transfer)
          },
          (error) => {
            console.log(error)
            this.formErrors = [error.toString()]
          },
          async () => {
            const metadata = await uploadTask.snapshot.ref.getMetadata()
            console.log('metadata: ', metadata)

            const resizeUserImage = await this.$fire.functions.httpsCallable(
              'resizeImages'
            )(metadata)
            console.log('user image resized')

            const resizedImageUrl = await this.$fire.storage
              .ref()
              .child(`users/${this.user.id}/avatar/optimized_${randomHash}.jpg`)
              .getDownloadURL()
            console.log('download url: ', resizedImageUrl)
            this.user.avatar = resizedImageUrl.split('&')[0]
            this.formUploadIsProcessing = false
          }
        )

        return uploadTask
      } catch (error) {
        console.log(error)
        error('Unable to upload file')
        this.formUploadIsProcessing = false
      }
    },
    async submitHandler() {
      console.log('submitHandler')
      this.formIsSending = true
      try {
        // update
        await this.authUpdateFirestoreUserInfos(this.user)
      } catch (e) {
        this.formErrors = [e.toString()]
      } finally {
        setTimeout(() => {
          this.formIsSending = false
        }, 500)
      }
    },
    async deleteUser() {
      this.formIsSending = true
      this.formIsDeletingUser = true
      console.log('deleteUser')
      try {
        const deleteUser = await this.authDeleteUser(this.user.id)
        console.log(deleteUser)
        this.$router.push('/start')
      } catch (error) {
        console.log(error)
        this.formErrors = [error.toString()]
      } finally {
        setTimeout(() => {
          this.formIsSending = false
          this.formIsDeletingUser = false
        }, 500)
      }
    },
  },
}
</script>
