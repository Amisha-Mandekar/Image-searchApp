import { Component } from '@angular/core';
import { ImageSearchService } from '../image-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  images: any[] = [];
  currentPage: number = 1;

  constructor(private imageSearchService: ImageSearchService) {}

  async onSearch(): Promise<void> {
    if (!this.query.trim()) return;
    try {
      const data = await this.imageSearchService.searchImages(this.query, this.currentPage);
      this.images = data.results;
    } catch (error) {
      console.error('Error during search:', error);
    }
  }

  async nextPage(): Promise<void> {
    this.currentPage++;
    await this.onSearch();
  }

  async prevPage(): Promise<void> {
    if (this.currentPage > 1) {
      this.currentPage--;
      await this.onSearch();
    }
  }

  viewImage(image: any): void {
    window.open(image.urls.full, '_blank');
  }
}
