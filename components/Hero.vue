<template>
  <div class="hero" v-editable="blok">
    <h3>- Hero Component Included</h3>
    <div>
      Hero Title: {{blok.title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style>
</style>
