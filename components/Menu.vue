<template>
  <div class="menu">
    <h4>Menu Information from Store using the uuid of the current story load access</h4>
    <pre>{{menu}}</pre>
  </div>
</template>

<script>
export default {
  props: {
    menuId: String
  },
  computed: {
    menu() {
      let filtered = this.$store.state.menus.filter((menu) => {
        return menu.uuid == this.menuId
      })
      if (filtered.length > 0) {
        return filtered[0]
      }
      // return fallback menu?
      return {}
    }
  }
}
</script>

<style>
</style>
