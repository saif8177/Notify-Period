import { Component, ElementRef, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css']
})
export class ReelComponent implements OnInit {
  videos: any[] = [];
  currentVideoIndex = 0;
  player: any;

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this.youtubeService.getVideos().subscribe((data: any) => {
      this.videos = data.items;
      this.loadPlayer();
    });
  }

  loadPlayer() {
    const videoId = this.videos[this.currentVideoIndex].id.videoId;
    const url = this.getVideoUrl(videoId);

    if (typeof window['YT'] !== 'undefined' && window['YT'].Player) {
      this.createPlayer(url);
    } else {
      // Load the YouTube API script dynamically
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);

      window['onYouTubeIframeAPIReady'] = () => this.createPlayer(url);
    }
  }

  createPlayer(url: SafeResourceUrl) {
    const container = document.getElementById('videoContainer');

    if (container) {
      this.player = new window['YT'].Player(container, {
        height: '100%',
        width: '100%',
        videoId: this.videos[this.currentVideoIndex].id.videoId,
        events: {
          'onReady': () => this.onPlayerReady(),
          'onStateChange': (event: any ) => this.onPlayerStateChange(event)
        }
      });
    }
  }

  onPlayerReady() {
    this.player.playVideo();
  }

  onPlayerStateChange(event: any) {
    if (event.data === window['YT'].PlayerState.ENDED) {
      // Video has ended, play the next video
      this.playNextVideo();
    }
  }

  playNextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
      const videoId = this.videos[this.currentVideoIndex].id.videoId;
      const url = this.getVideoUrl(videoId);
      this.player.loadVideoByUrl(url);
    }
  }

  getVideoUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
