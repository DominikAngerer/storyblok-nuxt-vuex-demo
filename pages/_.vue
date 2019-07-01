<template>
  <main class="main">
    <h1>Story loaded: {{$store.state.story.name}}</h1>
    
    <h4>Story Content</h4>
    <pre>{{$store.state.story}}</pre>
    
    <template v-if="$store.state.story.content.component">
      <component :key="$store.state.story._uid" :blok="$store.state.story.content" :is="$store.state.story.content.component"></component>
    </template>

  </main>
</template>

<script>
export default {
   mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.$store.state.story.id) {
          // Push story into store on input events
          this.$store.commit('setStory', event.story)
        }
      } else if (!event.slugChanged) {
        // Reload the page on save events
        window.location.reload()
      }
    })
  },
  async fetch(context) {
    let currentPath = context.route.path == '/' ? '/home' : context.route.path

    // We could send both requests simultaneously using Promise.all
    let storyResponse = await context.app.$storyapi.get('cdn/stories/' + currentPath, {
      version: 'draft'
    })
    let menuesResponse = await context.app.$storyapi.get('cdn/stories/', {
      version: 'draft',
      starts_with: 'menues/'
    })

    context.store.dispatch('loadInActionExample', { data: 'test', context: context })

    context.store.commit('setStory', storyResponse.data.story)
    context.store.commit('setMenus', menuesResponse.data.stories)

  }
}
</script>

<style>
</style>
