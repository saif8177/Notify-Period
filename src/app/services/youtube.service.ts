import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey = 'AIzaSyAJlzGCDvgRm3cX5x1Z54G-aAlo3O0Mt3g';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('type', 'video')
      .set('q', 'shorts') // Modify this according to your requirements
      .set('videoDuration', 'short')
      .set('key', this.apiKey);

    return this.http.get(this.apiUrl, { params });
  }
}
