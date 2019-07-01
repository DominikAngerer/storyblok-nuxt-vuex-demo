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
  loadInActionExample(storeContext, nuxtContext) {
    // available: this.$storyapi
    // nuxtContext -> whole $nuxt.
    
    // storeContext.commit('setMenues')
  }
}