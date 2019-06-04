<template>
  <div class="page" v-editable="blok">
    <h2>Page Component Included</h2>
    
    <!-- same would be possible for a layout in the overall _.vue for example-->
    <nav-menu :menu-id=blok.menu></nav-menu>

    <component :key="child._uid" :blok="child" :is="child.component" v-for="child in blok.body"></component>
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
