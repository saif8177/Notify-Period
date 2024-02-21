import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrl: './reel.component.css'
})
export class ReelComponent implements OnInit  {
[x: string]: any;
  videos: any[] = [];

  constructor(private youtubeService: YoutubeService,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getRandomVideo();
  }
  getRandomVideo() {
    const randomVideoId = this.getRandomVideoId();
    this.searchVideos(randomVideoId);
  }
  searchVideos(query: string) {
    this.youtubeService.searchVideos(query).subscribe((data: any) => {
      this.videos = data.items;
    });
  }

  getRandomVideoId(): string {
    // Generate a random video ID or fetch it from your API
    return 'YOUR_RANDOM_VIDEO_ID';
  }

  getVideoUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  } 
}
