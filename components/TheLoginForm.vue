<template>
  <div>
    <client-only>
      <FormulateForm
        v-if="!formIsSubmittedWithSuccess"
        class="space-y-4"
        :form-errors="formErrors"
        @submit="submitHandler"
      >
        <h1 class="text-xl font-bold">
          {{ setFormConfiguration.title }}
        </h1>

        <p v-if="$route.name === 'login-password-reset'" class="text-sm">
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password. For security reasons, we do NOT
          store your password. So rest assured that we will never send your
          password via email.
        </p>

        <div
          v-if="
            signInMethod === 'email' || setFormConfiguration.title === 'Sign In'
          "
        >
          <FormulateInput
            v-if="$route.fullPath === '/login/signup'"
            v-model="formData.surname"
            type="text"
            label="Surname"
            name="surname"
            placeholder="Surname"
            validation="required"
            :disabled="formIsSending"
          />
          <!-- v-if="$route.name === 'login-signup'" -->

          <FormulateInput
            v-if="$route.fullPath === '/login/signup'"
            v-model="formData.name"
            type="text"
            label="Name"
            name="name"
            placeholder="Name"
            validation="required"
            :disabled="formIsSending"
          />
          <!-- v-if="$route.name === 'login-signup'" -->

          <FormulateInput
            v-model="formData.email"
            type="email"
            label="email"
            name="email"
            placeholder="Email"
            validation="email"
            :disabled="formIsSending"
          />

          <FormulateInput
            v-if="$route.name !== 'login-password-reset'"
            v-model="formData.password"
            type="customPassword"
            :name="
              $route.name === 'login-signUp'
                ? 'new-password'
                : 'current-password'
            "
            label="Mot de passe"
            placeholder="Mot de passe"
            autocomplete="on"
            validation="bail|required"
            :disabled="formIsSending"
          />

          <nuxt-link
            v-if="$route.name !== 'login-password-reset'"
            class="text-blue-500"
            to="/login/password-reset"
            >Forgot password?</nuxt-link
          >

          <FormulateInput
            type="customSubmit"
            :label="`Email ${setFormConfiguration.title}`"
            input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight uppercase transition duration-150 ease-out rounded shadow-md text-primary-800 font-gs-bold bg-secondary-500 md:hover:bg-secondary-400 focus:outline-none focus-visible:outline-white"
            :disabled="formIsSending"
            :is-sending="formIsSending && signInMethod === 'email'"
          />
        </div>

        <!-- METHODS -->

        <!-- Email -->
        <FormulateInput
          v-if="
            signInMethod !== 'email' && setFormConfiguration.title !== 'Sign In'
          "
          type="customButton"
          :label="`Email ${setFormConfiguration.title}`"
          input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight uppercase transition duration-150 ease-out bg-green-500 rounded shadow-md text-primary-800 font-gs-bold md:hover:bg-green-400 focus:outline-none focus-visible:outline-white"
          :disabled="formIsSending"
          @click="signInMethod = 'email'"
        />

        <!-- // TODO: set authProvider in v-for -->
        <!-- Google -->
        <FormulateInput
          type="customButton"
          :label="`Google ${setFormConfiguration.title}`"
          input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight text-white uppercase transition duration-150 ease-out bg-blue-500 rounded shadow-md font-gs-bold md:hover:bg-blue-600 focus:outline-none focus-visible:outline-white"
          :is-sending="formIsSending && signInMethod === 'google.com'"
          :disabled="formIsSending"
          @click="signInUserWithProvider('google.com')"
        />

        <!-- Facebook -->
        <FormulateInput
          type="customButton"
          :label="`Facebook ${setFormConfiguration.title}`"
          input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight text-white uppercase transition duration-150 ease-out bg-purple-500 rounded shadow-md font-gs-bold md:hover:bg-purple-600 focus:outline-none focus-visible:outline-white"
          :is-sending="formIsSending && signInMethod === 'facebook.com'"
          :disabled="formIsSending"
          @click="signInUserWithProvider('facebook.com')"
        />

        <FormulateErrors />
      </FormulateForm>

      <p v-if="$route.name === 'login-signUp'" class="mt-4">
        <small
          >This site is protected by reCAPTCHA and the Google
          <a class="text-blue-500" href="https://policies.google.com/privacy"
            >Privacy Policy</a
          >
          and
          <a class="text-blue-500" href="https://policies.google.com/terms"
            >Terms of Service</a
          >
          apply.
        </small>
      </p>

      <div
        v-else-if="
          $route.name === 'login-password-reset' && formIsSubmittedWithSuccess
        "
        class="space-y-4"
      >
        <h1 class="text-xl font-bold">Check your email</h1>
        <p>&lt;pic&gt;</p>
        <p>
          Check your {{ formData.email }} inbox for instructions from us on how
          to reset your password.
        </p>
        <nuxt-link class="inline-block text-blue-500" to="/login/signin"
          >Go back to login screen</nuxt-link
        >
      </div>
    </client-only>
  </div>
