import { Component } from '@angular/core';
import { AudioService } from "../../services/audio.service";
import { CloudService } from "../../services/cloud.service";
import { StreamState } from "../../interfaces/stream-state";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  state: any;
  currentFile: any = {};

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }
  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }
  onSliderChangeEnd($event: Event) {
    const value: string = ($event.target as HTMLInputElement).value;
    const numericValue: number = parseInt(value, 10); // Parse string to integer
    this.audioService.seekTo(numericValue);
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
//   audioSource: string = 'https://firebasestorage.googleapis.com/v0/b/rhythm-3ef06.appspot.com/o/Bored_Billie%20Ellish%2FAudio?alt=media&token=a7384d13-b869-48cc-9aca-dc614c3da364';
// files: any;
// currentFile: any;
// state: any;

//   updateProgress(event: any) {
//     const progressBar = event.target;
//   }
constructor(
  public audioService: AudioService,
  public cloudService: CloudService
) {
  // get media files
  cloudService.getFiles().subscribe(files => {
    this.files = files;
  });

  // listen to stream state
  this.audioService.getState().subscribe(state => {
    this.state = state;
  });
}
// playStream(url: any): Observable<any> {
//   // Logic to play the stream
//   return this.http.get<any>(url); // Example: Assuming you are making an HTTP GET request
// }


openFile(file: { url: any; }, index: number) {
  this.currentFile = { index, file };
  this.audioService.stop();
  // this.playStream(file.url);
}


}
