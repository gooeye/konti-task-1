<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <ul class="list-group">
                    <li v-for="story in stories" :key="story.id" class="list-group-item">
                        <StoryItem :title="story.title" :dek="story.dek" :hero-image-url="story.hero_image.url" />
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div v-if="loading">Loading...</div>
            <button v-else-if="currentPage !== lastPage" @click="loadMore" class="btn btn-primary">Load More</button>
            <div v-else>End of stories list</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StoryItem from './StoryItem.vue'
import StoryService from '../services/StoryService'

interface Story {
    id: number
    title: string
    dek: string
    hero_image: {
        url: string
    }
}

export default defineComponent({
    name: 'StoriesList',
    components: { StoryItem },
    data() {
        return {
            stories: [] as Story[],
            currentPage: 1,
            lastPage: null as number | null,
            loading: false
        }
    },
    mounted() {
        this.fetchInitialData()
    },
    methods: {
        async fetchInitialData() {
            this.loading = true

            try {
                const response = await StoryService.fetchStories(this.currentPage)
                this.stories.push(...response.stories)
                this.lastPage = response.last_page
            } catch (error) {
                console.error('Error fetching stories:', error)
            } finally {
                this.loading = false
            }
        },
        async fetchStories() {
            this.loading = true

            try {
                const response = await StoryService.fetchStories(this.currentPage)
                this.stories.push(...response.stories)
            } catch (error) {
                console.error('Error fetching stories:', error)
            } finally {
                this.loading = false
            }
        },
        loadMore() {
            this.currentPage++
            this.fetchStories()
        }
    }
})
</script>
