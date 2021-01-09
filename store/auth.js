import Vue from 'vue'
import firebase from 'firebase/app'

export const state = () => ({
  authUser: null,
  user: null,
  userPromptState: null,
})

export const actions = {
  setAuthUser({ commit, dispatch }, authUser) {
    console.log('setAuthUser:', authUser)
    if (!authUser) {
      setTimeout(() => {
        commit('RESET_AUTH_USER')
      }, 50)
      return
    }

    const newUser = {
      id: authUser.uid,
      email: authUser.email,
      photoUrl: authUser.photoUrl,
      emailVerified: authUser.emailVerified,
    }

    commit('SET_AUTH_USER', newUser)
  },
  setCurrentUser({ commit, dispatch }, { authUser }) {
    console.log('setCurrentUser:', authUser)
    if (!authUser) {
      setTimeout(() => {
        commit('RESET_AUTH_USER')
      }, 50)
      return
    }

    const newUser = {
      id: authUser.uid,
      email: authUser.email,
      photoUrl: authUser.photoUrl,
      emailVerified: authUser.emailVerified,
    }

    commit('SET_AUTH_USER', newUser)
    dispatch('getFirestoreUserInfos', {
      email: newUser.email,
      id: newUser.id,
    })
  },
  async createUser({ dispatch }, user) {
    try {
      const newUser = await this.$fire.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      )
      return newUser
    } catch (error) {
      throw error
    }
  },
  async loginUser({ commit }, payload) {
    try {
      const loggedInUser = await this.$fire.auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )

      return loggedInUser
    } catch (error) {
      throw error
    }
  },
  async setFirestoreUserInfos({ commit }, user) {
    console.log('setFirestoreUserInfos user: ', user)
    let isUserExisting
    try {
      const userRef = this.$fire.firestore.collection('users').doc(user.id)
      const snapshot = await userRef.get()

      if (snapshot.exists) {
        isUserExisting = true
        console.log('user already exists -> do not set firestore user')
      } else {
        isUserExisting = false
        console.log('user does not exists -> set firestore user')
        await userRef.set(user)
      }

      commit('SET_USER', user)
      return { isUserExisting, userRef }
    } catch (error) {
      throw error
    }
  },
  async updateFirestoreUserInfos({ commit }, user) {
    console.log('updateFirestoreUserInfos:', user)
    try {
      const userRef = this.$fire.firestore.collection('users').doc(user.id)
      await userRef.update(user)

      commit('SET_USER', user)
      return userRef
    } catch (error) {
      throw error
    }
  },
  async getFirestoreUserInfos({ commit }, user) {
    try {
      const userRef = this.$fire.firestore.collection('users').doc(user.id)
      const snapshot = await userRef.get()
      const userDoc = snapshot.data()

      commit('SET_USER', userDoc)
      return userDoc
    } catch (error) {
      throw error
    }
  },
  async getPublicFirestoreUserInfo(context, fullname) {
    try {
      const usersRef = this.$fire.firestore.collection('users')

      const query = await usersRef.where('url', '==', fullname).limit(1).get()

      if (!query.empty) {
        const snapshot = query.docs[0]
        const data = snapshot.data()
        return data
      } else {
        throw 'user not found'
      }
    } catch (error) {
      throw error
    }
  },
  async signOutUser({ commit }) {
    try {
      await this.$fire.auth.signOut()
      return 'User unsigned'
    } catch (error) {
      throw error
    }
  },
  async deleteUser({ commit, dispatch }, uid) {
    try {
      await this.$fire.functions.httpsCallable('deleteUser')(uid)
      console.log('user deleted')

      await this.$fire.functions.httpsCallable('deleteUserInfos')(uid)
      console.log('user infos deleted')

      await this.$fire.functions.httpsCallable('deleteUserStorage')(uid)
      console.log('user storage deleted')

      commit('RESET_AUTH_USER')
      return 'user completely deleted'
    } catch (error) {
      throw error
    }
  },
  async sendEmailVerification() {
    try {
      const user = firebase.auth().currentUser
      console.log('user from sendEmailVerification: ', user)
      await user.sendEmailVerification()
      console.log('verification email sent')
    } catch (error) {
      console.log(error)
    }
  },
}

export const mutations = {
  SET_USER(state, user) {
    Vue.set(state, 'user', user)
  },
  SET_AUTH_USER(state, user) {
    Vue.set(state, 'authUser', user)
  },
  RESET_AUTH_USER(state) {
    state.authUser = null
    state.user = null
  },
  SET_USER_PROMPT_STATE(state, payload) {
    console.log('SET_USER_PROMPT_STATE mutation')
    state.userPromptState = payload
  },
  SET_USER_PROMPT_PASSWORD(state, password) {
    state.userPromptPassword = password
  },
  SET_USER_PROMPT_CONTINUE(state, payload) {
    state.userPromptContinue = payload
  },
}
