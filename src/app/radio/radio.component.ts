import { Component, Input, OnInit } from '@angular/core';
import { Radio } from '../models/radio';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.sass']
})
export class RadioComponent implements OnInit {
  @Input() radio: Radio = {} as Radio;

  ngOnInit(): void {
    console.log(this.radio);
  }
}
