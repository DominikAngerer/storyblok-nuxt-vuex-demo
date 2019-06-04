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