import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  audioSource: string = 'https://firebasestorage.googleapis.com/v0/b/rhythm-3ef06.appspot.com/o/Bored_Billie%20Ellish%2FAudio?alt=media&token=a7384d13-b869-48cc-9aca-dc614c3da364';

  updateProgress(event: any) {
    const progressBar = event.target;
    // Adjust audio playback position based on progress bar value
    // Example: song.currentTime = progressBar.value;
  }
  
}