</template>

<script>
import md5 from 'md5'
import { mapState, mapActions, mapMutations } from 'vuex'
import formInjections from '@/utils/formInjections'
import formPresetData from '@/utils/formPresetData'
import firebase from 'firebase/app'

export default {
  name: 'TheLoginForm',
  data() {
    return {
      signInMethod: null,
      formTitle: '',
      formData: {
        name: '',
        surname: '',
        email: '',
        password: '',
      },
      formErrors: [],
      formIsSending: false,
      formIsSubmittedWithSuccess: false,
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
      userPromptState: (state) => state.auth.userPromptState,
    }),
    setFormConfiguration() {
      switch (this.$route.name.toLowerCase()) {
        case 'login-signin':
          return {
            title: 'Sign In',
            submitLabel: 'Sign In',
            submitMethod: 'signInUserWithEmail',
          }
        case 'login-signup':
          return {
            title: 'Sign Up',
            submitLabel: 'Sign Up',
            submitMethod: 'createUserWithEmail',
          }

        case 'login-password-reset':
          return {
            title: 'Forgot password?',
            submitLabel: 'Get reset link',
            submitMethod: 'sendResetPasswordEmail',
          }
      }
      return ''
    },
  },
  mounted() {
    this.setDataInForm()
    this.initRecaptcha()
  },
  methods: {
    ...mapActions({
      authCreateUser: 'auth/createUser',
      authSendEmailVerification: 'auth/sendEmailVerification',
      authLoginUser: 'auth/loginUser',
      authSetCurrentUser: 'auth/setCurrentUser',
      authSetAuthUser: 'auth/setAuthUser',
      authSetFirestoreUserInfos: 'auth/setFirestoreUserInfos',
      authGetFirestoreUserInfos: 'auth/getFirestoreUserInfos',
      authUpdateFirestoreUserInfos: 'auth/updateFirestoreUserInfos',
    }),
    ...mapMutations({
      modalsUpdateModalDisplay: 'modals/UPDATE_MODAL_DISPLAY',
      authSetUserPromptState: 'auth/SET_USER_PROMPT_STATE',
    }),
    async initRecaptcha() {
      try {
        await this.$recaptcha.init()
      } catch (e) {
        console.log(e)
      }
    },
    async submitHandler() {
      this.formIsSending = true
      try {
        const token = await this.$recaptcha.execute('login')
        const res = await this.$axios.$post(`/api/recaptcha`, { token })

        if (res.success === true) {
          this[this.setFormConfiguration.submitMethod]()
        } else if (res['error-codes']) {
          throw new Error(res['error-codes'])
        } else {
          throw new Error('Looks like you might not be a human :(')
        }
      } catch (e) {
        this.formErrors = [e.toString()]
      }
    },
    async createUserWithEmail() {
      this.$fireAuthStore.unsubscribe()

      try {
        const newUser = await this.authCreateUser({
          email: this.formData.email,
          password: this.formData.password,
        })

        const loggedInUser = await this.authLoginUser({
          email: this.formData.email,
          password: this.formData.password,
        })

        const sendEmailVerification = await this.authSendEmailVerification()

        const newUserFirestoreInfos = await this.authSetFirestoreUserInfos({
          name: this.formData.name,
          surname: this.formData.surname,
          email: newUser.user.email,
          id: loggedInUser.user.uid,
          provider: 'email',
          skills: [],
        })

        const setUserUrl = await this.$fire.functions.httpsCallable(
          'setUserUrl'
        )({
          name: this.formData.name,
          surname: this.formData.surname,
          id: loggedInUser.user.uid,
        })

        const getFirestoreUserInfos = await this.authGetFirestoreUserInfos({
          id: loggedInUser.user.uid,
        })

        this.$router.push(`/profile/${setUserUrl.data}`)
      } catch (error) {
        if (error.message) {
          this.formErrors = [error.message]
        }
      } finally {
        setTimeout(() => {
          this.formIsSending = false
          this.$fireAuthStore.subscribe()
        }, 500)
      }
    },
    async signInUserWithEmail() {
      try {
        const loggedInUser = await this.authLoginUser({
          email: this.formData.email,
          password: this.formData.password,
        })

        this.$router.push('/')
      } catch (error) {
        console.log(error)
        switch (error.code) {
          case 'auth/wrong-password':
            this.formErrors = [
              `${error.message} You might have already signed up using an external provider.`,
            ]
            break
          default:
            this.formErrors = [`${error.message}`]
            break
        }
      } finally {
        setTimeout(() => {
          this.formIsSending = false
        }, 500)
      }
    },
    async sendResetPasswordEmail() {
      try {
        const response = await this.$fire.auth.sendPasswordResetEmail(
          this.formData.email
        )

        this.formIsSubmittedWithSuccess = true
      } catch (e) {
        this.formErrors = [e.message]
      } finally {
        this.formIsSending = false
      }
    },
    async signInUserWithProvider(providerId) {
      this.$fireAuthStore.unsubscribe()
      this.formIsSending = true
      this.signInMethod = providerId

      try {
        const userInfos = await this.setNewSignInUserWithProviderFlow(
          providerId
        )

        this.$router.push(`/profile/${userInfos.url}`)
      } catch (error) {
        if (error.message) {
          this.formErrors = [error.message]
        }

        if (error.code === 'auth/account-exists-with-different-credential') {
          try {
            const email = error.email
            const pendingCred = error.credential

            const methods = await firebase
              .auth()
              .fetchSignInMethodsForEmail(email)

            let userInfosLinked

            if (methods[0] === 'password') {
              userInfosLinked = await this.linkAccountWithExistingPassword({
                email,
                pendingCred,
              })
            } else {
              userInfosLinked = await this.linkAccountWithExistingAuthProvider({
                email,
                pendingCred,
                providerId: methods[0],
              })
            }

            this.$router.push(`/profile/${userInfosLinked.url}`)
          } catch (error) {
            this.formErrors = [error.message]
            this.authSetUserPromptState('')
          }
        }
      } finally {
        setTimeout(() => {
          this.formIsSending = false
          this.$fireAuthStore.subscribe()
        }, 500)
      }
    },
    async setNewSignInUserWithProviderFlow(providerId) {
      try {
        const provider = this.getProviderForProviderId(providerId)

        const providerSignedInUser = await firebase
          .auth()
          .signInWithPopup(provider)

        const setAuthUser = await this.authSetAuthUser(
          providerSignedInUser.user
        )

        const usersInfos = await this.getProviderUsersInfos({
          userInfos: providerSignedInUser.user,
          id: providerSignedInUser.user.uid,
          providerId,
        })

        const newUserFirestoreInfos = await this.authSetFirestoreUserInfos(
          usersInfos
        )

        if (!newUserFirestoreInfos.isUserExisting) {
          const setUserUrl = await this.$fire.functions.httpsCallable(
            'setUserUrl'
          )({
            name: usersInfos.name,
            surname: usersInfos.surname,
            id: usersInfos.id,
          })
        }

        const getFirestoreUserInfos = await this.authGetFirestoreUserInfos({
          id: usersInfos.id,
        })

        return getFirestoreUserInfos
      } catch (error) {
        throw error
      }
    },
    async linkAccountWithExistingPassword({ email, pendingCred }) {
      try {
        this.modalsUpdateModalDisplay({
          modal: 'signin-prompt-password',
          status: true,
        })
        const password = await this.promptUser()

        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)

        await user.user.linkWithCredential(pendingCred)

        const getFirestoreUserInfos = await this.authGetFirestoreUserInfos({
          id: user.user.uid,
        })
        return getFirestoreUserInfos
      } catch (error) {
        throw error
      }
    },
    async linkAccountWithExistingAuthProvider({
      email,
      pendingCred,
      providerId,
    }) {
      try {
        const initialProvider = this.getProviderForProviderId(providerId)

        this.modalsUpdateModalDisplay({
          modal: 'signin-prompt-continue',
          status: true,
        })

        const continueSignIn = await this.promptUser()

        const initialProviderSignedInUser = await firebase
          .auth()
          .signInWithPopup(initialProvider)

        await initialProviderSignedInUser.user.linkWithCredential(pendingCred)

        const getFirestoreUserInfos = await this.authGetFirestoreUserInfos({
          id: initialProviderSignedInUser.user.uid,
        })
        return getFirestoreUserInfos
      } catch (error) {
        throw error
      }
    },
    getProviderForProviderId(providerId) {
      let provider
      switch (providerId) {
        case 'google.com':
          provider = new firebase.auth.GoogleAuthProvider()
          break
        case 'facebook.com':
          provider = new firebase.auth.FacebookAuthProvider()
          break
      }
      return provider
    },
    getProviderUsersInfos({ userInfos, id, providerId }) {
      const infos = {}
      if (userInfos != null) {
        infos.name = userInfos.providerData[0].displayName
          .split(' ')[1]
          .toLowerCase()
        infos.surname = userInfos.providerData[0].displayName
          .split(' ')[0]
          .toLowerCase()
        infos.email = userInfos.providerData[0].email
        infos.skills = []

        // return infos
        return Object.assign(infos, { id, providerId })
      } else {
        throw 'User is null'
      }
    },
    promptUser() {
      return new Promise((resolve, reject) => {
        const unwatch = this.$watch('userPromptState', (newVal) => {
          if (newVal === 'CANCEL_SIGNIN_PROCESS') {
            reject(new Error('Sign in canceled'))
          } else {
            unwatch()
            resolve(newVal)
          }
        })
      })
    },
    setDataInForm() {
      this.$nextTick(() => {
        setTimeout(() => {
          if (formInjections.presetFormData) {
            this.formData = formPresetData
          }
        }, 100)
      })
    },
  },
}
</script>
