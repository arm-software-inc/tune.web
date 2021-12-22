import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Radio } from './models/radio';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  constructor(private http: HttpClient) { }

  fetchStations(): Observable<Radio[]> {
    return this.http.get(`${environment.stations}`).pipe(map((response: any) => {
      return response;
    }));
  }
}
