import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnChanges {
  @Input() selectedStation: string = '';
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef<HTMLAudioElement>; 

  station: string = '';

  // when station changes
  ngOnChanges(changes: SimpleChanges): void {
    this.station = changes['selectedStation'].currentValue;
    
    this.audioPlayer.nativeElement.muted = false;
    this.audioPlayer.nativeElement.src = this.station;
    
    this.audioPlayer.nativeElement.play()
      .catch((err: DOMException) => {
        console.warn('Usuário não interagiu com a aplicação', err);
      }); 
  }
}
