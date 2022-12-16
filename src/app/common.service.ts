import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Constants } from './app.constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }

  getCountryData(): Observable<any> {
    return of(Constants)
  }
}
