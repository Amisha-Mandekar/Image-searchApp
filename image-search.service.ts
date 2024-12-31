import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ImageSearchService {
  private UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
  private ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash API access key

  async searchImages(query: string, page: number = 1, perPage: number = 12): Promise<any> {
    try {
      const response = await axios.get(this.UNSPLASH_API_URL, {
        params: {
          query,
          page,
          per_page: perPage,
        },
        headers: {
          Authorization: `Client-ID ${this.ACCESS_KEY}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  }
}
