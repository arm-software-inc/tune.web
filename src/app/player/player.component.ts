import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Radio } from '../models/radio';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnChanges {
  @Input() selectedStation: Radio | undefined;
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef<HTMLAudioElement>; 

  // when station changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedStation);

    this.audioPlayer.nativeElement.muted = false;
    this.audioPlayer.nativeElement.src = changes['selectedStation'].currentValue?.url_resolved;
    
    this.audioPlayer.nativeElement.play()
      .catch((err: DOMException) => {
        console.warn('Usuário não interagiu com a aplicação', err);
      }); 
  }
}
