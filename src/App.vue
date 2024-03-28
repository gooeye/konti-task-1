<template>
  <div id="app">
    <StoriesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StoriesList from './components/StoriesList.vue'

export default defineComponent({
  name: 'App',
  components: {
    StoriesList
  }
})
</script>
