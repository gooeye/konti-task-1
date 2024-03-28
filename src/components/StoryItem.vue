<template>
  <div class="card" data-testid="story-item">
    <img v-if="heroImageUrl" :src="heroImageUrl" :alt="title" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text" v-html="dek" data-testid="{{ dek }}"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StoryItem',
  props: {
    title: {
      type: String,
      required: true
    },
    dek: {
      type: String,
      required: true
    },
    heroImageUrl: {
      type: String,
      default: null
    }
  }
})
</script>
