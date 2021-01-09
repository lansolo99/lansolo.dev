<template>
  <div class="modals">
    <modal name="signin-prompt-password" height="auto" :click-to-close="false">
      <div class="p-8">
        <div class="space-y-3">
          <h1 class="text-xl font-bold">
            This account exists with different credential
          </h1>
          <p>
            Please insert the password associated with your email before
            attaching Facebook sign-in
          </p>

          <FormulateInput
            v-model="modalDatas.signinPromptPassword.password"
            type="customPassword"
            name="current-password"
            label="Mot de passe"
            placeholder="Mot de passe"
            autocomplete="on"
            validation="bail|required"
          />
        </div>

        <!-- Actions -->
        <div class="flex space-x-3">
          <FormulateInput
            type="customButton"
            label="Cancel"
            input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 mb-0 leading-tight text-white uppercase transition duration-150 ease-out bg-yellow-500 rounded shadow-md font-gs-bold md:hover:bg-yellow-400 focus:outline-none focus-visible:outline-white"
            @click="
              signInMethod = manageDialogEvents(
                'signin-prompt-password',
                false,
                'cancel'
              )
            "
          />

          <FormulateInput
            type="customButton"
            label="Confirm"
            input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight text-white uppercase transition duration-150 ease-out bg-green-500 rounded shadow-md font-gs-bold md:hover:bg-green-400 focus:outline-none focus-visible:outline-white"
            @click="
              signInMethod = manageDialogEvents(
                'signin-prompt-password',
                false,
                'confirm'
              )
            "
          />
        </div>
      </div>
    </modal>

    <modal name="signin-prompt-continue" height="auto" :click-to-close="false">
      <div class="p-8">
        <div class="space-y-3">
          <h1 class="text-xl font-bold">Please sign-in to continue processs</h1>
        </div>

        <!-- Actions -->
        <div class="flex space-x-3">
          <FormulateInput
            type="customButton"
            label="Cancel"
            input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 mb-0 leading-tight text-white uppercase transition duration-150 ease-out bg-yellow-500 rounded shadow-md font-gs-bold md:hover:bg-yellow-400 focus:outline-none focus-visible:outline-white"
            @click="
              signInMethod = manageDialogEvents(
                'signin-prompt-continue',
                false,
                'cancel'
              )
            "
          />

          <FormulateInput
            type="customButton"
            label="Sign In"
            input-class="flex items-center justify-center w-full px-12 mx-auto mt-5 leading-tight text-white uppercase transition duration-150 ease-out bg-green-500 rounded shadow-md font-gs-bold md:hover:bg-green-400 focus:outline-none focus-visible:outline-white"
            @click="
              signInMethod = manageDialogEvents(
                'signin-prompt-continue',
                false,
                'signin'
              )
            "
          />
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Modals',
  data() {
    return {
      modalDatas: {
        signinPromptPassword: {
          password: '',
        },
      },
    }
  },
  computed: {
    ...mapState({
      modals: (state) => state.modals,
    }),
  },
  watch: {
    modals: {
      deep: true,
      handler(modals) {
        const modalToOpen = Object.entries(modals).forEach((modal) => {
          const name = modal[0]
          const status = modal[1]

          status === true ? this.$modal.show(name) : this.$modal.hide(name)
        })
      },
    },
  },
  methods: {
    ...mapMutations({
      modalsUpdateModalDisplay: 'modals/UPDATE_MODAL_DISPLAY',
      authSetUserPromptState: 'auth/SET_USER_PROMPT_STATE',
    }),
    showModal(modalName) {
      this.$modal.show(modalName)
    },
    hideModal(modalName) {
      this.$modal.show(modalName)
    },
    manageDialogEvents(modal, status, event, delay = 10) {
      switch (modal) {
        case 'signin-prompt-password':
          switch (event) {
            case 'cancel':
              this.authSetUserPromptState('CANCEL_SIGNIN_PROCESS')
              break
            case 'confirm':
              this.authSetUserPromptState(
                this.modalDatas.signinPromptPassword.password
              )
              break
          }
          break
        case 'signin-prompt-continue':
          switch (event) {
            case 'cancel':
              this.authSetUserPromptState('CANCEL_SIGNIN_PROCESS')
              break
            case 'signin':
              this.authSetUserPromptState('CONTINUE')
              break
          }
          break
      }

      this.modalsUpdateModalDisplay({
        modal,
        status,
      })
    },
  },
}
</script>
