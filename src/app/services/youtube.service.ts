import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey = 'AIzaSyAJlzGCDvgRm3cX5x1Z54G-aAlo3O0Mt3g';

  constructor(private http: HttpClient) {}
 getRandomVideo(): Observable<any> {
    const randomQuery = 'cats'; // You can use any search query you like
    const randomIndex = Math.floor(Math.random() * 50); // Adjust 50 based on your needs
    const params = {
      part: 'snippet',
      q: randomQuery,
      key: this.apiKey,
      maxResults: '1',
      type: 'video',
      videoEmbeddable: 'true',
      order: 'relevance',
      safeSearch: 'strict'
    };
    return this.http.get(this.apiUrl, { params });
  }
  searchVideos(query: string) {
    const params = {
      key: this.apiKey,
      q: query,
      part: 'snippet',
      type: 'video'
    };

    return this.http.get(this.apiUrl, { params });
  }

}
