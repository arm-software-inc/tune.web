import { Component, ElementRef, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Radio } from '../models/radio';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnChanges {
  @Input() selectedStation: Radio | undefined;

  station: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.station = changes['selectedStation'].currentValue?.url_resolved;
  }
}
