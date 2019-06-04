<template>
  <div class="teaser" v-editable="blok">
    <h3>- Teaser Component Included</h3>

    <div>
      Teaser headline: {{blok.headline}}
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
