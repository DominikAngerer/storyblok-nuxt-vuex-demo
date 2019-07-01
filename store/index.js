export const state = () => ({
  story: {
    content: {}
  },
  menus: []
})

export const mutations = {
  setStory (state, value) {
    state.story = value
  },
  setMenus (state, value) {
    state.menus = value
  }
}

export const actions = {
  loadInActionExample(storeContext, payload) {
    // available: this.$storyapi
    // payload.data -> params
    // payload.context -> whole nuxt context.
    
    // storeContext.commit('setMenues')
  }
}