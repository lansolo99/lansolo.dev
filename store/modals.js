import sourceData from '@/store/datas/modals'

export const state = () => ({
  ...sourceData,
})

export const mutations = {
  UPDATE_MODAL_DISPLAY(state, { modal, status }) {
    state[`${modal}`] = status
  },
  reset(state) {
    Object.assign(state, sourceData)
  },
}
