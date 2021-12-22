import { Component, OnInit } from '@angular/core';
import { Radio } from './models/radio';
import { RadioService } from './radio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.sass']
})
export class AppComponent implements OnInit {
  radios: Radio[] = [];
  selectedStation: Radio | undefined;

  constructor(private radioService: RadioService) {}

  ngOnInit(): void {
    this.radioService.fetchStations().subscribe({ 
      next: (response: Radio[]) => {
        this.radios = response;
      }
    });
  }

  selectStation(radio: Radio): void {
    this.selectedStation = radio;
  }
}
