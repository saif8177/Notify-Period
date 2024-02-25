import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { CloudService } from '../../services/cloud.service';
import { StreamState } from '../../interfaces/stream-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [AudioService]
})
export class MusicComponent {
  files: Array<any> = [
    { name: 'Perfect', artist: 'Ed Sheeran' },
    { name: 'Man Atkeya Beparwah', artist: 'Nusrat Fateh Ali Khan' },
    { name: 'Penny Lane', artist: 'The Beatles' },
  ];
  state!: StreamState;
  currentFile: any = {};

  constructor(
    public audioService: AudioService,
    public cloudService: CloudService
  ) {
    cloudService.getFiles().subscribe((files) => {
      this.files = files;
    });

    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }
  sliderValue: number = 0;

  // onSliderChangeEnd($event: Event) {
  //   console.log('Slider value:', this.sliderValue);
  //   const value: string = ($event.target as HTMLInputElement).value;
  //   const numericValue: number = parseInt(value, 10);
  //   this.audioService.seekTo(numericValue);
  // }
  calculateProgress(): number {
    if (this.state && this.state.duration && this.state.currentTime !== undefined) {
      return (this.state.currentTime / this.state.duration) * 100;
    }
    return 0;
  }
  

  stop() {
    this.audioService.stop();
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  play() {
    this.audioService.play();
  }

  pause() {
    this.audioService.pause();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  openFile(file: { url: any; }, index: number) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.audioService.playStream(file.url).subscribe(/* handle stream events if needed */);
  }

  updateProgress($event: Event) {
    // Your logic for updating the progress
  }
  getProgressBarWidth() {
    if (this.state && this.state.duration && this.state.currentTime) {
      return (this.state.currentTime / this.state.duration) * 100 + '%';
    }
    return '0%';
  }
}
