import axios from 'axios'

interface Story {
  id: number
  title: string
  dek: string
  hero_image: {
    url: string
  }
}

interface StoriesResponse {
  stories: Story[]
  last_page: number
}

const apiUrl = 'https://cryptodire.kontinentalist.com/api/v1/stories'

class StoryService {
  static async fetchStories(page: number): Promise<StoriesResponse> {
    try {
      const response = await axios.get(`${apiUrl}?page=${page}`)

      return {
        stories: response.data.data as Story[],
        last_page: response.data.last_page
      }
    } catch (error) {
      console.error('Error fetching stories from API:', error)
      throw error
    }
  }
}

export default StoryService
