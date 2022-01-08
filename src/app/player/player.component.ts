import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Radio } from '../models/radio';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() selectedStation: Radio | undefined;
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef<HTMLAudioElement>; 

  playing: boolean = false;

  ngOnInit(): void {
    this.registerAudioEvents();
  }  

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

  registerAudioEvents(): void {
    this.audioPlayer.nativeElement.addEventListener("play", () => {
      this.playing = true;
    });

    this.audioPlayer.nativeElement.addEventListener("pause", () => {
      this.playing = false;
    });
  }

  play() {    
    this.playing ? this.audioPlayer.nativeElement.pause() : this.audioPlayer.nativeElement.play()
  }
}
